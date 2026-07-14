import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radar, BarChart3, Wind, ShieldCheck, Activity, Radio, ArrowUpRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

// Import core Swiper structure distributions
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const ProcessSection = () => {
  const steps = [
    {
      index: "01",
      title: "Scan",
      subtitle: "Full Site Survey",
      icon: Radar,
      desc: "We visit your property and scan the entire land using special tools. We look for underground water, rock cracks, and harmful energy grid crossings that most people cannot see or feel.",
    },
    {
      index: "02",
      title: "Analyze",
      subtitle: "Find the Root Cause",
      icon: BarChart3,
      desc: "We overlay our scan results onto your building plan. This helps us find exactly which room or zone is affected and what is causing the problem — whether it's a geopathic stress line or a Vastu imbalance.",
    },
    {
      index: "03",
      title: "Harmonize",
      subtitle: "Fix Without Demolition",
      icon: Wind,
      desc: "We fix the problem without breaking walls or moving heavy machines. We use Energy Rods, Yantras, Crystals, and metal strips placed at key positions to block or transform the harmful energy.",
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF9F5] text-[#111111] relative overflow-hidden">
      {/* Editorial Engineering Grids */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#C9A14A_1px,transparent_1px),linear-gradient(to_bottom,#C9A14A_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        
        {/* Asymmetric Luxury Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-24 lg:mb-32 items-end">
          <div className="lg:col-span-7">
            <span className="font-['Cinzel'] text-sm tracking-[0.6em] text-[#C9A14A] font-bold uppercase block mb-4">
              Our 3-Step Process
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-5xl sm:text-7xl text-[#111111] font-light leading-[1.05] tracking-tight">
              Simple Steps <br />
              to a <span className="italic text-[#C9A14A] font-normal">Healthier Space</span>
            </h2>
          </div>
          <div className="lg:col-span-5 border-l border-[#C9A14A]/25 pl-6 lg:pl-10 py-2">
            <p className="font-['Inter'] text-sm text-gray-500 leading-relaxed font-light max-w-sm">
              We follow a clear three-step process: scan the land, find the problem, and fix it — all without demolition or construction.
            </p>
          </div>
        </div>

        {/* Structural Sequence Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-b border-[#C9A14A]/20 divide-y lg:divide-y-0 lg:divide-x divide-[#C9A14A]/20">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-12 lg:p-14 flex flex-col justify-between group hover:bg-white transition-colors duration-700 min-h-[380px] relative overflow-hidden"
              >
                {/* Subtle Geometric Card Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#C9A14A_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700 pointer-events-none" />

                <div>
                  {/* Top Header Row within Card */}
                  <div className="flex items-center justify-between mb-12">
                    <div className="w-12 h-12 rounded-full bg-[#111111] flex items-center justify-center group-hover:bg-[#C9A14A] transition-colors duration-500">
                      <Icon className="w-4 h-4 text-white stroke-[1.5px]" />
                    </div>
                    <span className="font-['Cinzel'] text-sm font-bold text-[#C9A14A]/40 tracking-widest block">
                      {step.index}
                    </span>
                  </div>

                  {/* Text Content */}
                  <span className="font-['Inter'] text-sm uppercase tracking-[0.25em] text-[#C9A14A] font-semibold mb-2 block">
                    {step.subtitle}
                  </span>
                  <h3 className="font-['Cinzel'] text-xl text-[#111111] tracking-widest font-bold mb-4 group-hover:text-[#C9A14A] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed font-light group-hover:text-gray-900 transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Architectural Anchor */}
                <div className="mt-10 pt-4 border-t border-transparent group-hover:border-[#C9A14A]/15 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="font-['Inter'] text-sm uppercase tracking-widest text-gray-400 font-medium">System Module Ready</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A14A]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

const ToolsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const tools = [
    {
      name: "Lecher Antenna",
      role: "Energy Field Measurement",
      desc: "The Lecher Antenna is a scientific instrument used to measure subtle energy fields. Ashish Singhai uses it to detect the exact location of Geopathic Stress lines, Hartmann and Curry grid crossings, and the energy level of each room.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070",
      icon: Activity
    },
    {
      name: "Universal Aura Scanner",
      role: "Energy Field Visualiser",
      desc: "The Universal Aura Scanner measures the energy field around a person, object, or building. We use it to check the energy quality of a plot before you buy it, and to show clients the visible improvement after we complete our healing work.",
      image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2070",
      icon: ShieldCheck
    },
    {
      name: "Digital EMF Meter",
      role: "Radiation Level Check",
      desc: "This device measures harmful electromagnetic radiation (EMF) from Wi-Fi routers, power lines, and wiring inside walls. We use it to identify radiation hotspots in bedrooms and workspaces and create safe, low-radiation zones.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974",
      icon: Radio
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white text-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C9A14A_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        
        {/* Top Boundary Ribbon Layout */}
        <div className="border-b border-[#C9A14A]/20 pb-10 mb-16 lg:mb-24 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="font-['Cinzel'] text-sm tracking-[0.5em] text-[#C9A14A] font-bold uppercase block mb-3">
              Our Tools
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl text-[#111111] font-light leading-none tracking-tight">
              Scientific <span className="italic text-[#C9A14A] font-normal">Instruments</span>
            </h2>
          </div>
          
          {/* Progress Counters */}
          <div className="font-['Cinzel'] text-xs tracking-[0.3em] font-bold text-[#111111]/40">
            <span className="text-[#111111] text-lg">{String(activeIndex + 1).padStart(2, '0')}</span> / {String(tools.length).padStart(2, '0')}
          </div>
        </div>

        {/* Core Screen Layout (Dynamic Split Panel) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Text Metadata Screen Column */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2 order-2 lg:order-1">
            <div className="relative min-h-[260px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-['Inter'] text-sm tracking-[0.25em] font-bold text-[#C9A14A] uppercase block mb-3">
                    {tools[activeIndex].role}
                  </span>
                  <h3 className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl text-[#111111] font-light mb-6 tracking-tight">
                    {tools[activeIndex].name}
                  </h3>
                  <p className="font-['Inter'] text-sm sm:text-base text-gray-500 leading-relaxed font-light max-w-md">
                    {tools[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Custom Interactive Index Indicators */}
            <div className="space-y-4 mt-12 border-t border-[#C9A14A]/10 pt-8">
              {tools.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => swiperRef.current?.slideToLoop(idx)}
                  className="flex items-center justify-between w-full text-left group py-1"
                >
                  <span className={`font-['Cinzel'] text-xs tracking-widest font-bold transition-all duration-300 ${
                    activeIndex === idx ? 'text-[#C9A14A] translate-x-2' : 'text-gray-400 group-hover:text-[#111111]'
                  }`}>
                    {String(idx + 1).padStart(2, '0')}. {item.name}
                  </span>
                  <div className={`h-[1px] flex-1 mx-6 bg-[#C9A14A]/10 origin-left transition-transform duration-500 ${
                    activeIndex === idx ? 'scale-x-100 bg-[#C9A14A]/40' : 'scale-x-0'
                  }`} />
                  <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    activeIndex === idx ? 'bg-[#C9A14A]' : 'bg-transparent border border-gray-300'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Swiper Slide Viewport Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center relative select-none">
            
            {/* Cinematic Frame Border Decor */}
            <div className="absolute -inset-4 border border-[#C9A14A]/10 rounded-sm pointer-events-none hidden sm:block" />
            
            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              effect={'fade'}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full relative shadow-[0_30px_80px_rgba(201,161,74,0.06)]"
            >
              {tools.map((tool, i) => (
                <SwiperSlide key={i} className="w-full overflow-hidden bg-[#FAF9F5]">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden p-3 border border-[#C9A14A]/20 bg-white">
                    <div className="h-full w-full overflow-hidden relative">
                      {/* Laser Alignment Scanner Overlay Graphic */}
                      {activeIndex === i && (
                        <motion.div
                          initial={{ top: "0%" }}
                          animate={{ top: "100%" }}
                          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A14A] to-transparent z-10 opacity-70 pointer-events-none shadow-[0_0_12px_#C9A14A]"
                        />
                      )}
                      
                      <div
                        className="absolute inset-0 bg-cover bg-center grayscale-[0.3] contrast-[1.02] scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
                        style={{ backgroundImage: `url(${tool.image})` }}
                      />
                      {/* Premium Subtle Shimmer Gradient Tint */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#111111]/10 via-transparent to-white/10 mix-blend-overlay pointer-events-none" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

        {/* Global Structural Verification Footer Block */}
        <div className="mt-24 sm:mt-32 pt-10 border-t border-[#C9A14A]/15 flex flex-wrap justify-between items-center gap-6">
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {["Precision Verified", "Trusted Since 2000", "No Demolition Needed"].map((tag, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-[#C9A14A]" />
                <span className="text-sm tracking-[0.35em] font-bold text-gray-400 uppercase font-['Inter']">{tag}</span>
              </div>
            ))}
          </div>
          <span className="font-['Inter'] text-sm text-gray-400 uppercase tracking-widest hidden md:inline">
            VRIHAD VASTU // EST. 2000
          </span>
        </div>

      </div>
    </section>
  );
};

export { ProcessSection, ToolsSection };