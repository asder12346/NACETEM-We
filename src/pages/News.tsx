import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, ChevronRight, ChevronLeft, BookOpen, Users, Activity, Monitor, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { assets } from '../assets';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const newsArticles = [
  {
    title: "NACETEM South-South Office Strengthens Collaboration with Bayelsa State on STI Development",
    category: "Government Collaboration",
    date: "October 15, 2026",
    content: "NACETEM South-South Zonal Office recently engaged the Bayelsa State Ministry of Communications, Science and Technology in strategic discussions aimed at strengthening Science, Technology, and Innovation (STI) development within the state. The engagement focused on STI policy implementation, technical skills mapping, innovation ecosystem development, digital transformation strategies, and capacity building for public institutions. The collaboration is expected to support evidence-based governance and innovation-driven development across Bayelsa State.",
    img: assets.bayelsaNewsImage
  },
  {
    title: "NACETEM DG/CEO Speaks on Artificial Intelligence and Nigeria’s Future on NTA International",
    category: "Artificial Intelligence",
    date: "October 10, 2026",
    content: "The Director-General/CEO of NACETEM, Dr. Olushola Odusanya, featured on NTA International’s “Issues of the Moment” programme to discuss the future of Artificial Intelligence in Nigeria. The discussion explored AI opportunities in governance, emerging risks and ethical concerns, AI-driven public sector transformation, national readiness for AI adoption, and innovation and digital competitiveness. The interview reinforces NACETEM’s commitment to advancing responsible and strategic AI adoption in Nigeria.",
    img: assets.ntaImage
  },
  {
    title: "NACETEM Advances STI Education Through Strategic Academic Partnerships",
    category: "Education & Capacity Development",
    date: "October 5, 2026",
    content: "NACETEM signed a collaborative Memorandum of Understanding with the Federal University of Technology Minna and Neuro-Linguistic Programming Ltd. to strengthen STI education and professional capacity development in Nigeria. The partnership aims to enhance postgraduate STI programmes, promote innovation-driven education, expand technology management training, improve industry-academia collaboration, and support national innovation capacity. This initiative represents another milestone in strengthening Nigeria’s knowledge economy.",
    img: assets.news1Image
  },
  {
    title: "NACETEM Expands Digital Capacity Development Programmes",
    category: "Capacity Building",
    date: "September 28, 2026",
    content: "NACETEM continues to expand its professional training programmes through specialized courses in Technology Management, Digital Marketing and Strategy, Nanoscience and Nanotechnology, Innovation Management, and STI Policy Studies. These programmes are designed to equip professionals, researchers, and public servants with future-ready digital and innovation skills required in today’s rapidly evolving economy.",
    img: assets.capacityImage
  },
  {
    title: "Strengthening Nigeria’s STI Intelligence Through Data and Research",
    category: "Research & Policy",
    date: "September 20, 2026",
    content: "NACETEM continues to strengthen Nigeria’s Science, Technology, and Innovation intelligence systems through the development of STI indicators, innovation surveys, and research analytics platforms. The Centre’s STI Dashboard initiative supports evidence-based national planning, research data management, innovation ecosystem monitoring, policy evaluation, and national competitiveness analysis. The platform contributes significantly to strategic decision-making and policy coordination in Nigeria.",
    img: assets.dashboardImage
  },
  {
    title: "NACETEM Launches New Innovation Hub in Abuja",
    category: "Infrastructure",
    date: "September 10, 2026",
    content: "The National Centre for Technology Management has officially opened its new Innovation Hub in Abuja, providing state-of-the-art facilities for researchers, tech entrepreneurs, and policymakers to collaborate on emerging technologies.",
    img: assets.headquartersImage
  },
  {
    title: "National Conference on Science and Technology Policy Concludes",
    category: "Conferences",
    date: "August 25, 2026",
    content: "The annual National Conference on Science and Technology Policy, hosted by NACETEM, concluded today with far-reaching recommendations for enhancing indigenous technology development and digital inclusion across Nigeria.",
    img: assets.policyImage
  },
  {
    title: "NACETEM Partners with International Tech Firms to Boost Local Capacity",
    category: "Partnerships",
    date: "August 12, 2026",
    content: "In a bid to enhance local technological capacity, NACETEM has formalized partnerships with several leading international tech firms. The agreements will provide advanced training programs for Nigerian youth in software engineering and data science.",
    img: assets.aiEcosystemImage
  }
];

