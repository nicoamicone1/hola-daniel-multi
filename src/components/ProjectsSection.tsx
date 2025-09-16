import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';
import projectImage from '@/assets/project-showcase.jpg';

export const ProjectsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 px-4 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          {t.projects.title}
        </h2>
        
        <Card className="bg-card-bg border-border backdrop-blur-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex items-center">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {t.projects.content}
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={projectImage}
                  alt="Project showcase"
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};