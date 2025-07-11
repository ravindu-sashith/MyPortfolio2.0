import { personalInfo } from '../data/mock';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Phone, MapPin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-white/80 text-teal-700 border-teal-200">
                Cybersecurity Professional
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-600" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-600" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg font-semibold transition-all duration-300"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="w-5 h-5 mr-2" />
                View Resume
              </Button>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-2xl border-0 transform hover:scale-105 transition-all duration-500">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-100 to-blue-100 shadow-inner">
                  <img 
                    src={personalInfo.profileImage} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;