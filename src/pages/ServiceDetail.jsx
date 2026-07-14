import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '../Components/Breadcrumbs';
import { serviceDetails } from '../data/servicesData';

// Array of premium fallback images
const fallbackImages = [
  "https://images.unsplash.com/photo-1600607687920-4e2a12cf1a50?q=80&w=2070",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
];

const ServiceDetail = () => {
  const { id } = useParams();
  const data = serviceDetails[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) return <Navigate to="/services" />;

  // Predictable image selection based on string length to keep it consistent
  const heroImage = fallbackImages[id.length % fallbackImages.length];

  return (
    <div className="bg-[#FAF9F5] min-h-screen selection:bg-[#C9A14A]/20">
      <Breadcrumbs 
        title={data.title} 
        subtitle={data.heroTitle}
        image={heroImage}
      />

      <section className="py-24 px-6 sm:px-12 lg:px-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A14A]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="font-['Cinzel'] text-xs tracking-[0.4em] text-[#C9A14A] font-bold uppercase block mb-6">
                  {data.division}
                </span>
                <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-light leading-tight mb-8 text-[#111111]">
                  {data.heroTitle}
                </h2>
                <p className="text-zinc-600 text-lg sm:text-xl font-light leading-relaxed mb-16 italic border-l-2 border-[#C9A14A]/30 pl-8 whitespace-pre-line">
                  {data.heroSubtitle}
                </p>

                {data.sections.map((section, idx) => (
                  <div key={idx} className="mb-16 last:mb-0">
                    {section.title && (
                      <h3 className="font-['Cinzel'] text-sm tracking-[0.2em] font-bold text-[#111111] uppercase mb-8 border-b border-[#C9A14A]/10 pb-4">
                        {section.title}
                      </h3>
                    )}
                    
                    {section.desc && (
                      <p className="text-zinc-600 mb-8 font-light text-base leading-relaxed whitespace-pre-line">
                        {section.desc}
                      </p>
                    )}
                    
                    {section.processSteps ? (
                      <div className="space-y-6">
                        {section.items.map((item, i) => {
                          const [stepTitle, stepDesc] = item.split("—").map(s => s.trim());
                         
                          return (
                            <div key={i} className="flex gap-6 group">
                              <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full border border-[#C9A14A]/30 flex items-center justify-center text-[10px] font-bold text-[#C9A14A] group-hover:bg-[#C9A14A] group-hover:text-white transition-all duration-300">
                                   {i + 1}
                                </div>
                                {i < section.items.length - 1 && <div className="w-[1px] h-full bg-[#C9A14A]/10 mt-2" />}
                              </div>
                              <div className="pb-4 pt-1">
                                {stepDesc ? (
                                  <>
                                    <p className="text-sm font-['Cinzel'] font-bold tracking-widest text-[#111111] uppercase mb-2">{stepTitle}</p>
                                    <p className="text-sm text-zinc-500 font-light leading-relaxed">{stepDesc}</p>
                                  </>
                                ) : (
                                  <p className="text-sm text-zinc-600 font-light leading-relaxed">{item}</p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      section.items && section.items.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {section.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-[#C9A14A]/10 bg-[#FCFAF6]/50 hover:bg-[#FCFAF6] transition-colors duration-300">
                               <CheckCircle2 className="w-4 h-4 text-[#C9A14A] shrink-0 mt-0.5" />
                               <span className="text-zinc-600 font-light text-sm tracking-wide leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Sidebar / Action Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#111111] p-10 rounded-[2rem] text-white shadow-2xl relative overflow-hidden"
                >
                   <div className="absolute top-0 right-0 w-48 h-48 bg-[#C9A14A]/10 blur-3xl rounded-full" />
                   
                   <span className="font-['Cinzel'] text-[10px] tracking-[0.3em] font-bold text-[#C9A14A] uppercase mb-6 block">Take Action</span>
                   <h3 className="font-['Cormorant_Garamond'] text-3xl font-light mb-6 text-white leading-tight">
                     Transform your space with Vrihad Vastu.
                   </h3>
                   <p className="text-zinc-400 font-light text-sm mb-10 leading-relaxed">
                     Every property has unique architectural configurations and energy dynamics. Schedule a consultation to understand your context better.
                   </p>
                   
                   <Link to="/contact">
                     <button className="w-full py-4 bg-[#C9A14A] hover:bg-white text-[#111111] font-['Cinzel'] text-[11px] font-bold tracking-widest uppercase transition-all duration-300 shadow-xl">
                       {data.cta || "Request Consultation"}
                     </button>
                   </Link>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 px-6 sm:px-12 lg:px-16 bg-[#FAF9F5]">
        <div className="max-w-[1280px] mx-auto">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-[#111111] rounded-[3rem] p-12 sm:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#C9A14A]/5 opacity-50" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="font-['Cinzel'] text-[10px] tracking-[0.4em] text-[#C9A14A] font-bold uppercase block mb-4">
                Let's Discuss Your Project
              </span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-light text-white mb-6">
                Not sure which service you need?
              </h2>
              <p className="text-zinc-300 font-light mb-10 leading-relaxed text-sm sm:text-base">
                Share your floor plan, property type, and primarily concern with our consultation team. We will help you identify the appropriate assessment service.
              </p>
              <div className="w-16 h-[1px] bg-[#C9A14A] mx-auto mb-10" />
              <Link to="/contact">
                <button className="px-12 py-5 bg-[#C9A14A] hover:bg-white text-[#111111] font-['Cinzel'] text-xs font-bold tracking-[0.3em] uppercase transition-all duration-500 shadow-xl">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-[#C9A14A]/10 bg-white">
        <p className="text-[9px] tracking-[0.5em] text-zinc-400 font-bold uppercase transition-colors hover:text-[#C9A14A]">
          © 2026 Vrihad Vastu // Transforming Spaces • Harmonising Energies
        </p>
      </footer>
    </div>
  );
};

export default ServiceDetail;
