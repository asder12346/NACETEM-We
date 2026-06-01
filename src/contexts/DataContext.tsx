import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { assets } from '../assets';

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  content: string;
  img: string;
}

interface DataContextType {
  gallery: GalleryImage[];
  events: EventItem[];
  news: NewsArticle[];
  addGalleryImage: (image: GalleryImage) => Promise<void>;
  removeGalleryImage: (id: string) => Promise<void>;
  addEvent: (event: EventItem) => Promise<void>;
  removeEvent: (id: string) => Promise<void>;
  addNewsArticle: (article: NewsArticle) => Promise<void>;
  removeNewsArticle: (id: string) => Promise<void>;
  isLoading: boolean;
}

const defaultGallery: GalleryImage[] = [
  { id: 'hero-1', url: assets.headquartersImage, title: 'NACETEM Headquarters' },
  { id: 'hero-2', url: assets.capacityImage, title: 'Capacity Development Programmes' },
  { id: 'hero-3', url: assets.policyImage, title: 'STI Policy Engagement' },
  { id: '1', url: assets.bayelsaNewsImage, title: 'Institutional Engagement' },
  { id: '4', url: assets.seminarImage, title: 'Research Seminar Series' },
  { id: '5', url: assets.dashboardImage, title: 'STI Intelligence Platform' },
  { id: '6', url: assets.ntaImage, title: 'Media Engagement' },
];

const defaultEvents: EventItem[] = [
  { id: '1', title: 'National Innovation Summit', date: 'August 15, 2026', description: 'Annual gathering of STI stakeholders across the nation to discuss technology management and policy implementation.', location: 'Abuja, Nigeria' },
  { id: '2', title: 'Capacity Building Workshop', date: 'September 10, 2026', description: 'Training public servants on technology management, systems thinking, and data-driven decision making.', location: 'Lagos, Nigeria' },
];

