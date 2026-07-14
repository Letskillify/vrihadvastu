import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass, Moon, Sun, Star } from 'lucide-react';

const LabTab = ({ id, label, icon: Icon, active, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center gap-5 px-6 py-6 sm:py-7 w-full text-left transition-all duration-500 relative overflow-hidden group ${
      active 
        ? 'bg-white shadow-[0_15px_40px_rgba(201,161,74,0.08)] z-10' 
        : 'hover:bg-[#C9A14A]/[0.03] bg-transparent'
    }`}
  >
    {/* High-Contrast Active Left Border Accent */}
    <div className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-500 ${
      active ? 'bg-[#C9A14A] h-full' : 'bg-transparent h-0 group-hover:h-full group-hover:bg-[#C9A14A]/40'
    }`} />
    
    <Icon className={`w-4 h-4 transition-all duration-500 ${active ? 'text-[#C9A14A] scale-110 stroke-[2px]' : 'text-[#1A1A1A]/40 group-hover:text-[#1A1A1A]'}`} />
    
    <div className="flex flex-col">
      <span className={`font-['Cinzel'] text-sm uppercase tracking-[0.25em] font-bold transition-colors duration-500 ${
        active ? 'text-[#111111]' : 'text-gray-500 group-hover:text-[#111111]'
      }`}>
        {label}
      </span>
      {active && (
        <motion.span 
          layoutId="activeSubLight"
          className="text-sm text-[#C9A14A] font-['Inter'] uppercase tracking-[0.15em] mt-1 font-semibold"
        >
          Active Module
        </motion.span>
      )}
    </div>
  </button>
);

