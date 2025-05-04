
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StarBackground from '@/components/StarBackground';
import NavBar from '@/components/NavBar';
import PredictionForm from '@/components/PredictionForm';
import ReadingResult from '@/components/ReadingResult';
import { Star, Compass, Moon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const [prediction, setPrediction] = useState<string | null>(null);
  const { t } = useLanguage();
  
  const handleResultGenerated = (result: string) => {
    setPrediction(result);
    // Scroll to result
    setTimeout(() => {
      document.getElementById('result')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  const resetPrediction = () => {
    setPrediction(null);
    // Scroll to form
    setTimeout(() => {
      document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarBackground />
      <NavBar />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-mystic-200 via-gold-300 to-mystic-200 text-transparent bg-clip-text mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-mystic-100 mb-8">
            {t('hero.subtitle')}
          </p>
          <a 
            href="#form" 
            className="cosmic-button text-lg"
          >
            {t('hero.cta')}
          </a>
        </motion.div>
        
        {/* Features Section */}
        <section className="py-20" id="readings">
          <h2 className="text-3xl md:text-4xl font-display text-center text-white mb-16">
            <span className="bg-gradient-to-r from-mystic-200 to-gold-300 text-transparent bg-clip-text">
              {t('features.title')}
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Star className="h-10 w-10 text-gold-300" />}
              title={t('features.numerology.title')}
              description={t('features.numerology.description')}
            />
            <FeatureCard 
              icon={<Moon className="h-10 w-10 text-cosmic-200" />}
              title={t('features.astrology.title')}
              description={t('features.astrology.description')}
            />
            <FeatureCard 
              icon={<Compass className="h-10 w-10 text-mystic-300" />}
              title={t('features.tarot.title')}
              description={t('features.tarot.description')}
            />
          </div>
        </section>
        
        {/* Form Section */}
        <section className="py-20 flex flex-col items-center" id="form">
          <h2 className="text-3xl md:text-4xl font-display text-center text-white mb-12">
            <span className="bg-gradient-to-r from-gold-300 to-mystic-200 text-transparent bg-clip-text">
              {t('form.title')}
            </span>
          </h2>
          
          {!prediction ? (
            <PredictionForm onResultGenerated={handleResultGenerated} />
          ) : (
            <div id="result">
              <ReadingResult result={prediction} onReset={resetPrediction} />
            </div>
          )}
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20" id="testimonials">
          <h2 className="text-3xl md:text-4xl font-display text-center text-white mb-16">
            <span className="bg-gradient-to-r from-mystic-200 to-gold-300 text-transparent bg-clip-text">
              {t('testimonials.title')}
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote={t('testimonials.1.quote')}
              author={t('testimonials.1.author')}
            />
            <TestimonialCard 
              quote={t('testimonials.2.quote')}
              author={t('testimonials.2.author')}
            />
            <TestimonialCard 
              quote={t('testimonials.3.quote')}
              author={t('testimonials.3.author')}
            />
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-mystic-600/70 backdrop-blur-md border-t border-mystic-300/20 py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-5 w-5 text-gold-300" />
            <h3 className="text-xl font-display text-mystic-100">Cosmic Insights</h3>
          </div>
          <p className="text-sm text-mystic-200">
            © {new Date().getFullYear()} Cosmic Insights. {t('footer.rights')}
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <motion.div 
      className="cosmic-card p-6 rounded-lg flex flex-col items-center text-center"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-4 p-3 rounded-full bg-mystic-600/70 border border-mystic-300/30">
        {icon}
      </div>
      <h3 className="text-xl font-display text-white mb-3">{title}</h3>
      <p className="text-mystic-100">{description}</p>
    </motion.div>
  );
};

const TestimonialCard = ({ quote, author }: { quote: string, author: string }) => {
  return (
    <motion.div 
      className="cosmic-card p-6 rounded-lg"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <p className="text-mystic-100 mb-4 italic">"{quote}"</p>
      <p className="text-right text-gold-200 font-medium">— {author}</p>
    </motion.div>
  );
};

export default Index;
