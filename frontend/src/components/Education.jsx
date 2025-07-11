import { experience } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Academic Foundation</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Strong educational foundation in computer science and specialized cybersecurity training that provides the theoretical knowledge and practical skills essential for modern security challenges.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experience.education.map((edu, index) => (
              <Card key={edu.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white shadow-md">
                <CardHeader className="pb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-teal-600 font-semibold text-lg mb-3">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200 font-semibold">
                        {edu.duration.split(' - ')[1]}
                      </Badge>
                      <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 font-semibold">
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
      </div>
    </section>
  );
};

export default Education;