import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage, type Language } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe size={16} />
          {language === 'es' ? t.language.spanish : t.language.english}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => changeLanguage('es')}
          className={language === 'es' ? 'bg-accent' : ''}
        >
          {t.language.spanish}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')}
          className={language === 'en' ? 'bg-accent' : ''}
        >
          {t.language.english}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};