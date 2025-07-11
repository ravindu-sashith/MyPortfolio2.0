import { projects } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, Code } from 'lucide-react';

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
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Innovative cybersecurity solutions and tools developed to address real-world challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="secondary"
                        className="bg-black/20 text-white border-0 backdrop-blur-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="secondary" className="bg-black/20 text-white border-0 backdrop-blur-sm">
                        +{project.techStack.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {project.name}
                </CardTitle>
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="flex gap-3">
                  <Button 
                    onClick={() => handleGithubClick(project.githubLink)}
                    variant="outline"
                    className="flex-1 border-slate-300 hover:bg-slate-50 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
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