import { skills } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Shield, Wrench, Code, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: skills.cybersecurity,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      textColor: "text-red-700"
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: skills.tools,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      title: "Languages",
      icon: Code,
      skills: skills.languages,
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      title: "Other",
      icon: Settings,
      skills: skills.other,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive expertise across cybersecurity domains, tools, and technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className={`${category.bgColor} ${category.textColor} border-0 hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;