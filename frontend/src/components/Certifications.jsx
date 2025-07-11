import { certifications } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
  const handleCertificateClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Certifications</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise and commitment to excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <Card 
              key={cert.id} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center overflow-hidden">
                      <img 
                        src={cert.logo} 
                        alt={cert.title}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                        {cert.title}
                      </CardTitle>
                      <p className="text-slate-600 font-medium">{cert.issuingBody}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200 font-semibold">
                    {cert.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleCertificateClick(cert.certificateLink)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 transition-all duration-300 group-hover:bg-teal-600"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;