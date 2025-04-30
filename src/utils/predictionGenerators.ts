
// This is a simplified implementation that would be replaced with actual API calls in a production app

type PredictionType = 'numerology' | 'astrology' | 'tarot' | 'combined';

// Calculate life path number based on birth date
const calculateLifePath = (birthdate: string): number => {
  const dateNumbers = birthdate.split('-').join('').split('').map(Number);
  const sum = dateNumbers.reduce((a, b) => a + b, 0);
  
  // Reduce to a single digit (except for 11, 22, 33 which are master numbers)
  if (sum === 11 || sum === 22 || sum === 33) {
    return sum;
  }
  
  return sum > 9 ? Math.floor(sum / 10) + (sum % 10) : sum;
};

// Get zodiac sign from birth date
const getZodiacSign = (birthdate: string): string => {
  const date = new Date(birthdate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  return "Pisces";
};

// Get a tarot card reading
const getTarotReading = (): string => {
  const tarotCards = [
    "The Fool - New beginnings, spontaneity, and a free spirit",
    "The Magician - Manifestation, resourcefulness, and inspired action",
    "The High Priestess - Intuition, sacred knowledge, and divine feminine",
    "The Empress - Femininity, beauty, nature, and abundance",
    "The Emperor - Authority, establishment, structure, and a father figure",
    "The Hierophant - Spiritual wisdom, religious beliefs, and tradition",
    "The Lovers - Love, harmony, relationships, and alignment of values",
    "The Chariot - Control, willpower, success, and determination",
    "Justice - Fairness, truth, cause and effect, and law",
    "The Hermit - Soul-searching, introspection, and inner guidance"
  ];
  
  // Select random cards for the reading
  const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3).join("\n\n");
};

// Generate numerology reading
const getNumerologyReading = (name: string, birthdate: string): string => {
  const lifePath = calculateLifePath(birthdate);
  
  const lifePathMeanings: Record<number, string> = {
    1: "You are a natural leader with strong determination and individuality. Your path involves developing independence and originality while learning to stand on your own.",
    2: "You have a natural diplomatic ability and are a peacemaker. Your path involves developing patience, cooperation and sensitivity to others' needs.",
    3: "You have natural creative talents and a joyful approach to life. Your path involves developing self-expression and using your gifts to inspire others.",
    4: "You have a natural ability for creating systems and bringing order. Your path involves developing discipline, practicality and building foundations that last.",
    5: "You have a natural need for freedom and variety. Your path involves developing adaptability while using your versatile nature to experience life fully.",
    6: "You have a natural ability to nurture and care for others. Your path involves developing responsibility, service and finding balance in relationships.",
    7: "You have a natural analytical mind and spiritual awareness. Your path involves developing wisdom through study, analysis and introspection.",
    8: "You have a natural understanding of power and how to achieve material success. Your path involves developing self-mastery and using your influence wisely.",
    9: "You have a natural humanitarian outlook and idealistic vision. Your path involves developing compassion and learning to let go.",
    11: "As a master number, you have heightened intuitive abilities and spiritual insight. Your path involves inspiring others through your visionary ideas.",
    22: "As a master number, you have extraordinary potential to build something significant. Your path involves turning dreams into practical realities that benefit many.",
    33: "As a master number, you have exceptional nurturing abilities. Your path involves selfless service and uplifting humanity through compassionate guidance."
  };
  
  return `Your Life Path Number is ${lifePath}.\n\n${lifePathMeanings[lifePath] || "Your numerology reading reveals a complex path ahead, with multiple influences shaping your destiny."}\n\nThe letters in your name also vibrate with unique energies that suggest you have untapped potential waiting to be discovered.`;
};

