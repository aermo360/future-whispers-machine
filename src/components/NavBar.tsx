
import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NavBar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };
  
  return (
    <nav className="py-4 px-6 sm:px-10 w-full backdrop-blur-sm bg-mystic-600/30 border-b border-mystic-200/10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 text-2xl font-display font-bold text-mystic-200">
          <Star className="h-6 w-6 text-gold-300" />
          <span>Cosmic Insights</span>
        </a>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#readings" className="text-mystic-200 hover:text-white transition-colors">{t('nav.readings')}</a>
          <a href="#about" className="text-mystic-200 hover:text-white transition-colors">{t('nav.about')}</a>
          <a href="#testimonials" className="text-mystic-200 hover:text-white transition-colors">{t('nav.testimonials')}</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage} 
            className="text-mystic-200 hover:text-white transition-colors text-sm"
          >
            {t('language')}
          </button>
          <button className="cosmic-button">{t('nav.getReading')}</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
