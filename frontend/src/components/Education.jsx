import React, { useState } from 'react';
import { experience } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Shield } from 'lucide-react';

const Education = () => {
  const [hoveredEdu, setHoveredEdu] = useState(null);

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.15)_1px,transparent_0)] bg-[size:45px_45px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <GraduationCap className="w-8 h-8 text-white z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-sm animate-pulse opacity-50"></div>
            </div>
          </div>
          
          <div className="font-mono text-green-400 text-sm mb-4">
            <span>root@security:~$ cat /education/credentials.json</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Academic Foundation
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="text-purple-400 font-mono text-sm">// Educational_Background</span><br />
            Solid academic foundation in computer science and specialized cybersecurity training that provides 
            the theoretical knowledge and practical skills for modern security challenges.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experience.education.map((edu, index) => (
              <Card 
                key={edu.id} 
                className="group bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                onMouseEnter={() => setHoveredEdu(index)}
                onMouseLeave={() => setHoveredEdu(null)}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover:from-gray-700/80 group-hover:to-gray-800/80 transition-all duration-500"></div>
                
                {/* Academic badge overlay */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <BookOpen className="w-8 h-8 text-purple-400" />
                </div>

                {/* Scanning line effect */}
                {hoveredEdu === index && (
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse top-1/2 transform -translate-y-1/2"></div>
                  </div>
                )}

                <CardHeader className="pb-6 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2 font-mono">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-purple-400 font-bold text-lg mb-3 font-mono">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2 group-hover:text-purple-300 transition-colors">
                          <Calendar className="w-4 h-4" />
                          <span className="font-mono">{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 group-hover:text-purple-300 transition-colors">
                          <MapPin className="w-4 h-4" />
                          <span className="font-mono">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30 font-mono text-xs">
                        {edu.duration.split(' - ')[1]}
                      </Badge>
                      <Badge variant="secondary" className="bg-pink-500/10 text-pink-400 border-pink-500/30 font-mono text-xs">
                        <Award className="w-3 h-3 mr-1" />
                        {edu.grade}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Education metrics */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 font-mono">{experience.education.length}</div>
              <div className="text-sm text-gray-400">Degrees</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400 font-mono">A+</div>
              <div className="text-sm text-gray-400">Average Grade</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 font-mono">∞</div>
              <div className="text-sm text-gray-400">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;