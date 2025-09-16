import { useRef } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { LanguageSelector } from '@/components/LanguageSelector';

const Index = () => {
  const aboutRef = useRef<HTMLElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSelector />
      </div>
      
      <HeroSection onScrollToAbout={scrollToAbout} />
      <AboutSection ref={aboutRef} />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
