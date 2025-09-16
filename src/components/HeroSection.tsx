import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

interface HeroSectionProps {
  onScrollToAbout: () => void;
}

export const HeroSection = ({ onScrollToAbout }: HeroSectionProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="relative z-10 text-center space-y-8 px-4">
        <div className="space-y-4">
          <p className="text-xl text-muted-foreground animate-fade-in">
            {t.hero.greeting}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-fade-in delay-300">
            {t.hero.name}
          </h1>
        </div>
        
        <Button 
          onClick={onScrollToAbout}
          size="lg"
          className="group mt-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {t.hero.aboutButton}
          <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};