# 🛡️ Cybersecurity Portfolio Website

A modern, responsive portfolio website designed specifically for cybersecurity professionals. Built with React, featuring a clean design with navy, gray, and teal color scheme.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Responsive Layout**: Works perfectly on all devices
- **Interactive Elements**: Smooth scrolling, hover effects, and form interactions
- **Contact Form**: Functional contact form with validation
- **Social Integration**: Links to LinkedIn, GitHub, and email
- **Resume Download**: Direct download functionality for your CV

## 📁 Project Structure

```
/app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # Reusable UI components
│   │   │   ├── Hero.jsx      # Hero section with profile
│   │   │   ├── Skills.jsx    # Skills categorized display
│   │   │   ├── Certifications.jsx # Professional certifications
│   │   │   ├── Projects.jsx  # Project showcase
│   │   │   ├── Experience.jsx # Work experience
│   │   │   ├── Education.jsx # Educational background
│   │   │   ├── Contact.jsx   # Contact form and social links
│   │   │   └── Navigation.jsx # Navigation header
│   │   ├── data/
│   │   │   └── mock.js       # All customizable data
│   │   ├── hooks/
│   │   │   └── use-toast.js  # Toast notifications
│   │   ├── App.js            # Main app component
│   │   └── App.css           # Custom styles
│   └── public/
└── backend/                  # FastAPI backend (for future features)
```

## 🎨 Customization Guide

### 1. Personal Information

Edit `/app/frontend/src/data/mock.js` to update your personal details:

```javascript
export const personalInfo = {
  name: "Your Full Name",
  title: "Your Professional Title",
  bio: "Your professional bio description...",
  profileImage: "URL_TO_YOUR_PROFILE_IMAGE",
  location: "Your Location",
  email: "your.email@example.com",
  phone: "+1 234 567 8900"
};
```

### 2. Profile Image

**Option 1: Using Online Image**
- Upload your professional photo to a hosting service (Google Drive, Dropbox, etc.)
- Get the direct image URL
- Replace `profileImage` in `personalInfo`

**Option 2: Using Local Image**
- Add your image to `/app/frontend/public/images/`
- Update `profileImage: "/images/your-photo.jpg"`

### 3. Skills

Update your skills in four categories:

```javascript
export const skills = {
  cybersecurity: [
    "Your Cybersecurity Skills",
    "Penetration Testing",
    "Security Architecture",
    // Add more skills...
  ],
  tools: [
    "Your Tools",
    "Nmap",
    "Metasploit",
    // Add more tools...
  ],
  languages: [
    "Your Programming Languages",
    "Python",
    "JavaScript",
    // Add more languages...
  ],
  other: [
    "Other Skills",
    "Cloud Security",
    "Compliance",
    // Add more skills...
  ]
};
```

### 4. Certifications

Add your certifications with Google Drive links:

```javascript
export const certifications = [
  {
    id: 1,
    title: "Your Certification Name",
    issuingBody: "Certification Provider",
    date: "Month Year",
    certificateLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view"
  },
  // Add more certifications...
];
```

**How to get Google Drive link:**
1. Upload your certificate to Google Drive
2. Right-click → "Get link"
3. Make sure it's set to "Anyone with the link can view"
4. Copy the link and paste it in `certificateLink`

### 5. Projects

Update your project portfolio:

```javascript
export const projects = [
  {
    id: 1,
    name: "Your Project Name",
    description: "Detailed description of your project...",
    techStack: ["Technology1", "Technology2", "Technology3"],
    githubLink: "https://github.com/yourusername/project-repo",
    liveDemo: "https://your-demo-link.com" // Optional
  },
  // Add more projects...
];
```

### 6. Work Experience

Add your professional experience:

```javascript
export const experience = {
  work: [
    {
      id: 1,
      position: "Your Job Title",
      company: "Company Name",
      duration: "Start Date - End Date",
      location: "City, Country",
      responsibilities: [
        "Responsibility 1",
        "Responsibility 2",
        "Responsibility 3"
      ]
    },
    // Add more positions...
  ]
};
```

### 7. Education

Update your educational background:

```javascript
export const experience = {
  education: [
    {
      id: 1,
      degree: "Your Degree",
      institution: "University/Institution Name",
      duration: "Start Year - End Year",
      location: "City, Country",
      grade: "Your Grade/GPA"
    },
    // Add more education...
  ]
};
```

### 8. Social Links & Resume

Update your social media links and resume:

```javascript
export const socialLinks = {
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  email: "your.email@example.com",
  resume: "https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view"
};
```

**How to add your resume:**
1. Upload your resume/CV to Google Drive
2. Right-click → "Get link"
3. Make sure it's set to "Anyone with the link can view"
4. Copy the link and paste it in `resume`

