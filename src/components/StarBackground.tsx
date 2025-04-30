
import React, { useEffect, useState } from 'react';

type Star = {
  id: number;
  size: number;
  opacity: number;
  top: string;
  left: string;
  delay: string;
  duration: string;
};

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  
  useEffect(() => {
    const generateStars = () => {
      const starCount = Math.floor(window.innerWidth * window.innerHeight / 10000) + 50;
      const newStars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.7 + 0.3,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: `${Math.random() * 5}s`,
          duration: `${Math.random() * 6 + 4}s`
        });
      }
      
      setStars(newStars);
    };
    
    generateStars();
    window.addEventListener('resize', generateStars);
    
    return () => {
      window.removeEventListener('resize', generateStars);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden z-[-1]">
      <div className="absolute inset-0 bg-gradient-to-b from-mystic-700 via-mystic-600 to-cosmic-500"></div>
      
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
