import { Camera, Image as ImageIcon, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { assets } from '../assets';
import { GalleryImage, useData } from '../contexts/DataContext';

const featuredImages: GalleryImage[] = [
  { id: 'featured-hq', url: assets.headquartersImage, title: 'NACETEM Headquarters' },
  { id: 'featured-capacity', url: assets.capacityImage, title: 'Capacity Development Programmes' },
  { id: 'featured-policy', url: assets.policyImage, title: 'STI Policy Engagement' },
];

function mergeGalleryImages(images: GalleryImage[]) {
  const seen = new Set<string>();
  return images.filter((image) => {
    if (seen.has(image.url)) return false;
    seen.add(image.url);
    return true;
  });
}

export default function Gallery() {
  const { gallery } = useData();
  const [query, setQuery] = useState('');
  const allImages = useMemo(() => mergeGalleryImages([...featuredImages, ...gallery]), [gallery]);
  const normalizedQuery = query.trim().toLowerCase();
  const filteredImages = normalizedQuery
    ? allImages.filter((image) => image.title.toLowerCase().includes(normalizedQuery))
    : allImages;
  const heroImage = allImages[0] || featuredImages[0];

  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-hidden">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-900 border-b-8 border-gold overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage.url}
            alt={heroImage.title}
            className="h-full w-full object-cover opacity-35 mix-blend-overlay"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center text-gold text-xs font-bold uppercase tracking-widest mb-6 border-b border-gold pb-1 px-1">
              Visual Archive
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight mb-8">
              Gallery
            </h1>
            <p className="text-lg sm:text-xl text-slate-100/90 leading-relaxed max-w-3xl">
              Highlights from NACETEM facilities, capacity development programmes, policy engagements, media appearances, and institutional milestones.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 md:items-center">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center rounded-[6px]">
                <Camera className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gold">Media Library</p>
                <h2 className="text-2xl font-serif text-slate-900">{allImages.length} gallery items</h2>
              </div>
            </div>
            <label className="relative block w-full md:w-80">
              <span className="sr-only">Search gallery</span>
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search gallery"
                className="w-full border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-sm outline-none focus:border-emerald-600 focus:bg-white rounded-[6px]"
              />
            </label>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredImages.map((image, index) => (
                <article
                  key={`${image.id}-${image.url}`}
                  className={`group bg-white border border-slate-200 rounded-[8px] overflow-hidden shadow-sm hover:shadow-lg hover:border-emerald-500/40 transition-all duration-300 ${
                    index === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className={`${index === 0 ? 'h-80 sm:h-96' : 'h-72'} overflow-hidden bg-slate-900`}>
                    <img
                      src={image.url}
                      alt={image.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading={index < 3 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="p-5 flex items-start gap-3">
                    <ImageIcon className="h-4 w-4 mt-1 text-gold shrink-0" />
                    <h3 className="font-serif text-lg text-slate-900 leading-snug">{image.title}</h3>
                  </div>
                </article>
              ))}
            </motion.div>
          ) : (
            <div className="bg-white border border-dashed border-slate-300 py-16 px-6 text-center rounded-[8px]">
              <ImageIcon className="h-10 w-10 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-slate-900 mb-2">No matching images</h3>
              <p className="text-sm text-slate-500">Try a different search term.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
