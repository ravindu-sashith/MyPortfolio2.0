import React, { useState } from 'react';
import { certifications } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Award, Calendar, Building, Shield, Lock } from 'lucide-react';

const Certifications = () => {
  const [hoveredCert, setHoveredCert] = useState(null);

  const handleCertificateClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.15)_1px,transparent_0)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <Award className="w-8 h-8 text-white z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse"></div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-sm animate-pulse opacity-50"></div>
            </div>
          </div>
          
          <div className="font-mono text-green-400 text-sm mb-4">
            <span>root@security:~$ ls -la /certifications/</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Security Credentials
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="text-yellow-400 font-mono text-sm">// Validated_Expertise</span><br />
            Industry-recognized certifications that validate deep knowledge in cybersecurity frameworks, 
            threat mitigation, and security architecture.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.id} 
              className="group bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover:from-gray-700/80 group-hover:to-gray-800/80 transition-all duration-500"></div>
              
              {/* Security badge overlay */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Shield className="w-8 h-8 text-yellow-400" />
              </div>

              {/* Scanning line effect */}
              {hoveredCert === index && (
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse top-1/2 transform -translate-y-1/2"></div>
                </div>
              )}

              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-2 font-mono">
                      {cert.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-gray-400 mb-2 group-hover:text-yellow-300 transition-colors">
                      <Building className="w-4 h-4" />
                      <span className="font-mono text-sm">{cert.issuingBody}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 group-hover:text-yellow-300 transition-colors">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-sm">Earned: {cert.date}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-400 border-yellow-500/30 font-mono text-xs">
                      <Lock className="w-3 h-3 mr-1" />
                      VERIFIED
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <Button 
                  onClick={() => handleCertificateClick(cert.certificateLink)}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 transition-all duration-300 group-hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 font-mono"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Access Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security status indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-yellow-500/30">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-mono text-sm">All certificates verified</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-mono text-sm">Security clearance active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;