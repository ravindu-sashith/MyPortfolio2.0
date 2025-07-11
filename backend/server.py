from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactMessage(BaseModel):
    name: str
    email: str
    subject: str
    message: str

class ContactMessageCreate(BaseModel):
    name: str
    email: str
    subject: str
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/contact")
async def send_contact_message(contact_data: ContactMessageCreate):
    try:
        # Create contact message record
        contact_message = ContactMessage(
            name=contact_data.name,
            email=contact_data.email,
            subject=contact_data.subject,
            message=contact_data.message
        )
        
        # Store in database
        message_dict = contact_message.dict()
        message_dict['id'] = str(uuid.uuid4())
        message_dict['timestamp'] = datetime.utcnow()
        
        await db.contact_messages.insert_one(message_dict)
        
        # Send email notification (you can configure SMTP later)
        # For now, we'll just log the message
        logging.info(f"Contact message received from {contact_data.name} ({contact_data.email})")
        logging.info(f"Subject: {contact_data.subject}")
        logging.info(f"Message: {contact_data.message}")
        
        # Send email to your address
        try:
            await send_email_notification(contact_data)
        except Exception as e:
            # Log email error but don't fail the request
            logging.error(f"Failed to send email notification: {e}")
        
        return {"message": "Contact message sent successfully", "status": "success"}
    
    except Exception as e:
        logging.error(f"Error processing contact message: {e}")
        raise HTTPException(status_code=500, detail="Failed to process contact message")

async def send_email_notification(contact_data: ContactMessageCreate):
    """Send email notification to your email address"""
    try:
        # Email configuration - you can set these in environment variables
        smtp_server = "smtp.gmail.com"  # Change this to your SMTP server
        smtp_port = 587
        sender_email = "your-email@gmail.com"  # Change this to your email
        sender_password = "your-app-password"  # Use app password for Gmail
        recipient_email = "ravindu.sashith@gmail.com"  # Your email address
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = recipient_email
        msg['Subject'] = f"Portfolio Contact: {contact_data.subject}"
        
        # Email body
        body = f"""
        New contact message from your portfolio website:
        
        Name: {contact_data.name}
        Email: {contact_data.email}
        Subject: {contact_data.subject}
        
        Message:
        {contact_data.message}
        
        ---
        Sent from Portfolio Website
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email (uncomment and configure when ready)
        # server = smtplib.SMTP(smtp_server, smtp_port)
        # server.starttls()
        # server.login(sender_email, sender_password)
        # text = msg.as_string()
        # server.sendmail(sender_email, recipient_email, text)
        # server.quit()
        
        logging.info(f"Email notification would be sent to {recipient_email}")
        
    except Exception as e:
        logging.error(f"Email sending failed: {e}")
        raise e

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
