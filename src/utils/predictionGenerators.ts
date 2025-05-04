// This is a simplified implementation that would be replaced with actual API calls in a production app
import { Language } from '@/contexts/LanguageContext';

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

// Get Polish zodiac sign name
const getPolishZodiacName = (englishName: string): string => {
  const zodiacTranslations: Record<string, string> = {
    "Aries": "Baran",
    "Taurus": "Byk",
    "Gemini": "Bliźnięta",
    "Cancer": "Rak",
    "Leo": "Lew",
    "Virgo": "Panna",
    "Libra": "Waga",
    "Scorpio": "Skorpion",
    "Sagittarius": "Strzelec",
    "Capricorn": "Koziorożec",
    "Aquarius": "Wodnik",
    "Pisces": "Ryby"
  };
  
  return zodiacTranslations[englishName] || englishName;
};

// Get a tarot card reading
const getTarotReading = (language: Language): string => {
  const tarotCards = {
    en: [
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
    ],
    pl: [
      "Głupiec - Nowe początki, spontaniczność i wolny duch",
      "Mag - Manifestacja, zaradność i inspirowane działanie",
      "Najwyższa Kapłanka - Intuicja, święta wiedza i boska kobiecość",
      "Cesarzowa - Kobiecość, piękno, natura i obfitość",
      "Cesarz - Autorytet, porządek, struktura i figura ojca",
      "Hierofant - Duchowa mądrość, wierzenia religijne i tradycja",
      "Kochankowie - Miłość, harmonia, związki i zgodność wartości",
      "Rydwan - Kontrola, siła woli, sukces i determinacja",
      "Sprawiedliwość - Uczciwość, prawda, przyczyna i skutek oraz prawo",
      "Pustelnik - Poszukiwanie duszy, introspekcja i wewnętrzne przewodnictwo"
    ]
  };
  
  // Select random cards for the reading
  const cardsToUse = tarotCards[language];
  const shuffled = [...cardsToUse].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3).join("\n\n");
};

// Generate numerology reading
const getNumerologyReading = (name: string, birthdate: string, language: Language): string => {
  const lifePath = calculateLifePath(birthdate);
  
  const lifePathMeanings: Record<Language, Record<number, string>> = {
    en: {
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
    },
    pl: {
      1: "Jesteś naturalnym liderem o silnej determinacji i indywidualności. Twoja droga polega na rozwijaniu niezależności i oryginalności, ucząc się jednocześnie samodzielności.",
      2: "Masz naturalne zdolności dyplomatyczne i jesteś rozjemcą. Twoja droga polega na rozwijaniu cierpliwości, współpracy i wrażliwości na potrzeby innych.",
      3: "Masz naturalne talenty twórcze i radosne podejście do życia. Twoja droga polega na rozwijaniu samoekspresji i wykorzystywaniu swoich darów do inspirowania innych.",
      4: "Masz naturalną zdolność do tworzenia systemów i wprowadzania porządku. Twoja droga polega na rozwijaniu dyscypliny, praktyczności i budowaniu trwałych fundamentów.",
      5: "Masz naturalną potrzebę wolności i różnorodności. Twoja droga polega na rozwijaniu zdolności adaptacyjnych, wykorzystując swoją wszechstronną naturę do pełnego doświadczania życia.",
      6: "Masz naturalną zdolność do opieki i troski o innych. Twoja droga polega na rozwijaniu odpowiedzialności, służby i znajdowaniu równowagi w relacjach.",
      7: "Masz naturalny analityczny umysł i duchową świadomość. Twoja droga polega na rozwijaniu mądrości poprzez studia, analizę i introspekcję.",
      8: "Masz naturalne zrozumienie władzy i sposobów osiągania materialnego sukcesu. Twoja droga polega na rozwijaniu samokontroli i mądrym wykorzystywaniu swojego wpływu.",
      9: "Masz naturalną humanitarną perspektywę i idealistyczną wizję. Twoja droga polega na rozwijaniu współczucia i uczeniu się odpuszczania.",
      11: "Jako liczba mistrzowska, posiadasz zwiększone zdolności intuicyjne i duchowy wgląd. Twoja droga polega na inspirowaniu innych poprzez wizjonerskie pomysły.",
      22: "Jako liczba mistrzowska, masz nadzwyczajny potencjał do budowania czegoś znaczącego. Twoja droga polega na przekształcaniu marzeń w praktyczne rzeczywistości, które przynoszą korzyści wielu osobom.",
      33: "Jako liczba mistrzowska, posiadasz wyjątkowe zdolności opiekuńcze. Twoja droga polega na bezinteresownej służbie i podnoszeniu ludzkości poprzez współczujące przewodnictwo."
    }
  };
  
  const defaultMessage = {
    en: "Your numerology reading reveals a complex path ahead, with multiple influences shaping your destiny.",
    pl: "Twój odczyt numerologiczny ujawnia złożoną drogę przed tobą, z wieloma wpływami kształtującymi twoje przeznaczenie."
  };
  
  const lifePathMeaning = lifePathMeanings[language][lifePath] || defaultMessage[language];
  
  if (language === 'en') {
    return `Your Life Path Number is ${lifePath}.\n\n${lifePathMeaning}\n\nThe letters in your name also vibrate with unique energies that suggest you have untapped potential waiting to be discovered.`;
  } else {
    return `Twoja Liczba Ścieżki Życia to ${lifePath}.\n\n${lifePathMeaning}\n\nLitery w twoim imieniu również wibrują unikalnymi energiami, które sugerują, że masz nieodkryty potencjał czekający na odkrycie.`;
  }
};

