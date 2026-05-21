import { Link } from 'react-router-dom';
import { ArrowRight, Search, Landmark, GraduationCap, Layers, MapPin, Calendar as CalendarIcon, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useData } from '../contexts/DataContext';

export default function Home() {
  const { gallery, events } = useData();

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-slate-50 border-b border-slate-200 text-slate-900 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center text-gold font-serif italic text-xl mb-6">
                Welcome To
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif tracking-tight mb-6 leading-none">
                National Centre for Technology Management
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
                Driving Science, Technology, and Innovation for national development through policy research and strategic capacity building.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/about" className="inline-flex justify-center items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors">
                  Explore Initiatives
                </Link>
                <Link to="/contact" className="inline-flex justify-center items-center px-6 py-3 bg-transparent border border-slate-300 hover:border-slate-400 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-sm transition-colors">
                  Contact Us
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-12 lg:mt-0"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-slate-200 shadow-xl relative z-10">
                <img 
                  src="https://loquacious-dasik-76440e.netlify.app/HQ-enhanced-1.png" 
                  alt="NACETEM Building" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 border border-black/5 rounded-sm pointer-events-none"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-slate-100 border border-slate-200 z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-50 border border-emerald-100 z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="bg-white border-b border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto border-x border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          <div className="flex flex-col p-6">
            <div className="text-2xl mb-4">🔬</div>
            <h3 className="font-serif text-lg text-slate-900 mb-2">Policy Research</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Supporting evidence-based STI policy and national planning.</p>
          </div>
          <div className="flex flex-col p-6">
            <div className="text-2xl mb-4">🏛️</div>
            <h3 className="font-serif text-lg text-slate-900 mb-2">Federal Ministry</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Under the Federal Ministry of Innovation, Science and Technology.</p>
          </div>
          <div className="flex flex-col p-6">
            <div className="text-2xl mb-4">🎓</div>
            <h3 className="font-serif text-lg text-slate-900 mb-2">Capacity Dev.</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Training public and private sector stakeholders for institutional growth.</p>
          </div>
          <div className="flex flex-col p-6">
            <div className="text-2xl mb-4">Layers</div>
            <h3 className="font-serif text-lg text-slate-900 mb-2">Innovation Ecosystem</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Strengthening partnerships, platforms, and innovation.</p>
          </div>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col mb-16 max-w-3xl">
            <h2 className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Featured Initiatives</h2>
            <h3 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-4 leading-tight">Flagship Programmes Driving Innovation and Capacity Development</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Explore NACETEM's key platforms and programmes supporting policy research, digital transformation, professional skills development, innovation systems, and evidence-based national planning.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Public Service Rules Exam Prep Tool",
                desc: "AI-supported exam preparation platform designed to help public servants prepare effectively for promotion examinations.",
                link: "/initiatives",
                img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "NACETEM AI-Ecosystem powered by Daimlas",
                desc: "A collaborative platform connecting AI stakeholders, research opportunities, innovation projects, and implementation support.",
                link: "/initiatives",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "NACETEM Digital Academy",
                desc: "Professional and academic learning programmes focused on digital skills, innovation, technology management, and institutional transformation.",
                link: "/initiatives",
                img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "NACETEM Welding Initiative",
                desc: "A technical capacity-building initiative supporting welding excellence, certification readiness, and industrial skills development.",
                link: "/initiatives",
                img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Systems Dynamics and Systems Thinking",
                desc: "A strategic programme for understanding complex systems, improving policy analysis, and strengthening evidence-based decision-making.",
                link: "/initiatives",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "STI Dashboard / STI Intelligence Platform",
                desc: "A data-driven platform for communicating science, technology, and innovation outputs for national planning and policy coordination.",
                link: "/initiatives",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              }
            ].map((initiative, idx) => (
              <div key={idx} className="bg-white border-[2.11px] border-slate-200 rounded-[11px] group flex flex-col p-4">
                <div className="h-48 overflow-hidden mb-4 border border-slate-100 rounded-[11px]">
                  <img src={initiative.img} alt={initiative.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" />
                </div>
                <div className="flex-1 flex flex-col pt-2">
                  <h4 className="text-lg font-serif text-slate-900 mb-2">{initiative.title}</h4>
                  <p className="text-slate-500 mb-4 flex-1 text-xs leading-relaxed">{initiative.desc}</p>
                  <Link to={initiative.link} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-emerald-700 transition-colors border-b border-transparent hover:border-emerald-700 pb-1 self-start">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mandate & Mission */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden text-center lg:text-left">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
          <div className="w-[800px] h-[800px] border-[40px] border-emerald-500 rounded-full"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 opacity-10 pointer-events-none">
          <div className="w-[600px] h-[600px] bg-emerald-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Mandate Header & List */}
            <div>
              <div className="inline-flex items-center text-gold text-xs font-bold uppercase tracking-widest mb-6 border-b border-gold pb-1 px-1 mx-auto lg:mx-0">
                Our Mandate
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif text-white mb-6 leading-tight">
                Strategic National Responsibilities
              </h2>
              <p className="text-slate-400 text-sm mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
                NACETEM delivers institutional capacity, policy intelligence, and advanced STI management support to strengthen national development outcomes.
              </p>
              
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 group">
                  <div className="w-16 h-16 shrink-0 rounded-sm bg-slate-800 border border-slate-700 flex flex-col justify-center items-center text-emerald-400 group-hover:bg-emerald-900 group-hover:border-emerald-700 transition-colors">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors">Policy Research</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      To conduct policy research, evaluation and review with a view to providing sound policy advice for dynamic technology-driven, knowledge-based development.
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent sm:hidden"></div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 group">
                  <div className="w-16 h-16 shrink-0 rounded-sm bg-slate-800 border border-slate-700 flex flex-col justify-center items-center text-emerald-400 group-hover:bg-emerald-900 group-hover:border-emerald-700 transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors">Capacity Building</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      To design and run postgraduate courses/programmes in STI management in conjunction with appropriate established institutions at home and abroad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mission and Vision Cards */}
            <div className="flex flex-col gap-8 relative pb-8 pt-8">
              {/* Decorative connecting line hidden on small screens */}
              <div className="hidden lg:block absolute left-[-48px] top-4 bottom-4 w-px bg-slate-800"></div>

              <div className="bg-emerald-900/40 backdrop-blur-md border border-emerald-800/50 p-10 sm:p-14 relative group overflow-hidden transition-all hover:bg-emerald-900/60 lg:mr-8 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
                <h3 className="text-3xl font-serif mb-4 text-gold flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <span className="w-8 h-px bg-gold hidden sm:block"></span>
                  Our Mission
                </h3>
                <p className="text-emerald-100/90 text-sm leading-relaxed text-center lg:text-left relative z-10">
                  To play a leading role in the build-up of expertise for effective management of science, technology and innovation and to actively engage in policy research, design, evaluation and review.
                </p>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-10 sm:p-14 relative group overflow-hidden transition-all hover:bg-slate-800/60 lg:ml-12 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-600/10 blur-2xl group-hover:bg-slate-500/20 transition-all"></div>
                <h3 className="text-3xl font-serif mb-4 text-white flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <span className="w-8 h-px bg-white hidden sm:block"></span>
                  Our Vision
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed text-center lg:text-left relative z-10">
                  To be an internationally recognised centre of excellence in science, technology and innovation management for sustainable development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white overflow-hidden text-center lg:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col mb-20 max-w-3xl mx-auto lg:mx-0"
          >
             <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 mb-6 leading-tight">Programmes and Interventions</h2>
             <p className="text-sm text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">Focused on capacity, research, and collaborative innovation systems.</p>
          </motion.div>

          <div className="space-y-24">
            {[
              {
                title: "Policy Research & Advisory",
                desc: "NACETEM's policy research projects are designed to assist policymakers in improving the management of science, technology, and innovation. We provide research-driven insights, data-backed guidance, and cutting-edge policy options.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                link: "/about"
              },
              {
                title: "Capacity Building",
                desc: "NACETEM's capacity building programmes are designed to address knowledge gaps within the national innovation system. We deploy targeted training initiatives, practical workshops, and a continuous learning focus.",
                img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
                link: "/capacity-building"
              },
              {
                title: "Innovation Systems",
                desc: "NACETEM's innovation systems and partnership initiatives strengthen collaboration among STI stakeholders. Our programmes aim for improved coordination, accelerated technology infusion, and strengthened ecosystems.",
                img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
                link: "/research"
              }
            ].map((program, idx) => {
              const isEven = idx % 2 !== 0;
              return (
                <div key={idx} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden border border-slate-200">
                      <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                      <img src={program.img} alt={program.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out" />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="w-full lg:w-1/2 flex flex-col justify-center"
                  >
                    <div className="w-12 h-1 bg-gold mb-6 mx-auto lg:mx-0"></div>
                    <h3 className="text-3xl font-serif text-slate-900 mb-6">{program.title}</h3>
                    <p className="text-slate-600 text-sm mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">{program.desc}</p>
                    <div className="mx-auto lg:mx-0">
                      <Link to={program.link} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-emerald-700 border-b border-slate-300 hover:border-emerald-700 pb-1 transition-colors group">
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col mb-12 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-4">Gallery & Media</h2>
            <p className="text-sm text-slate-600">Visual highlights from our events, workshops, and institutional milestones.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.slice(0, 3).map((img) => (
              <div key={img.id} className="bg-slate-50 border border-slate-200 group flex flex-col p-4">
                <div className="h-64 overflow-hidden mb-4 border border-slate-100 relative">
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" />
                  <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors duration-500"></div>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-lg font-serif text-slate-900">{img.title}</h4>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center pt-8 border-t border-slate-200">
            <Link to="/gallery" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-emerald-700 border-b border-transparent hover:border-emerald-700 pb-1">
              View Complete Gallery <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-4">Upcoming Events</h2>
              <p className="text-sm text-slate-600">Join our workshops, conferences, and capacity-building sessions focusing on science, technology, and innovation management.</p>
            </div>
            <Link to="/events" className="hidden md:inline-flex items-center text-xs font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-700 border-b border-transparent hover:border-emerald-700 pb-1">
              View All Events <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.slice(0, 2).map((event) => (
              <div key={event.id} className="bg-white border border-slate-200 p-8 hover:border-emerald-600 transition-all group flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center justify-center bg-slate-50 border border-slate-100 p-4 shrink-0 min-w-24">
                  <CalendarIcon className="h-6 w-6 text-emerald-600 mb-2" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gold text-center">{event.date.split(' ')[0]}</span>
                  <span className="text-2xl font-serif text-slate-900 leading-none mt-1">{event.date.split(' ')[1]?.replace(',', '') || ''}</span>
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <h3 className="text-xl font-serif text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{event.title}</h3>
                  <div className="flex items-center text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-3 gap-2 flex-wrap">
                    <span className="flex items-center bg-slate-100 px-2 py-1"><MapPin className="h-3 w-3 mr-1" /> {event.location}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{event.description}</p>
                  <Link to="/events" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-900 hover:text-emerald-700 mt-auto border-b border-transparent hover:border-emerald-700 pb-1 self-start">
                    Event Details <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/events" className="inline-flex items-center justify-center px-6 py-3 border border-emerald-600 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-emerald-50 transition-colors w-full">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-4">News & Updates</h2>
              <p className="text-sm text-slate-600">Stay Updated with NACETEM Activities and Programmes. Explore our latest news, upcoming events, and key activities across NACETEM's programmes, collaborations, and national engagements.</p>
            </div>
            <Link to="/news" className="hidden md:inline-flex items-center text-xs font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-700 border-b border-transparent hover:border-emerald-700 pb-1">
              View All News <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 lg:row-span-2 group cursor-pointer flex flex-col bg-white border border-slate-200 p-4 relative overflow-hidden">
              <div className="relative h-64 lg:h-80 mb-6 border border-slate-100 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" alt="Meeting" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest">Bayelsa State</div>
              </div>
              <p className="text-xs text-gold mb-3 font-bold uppercase tracking-widest">May 1, 2026</p>
              <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors leading-tight">NACETEM South-South Office Strengthens Collaboration with Bayelsa State Ministry on STI Development</h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed flex-1">NACETEM South-South Office visited the Bayelsa State Ministry of Communications, Science and Technology to explore strategic collaborations in STI policy, technical skills mapping, and innovation-driven public service reforms.</p>
              <span className="text-slate-900 font-bold uppercase tracking-widest text-xs inline-flex items-center mt-auto border-b border-transparent group-hover:border-slate-900 pb-1 self-start">Learn More <ArrowRight className="ml-1 h-3 w-3" /></span>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group cursor-pointer bg-white border border-slate-200 p-6 flex flex-col h-full relative overflow-hidden">
                <div className="relative h-48 mb-6 border border-slate-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" alt="News" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" />
                  <div className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest">News</div>
                </div>
                <p className="text-xs text-gold mb-3 font-bold uppercase tracking-widest">March 11, 2025</p>
                <h4 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors leading-tight">NTA International Interviews NACETEM DG/CEO</h4>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed flex-1 line-clamp-4">Journalist Justin Rem Unyi interviewed the Director-General and Chief Executive Officer, Dr. Olushola Odusanya, on the NTA International programme Issues of the Moment. Dr. Odusanya discussed artificial intelligence adoption in Nigeria's public sector, including opportunities, risks, challenges, and future outlook.</p>
                <span className="text-slate-900 font-bold uppercase tracking-widest text-xs inline-flex items-center mt-auto border-b border-transparent group-hover:border-slate-900 pb-1 self-start">Learn More <ArrowRight className="ml-1 h-3 w-3" /></span>
              </div>
              
              <div className="group cursor-pointer bg-white border border-slate-200 p-6 flex flex-col h-full relative overflow-hidden">
                <div className="relative h-48 mb-6 border border-slate-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80" alt="News" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" />
                  <div className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest">News</div>
                </div>
                <p className="text-xs text-gold mb-3 font-bold uppercase tracking-widest">March 8, 2025</p>
                <h4 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors leading-tight">Shaping the Nigerian STI Education Landscape</h4>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed flex-1 line-clamp-4">NACETEM signed a collaborative Memorandum of Understanding with the Federal University of Technology, Minna and Neuro-Linguistic Programming Ltd. to support STI education and innovation development.</p>
                <span className="text-slate-900 font-bold uppercase tracking-widest text-xs inline-flex items-center mt-auto border-b border-transparent group-hover:border-slate-900 pb-1 self-start">Learn More <ArrowRight className="ml-1 h-3 w-3" /></span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/news" className="inline-flex items-center justify-center px-6 py-3 border border-emerald-600 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-emerald-50 transition-colors w-full">
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-24 bg-white border-t border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
             <div className="inline-flex items-center text-gold text-xs font-bold uppercase tracking-widest mb-4 border-b border-gold pb-1 px-1">
               Our Partners
             </div>
             <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-4">Trusted Collaborators and Strategic Partners</h2>
             <p className="text-sm text-slate-600">We collaborate with leading institutions, organizations, and partners to advance science, technology, and innovation in Nigeria.</p>
          </div>

          <div className="relative w-full overflow-hidden flex whitespace-nowrap bg-slate-50 border-y border-slate-200 py-12 px-6">
            <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
               animate={{ x: ["0%", "-50%"] }}
               transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
               className="flex items-center space-x-12 sm:space-x-24 shrink-0"
            >
              {[
                "Partner logo 1",
                "Partner logo 2",
                "Partner logo 3",
                "Partner logo 4",
                "Partner logo 5",
                "Partner logo 6",
                "Partner logo 1 duplicate",
                "Partner logo 2 duplicate",
                "Partner logo 3 duplicate",
                "Partner logo 1",
                "Partner logo 2",
                "Partner logo 3",
                "Partner logo 4",
                "Partner logo 5",
                "Partner logo 6",
                "Partner logo 1 duplicate",
                "Partner logo 2 duplicate",
                "Partner logo 3 duplicate",
              ].map((logo, idx) => (
                <div key={idx} className="flex items-center justify-center h-20 w-48 border border-white bg-white shadow-sm text-slate-400 font-bold text-[10px] uppercase tracking-widest px-4 text-center shrink-0 grayscale hover:grayscale-0 hover:border-emerald-200 hover:text-emerald-700 transition-all duration-300">
                  {logo}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-emerald-900 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-serif mb-6 leading-tight">Ready to collaborate on Innovation?</h2>
          <p className="text-emerald-100 text-lg mb-10 leading-relaxed">
            Join NACETEM's programmes and initiatives to drive sustainable development and technological advancement in Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-slate-900 font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-emerald-900 transition-colors rounded-sm">
              Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-emerald-500 text-white font-bold text-sm tracking-widest uppercase hover:bg-emerald-800 transition-colors rounded-sm">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-slate-900 mb-4">Watch Our Impact</h2>
            <p className="text-slate-600">Discover how NACETEM is shaping the STI landscape across the nation.</p>
          </div>
          <div className="relative w-full aspect-video rounded-[11px] overflow-hidden shadow-2xl border-[2.11px] border-slate-200 bg-slate-900">
            <iframe 
              className="absolute top-0 left-0 w-full h-full" 
              src="https://www.youtube.com/embed/5Peo-ivmupE?si=z8Q4k7-B2qV_p3_-" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
