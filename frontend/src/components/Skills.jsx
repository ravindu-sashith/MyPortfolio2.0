import React, { useState, useEffect } from 'react';
import { skills } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Shield, Wrench, Code, Settings, Lock, Zap, Database, Wifi } from 'lucide-react';

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: skills.cybersecurity,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      textColor: "text-red-400",
      hoverColor: "hover:shadow-red-500/20"
    },
    {
      title: "Security Tools",
      icon: Wrench,
      skills: skills.tools,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400",
      hoverColor: "hover:shadow-blue-500/20"
    },
    {
      title: "Programming",
      icon: Code,
      skills: skills.languages,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      textColor: "text-green-400",
      hoverColor: "hover:shadow-green-500/20"
    },
    {
      title: "Specialized",
      icon: Settings,
      skills: skills.other,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400",
      hoverColor: "hover:shadow-purple-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.15)_1px,transparent_0)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <Lock className="w-8 h-8 text-white z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 animate-pulse"></div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-sm animate-pulse opacity-50"></div>
            </div>
          </div>
          
          <div className="font-mono text-green-400 text-sm mb-4">
            <span>root@security:~$ cat /skills/expertise.txt</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="text-green-400 font-mono text-sm">// Description</span><br />
            Comprehensive expertise across cybersecurity domains, tools, and technologies. 
            Battle-tested skills for defending against modern threats.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`group bg-gray-800/50 backdrop-blur-sm border-gray-700/50 ${category.borderColor} ${category.hoverColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover:from-gray-700/80 group-hover:to-gray-800/80 transition-all duration-500"></div>
              
              {/* Scanning line effect */}
              {hoveredCard === index && (
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse top-1/2 transform -translate-y-1/2"></div>
                </div>
              )}

              <CardHeader className="text-center pb-6 relative z-10">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 relative`}>
                  <category.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl group-hover:animate-pulse"></div>
                </div>
                <CardTitle className={`text-xl font-bold text-white group-hover:${category.textColor} transition-colors font-mono`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      <Badge 
                        variant="secondary"
                        className={`${category.bgColor} ${category.textColor} border-0 hover:scale-105 transition-all duration-200 cursor-pointer w-full justify-center py-2 font-mono text-xs group-hover/skill:bg-opacity-100`}
                      >
                        <span className="relative">
                          {skill}
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover/skill:opacity-100 group-hover/skill:animate-pulse transition-opacity duration-300"></span>
                        </span>
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 font-mono">24/7</div>
              <div className="text-sm text-gray-400">Monitoring</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 font-mono">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 font-mono">0</div>
              <div className="text-sm text-gray-400">Breaches</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;