// Generate astrology reading
const getAstrologyReading = (birthdate: string, language: Language): string => {
  const englishZodiacSign = getZodiacSign(birthdate);
  const zodiacSign = language === 'en' ? englishZodiacSign : getPolishZodiacName(englishZodiacSign);
  
  const zodiacReadings: Record<Language, Record<string, string>> = {
    en: {
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
    },
    pl: {
      "Aries": "Jako Baran, jesteś naturalnym pionierem o ogromnej energii i entuzjazmie. Kosmos pokazuje, że twoja odwaga otworzy nowe drzwi w nadchodzących miesiącach. Mars, twoja planeta władająca, wchodzi w korzystną pozycję, która wzmocni twoje naturalne zdolności przywódcze.",
      "Taurus": "Jako Byk, twoja niezłomna natura i praktyczne podejście przynoszą stabilność tym wokół ciebie. Wenus wyróżnia twój sektor finansowy, sugerując wzrost zasobów, jeśli utrzymasz swoje praktyczne podejście. Twoja naturalna cierpliwość zostanie wkrótce nagrodzona.",
      "Gemini": "Jako Bliźnięta, twoja elastyczna i ciekawsa natura czyni cię naturalnym komunikatorem. Obecna pozycja Merkurego wzmacnia twój już bystry intelekt. Gwiazdy wskazują na ekscytujące kontakty towarzyskie, które mogą prowadzić do cennych możliwości.",
      "Cancer": "Jako Rak, twoja intuicyjna i opiekuńcza natura tworzy głębokie więzi z innymi. Cykle Księżyca są dla ciebie teraz szczególnie wpływowe, przynosząc emocjonalne spostrzeżenia. Więzi rodzinne będą odgrywać ważną rolę w nadchodzących miesiącach.",
      "Leo": "Jako Lew, twój ciepły i kreatywny duch naturalnie przyciąga innych do ciebie. Słońce, twoja planeta władająca, energetyzuje twój kreatywny potencjał. Kosmos sugeruje, że śmiała samoekspresja przyniesie ci uznanie.",
      "Virgo": "Jako Panna, twój analityczny umysł i dbałość o szczegóły pozwalają ci rozwiązywać złożone problemy. Merkury wspiera twoją jasność umysłu, czyniąc ten czas doskonałym na planowanie. Twoje naturalne talenty organizacyjne będą szczególnie cenne wkrótce.",
      "Libra": "Jako Waga, twoja dyplomatyczna natura i poczucie sprawiedliwości czynią cię doskonałym mediatorem. Wenus wyróżnia twój sektor relacji, przynosząc harmonię i możliwie nowe połączenia. Równowaga we wszystkim przyniesie ci sukces.",
      "Scorpio": "Jako Skorpion, twoja namiętna i zdeterminowana natura daje ci niezwykłą wytrwałość. Transformacyjna energia Plutona wspiera twoją osobistą ewolucję. Gwiazdy wskazują, że przyjęcie zmiany zamiast oporu doprowadzi do potężnych przełomów.",
      "Sagittarius": "Jako Strzelec, twoje optymistyczne spojrzenie i miłość do przygód pozwalają ci odkrywać nowe horyzonty. Jowisz, twoja planeta władająca, rozszerza twoje możliwości rozwoju. Kosmos sugeruje, że edukacja lub podróż przyniosą cenne spostrzeżenia.",
      "Capricorn": "Jako Koziorożec, twoje zdyscyplinowane podejście i praktyczna mądrość pomagają ci osiągać długoterminowe cele. Saturn wzmacnia twoje fundamenty, sugerując, że wytrwałość doprowadzi do znaczących osiągnięć. Twoje naturalne zdolności przywódcze zostaną rozpoznane.",
      "Aquarius": "Jako Wodnik, twoje innowacyjne myślenie i humanitarne wartości stawiają cię przed twoim czasem. Uran rozbudza twoją kreatywność i przynosi nieoczekiwane możliwości. Gwiazdy wskazują, że projekty współpracy będą szczególnie udane.",
      "Pisces": "Jako Ryby, twoja współczująca natura i intuicyjne dary dają ci wyjątkowe spostrzeżenia. Neptun wzmacnia twoją już silną intuicję. Kosmos sugeruje, że artystyczne dążenia i praktyki duchowe będą szczególnie satysfakcjonujące."
    }
  };
  
  const defaultMessage = {
    en: "The celestial bodies at your time of birth have created a unique cosmic fingerprint that influences your personality and life path.",
    pl: "Ciała niebieskie w momencie twoich narodzin stworzyły unikalny kosmiczny odcisk, który wpływa na twoją osobowość i ścieżkę życia."
  };
  
  const zodiacSignReading = zodiacReadings[language][englishZodiacSign] || defaultMessage[language];
  
  if (language === 'en') {
    return `You are a ${zodiacSign}.\n\n${zodiacSignReading}\n\nThe current planetary alignments suggest important transitions are approaching, bringing both challenges and opportunities for growth.`;
  } else {
    return `Jesteś ${zodiacSign}.\n\n${zodiacSignReading}\n\nObecne układy planetarne sugerują, że zbliżają się ważne przejścia, niosące zarówno wyzwania, jak i możliwości rozwoju.`;
  }
};

