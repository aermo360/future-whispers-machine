
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { generatePrediction } from '@/utils/predictionGenerators';
import { useToast } from '@/hooks/use-toast';

type PredictionType = 'numerology' | 'astrology' | 'tarot' | 'combined';

interface PredictionFormProps {
  onResultGenerated: (result: string) => void;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ onResultGenerated }) => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [predictionType, setPredictionType] = useState<PredictionType>('combined');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !birthdate) {
      toast({
        title: "Missing information",
        description: "Please enter both your name and birth date",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real app, this would connect to a backend API
      const result = generatePrediction(name, birthdate, predictionType);
      
      // Simulate API delay
      setTimeout(() => {
        onResultGenerated(result);
        setIsLoading(false);
      }, 2500);
    } catch (error) {
      toast({
        title: "Error generating prediction",
        description: "Please try again later",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  return (
    <Card className="cosmic-card w-full max-w-md p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-display text-center text-white mb-6">
          Discover Your Cosmic Path
        </h2>
        
        <div className="space-y-2">
          <Label htmlFor="name" className="text-mystic-100">Your Full Name</Label>
          <Input 
            id="name"
            placeholder="Enter your full name"
            className="cosmic-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="birthdate" className="text-mystic-100">Birth Date</Label>
          <Input 
            id="birthdate"
            type="date"
            className="cosmic-input"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="predictionType" className="text-mystic-100">Reading Type</Label>
          <Select 
            onValueChange={(value) => setPredictionType(value as PredictionType)} 
            defaultValue={predictionType}
          >
            <SelectTrigger className="cosmic-input">
              <SelectValue placeholder="Select a reading type" />
            </SelectTrigger>
            <SelectContent className="bg-mystic-600 border border-mystic-300/30">
              <SelectItem value="numerology" className="text-mystic-100">Numerology</SelectItem>
              <SelectItem value="astrology" className="text-mystic-100">Astrology</SelectItem>
              <SelectItem value="tarot" className="text-mystic-100">Tarot Reading</SelectItem>
              <SelectItem value="combined" className="text-mystic-100">Complete Reading</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          type="submit" 
          className="cosmic-button w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Reading the Stars...
            </span>
          ) : (
            "Reveal My Cosmic Reading"
          )}
        </Button>
      </form>
    </Card>
  );
};

export default PredictionForm;