const EarthEnergeticsLab = () => {
  const [activeTab, setActiveTab] = useState('gs');

  const content = {
    gs: {
      title: "Geopathic Stress",
      subtitle: "Earth Frequency Check",
      description: "Underground water streams and rock cracks can disturb the Earth's natural energy. This disturbed energy rises to the surface and harms the people and machines above it. We find these hidden zones and fix them.",
      stats: ["Underground Water Detection", "Fault Line Mapping", "Harmful Frequency Blocking"],
      icon: <Moon className="w-20 h-20 text-[#C9A14A]/8 absolute -top-4 -right-4 pointer-events-none" />,
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#C9A14A] fill-none">
          <motion.path
            d="M 20 100 C 40 70, 60 130, 80 100 S 120 70, 140 100 S 180 130, 200 100"
            strokeWidth="1.75"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle cx="100" cy="100" r="70" strokeWidth="0.75" strokeDasharray="5 5" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
          <motion.path d="M 100 20 L 100 180 M 20 100 L 180 100" strokeWidth="0.75" opacity="0.25" />
        </svg>
      )
    },
    elements: {
      title: "Five Elements Balance",
      subtitle: "Panchatattva Harmony",
      description: "Water, Air, Fire, Earth, and Space all have their proper place in a building. When one element is in the wrong zone — like a kitchen in the north — it creates health issues and family problems. We correct these imbalances.",
      stats: ["Element Zone Analysis", "Direction Correction", "Space-by-Space Balancing"],
      icon: <Sun className="w-20 h-20 text-[#C9A14A]/8 absolute -top-4 -right-4 pointer-events-none" />,
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#C9A14A] fill-none">
          <motion.circle cx="100" cy="100" r="65" strokeWidth="1" opacity="0.5" />
          <motion.path d="M 100 35 L 145 145 L 45 80 L 155 80 L 55 145 Z" strokeWidth="1.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut" }} />
          <circle cx="100" cy="35" r="4.5" fill="#2563EB" />
          <circle cx="145" cy="145" r="4.5" fill="#DC2626" />
          <circle cx="45" cy="80" r="4.5" fill="#16A34A" />
          <circle cx="155" cy="80" r="4.5" fill="#D97706" />
          <circle cx="55" cy="145" r="4.5" fill="#4F46E5" />
        </svg>
      )
    },
    grids: {
      title: "Energy Grids",
      subtitle: "Hartmann & Curry Nets",
      description: "The Earth is covered by invisible energy lines called Hartmann and Curry grids. Where these lines cross, they create stress points. Sleeping or working right on these crossing points can cause health problems. We map and avoid these spots.",
      stats: ["Curry Grid Mapping", "Hartmann Line Detection", "Stress Point Neutralization"],
      icon: <Compass className="w-20 h-20 text-[#C9A14A]/8 absolute -top-4 -right-4 pointer-events-none" />,
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#C9A14A] fill-none">
          {[...Array(9)].map((_, i) => (
            <line key={i} x1={i * 22 + 12} y1="0" x2={i * 22 + 12} y2="200" strokeWidth="0.75" opacity="0.2" />
          ))}
          {[...Array(9)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 22 + 12} x2="200" y2={i * 22 + 12} strokeWidth="0.75" opacity="0.2" />
          ))}
          <motion.rect x="45" y="45" width="110" height="110" strokeWidth="1.5" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 4 }} />
          <circle cx="100" cy="100" r="4" fill="#C9A14A" />
        </svg>
      )
    },
    healing: {
      title: "Land Healing",
      subtitle: "Clearing Old Energy",
      description: "Land holds the memory of past events — like old battles, tragedy, or business failures. This old energy can block new growth. We clear this stored energy using sound, crystals, and special geometric tools to give the land a fresh, clean start.",
      stats: ["Historical Energy Clearing", "Crystal & Yantra Placement", "Positive Energy Activation"],
      icon: <Sparkles className="w-20 h-20 text-[#C9A14A]/8 absolute -top-4 -right-4 pointer-events-none" />,
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#C9A14A] fill-none">
          <motion.circle cx="100" cy="100" r="45" strokeWidth="2" animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.8, 0.1, 0.8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          <circle cx="100" cy="100" r="15" fill="#C9A14A" opacity="0.25" />
          <path d="M 100 20 L 108 45 L 135 45 L 112 60 L 122 85 L 100 70 L 78 85 L 88 60 L 65 45 L 92 45 Z" fill="#C9A14A" opacity="0.8" transform="translate(0, 35) scale(1)" />
        </svg>
      )
    }
  };

  return (
    <section id="diagnostic-lab" className="py-16 sm:py-24 bg-[#FAF9F5] relative overflow-hidden text-[#1A1A1A]">
      
      {/* Structural Framing Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#C9A14A_1px,transparent_1px),linear-gradient(to_bottom,#C9A14A_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A14A]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Core Layout Content Block */}
        <div className="flex flex-col lg:flex-row gap-0 border border-[#C9A14A]/25 bg-white shadow-[0_40px_90px_rgba(201,161,74,0.08)]">
          
          {/* Left Navigation Sidebar Panel */}
          <div className="w-full lg:w-[32%] flex flex-col border-b lg:border-b-0 lg:border-r border-[#C9A14A]/25 bg-[#F5F4EE]">
            <div className="p-8 sm:p-10 border-b border-[#C9A14A]/25 bg-[#111111]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A14A]" />
                <span className="font-['Cinzel'] text-sm font-bold uppercase tracking-[0.4em] text-[#C9A14A]">
                  The Diagnostic Lab
                </span>
              </div>
              <h2 className="text-[#FAF9F5] font-['Cormorant_Garamond'] text-3xl font-light">
                Earth <span className="italic text-[#C9A14A]">Energy Audit</span>
              </h2>
            </div>
            
            {/* Action Navigation Tabs Stack */}
            <div className="flex-1 divide-y divide-[#C9A14A]/15 bg-[#F5F4EE]">
              <LabTab id="gs" label="Geopathic Stress" icon={Moon} active={activeTab === 'gs'} onClick={setActiveTab} />
              <LabTab id="elements" label="Five Elements" icon={Sun} active={activeTab === 'elements'} onClick={setActiveTab} />
              <LabTab id="grids" label="Earth Grids" icon={Compass} active={activeTab === 'grids'} onClick={setActiveTab} />
              <LabTab id="healing" label="Land Clearing" icon={Sparkles} active={activeTab === 'healing'} onClick={setActiveTab} />
            </div>

            {/* Premium Meta Info Block Footer */}
            <div className="p-6 bg-[#EFEFEA] border-t border-[#C9A14A]/20">
               <p className="text-sm font-['Inter'] text-gray-600 uppercase tracking-widest leading-relaxed font-medium">
                 All analytical processes map parameters derived from architectural calibration.
               </p>
            </div>
          </div>

          {/* Interactive Lab Screen Monitor Display Area */}
          <div className="w-full lg:w-[68%] grid grid-cols-1 md:grid-cols-12 p-8 sm:p-12 lg:p-16 gap-12 items-center relative min-h-[500px] bg-white">
            
            {/* Left Data Presentation Module */}
            <div className="md:col-span-7 flex flex-col relative z-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {content[activeTab].icon}
                  
                  <span className="font-['Cinzel'] text-[#C9A14A] text-sm font-bold tracking-[0.3em] block mb-3 uppercase">
                    {content[activeTab].subtitle}
                  </span>
                  
                  <h3 className="font-['Cormorant_Garamond'] text-[#111111] text-4xl lg:text-5xl font-light mb-6 leading-none">
                    {content[activeTab].title}
                  </h3>
                  
                  <p className="font-['Inter'] text-gray-600 text-sm leading-relaxed mb-8 font-light max-w-md">
                    {content[activeTab].description}
                  </p>
                  
                  {/* High-Visibility Metrics Trackers */}
                  <div className="space-y-4">
                    {content[activeTab].stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-3.5">
                        <div className="w-1.5 h-1.5 bg-[#C9A14A]" />
                        <span className="font-['Inter'] text-sm uppercase tracking-[0.2em] text-[#111111] font-semibold">
                          {stat}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Precision Oscilloscope Vector Output */}
            <div className="md:col-span-5 flex items-center justify-center w-full aspect-square max-w-[280px] mx-auto md:max-w-none relative">
              <div className="absolute inset-0 rounded-full border border-[#C9A14A]/25 bg-[#FAF9F5] shadow-[inset_0_4px_20px_rgba(201,161,74,0.05),_0_10px_30px_rgba(0,0,0,0.02)]" />
              <div className="absolute inset-3 rounded-full border border-dashed border-[#C9A14A]/25 animate-[spin_100s_linear_infinite]" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ scale: 0.85, opacity: 0, rotate: -15 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 1.05, opacity: 0, rotate: 15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-[65%] h-[65%] relative z-10 flex items-center justify-center"
                >
                  {content[activeTab].visual}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* Industrial Metadata Indicator Ribbon */}
        <div className="absolute bottom-8 right-8 hidden sm:flex gap-4 items-center opacity-80">
          <div className="text-right">
            <p className="font-['Cinzel'] text-sm tracking-[0.25em] text-[#C9A14A] font-bold uppercase">Energy Audit</p>
            <p className="font-['Inter'] text-gray-500 text-sm uppercase tracking-wider font-medium mt-0.5">Scan · Analyse · Harmonise</p>
          </div>
          <div className="w-[1px] h-8 bg-[#C9A14A]/30" />
        </div>

    </section>
  );
};

export default EarthEnergeticsLab;