const extraHeadlines = [
  "NACETEM Promotes Innovation Systems for Sustainable National Development",
  "NACETEM Strengthens Research Commercialization and Technology Transfer Initiatives",
  "NACETEM Expands Professional Training Opportunities Across Nigeria",
  "Advancing Digital Governance Through Science, Technology and Innovation",
  "NACETEM Supports Evidence-Based Policymaking Through Strategic Research",
  "Building Nigeria’s Innovation Ecosystem Through Partnerships and Collaboration",
  "NACETEM Encourages Emerging Technology Adoption in Public Institutions",
  "Enhancing National Development Through STI Intelligence and Analytics"
];

const researchHighlights = [
  "Innovation Indicators and National Competitiveness",
  "Technology Capability Assessment in Nigeria",
  "Research Commercialization and Knowledge Transfer",
  "AI and Emerging Technology Policy Research",
  "National Innovation Ecosystem Development",
  "Digital Economy and Public Sector Transformation"
];

export default function News() {
  const { events } = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const totalPages = Math.ceil(newsArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = newsArticles.slice(startIndex, startIndex + articlesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 border-b-8 border-gold">
        <div className="absolute inset-0">
          <img 
            src={assets.bayelsaNewsImage} 
            alt="News and Events" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto">
            <div className="inline-flex items-center text-gold text-xs font-bold uppercase tracking-widest mb-6 border-b border-gold pb-1 px-1">
              Latest News & Updates
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              Institutional Updates
            </h1>
            <p className="text-lg text-slate-100/90 mb-10 leading-relaxed text-left mx-auto max-w-2xl text-center">
              Stay informed with the latest activities, strategic engagements, research breakthroughs, training programmes, innovation initiatives, and institutional developments from NACETEM.
              <br /><br />
              Explore how NACETEM continues to drive Science, Technology, and Innovation for sustainable national development through partnerships, digital transformation, policy research, and capacity development initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. News Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div>
               <h2 className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Newsroom</h2>
               <h3 className="text-3xl sm:text-4xl font-serif text-slate-900">Featured Stories</h3>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {currentArticles.map((article, idx) => (
                <motion.div 
                  key={article.title} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group cursor-pointer border border-slate-200 rounded-[11px] overflow-hidden bg-slate-50 hover:border-emerald-500 transition-colors flex flex-col h-full"
                >
                  <div className="h-48 sm:h-56 overflow-hidden relative shrink-0">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                    <div className="absolute top-4 left-4 bg-gold text-slate-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 pb-1">{article.category}</div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs text-slate-500 mb-3 font-bold tracking-widest uppercase">{article.date}</div>
                    <h4 className="text-xl font-serif text-slate-900 mb-3 leading-snug group-hover:text-emerald-700 transition-colors">{article.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">{article.content}</p>
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-emerald-700 mt-auto">
                      Read Story <ArrowRight className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center space-x-2">
              <button 
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-[6px] border ${currentPage === 1 ? 'border-slate-200 text-slate-300 cursor-not-allowed' : 'border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-emerald-500'} transition-colors`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 rounded-[6px] border text-sm font-bold transition-all duration-200 ${
                    currentPage === i + 1 
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-md' 
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-emerald-500'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button 
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-[6px] border ${currentPage === totalPages ? 'border-slate-200 text-slate-300 cursor-not-allowed' : 'border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-emerald-500'} transition-colors`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Upcoming Events */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Programmes & Conferences</h2>
             <h3 className="text-3xl sm:text-4xl font-serif text-slate-900">Upcoming Events</h3>
             <p className="mt-4 text-slate-600">Join our workshops, stakeholders engagements, and conferences.</p>
           </div>
           
           {events.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {events.map((event) => (
                 <motion.div key={event.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white border border-slate-200 rounded-[11px] p-8 hover:border-emerald-500 transition-colors group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-600 transform scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-in-out"></div>
                    <div className="flex items-center gap-3 mb-6 bg-slate-50 px-3 py-2 border border-slate-100 rounded-[6px] self-start inline-flex">
                      <Calendar className="h-5 w-5 text-emerald-600 shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-900">{event.date}</span>
                    </div>
                    <h4 className="text-xl font-serif text-slate-900 mb-4 pr-4 leading-tight">{event.title}</h4>
                    <div className="flex items-center text-sm font-bold text-slate-500 mb-6">
                      <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                      {event.location}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">{event.description}</p>
                    <Link to="#" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-emerald-700 underline underline-offset-4 decoration-emerald-200 hover:decoration-emerald-700 transition-colors">
                      View Details <ArrowUpRight className="h-3 w-3 ml-1" />
                    </Link>
                 </motion.div>
               ))}
             </div>
           ) : (
             <div className="text-center py-16 bg-white border border-slate-200 rounded-[11px]">
               <Calendar className="h-12 w-12 text-slate-300 mx-auto mb-4" />
               <h4 className="text-lg font-serif text-slate-900 mb-2">No Upcoming Events</h4>
               <p className="text-sm text-slate-500">Check back later or view our past programmes.</p>
             </div>
           )}
        </div>
      </section>

      {/* 4. Extra News Headlines & Research Highlights */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Extra Headlines */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-slate-800 border border-slate-700 rounded-[11px] p-8 sm:p-10">
                <h3 className="text-2xl font-serif text-gold mb-8 flex items-center">
                  <Activity className="h-6 w-6 mr-3 text-emerald-400" />
                  More News Highlights
                </h3>
                <div className="space-y-6">
                   {extraHeadlines.map((headline, idx) => (
                     <div key={idx} className="flex border-b border-slate-700 pb-6 last:border-0 last:pb-0 group cursor-pointer">
                        <div className="w-2 h-2 rounded-full bg-slate-600 mt-2 mr-4 shrink-0 group-hover:bg-emerald-400 transition-colors"></div>
                        <p className="text-[15px] leading-relaxed text-slate-100/90 group-hover:text-white transition-colors">{headline}</p>
                     </div>
                   ))}
                </div>
              </motion.div>

              {/* Research Highlights */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-slate-800 border border-slate-700 rounded-[11px] p-8 sm:p-10">
                <h3 className="text-2xl font-serif text-gold mb-8 flex items-center">
                  <BookOpen className="h-6 w-6 mr-3 text-emerald-400" />
                  Research Highlights
                </h3>
                <div className="grid grid-cols-1 gap-4">
                   {researchHighlights.map((highlight, idx) => (
                     <div key={idx} className="bg-slate-900 border border-slate-700 p-5 rounded-[6px] hover:border-emerald-500 transition-colors inline-flex items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-4 shrink-0">
                           <ChevronRight className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span className="text-sm font-bold text-slate-200 leading-snug">{highlight}</span>
                     </div>
                   ))}
                </div>
              </motion.div>

           </div>
        </div>
      </section>

      {/* 5. Newsletter CTA Section */}
      <section className="py-24 bg-emerald-900 border-t-8 border-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-white mb-6">Subscribe to NACETEM Newsletter</h2>
          <p className="text-emerald-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Stay updated with our latest research, training opportunities, innovation programmes, policy publications, upcoming events, and national STI developments.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 mb-8" onSubmit={(e) => e.preventDefault()}>
             <input 
               type="email" 
               placeholder="Enter your email address" 
               className="flex-1 px-4 py-4 rounded-[6px] bg-white text-slate-900 outline-none focus:ring-2 focus:ring-gold"
               required
             />
             <button type="submit" className="px-8 py-4 bg-gold text-slate-900 font-bold uppercase tracking-widest text-sm rounded-[6px] hover:bg-white transition-colors whitespace-nowrap">
               Subscribe Now
             </button>
          </form>
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">Join our growing community of professionals and innovators.</p>
        </div>
      </section>
      
    </div>
  );
}
