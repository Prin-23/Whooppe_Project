import voltageFestImg from '../assets/voltage-fest.png';
import iWantToTalkImg from '../assets/i-want-to-talk.png';
import despicableMeImg from '../assets/despicable-me-4.png';
import anandashreeBalaImg from '../assets/anandashree-bala.png';
import voltageMonsoonImg from '../assets/voltage-monsoon.jpg';

export interface EventData {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  price: string;
  numericPrice: number;
  description: string;
  tagline: string;
  gradient: string;
  accentColor: string;
  image: string;
}

export const mockEvents: EventData[] = [
  {
    id: 'voltage-fest-2026',
    title: 'Voltage Festival 2026',
    category: 'Music Concert',
    date: '01 June 2026',
    time: '7:00 PM',
    location: 'Nesco Center, Mumbai',
    price: '₹1,499',
    numericPrice: 1499,
    description: 'India\'s smart facial recognition music festival featuring premier international and domestic EDM artists, interactive visual stages, and premium lounge zones.',
    tagline: 'Skip the line, experience the bass.',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #311042 50%, #4c0519 100%)',
    accentColor: '#f43f5e',
    image: voltageFestImg
  },
  {
    id: 'i-want-to-talk',
    title: 'I Want To Talk - Premier',
    category: 'Film Premier',
    date: '10 June 2026',
    time: '6:30 PM',
    location: 'PVR Directors Cut, Bangalore',
    price: '₹499',
    numericPrice: 499,
    description: 'Special screening of the critically acclaimed drama, followed by an intimate Q&A session with the lead director and star-studded cast.',
    tagline: 'An evening of cinematic stories.',
    gradient: 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #065f46 100%)',
    accentColor: '#10b981',
    image: iWantToTalkImg
  },
  {
    id: 'despicable-me-4',
    title: 'Despicable Me 4 - Fan Fest',
    category: 'Family Event',
    date: '15 June 2026',
    time: '4:00 PM',
    location: 'Nexus Mall, Hyderabad',
    price: '₹299',
    numericPrice: 299,
    description: 'Special fan-festival screening for kids and families with fun Minion activities, costume contests, and custom facial-recognition entry gift badges.',
    tagline: 'Minions meet face-recognition!',
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 50%, #172554 100%)',
    accentColor: '#3b82f6',
    image: despicableMeImg
  },
  {
    id: 'anandashree-bala',
    title: 'Anandashree Bala Performance',
    category: 'Classical Dance',
    date: '22 June 2026',
    time: '7:00 PM',
    location: 'Ravindra Bharathi, Hyderabad',
    price: '₹799',
    numericPrice: 799,
    description: 'A grand theatrical classical dance recital featuring top performers enacting visual tales from traditional literature with live fusion orchestras.',
    tagline: 'Tradition meets technology.',
    gradient: 'linear-gradient(135deg, #701a75 0%, #4a044e 50%, #300030 100%)',
    accentColor: '#c084fc',
    image: anandashreeBalaImg
  },
  {
    id: 'voltage-monsoon-2026',
    title: 'Voltage Monsoon Session',
    category: 'Music Festival',
    date: '28 June 2026',
    time: '5:00 PM',
    location: 'Jio Gardens, Mumbai',
    price: '₹1,999',
    numericPrice: 1999,
    description: 'Dance in the rain with the ultimate monsoon soundtrack. Completely paperless, facial verification entrance at the gates.',
    tagline: 'Electric rain sessions.',
    gradient: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)',
    accentColor: '#f59e0b',
    image: voltageMonsoonImg
  }
];
