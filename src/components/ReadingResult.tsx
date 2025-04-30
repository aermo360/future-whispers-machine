
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ReadingResultProps {
  result: string;
  onReset: () => void;
}

const ReadingResult: React.FC<ReadingResultProps> = ({ result, onReset }) => {
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  
  useEffect(() => {
    // Split the result into paragraphs
    const parts = result.split('\n').filter(p => p.trim() !== '');
    setParagraphs(parts);
  }, [result]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Card className="cosmic-card w-full max-w-2xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-cosmic-300 to-mystic-400 text-white">
        <CardTitle className="text-2xl font-display text-center">Your Cosmic Reading</CardTitle>
      </CardHeader>
      
      <CardContent className="p-6 sm:p-8">
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {paragraphs.map((paragraph, index) => (
            <motion.p 
              key={index} 
              className="text-mystic-100 leading-relaxed"
              variants={itemVariants}
            >
              {paragraph}
            </motion.p>
          ))}
          
          <motion.div 
            className="flex justify-center mt-8" 
            variants={itemVariants}
          >
            <Button 
              onClick={onReset}
              className="cosmic-button"
            >
              New Reading
            </Button>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default ReadingResult;
