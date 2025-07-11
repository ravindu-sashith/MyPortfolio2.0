import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Phone, MapPin, Download, Shield, Terminal, Eye } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Welcome to my digital fortress.";

  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        if (typedText.length < fullText.length) {
          setTypedText(fullText.slice(0, typedText.length + 1));
        } else {
          setIsTyping(false);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [typedText, isTyping, fullText]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Matrix-like background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.15)_1px,transparent_0)] bg-[size:40px_40px] animate-pulse"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Terminal-style header */}
              <div className="font-mono text-green-400 text-sm mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4" />
                  <span>root@security:~$ whoami</span>
                </div>
                <div className="text-green-300 pl-6">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30 font-mono">
                    <Shield className="w-3 h-3 mr-1" />
                    CYBERSEC_EXPERT
                  </Badge>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </span>
                </h1>

                <div className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  <span className="text-green-400 font-mono text-sm">// Bio</span>
                  <p className="mt-2">{personalInfo.bio}</p>
                </div>
              </div>
              
              {/* Contact Info with animations */}
              <div className="space-y-3">
                <div className="text-green-400 font-mono text-sm">// Contact_Info</div>
                <div className="grid gap-3 text-sm text-gray-300">
                  <div className="flex items-center gap-3 group hover:text-green-400 transition-colors cursor-pointer">
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="font-mono">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3 group hover:text-green-400 transition-colors cursor-pointer">
                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="font-mono">{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 group hover:text-green-400 transition-colors cursor-pointer">
                    <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="font-mono">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-6 text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  <Terminal className="w-5 h-5 mr-2" />
                  Initialize Contact
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500/20 px-8 py-6 text-lg font-bold hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Access Files
                </Button>
              </div>
            </div>
            
            {/* Right Content - Enhanced Profile */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur-sm animate-pulse"></div>
                
                <Card className="relative p-8 bg-gray-800/90 backdrop-blur-sm border-green-500/30 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-green-500/20 to-blue-500/20 relative">
                      <img 
                        src={personalInfo.profileImage} 
                        alt={personalInfo.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Scanning line animation */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse opacity-70"></div>
                      </div>
                    </div>
                    
                    {/* Status indicators */}
                    <div className="absolute -top-2 -right-2 flex flex-col gap-2">
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping shadow-lg shadow-blue-400/50"></div>
                    </div>
                    
                    {/* Bottom status bar */}
                    <div className="absolute -bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-2 border border-green-500/30">
                      <div className="flex items-center justify-between text-xs font-mono text-green-400">
                        <div className="flex items-center gap-2">
                          <Eye className="w-3 h-3" />
                          <span>STATUS: ONLINE</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span>SECURE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;