// Main function to generate predictions
export const generatePrediction = (name: string, birthdate: string, type: PredictionType, language: Language = 'en'): string => {
  switch (type) {
    case 'numerology':
      return getNumerologyReading(name, birthdate, language);
    case 'astrology':
      return getAstrologyReading(birthdate, language);
    case 'tarot':
      if (language === 'en') {
        return `Dear ${name},\n\nYour tarot reading reveals important messages from the universe:\n\n${getTarotReading(language)}\n\nReflect on these cards as they illuminate your current path and the energies surrounding you.`;
      } else {
        return `Drogi/Droga ${name},\n\nTwój odczyt tarota ujawnia ważne przesłania wszechświata:\n\n${getTarotReading(language)}\n\nPrzemyśl te karty, ponieważ rozjaśniają twoją obecną ścieżkę i energie, które cię otaczają.`;
      }
    case 'combined':
    default:
      const numerology = getNumerologyReading(name, birthdate, language);
      const astrology = getAstrologyReading(birthdate, language);
      const tarot = getTarotReading(language);
      
      if (language === 'en') {
        return `Dear ${name},\n\nYour complete cosmic reading draws from multiple mystical traditions to provide a comprehensive insight into your path.\n\n== NUMEROLOGY ==\n${numerology}\n\n== ASTROLOGY ==\n${astrology}\n\n== TAROT GUIDANCE ==\nThe cards have revealed these messages for you:\n${tarot}\n\nBy integrating these insights from different traditions, you can gain a deeper understanding of your unique cosmic blueprint and the path that lies ahead.`;
      } else {
        return `Drogi/Droga ${name},\n\nTwój pełny kosmiczny odczyt czerpie z wielu mistycznych tradycji, aby zapewnić kompleksowy wgląd w twoją ścieżkę.\n\n== NUMEROLOGIA ==\n${numerology}\n\n== ASTROLOGIA ==\n${astrology}\n\n== WSKAZÓWKI TAROTA ==\nKarty ujawniły te wiadomości dla ciebie:\n${tarot}\n\nIntegrując te spostrzeżenia z różnych tradycji, możesz zyskać głębsze zrozumienie swojego unikalnego kosmicznego projektu i ścieżki, która znajduje się przed tobą.`;
      }
  }
};
