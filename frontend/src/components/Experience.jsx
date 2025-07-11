import React, { useState } from 'react';
import { experience } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, MapPin, Calendar, Shield, Terminal } from 'lucide-react';

const Experience = () => {
  const [hoveredJob, setHoveredJob] = useState(null);

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.15)_1px,transparent_0)] bg-[size:55px_55px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <Briefcase className="w-8 h-8 text-white z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 animate-pulse"></div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-sm animate-pulse opacity-50"></div>
            </div>
          </div>
          
          <div className="font-mono text-green-400 text-sm mb-4">
            <span>root@security:~$ cat /career/timeline.log</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Combat Experience
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="text-orange-400 font-mono text-sm">// Career_Progression</span><br />
            Progressive advancement in cybersecurity warfare with hands-on experience in threat neutralization, 
            security implementation, and strategic defense consulting.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experience.work.map((job, index) => (
              <Card 
                key={job.id} 
                className="group bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                onMouseEnter={() => setHoveredJob(index)}
                onMouseLeave={() => setHoveredJob(null)}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover:from-gray-700/80 group-hover:to-gray-800/80 transition-all duration-500"></div>
                
                {/* Security badge overlay */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Shield className="w-8 h-8 text-orange-400" />
                </div>

                {/* Scanning line effect */}
                {hoveredJob === index && (
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse top-1/2 transform -translate-y-1/2"></div>
                  </div>
                )}

                <CardHeader className="pb-6 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2 font-mono">
                        {job.position}
                      </CardTitle>
                      <p className="text-orange-400 font-bold text-lg mb-3 font-mono">{job.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2 group-hover:text-orange-300 transition-colors">
                          <Calendar className="w-4 h-4" />
                          <span className="font-mono">{job.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 group-hover:text-orange-300 transition-colors">
                          <MapPin className="w-4 h-4" />
                          <span className="font-mono">{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/30 font-mono">
                      {job.duration.split(' - ')[1] || 'ACTIVE'}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-3">
                    {job.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/item">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-orange-400 transition-colors"></div>
                        <p className="text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors font-mono text-sm">
                          {responsibility}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience metrics */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 font-mono">{experience.work.length}</div>
              <div className="text-sm text-gray-400">Positions</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 font-mono">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 font-mono">∞</div>
              <div className="text-sm text-gray-400">Threats Neutralized</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;