import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import Breadcrumbs from '../Components/Breadcrumbs';
import { serviceDivisions, mainIntro } from '../data/servicesData';

// The 6 services that receive strongest visual emphasis
const highlightedSlugs = [
  "residential-vastu",
  "industrial-vastu",
  "earth-energy-survey",
  "architectural-planning",
  "non-demolition-vastu",
  "temple-architecture"
];

// Curated professional images for all 20 services
const serviceImages = {
  "residential-vastu": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
  "commercial-vastu": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
  "industrial-vastu": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
  "hospitality-vastu": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
  "temple-architecture": "https://images.unsplash.com/photo-1571536802807-3cab12cc8aeb?q=80&w=2070",
  "property-assessment": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
  "architectural-planning": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071",
  "interior-planning": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070",
  "2d-3d-design": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
  "earth-energy-survey": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041",
  "geopathic-stress": "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?q=80&w=2070",
  "land-healing": "https://images.unsplash.com/photo-1505765050516-f720257cd449?q=80&w=2070",
  "building-biology-assessment": "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069",
  "emf-audit": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070",
  "non-demolition-vastu": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070",
  "sacred-geometry": "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2070",
  "astro-vastu": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094",
  "online-consultation": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070",
  "on-site-survey": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070",
  "implementation-support": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
};

const ServiceImageCard = ({ service, index }) => {
  const isHighlighted = highlightedSlugs.includes(service.id);
  const bgImage = serviceImages[service.id] || serviceImages["property-assessment"];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.8 }}
      className={`group relative overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl sm:rounded-[2rem] border ${isHighlighted ? 'border-[#C9A14A]/40 shadow-[0_0_30px_rgba(201,161,74,0.15)]' : 'border-white/10'} bg-[#111111] shadow-2xl flex flex-col`}
    >
      <Link to={`/services/${service.id}`} className="absolute inset-0 z-20" />
      
      {/* Background Image - Now fully colorful */}
      <img 
        src={bgImage} 
        alt={service.title} 
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
      />
      
      {/* Optimized Gradient Overlay for vibrant images but readable text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none" />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 lg:p-10 pointer-events-none">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          {/* Highlight Badge */}
          <span className={`font-['Cinzel'] text-[10px] sm:text-xs tracking-widest font-bold uppercase block mb-3 sm:mb-4 ${isHighlighted ? 'text-[#C9A14A]' : 'text-zinc-300 group-hover:text-white transition-colors duration-300'}`}>
             {isHighlighted ? '// Featured Service' : '// Professional Service'}
          </span>
          
          <h3 className={`font-['Cormorant_Garamond'] ${isHighlighted ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'} text-white font-light leading-tight mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}>
            {service.title}
          </h3>

          <div className="flex items-center gap-3 text-white text-[10px] sm:text-[11px] tracking-[0.3em] font-bold uppercase group/link mt-4 sm:mt-6">
            Explore
            <div className="w-8 h-[1px] bg-[#C9A14A] group-hover:w-12 transition-all duration-300" />
            <MoveRight size={14} className="text-[#C9A14A]" />
          </div>
        </div>
      </div>

      {isHighlighted && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A14A]/30 blur-[60px] rounded-full z-10 pointer-events-none mix-blend-screen" />
      )}
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <Breadcrumbs 
        title="Our Services" 
        subtitle="Vrihad Vastu offers a structured and property-specific harmonisation strategy combining classical principles with practical rectification."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
      />

      {/* Intro Section - Currently Commented Out By User
      <section className="py-24 px-6 sm:px-12 lg:px-16 relative overflow-hidden bg-white">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <span className="font-['Cinzel'] text-xs tracking-[0.5em] text-[#C9A14A] font-bold uppercase block mb-6">
            Integrations
          </span>
          <p className="text-zinc-600 font-light text-lg sm:text-xl leading-relaxed whitespace-pre-line text-left md:text-center">
            {mainIntro.replace('OUR SERVICES\nIntegrations\n', '')}
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#C9A14A]/5 blur-[120px] rounded-full pointer-events-none" />
      </section> 
      */}

      {/* Services Divisions */}
      <section className="py-24 px-6 sm:px-12 lg:px-16 relative">
        <div className="max-w-[1300px] mx-auto flex flex-col gap-32">
          {serviceDivisions.map((division, dIdx) => (
            <div key={division.id} className="relative">
              
              {/* Division Header */}
              <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8 border-b border-[#C9A14A]/20 pb-8">
                <div className="max-w-2xl">
                  <span className="font-['Cinzel'] text-[10px] tracking-[0.5em] text-[#C9A14A] font-bold uppercase block mb-4">
                    Service Division {String(dIdx + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl font-light text-[#111111] leading-none mb-4">
                    {division.title}
                  </h2>
                  <p className="text-zinc-500 font-light text-lg">
                    {division.description}
                  </p>
                </div>
              </div>

              {/* Division Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
                {division.services.map((service, index) => (
                  <ServiceImageCard key={service.id} service={service} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="pb-24 px-6 sm:px-12 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111111] rounded-[2.5rem] p-12 sm:p-20 relative overflow-hidden flex flex-col items-center text-center group shadow-3xl mx-auto max-w-[1440px]"
        >
          <div className="absolute inset-0 bg-[#C9A14A]/[0.03] transition-colors duration-500 group-hover:bg-[#C9A14A]/[0.05]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#C9A14A]/5 blur-[120px] rounded-full" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="font-['Cinzel'] text-[10px] tracking-[0.4em] text-[#C9A14A] font-bold uppercase block mb-6">
              Not Sure Which Service Your Property Requires?
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-light text-white mb-8 tracking-tight">
              Every <span className="italic text-[#C9A14A]">property</span> is different.
            </h2>
            <p className="text-zinc-400 font-light text-base sm:text-lg mb-12 leading-relaxed">
              Share your floor plan, property type, city and primary concern with our consultation team. We will help you identify the appropriate assessment service.
            </p>
            <Link to="/contact">
              <button className="px-12 py-5 bg-[#C9A14A] hover:bg-white text-[#111111] font-['Cinzel'] text-xs font-bold tracking-[0.3em] uppercase transition-all duration-500 shadow-xl">
                Speak with a Consultant
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <footer className="py-12 border-t border-[#C9A14A]/10 text-center">
        <p className="font-['Cinzel'] text-[9px] tracking-[0.5em] text-zinc-400 font-bold uppercase">
          © 2026 Vrihad Vastu // Transforming Spaces • Harmonising Energies • Supporting Growth
        </p>
      </footer>
    </div>
  );
};

export default ServicesPage;