// Generate astrology reading
const getAstrologyReading = (birthdate: string): string => {
  const zodiacSign = getZodiacSign(birthdate);
  
  const zodiacReadings: Record<string, string> = {
    "Aries": "As an Aries, you are a natural pioneer with abundant energy and enthusiasm. The cosmos shows that your boldness will open new doors in the coming months. Mars, your ruling planet, is moving into a favorable position that will enhance your natural leadership abilities.",
    "Taurus": "As a Taurus, your steadfast nature and practical approach bring stability to those around you. Venus is highlighting your financial sector, suggesting growth in resources if you maintain your practical approach. Your natural patience will be rewarded soon.",
    "Gemini": "As a Gemini, your adaptable and curious nature makes you a natural communicator. Mercury's current position is enhancing your already sharp intellect. The stars indicate exciting social connections that could lead to valuable opportunities.",
    "Cancer": "As a Cancer, your intuitive and nurturing nature creates deep bonds with others. The Moon's cycles are particularly influential for you now, bringing emotional insights. Family connections will play an important role in the coming months.",
    "Leo": "As a Leo, your warm-hearted and creative spirit naturally draws others to you. The Sun, your ruling planet, is energizing your creative potential. The cosmos suggests that bold self-expression will bring you recognition.",
    "Virgo": "As a Virgo, your analytical mind and attention to detail allow you to solve complex problems. Mercury is supporting your mental clarity, making this an excellent time for planning. Your natural talents for organization will be particularly valuable soon.",
    "Libra": "As a Libra, your diplomatic nature and sense of fairness make you an excellent mediator. Venus is highlighting your relationship sector, bringing harmony and possibly new connections. Balance in all things will bring you success.",
    "Scorpio": "As a Scorpio, your passionate and determined nature gives you remarkable persistence. Pluto's transformative energy is supporting your personal evolution. The stars indicate that embracing change rather than resisting it will lead to powerful breakthroughs.",
    "Sagittarius": "As a Sagittarius, your optimistic outlook and love of adventure keep you exploring new horizons. Jupiter, your ruling planet, is expanding your opportunities for growth. The cosmos suggests that education or travel will bring valuable insights.",
    "Capricorn": "As a Capricorn, your disciplined approach and practical wisdom help you achieve long-term goals. Saturn is strengthening your foundations, suggesting that persistence will lead to significant achievements. Your natural leadership abilities will be recognized.",
    "Aquarius": "As an Aquarius, your innovative thinking and humanitarian values put you ahead of your time. Uranus is sparking your creativity and bringing unexpected opportunities. The stars indicate that collaborative projects will be particularly successful.",
    "Pisces": "As a Pisces, your compassionate nature and intuitive gifts give you unique insights. Neptune is enhancing your already strong intuition. The cosmos suggests that artistic pursuits and spiritual practices will be especially fulfilling."
  };
  
  return `You are a ${zodiacSign}.\n\n${zodiacReadings[zodiacSign] || "The celestial bodies at your time of birth have created a unique cosmic fingerprint that influences your personality and life path."}\n\nThe current planetary alignments suggest important transitions are approaching, bringing both challenges and opportunities for growth.`;
};

// Main function to generate predictions
export const generatePrediction = (name: string, birthdate: string, type: PredictionType): string => {
  switch (type) {
    case 'numerology':
      return getNumerologyReading(name, birthdate);
    case 'astrology':
      return getAstrologyReading(birthdate);
    case 'tarot':
      return `Dear ${name},\n\nYour tarot reading reveals important messages from the universe:\n\n${getTarotReading()}\n\nReflect on these cards as they illuminate your current path and the energies surrounding you.`;
    case 'combined':
    default:
      const numerology = getNumerologyReading(name, birthdate);
      const astrology = getAstrologyReading(birthdate);
      const tarot = getTarotReading();
      
      return `Dear ${name},\n\nYour complete cosmic reading draws from multiple mystical traditions to provide a comprehensive insight into your path.\n\n== NUMEROLOGY ==\n${numerology}\n\n== ASTROLOGY ==\n${astrology}\n\n== TAROT GUIDANCE ==\nThe cards have revealed these messages for you:\n${tarot}\n\nBy integrating these insights from different traditions, you can gain a deeper understanding of your unique cosmic blueprint and the path that lies ahead.`;
  }
};
