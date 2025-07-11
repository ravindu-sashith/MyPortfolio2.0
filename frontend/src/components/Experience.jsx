import { experience } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Progressive career advancement in cybersecurity with hands-on experience in threat assessment, security implementation, and strategic security consulting across diverse industry verticals.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experience.work.map((job, index) => (
              <Card key={job.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white shadow-md">
                <CardHeader className="pb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                        {job.position}
                      </CardTitle>
                      <p className="text-blue-600 font-semibold text-lg mb-3">{job.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{job.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 font-semibold">
                      {job.duration.split(' - ')[1] || 'Present'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {job.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-600 leading-relaxed">{responsibility}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;