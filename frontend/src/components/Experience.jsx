import { experience } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience & Education</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional journey and educational background in cybersecurity
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Work Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experience.work.map((job, index) => (
                <Card key={job.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white shadow-md">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {job.position}
                        </CardTitle>
                        <p className="text-blue-600 font-semibold text-base">{job.company}</p>
                      </div>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {job.duration}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-slate-600 flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Education</h3>
            </div>
            
            <div className="space-y-6">
              {experience.education.map((edu, index) => (
                <Card key={edu.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white shadow-md">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-teal-600 font-semibold text-base">{edu.institution}</p>
                      </div>
                      <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                        {edu.duration}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                        {edu.grade}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;