import { projects } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, Code, Layers } from 'lucide-react';

const Projects = () => {
  const handleGithubClick = (link) => {
    window.open(link, '_blank');
  };

  const handleDemoClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Security Projects & Solutions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive cybersecurity projects showcasing practical implementation of security frameworks, automation tools, and threat mitigation strategies across diverse environments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg hover:-translate-y-2"
            >
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center">
                    <Layers className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 2).map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 border-0 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 2 && (
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700 border-0 text-xs">
                        +{project.techStack.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-3">
                  {project.name}
                </CardTitle>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 border-teal-200 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex gap-3">
                  <Button 
                    onClick={() => handleGithubClick(project.githubLink)}
                    variant="outline"
                    className="flex-1 border-slate-300 hover:bg-slate-50 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                  {project.liveDemo && (
                    <Button 
                      onClick={() => handleDemoClick(project.liveDemo)}
                      className="flex-1 bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;