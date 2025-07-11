import React, { useState } from 'react';
import { projects } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, Code, Layers, Terminal, Lock, Shield, Zap } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleGithubClick = (link) => {
    window.open(link, '_blank');
  };

  const handleDemoClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  const projectIcons = [Shield, Terminal, Lock, Zap];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.15)_1px,transparent_0)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <Code className="w-8 h-8 text-white z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-sm animate-pulse opacity-50"></div>
            </div>
          </div>
          
          <div className="font-mono text-green-400 text-sm mb-4">
            <span>root@security:~$ cd /projects && ls -la</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Security Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="text-blue-400 font-mono text-sm">// Production_Ready_Solutions</span><br />
            Battle-tested cybersecurity projects showcasing practical implementation of security frameworks, 
            automation tools, and threat mitigation strategies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = projectIcons[index % projectIcons.length];
            return (
              <Card 
                key={project.id} 
                className="group bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover:from-gray-700/80 group-hover:to-gray-800/80 transition-all duration-500"></div>
                
                {/* Scanning line effect */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse top-1/2 transform -translate-y-1/2"></div>
                  </div>
                )}

                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 2).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-gray-700/50 text-gray-300 border-0 text-xs font-mono"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 2 && (
                        <Badge variant="secondary" className="bg-gray-700/50 text-gray-300 border-0 text-xs font-mono">
                          +{project.techStack.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3 font-mono">
                    {project.name}
                  </CardTitle>
                  
                  <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="bg-blue-500/10 text-blue-400 border-blue-500/30 text-xs font-mono hover:bg-blue-500/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => handleGithubClick(project.githubLink)}
                      variant="outline"
                      className="flex-1 border-gray-600 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white transition-all duration-300 font-mono"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </Button>
                    {project.liveDemo && (
                      <Button 
                        onClick={() => handleDemoClick(project.liveDemo)}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 hover:scale-105 font-mono"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Project stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 font-mono">{projects.length}</div>
              <div className="text-sm text-gray-400">Active Projects</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 font-mono">100%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 font-mono">24/7</div>
              <div className="text-sm text-gray-400">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;