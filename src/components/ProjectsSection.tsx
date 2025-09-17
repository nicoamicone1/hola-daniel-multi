import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';
import projectImage from '@/assets/project-showcase.jpg';
import disco from '@/assets/disco.png';
import dash from '@/assets/dash.png';

export const ProjectsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 px-4 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          {t.projects.title}
        </h2>

        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          {t.projects.content}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {t.projects.projects.map((project, index) => (
            <Card key={index} className="bg-card-bg border-border backdrop-blur-sm overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="relative h-80">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0">
                  <img
                    src={index === 0 ? disco :
                      (index === 1 ? dash : projectImage)
                    }
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-bg/90 to-transparent" />
                </a>
              </div>

              <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
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