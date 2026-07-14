import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
const elements = [
  { name: "Water", color: "#2563EB", glow: "rgba(37,99,235,0.2)" },
  { name: "Air", color: "#059669", glow: "rgba(5,150,105,0.2)" },
  { name: "Fire", color: "#DC2626", glow: "rgba(220,38,38,0.2)" },
  { name: "Earth", color: "#D97706", glow: "rgba(217,119,6,0.2)" },
  { name: "Space", color: "#4F46E5", glow: "rgba(79,70,229,0.2)" }
];

const VastuHero = () => {
  const { scrollY } = useScroll();

  // Polished Parallax Depth
  const bgY = useTransform(scrollY, [0, 1000], [0, -120]);
  const elementsY = useTransform(scrollY, [0, 1000], [0, -60]);
  const compassRotate = useTransform(scrollY, [0, 1000], [0, 60]);

  // Elegant Stagger Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen bg-[#FAF9F5] overflow-hidden flex items-center pt-28 pb-16 font-['Inter'] text-[#1A1A1A] selection:bg-[#C9A14A] selection:text-white">
      
      {/* 🌌 REFINED BRIGHT BACKDROP */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft high-end architectural blueprint feel */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')] bg-cover bg-center opacity-[0.06] mix-blend-multiply" />
        {/* Radial masking to keep layout clean and breathable */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_#FAF9F5_80%)]" />
        {/* Editorial soft golden gradient */}
        <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-gradient-to-bl from-[#C9A14A]/15 via-transparent to-transparent blur-[120px]" />
      </motion.div>

      {/* ✨ MICROSCOPIC ENERGY PARTICLES */}
      <motion.div style={{ y: elementsY }} className="absolute inset-0 z-0 pointer-events-none hidden sm:block">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`gold-dust-${i}`}
            className="absolute bg-[#C9A14A]/50 rounded-full"
            style={{
              width: Math.random() * 2 + 1.5 + 'px',
              height: Math.random() * 2 + 1.5 + 'px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.8, 1.3, 0.8],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* 🏛 MAIN LAYOUT HUB */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 w-full">

        {/* 🔥 LEFT CONTENT */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 flex flex-col gap-8 relative z-10 text-center lg:text-left mt-6 lg:mt-0"
        >
          {/* Accent Line Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-4">
            <div className="h-[1px] w-12 bg-[#C9A14A]"></div>
            <span className="font-['Cinzel'] text-sm tracking-[0.4em] text-[#C9A14A] uppercase font-bold">
              Vedic Architecture + Earth Energetics
            </span>
            <div className="h-[1px] w-6 bg-[#C9A14A] lg:hidden"></div>
          </motion.div>

          {/* Premium Editorial Typography */}
          <motion.h1 variants={itemVariants} className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl xl:text-7xl leading-[1.08] text-[#111111] font-light drop-shadow-sm">
            Where Ancient Wisdom <br className="hidden lg:block" />
            <span className="italic text-[#C9A14A] font-normal">
              Meets Modern Science
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-700 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            Vrihad Vastu (Est. 2000) blends the ancient wisdom of Vastu Shastra with the modern science of Earth Energetics — helping homes, factories, and offices become healthier, more productive spaces.
          </motion.p>

          {/* Minimalist Elements Dot Array */}
          <motion.div variants={itemVariants} className="mt-2 flex gap-4 sm:gap-5 justify-center lg:justify-start">
            {elements.map((el, i) => (
              <div key={i} className="flex flex-col items-center gap-2.5">
                <div className="w-10 h-10 rounded-full border border-[#C9A14A]/30 bg-white shadow-md flex items-center justify-center relative group hover:border-[#C9A14A]/60 transition-all duration-300">
                   <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: el.color, boxShadow: `0 0 10px ${el.glow}` }} />
                </div>
                <span className="text-sm uppercase tracking-[0.15em] font-bold text-gray-500">{el.name}</span>
              </div>
            ))}
          </motion.div>

          {/* Refined Luxury CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
            <Link to="/contact">
              <button className="w-full sm:w-auto px-10 py-4 bg-[#1A1A1A] text-[#FAF9F5] font-['Cinzel'] tracking-widest text-sm shadow-[0_12px_30px_rgba(26,26,26,0.2)] hover:bg-[#C9A14A] hover:shadow-[0_12px_30px_rgba(201,161,74,0.35)] transition-all duration-500 font-medium">
                Book Consultation
              </button>
            </Link>
            <Link to="/services">
              <button className="w-full sm:w-auto px-10 py-4 border-2 border-[#C9A14A] text-[#C9A14A] bg-white/60 font-['Cinzel'] tracking-widest text-sm hover:bg-[#C9A14A] hover:text-white transition-all duration-500 backdrop-blur-md">
                Our Services
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* 🌙 RIGHT SIDE: THE FLUID 100% RESPONSIVE COMPASS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 relative flex justify-center items-center w-full mt-6 lg:mt-0"
        >
          {/* Main Ring Outer Box - Bound by aspect-ratio so it shrinks natively on small viewports */}
          <div className="relative w-full max-w-[320px] sm:max-w-[460px] lg:max-w-[580px] aspect-square mx-auto">
            
            <motion.div
              style={{ rotate: compassRotate }}
              className="relative w-full h-full rounded-full flex items-center justify-center"
            >
              {/* Ring 1: Glass Outer Frame */}
              <div className="absolute inset-0 rounded-full border border-[#C9A14A]/25 bg-white/50 backdrop-blur-md shadow-[inset_0_0_60px_rgba(201,161,74,0.06),0_20px_50px_rgba(0,0,0,0.05)]" />
              <div className="absolute inset-[2%] rounded-full border-2 border-[#C9A14A]/30" />

              {/* Ring 2: Subtle Dashed Tracker */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[10%] rounded-full border border-dashed border-[#C9A14A]/50"
              />

              {/* Ring 3: Interior Angular Grid Lines */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[20%] rounded-full border border-[#C9A14A]/30"
              >
                {[...Array(16)].map((_, i) => (
                  <div
                    key={`grid-line-${i}`}
                    className="absolute top-0 bottom-0 left-1/2 w-[1.5px] bg-gradient-to-b from-[#C9A14A]/20 via-transparent to-[#C9A14A]/20"
                    style={{ transform: `rotate(${i * 11.25}deg)` }}
                  />
                ))}
              </motion.div>

              {/* 🧭 FLUID DYNAMIC DIRECTION LABELS */}
              <div className="absolute inset-0">
                {directions.map((dir, i) => {
                  const rotation = i * 22.5;
                  const isMain = i % 2 === 0;
                  return (
                    <div
                      key={`direction-${i}`}
                      className="absolute inset-0 flex items-start justify-center"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                      {/* Counter-rotation to keep alphabets perfectly vertical */}
                      <div 
                        className={`absolute -top-4 sm:-top-5 transition-transform duration-300 ${isMain ? 'text-[#1A1A1A] font-extrabold text-sm sm:text-base lg:text-xl drop-shadow-sm' : 'text-[#C9A14A] text-sm sm:text-base font-semibold'}`}
                        style={{ transform: `rotate(-${rotation}deg)` }}
                      >
                        <span className="font-['Cinzel'] tracking-tighter select-none hover:text-[#C9A14A] transition-colors duration-300">
                          {dir}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* AUTOMATED TICK MARKS (Outer Edge Structure) */}
              <div className="absolute inset-[2%]">
                {[...Array(72)].map((_, i) => (
                  <div
                    key={`tick-mark-${i}`}
                    className="absolute inset-0 flex items-start justify-center"
                    style={{ transform: `rotate(${i * 5}deg)` }}
                  >
                    <div 
                      className="w-[1.5px] bg-[#C9A14A]/40"
                      style={{ height: i % 4.5 === 0 ? '5%' : '2.5%' }}
                    />
                  </div>
                ))}
              </div>

              {/* CORE MANDAAL (Central Medallion) */}
              <div className="absolute inset-[36%] rounded-full border border-[#C9A14A]/40 flex items-center justify-center bg-[#FAF9F5]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(201,161,74,0.15)]">
                <div className="w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#C9A14A] to-[#F1E4C3] shadow-[inset_0_2px_8px_rgba(255,255,255,0.7)] flex items-center justify-center relative">
                   <div className="w-[75%] h-[75%] border-2 border-white/50 rotate-45 flex items-center justify-center">
                      <div className="w-[60%] h-[60%] border border-white/40 -rotate-45" />
                   </div>
                   
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-2 h-2 bg-[#FAF9F5] rounded-full shadow-md" />
                   </div>
                </div>

                {/* Orbiting Tracker Dot */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1A1A1A] rounded-full shadow-[0_0_12px_rgba(201,161,74,0.8)]" />
                </motion.div>
              </div>

            </motion.div>

            {/* 📝 FLOATING INFO INSIGHTS (Clean White Glass) */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex items-center gap-3 absolute top-[8%] -right-[5%] bg-white/90 backdrop-blur-xl border-2 border-[#C9A14A]/30 rounded-sm px-5 py-3 shadow-[0_15px_40px_rgba(201,161,74,0.1)] z-20"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
              <div>
                <p className="text-sm tracking-[0.2em] text-gray-500 font-['Cinzel'] uppercase font-bold">Est. 2000</p>
                <p className="text-sm sm:text-base text-[#1A1A1A] font-['Cormorant_Garamond'] font-bold leading-none mt-0.5">
                  Vrihad <span className="text-[#C9A14A]">Vastu</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="hidden sm:flex items-center gap-3 absolute bottom-[12%] -left-[5%] bg-white/90 backdrop-blur-xl border-2 border-[#C9A14A]/30 rounded-sm px-5 py-3 shadow-[0_15px_40px_rgba(201,161,74,0.1)] z-20"
            >
              <span className="text-[#C9A14A] text-sm font-bold">✧</span>
              <div>
                <p className="text-sm tracking-[0.2em] text-gray-500 font-['Cinzel'] uppercase font-bold">Land Healing</p>
                <p className="text-sm sm:text-base text-[#1A1A1A] font-['Cormorant_Garamond'] font-bold leading-none mt-0.5">
                  3-Step <span className="text-[#C9A14A]">Protocol</span>
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default VastuHero;