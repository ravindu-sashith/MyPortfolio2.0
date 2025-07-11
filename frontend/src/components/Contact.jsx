import React, { useState, useEffect } from 'react';
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
  Handshake,
  Terminal,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        toast({
          title: "Message Transmitted Successfully!",
          description: "Your message has been encrypted and sent. I'll decrypt and respond soon.",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      toast({
        title: "Transmission Failed",
        description: "Security protocols prevented message delivery. Please try again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.15)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <MessageCircle className="w-8 h-8 text-white z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 animate-pulse"></div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl blur-sm animate-pulse opacity-50"></div>
            </div>
          </div>
          
          <div className="font-mono text-green-400 text-sm mb-4">
            <span>root@security:~$ ./initiate_contact.sh</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Establish Connection
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="text-green-400 font-mono text-sm">// Secure_Communication_Channel</span><br />
            Ready to discuss cybersecurity challenges? Let's build a more secure digital future together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Social Links & Collaboration */}
          <div className="space-y-8">
            <Card className="bg-gray-800/50 backdrop-blur-md border-green-500/30 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-2 font-mono">
                  <Users className="w-6 h-6 text-green-400" />
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    Connect_With_Me
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <Button
                    onClick={() => handleSocialClick(socialLinks.linkedin)}
                    variant="outline"
                    className="w-full justify-start border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-white hover:text-white transition-all duration-300 group/btn"
                  >
                    <Linkedin className="w-5 h-5 mr-3 text-blue-400 group-hover/btn:scale-110 transition-transform" />
                    <span className="font-mono">LinkedIn Profile</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                  </Button>
                  
                  <Button
                    onClick={() => handleSocialClick(socialLinks.github)}
                    variant="outline"
                    className="w-full justify-start border-gray-500/30 bg-gray-500/10 hover:bg-gray-500/20 text-white hover:text-white transition-all duration-300 group/btn"
                  >
                    <Github className="w-5 h-5 mr-3 text-gray-400 group-hover/btn:scale-110 transition-transform" />
                    <span className="font-mono">GitHub Repository</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                  </Button>
                  
                  <Button
                    onClick={() => handleSocialClick(`mailto:${socialLinks.email}`)}
                    variant="outline"
                    className="w-full justify-start border-green-500/30 bg-green-500/10 hover:bg-green-500/20 text-white hover:text-white transition-all duration-300 group/btn"
                  >
                    <Mail className="w-5 h-5 mr-3 text-green-400 group-hover/btn:scale-110 transition-transform" />
                    <span className="font-mono">Email Direct</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                  </Button>
                  
                  <Button
                    onClick={() => handleSocialClick(socialLinks.resume)}
                    variant="outline"
                    className="w-full justify-start border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-white hover:text-white transition-all duration-300 group/btn"
                  >
                    <Download className="w-5 h-5 mr-3 text-purple-400 group-hover/btn:scale-110 transition-transform" />
                    <span className="font-mono">Download Resume</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 backdrop-blur-md border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-2 font-mono">
                  <Handshake className="w-6 h-6 text-purple-400" />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Collaboration_Opportunities
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed mb-6 font-mono text-sm">
                  <span className="text-purple-400">// Available_Services</span><br />
                  Seeking expertise in cybersecurity? I specialize in:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Badge variant="secondary" className="bg-red-600/20 text-red-300 border-red-500/30 justify-center py-2 font-mono">
                    PenTesting
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30 justify-center py-2 font-mono">
                    Consulting
                  </Badge>
                  <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-500/30 justify-center py-2 font-mono">
                    Training
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30 justify-center py-2 font-mono">
                    Auditing
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-600/20 text-orange-300 border-orange-500/30 justify-center py-2 font-mono">
                    Incident Response
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-600/20 text-pink-300 border-pink-500/30 justify-center py-2 font-mono">
                    Architecture
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Side - Contact Form */}
          <Card className="bg-gray-800/50 backdrop-blur-md border-green-500/30 shadow-2xl hover:shadow-green-500/20 transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2 font-mono">
                <Terminal className="w-6 h-6 text-green-400" />
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Send_Message
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300 font-mono text-sm">
                      // Full_Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-500 focus:border-green-400 focus:ring-green-400/30 font-mono"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300 font-mono text-sm">
                      // Email_Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-500 focus:border-green-400 focus:ring-green-400/30 font-mono"
                      placeholder="your.email@domain.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-gray-300 font-mono text-sm">
                    // Subject_Line
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-500 focus:border-green-400 focus:ring-green-400/30 font-mono"
                    placeholder="Message subject"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-300 font-mono text-sm">
                    // Message_Body
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-500 focus:border-green-400 focus:ring-green-400/30 font-mono resize-none"
                    placeholder="Describe your project, opportunity, or question..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed font-mono"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Encrypting & Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Execute Send
                    </>
                  )}
                </Button>

                {/* Status indicator */}
                {submitStatus && (
                  <div className={`flex items-center gap-2 p-3 rounded-lg font-mono text-sm ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                      : 'bg-red-500/10 text-red-400 border border-red-500/30'
                  }`}>
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <AlertCircle className="w-4 h-4" />
                    )}
                    <span>
                      {submitStatus === 'success' 
                        ? 'Message transmitted successfully' 
                        : 'Transmission failed - please retry'
                      }
                    </span>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;