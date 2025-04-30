
import React from 'react';
import { Star } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <nav className="py-4 px-6 sm:px-10 w-full backdrop-blur-sm bg-mystic-600/30 border-b border-mystic-200/10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 text-2xl font-display font-bold text-mystic-200">
          <Star className="h-6 w-6 text-gold-300" />
          <span>Cosmic Insights</span>
        </a>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#readings" className="text-mystic-200 hover:text-white transition-colors">Readings</a>
          <a href="#about" className="text-mystic-200 hover:text-white transition-colors">About</a>
          <a href="#testimonials" className="text-mystic-200 hover:text-white transition-colors">Testimonials</a>
        </div>
        
        <button className="cosmic-button">Get Reading</button>
      </div>
    </nav>
  );
};

export default NavBar;
