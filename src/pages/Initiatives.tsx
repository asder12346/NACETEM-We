import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const initiatives = [
  {
    title: "Public Service Rules Exam Prep Tool",
    desc: "AI-supported exam preparation platform designed to help public servants prepare effectively for promotion examinations.",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "NACETEM AI-Ecosystem powered by Daimlas",
    desc: "A collaborative platform connecting AI stakeholders, research opportunities, innovation projects, and implementation support.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "NACETEM Digital Academy",
    desc: "Professional and academic learning programmes focused on digital skills, innovation, technology management, and institutional transformation.",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "NACETEM Welding Initiative",
    desc: "A technical capacity-building initiative supporting welding excellence, certification readiness, and industrial skills development.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Systems Dynamics and Systems Thinking",
    desc: "A strategic programme for understanding complex systems, improving policy analysis, and strengthening evidence-based decision-making.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "STI Dashboard / STI Intelligence Platform",
    desc: "A data-driven platform for communicating science, technology, and innovation outputs for national planning and policy coordination.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Initiatives() {
  return (
    <div className="flex-1 bg-slate-50 pb-20">
      {/* Header Banner */}
      <div className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-900 text-xs font-bold uppercase tracking-widest mb-6 transition-colors">
            <ArrowLeft className="h-3 w-3 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight">Featured Initiatives</h1>
          <p className="mt-4 text-slate-600 max-w-2xl leading-relaxed text-sm">
             Explore NACETEM's key platforms and programmes supporting policy research, digital transformation, professional skills development, innovation systems, and evidence-based national planning.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {initiatives.map((init, idx) => (
             <div key={idx} className="bg-white border border-slate-200 flex flex-col md:flex-row overflow-hidden group">
               <div className="md:w-1/3 h-64 md:h-auto border-b md:border-b-0 md:border-r border-slate-100 relative">
                  <img src={init.img} alt={init.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
               </div>
               <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
                  <div className="w-12 h-1 bg-gold mb-6"></div>
                  <h2 className="text-2xl font-serif text-slate-900 mb-4">{init.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{init.desc}</p>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
