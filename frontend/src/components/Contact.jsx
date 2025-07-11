import React, { useState } from 'react';
import { socialLinks, contactForm } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Download, 
  Send, 
  MessageCircle,
  ExternalLink,
  Users,
  Handshake
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-400 rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect & Collaborate</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Open to discussing cybersecurity challenges, sharing insights, and exploring opportunities for collaboration. Let's build a more secure digital future together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Social Links & Collaboration */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-md border-slate-700 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                  <Users className="w-6 h-6 text-teal-400" />
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <Button
                    onClick={() => handleSocialClick(socialLinks.linkedin)}
                    variant="outline"
                    className="w-full justify-start border-slate-600 bg-white/10 hover:bg-white/20 text-white hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 mr-3 text-blue-400" />
                    LinkedIn Profile
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </Button>
                  
                  <Button
                    onClick={() => handleSocialClick(socialLinks.github)}
                    variant="outline"
                    className="w-full justify-start border-slate-600 bg-white/10 hover:bg-white/20 text-white hover:text-white transition-all duration-300"
                  >
                    <Github className="w-5 h-5 mr-3 text-gray-400" />
                    GitHub Repository
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </Button>
                  
                  <Button
                    onClick={() => handleSocialClick(`mailto:${socialLinks.email}`)}
                    variant="outline"
                    className="w-full justify-start border-slate-600 bg-white/10 hover:bg-white/20 text-white hover:text-white transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-3 text-teal-400" />
                    Email Direct
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </Button>
                  
                  <Button
                    onClick={() => handleSocialClick(socialLinks.resume)}
                    variant="outline"
                    className="w-full justify-start border-slate-600 bg-white/10 hover:bg-white/20 text-white hover:text-white transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-3 text-green-400" />
                    Download Resume
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-slate-700 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                  <Handshake className="w-6 h-6 text-teal-400" />
                  Collaboration Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed mb-6">
                  I'm always interested in meaningful collaborations, challenging projects, and knowledge sharing in the cybersecurity domain. Whether you're seeking expertise in:
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-teal-600/20 text-teal-300 border-teal-500">
                    Security Consulting
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500">
                    Penetration Testing
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500">
                    Security Training
                  </Badge>
                  <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-500">
                    Risk Assessment
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-600/20 text-orange-300 border-orange-500">
                    Incident Response
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-600/20 text-pink-300 border-pink-500">
                    Security Architecture
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Side - Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-slate-700 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <Send className="w-6 h-6 text-teal-400" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-300 font-semibold">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-slate-600 text-white placeholder-slate-400 focus:border-teal-400 focus:ring-teal-400"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-300 font-semibold">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-slate-600 text-white placeholder-slate-400 focus:border-teal-400 focus:ring-teal-400"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-slate-300 font-semibold">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-white/10 border-slate-600 text-white placeholder-slate-400 focus:border-teal-400 focus:ring-teal-400"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-slate-300 font-semibold">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-white/10 border-slate-600 text-white placeholder-slate-400 focus:border-teal-400 focus:ring-teal-400"
                    placeholder="Tell me about your project, opportunity, or question..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 text-lg transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;