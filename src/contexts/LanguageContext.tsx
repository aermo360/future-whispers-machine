
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'pl';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations data
const translations = {
  en: {
    // Hero section
    'hero.title': 'Discover Your Cosmic Destiny',
    'hero.subtitle': 'Unlock the secrets written in the stars. Our AI interprets your unique numerology, astrology, and cosmic energies to reveal what the universe has in store for you.',
    'hero.cta': 'Begin Your Journey',
    
    // Features section
    'features.title': 'Mystical Insights Await',
    'features.numerology.title': 'Numerology',
    'features.numerology.description': 'Discover how the vibrations of numbers in your birth date and name influence your life journey and reveal your inner strengths.',
    'features.astrology.title': 'Astrology',
    'features.astrology.description': 'Learn how the positions of celestial bodies at your time of birth shape your personality and destiny through zodiac insights.',
    'features.tarot.title': 'Tarot Guidance',
    'features.tarot.description': 'Receive mystical guidance from the ancient wisdom of tarot, offering clarity on your present circumstances and future possibilities.',
    
    // Form section
    'form.title': 'Unveil Your Reading',
    
    // Testimonials section
    'testimonials.title': 'Celestial Experiences',
    'testimonials.1.quote': 'The numerology reading was incredibly accurate. It\'s like the AI knew things about me that I\'ve never shared with anyone.',
    'testimonials.1.author': 'Sarah K.',
    'testimonials.2.quote': 'My astrological reading provided insights that helped me make a major career decision. I\'m so grateful for the guidance.',
    'testimonials.2.author': 'Michael T.',
    'testimonials.3.quote': 'The combined reading was comprehensive and enlightening. I\'ve been referring back to it for months and it continues to resonate.',
    'testimonials.3.author': 'Elena R.',
    
    // Nav
    'nav.readings': 'Readings',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.getReading': 'Get Reading',
    
    // Footer
    'footer.rights': 'All celestial rights reserved.',
    
    // Language switch
    'language': 'Polski'
  },
  pl: {
    // Hero section
    'hero.title': 'Odkryj Swoje Kosmiczne Przeznaczenie',
    'hero.subtitle': 'Poznaj sekrety zapisane w gwiazdach. Nasza sztuczna inteligencja interpretuje Twoją unikalną numerologię, astrologię i kosmiczne energie, aby ujawnić, co wszechświat dla Ciebie przygotował.',
    'hero.cta': 'Rozpocznij Swoją Podróż',
    
    // Features section
    'features.title': 'Mistyczne Odkrycia Czekają',
    'features.numerology.title': 'Numerologia',
    'features.numerology.description': 'Odkryj, jak wibracje liczb w Twojej dacie urodzenia i imieniu wpływają na Twoją życiową podróż i ujawniają wewnętrzne siły.',
    'features.astrology.title': 'Astrologia',
    'features.astrology.description': 'Dowiedz się, jak położenie ciał niebieskich w momencie Twojego urodzenia kształtuje Twoją osobowość i przeznaczenie poprzez znaki zodiaku.',
    'features.tarot.title': 'Porady Tarota',
    'features.tarot.description': 'Otrzymaj mistyczne wskazówki ze starożytnej mądrości tarota, oferujące jasność co do Twojej obecnej sytuacji i przyszłych możliwości.',
    
    // Form section
    'form.title': 'Odkryj Swój Odczyt',
    
    // Testimonials section
    'testimonials.title': 'Niebiańskie Doświadczenia',
    'testimonials.1.quote': 'Odczyt numerologiczny był niesamowicie dokładny. To tak, jakby AI wiedziała o mnie rzeczy, którymi nigdy z nikim się nie podzieliłam.',
    'testimonials.1.author': 'Sara K.',
    'testimonials.2.quote': 'Mój astrologiczny odczyt dostarczył spostrzeżeń, które pomogły mi podjąć ważną decyzję zawodową. Jestem bardzo wdzięczny za wskazówki.',
    'testimonials.2.author': 'Michał T.',
    'testimonials.3.quote': 'Połączony odczyt był kompleksowy i oświecający. Wracam do niego od miesięcy i nadal znajduję w nim echa moich doświadczeń.',
    'testimonials.3.author': 'Ela R.',
    
    // Nav
    'nav.readings': 'Odczyty',
    'nav.about': 'O Nas',
    'nav.testimonials': 'Opinie',
    'nav.getReading': 'Uzyskaj Odczyt',
    
    // Footer
    'footer.rights': 'Wszelkie prawa niebieskie zastrzeżone.',
    
    // Language switch
    'language': 'English'
  }
};

// Create provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create custom hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