## 🎨 Color Customization

The website uses a professional color scheme. To customize colors, edit `/app/frontend/src/index.css`:

```css
:root {
  --primary-color: #0f172a;    /* Navy/Dark Blue */
  --secondary-color: #64748b;  /* Gray */
  --accent-color: #14b8a6;     /* Teal */
  --text-color: #1e293b;       /* Dark Gray */
  --background-color: #f8fafc; /* Light Gray */
}
```

## 📝 Content Customization

### Section Descriptions

Each section has a description that you can customize in the respective component files:

**Hero Section** (`/app/frontend/src/components/Hero.jsx`):
- Edit the bio text in the `personalInfo` object

**Skills Section** (`/app/frontend/src/components/Skills.jsx`):
- Edit the section description in the JSX

**Certifications Section** (`/app/frontend/src/components/Certifications.jsx`):
- Edit the section description in the JSX

**Projects Section** (`/app/frontend/src/components/Projects.jsx`):
- Edit the section description in the JSX

**Experience Section** (`/app/frontend/src/components/Experience.jsx`):
- Edit the section description in the JSX

**Education Section** (`/app/frontend/src/components/Education.jsx`):
- Edit the section description in the JSX

**Contact Section** (`/app/frontend/src/components/Contact.jsx`):
- Edit the section description and collaboration text in the JSX

## 📱 Mobile Responsiveness

The website is fully responsive and works on all devices. The navigation automatically converts to a hamburger menu on mobile devices.

## 🔧 Technical Details

### Technologies Used
- **Frontend**: React.js, TailwindCSS
- **UI Components**: Radix UI components
- **Icons**: Lucide React
- **Animations**: CSS transitions and transforms
- **Fonts**: Google Fonts (Inter)

### Running the Project

1. **Install Dependencies**:
   ```bash
   cd /app/frontend
   yarn install
   ```

2. **Start Development Server**:
   ```bash
   yarn start
   ```

3. **Build for Production**:
   ```bash
   yarn build
   ```

### Adding New Sections

To add a new section:

1. Create a new component in `/app/frontend/src/components/`
2. Add the section data to `/app/frontend/src/data/mock.js`
3. Import and include the component in `/app/frontend/src/App.js`
4. Add navigation link in `/app/frontend/src/components/Navigation.jsx`

## 🎯 SEO Optimization

To improve SEO:

1. **Update Title**: Edit `/app/frontend/public/index.html`
2. **Add Meta Tags**: Add description, keywords, and other meta tags
3. **Add Structured Data**: Consider adding JSON-LD structured data
4. **Optimize Images**: Ensure all images have alt text

## 📧 Contact Form Integration

The contact form is now fully functional and integrated with the backend! When users submit the form:

1. **Form Validation**: All fields are validated on the frontend
2. **Backend Processing**: Form data is sent to `/api/contact` endpoint
3. **Database Storage**: Messages are stored in MongoDB for your records
4. **Email Notifications**: Messages are logged and can be configured to send email notifications to your inbox: `ravindu.sashith@gmail.com`
5. **Success Feedback**: Users receive immediate confirmation of successful submission

### Email Configuration (Optional)
To enable email notifications, update the SMTP configuration in `/app/backend/server.py`:

```python
# Email configuration in send_email_notification function
smtp_server = "smtp.gmail.com"  # Your SMTP server
smtp_port = 587
sender_email = "your-email@gmail.com"  # Your email
sender_password = "your-app-password"  # Use app password for Gmail
recipient_email = "ravindu.sashith@gmail.com"  # Your email address
```

All contact messages are automatically stored in the database for your review.

## 🔐 Security Considerations

- All external links open in new tabs for security
- Form validation prevents empty submissions
- No sensitive data is stored in the frontend code

## 🚀 Deployment

### Option 1: Netlify
1. Connect your GitHub repository
2. Build command: `yarn build`
3. Publish directory: `build`

### Option 2: Vercel
1. Connect your GitHub repository
2. Framework preset: Create React App
3. Build command: `yarn build`
4. Output directory: `build`

### Option 3: GitHub Pages
1. Install gh-pages: `yarn add --dev gh-pages`
2. Add to package.json: `"homepage": "https://yourusername.github.io/repository-name"`
3. Add scripts: `"predeploy": "yarn build", "deploy": "gh-pages -d build"`
4. Deploy: `yarn deploy`

## 📞 Support

If you need help customizing your portfolio:

1. Check the component files for inline comments
2. Review the mock data structure
3. Test changes locally before deploying
4. Ensure all links are working correctly

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Ready to showcase your cybersecurity expertise? Start customizing your portfolio today!** 🚀