const defaultNews: NewsArticle[] = [
  {
    id: '1',
    title: 'NACETEM South-South Office Strengthens Collaboration with Bayelsa State on STI Development',
    category: 'Government Collaboration',
    date: 'October 15, 2026',
    content: 'NACETEM South-South Zonal Office recently engaged the Bayelsa State Ministry of Communications, Science and Technology in strategic discussions aimed at strengthening Science, Technology, and Innovation (STI) development within the state. The engagement focused on STI policy implementation, technical skills mapping, innovation ecosystem development, digital transformation strategies, and capacity building for public institutions.',
    img: assets.bayelsaNewsImage,
  },
  {
    id: '2',
    title: 'NACETEM DG/CEO Speaks on Artificial Intelligence and Nigeria’s Future on NTA International',
    category: 'Artificial Intelligence',
    date: 'October 10, 2026',
    content: 'The Director-General/CEO of NACETEM, Dr. Olushola Odusanya, featured on NTA International’s Issues of the Moment programme to discuss the future of Artificial Intelligence in Nigeria, responsible adoption, and innovation competitiveness.',
    img: assets.ntaImage,
  },
  {
    id: '3',
    title: 'NACETEM Advances STI Education Through Strategic Academic Partnerships',
    category: 'Education & Capacity Development',
    date: 'October 5, 2026',
    content: 'NACETEM signed a collaborative Memorandum of Understanding to strengthen STI education and professional capacity development in Nigeria through postgraduate programmes, technology management training, and industry-academia collaboration.',
    img: assets.news1Image,
  },
  {
    id: '4',
    title: 'NACETEM Expands Digital Capacity Development Programmes',
    category: 'Capacity Building',
    date: 'September 28, 2026',
    content: 'NACETEM continues to expand professional training programmes in Technology Management, Digital Marketing and Strategy, Nanoscience and Nanotechnology, Innovation Management, and STI Policy Studies.',
    img: assets.capacityImage,
  },
  {
    id: '5',
    title: 'Strengthening Nigeria’s STI Intelligence Through Data and Research',
    category: 'Research & Policy',
    date: 'September 20, 2026',
    content: 'NACETEM is strengthening Nigeria’s Science, Technology, and Innovation intelligence systems through STI indicators, innovation surveys, analytics platforms, and evidence-based national planning tools.',
    img: assets.dashboardImage,
  },
  {
    id: '6',
    title: 'NACETEM Launches New Innovation Hub in Abuja',
    category: 'Infrastructure',
    date: 'September 10, 2026',
    content: 'The National Centre for Technology Management has opened an Innovation Hub in Abuja for researchers, technology entrepreneurs, and policymakers working on emerging technologies.',
    img: assets.headquartersImage,
  },
  {
    id: '7',
    title: 'National Conference on Science and Technology Policy Concludes',
    category: 'Conferences',
    date: 'August 25, 2026',
    content: 'The annual National Conference on Science and Technology Policy concluded with recommendations for enhancing indigenous technology development and digital inclusion across Nigeria.',
    img: assets.policyImage,
  },
  {
    id: '8',
    title: 'NACETEM Partners with International Tech Firms to Boost Local Capacity',
    category: 'Partnerships',
    date: 'August 12, 2026',
    content: 'NACETEM has formalized partnerships with leading technology firms to provide advanced training programmes for Nigerian youth in software engineering and data science.',
    img: assets.aiEcosystemImage,
  },
];

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [gallery, setGallery] = useState<GalleryImage[]>(defaultGallery);
  const [events, setEvents] = useState<EventItem[]>(defaultEvents);
  const [news, setNews] = useState<NewsArticle[]>(defaultNews);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      if (supabase) {
        setIsLoading(true);
        try {
          const { data: gData, error: gError } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
          if (!gError && gData && gData.length > 0) {
            setGallery(gData);
          }

          const { data: eData, error: eError } = await supabase.from('events').select('*').order('created_at', { ascending: false });
          if (!eError && eData && eData.length > 0) {
            setEvents(eData);
          }

          const { data: nData, error: nError } = await supabase.from('news').select('*').order('created_at', { ascending: false });
          if (!nError && nData && nData.length > 0) {
            setNews(nData);
          }
        } catch (error) {
          console.error("Error fetching from Supabase:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const addGalleryImage = async (image: GalleryImage) => {
    const backup = gallery;
    setGallery(prev => [image, ...prev]);
    if (supabase) {
      const { id, ...rest } = image; // Omit client-generated ID
      const { data, error } = await supabase.from('gallery').insert([rest]).select();
      if (!error && data) {
        // Replace with DB record to get real ID
        setGallery(prev => prev.map(img => img.id === image.id ? data[0] : img));
      } else {
        console.error("Failed to add image", error);
        setGallery(backup);
      }
    }
  };

  const removeGalleryImage = async (id: string) => {
    const backup = gallery;
    setGallery(prev => prev.filter(img => img.id !== id));
    if (supabase) {
      const { error } = await supabase.from('gallery').delete().eq('id', id);
      if (error) {
        console.error("Failed to delete image", error);
        setGallery(backup);
      }
    }
  };
  
  const addEvent = async (event: EventItem) => {
    const backup = events;
    setEvents(prev => [event, ...prev]);
    if (supabase) {
      const { id, ...rest } = event;
      const { data, error } = await supabase.from('events').insert([rest]).select();
      if (!error && data) {
        setEvents(prev => prev.map(evt => evt.id === event.id ? data[0] : evt));
      } else {
        console.error("Failed to add event", error);
        setEvents(backup);
      }
    }
  };

  const removeEvent = async (id: string) => {
    const backup = events;
    setEvents(prev => prev.filter(evt => evt.id !== id));
    if (supabase) {
      const { error } = await supabase.from('events').delete().eq('id', id);
      if (error) {
        console.error("Failed to delete event", error);
        setEvents(backup);
      }
    }
  };

  const addNewsArticle = async (article: NewsArticle) => {
    const backup = news;
    setNews(prev => [article, ...prev]);
    if (supabase) {
      const { id, ...rest } = article;
      const { data, error } = await supabase.from('news').insert([rest]).select();
      if (!error && data) {
        setNews(prev => prev.map(item => item.id === article.id ? data[0] : item));
      } else {
        console.error("Failed to add news article", error);
        setNews(backup);
      }
    }
  };

  const removeNewsArticle = async (id: string) => {
    const backup = news;
    setNews(prev => prev.filter(article => article.id !== id));
    if (supabase) {
      const { error } = await supabase.from('news').delete().eq('id', id);
      if (error) {
        console.error("Failed to delete news article", error);
        setNews(backup);
      }
    }
  };

  return (
    <DataContext.Provider value={{ gallery, events, news, addGalleryImage, removeGalleryImage, addEvent, removeEvent, addNewsArticle, removeNewsArticle, isLoading }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
