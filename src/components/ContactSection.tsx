import { Mail, Linkedin, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export const ContactSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          {t.contact.title}
        </h2>
        
        <p className="text-xl text-muted-foreground mb-4">
          {t.contact.subtitle}
        </p>
        
        <p className="text-lg text-muted-foreground mb-12">
          {t.contact.description}
        </p>
        
        <Card className="bg-card-bg border-border backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 border-primary/20 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="mailto:daniel@example.com">
                  <Mail className="h-5 w-5" />
                  {t.contact.email}
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 border-primary/20 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  {t.contact.linkedin}
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 border-primary/20 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  {t.contact.github}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};