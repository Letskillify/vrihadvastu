import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Award } from 'lucide-react';

const TimelineNode = ({ year, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="relative pl-8 sm:pl-12 pb-10 sm:pb-12 group last:pb-0"
    >
      {/* Vertical Line Segment */}
      <div className="absolute left-[9px] sm:left-[11px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C9A14A]/40 via-[#C9A14A]/10 to-transparent group-last:hidden" />

      {/* Glowing Elegant Node */}
      <motion.div
        animate={{
          boxShadow: ["0 0 0px rgba(201, 161, 74, 0)", "0 0 15px rgba(201, 161, 74, 0.3)", "0 0 0px rgba(201, 161, 74, 0)"],
          borderColor: ["#C9A14A", "#E5C77A", "#C9A14A"]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-1 w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] rounded-full border-2 border-[#C9A14A] bg-[#FAF9F5] z-10 flex items-center justify-center"
      >
        <div className="w-1.5 h-1.5 bg-[#C9A14A] rounded-full" />
      </motion.div>

      <div className="flex flex-col gap-1.5">
        <span className="font-['Cinzel'] text-[#C9A14A] text-sm font-bold tracking-[0.3em] uppercase">{year}</span>
        <h4 className="font-['Cinzel'] text-lg sm:text-xl text-[#111111] font-bold tracking-widest">{title}</h4>
        <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed max-w-md mt-1 font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const AboutLegacy = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FAF9F5] overflow-hidden relative border-t border-[#C9A14A]/10 text-[#1A1A1A]">

      {/* 🌌 REFINED EDITORIAL LIGHT BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-[#C9A14A]/5 via-transparent to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-20 items-center relative z-10">

        {/* 🏛 LEFT SIDE: PORTRAIT DESIGN (FLUID & MOBILE PERSISTENT) */}
        <div className="lg:col-span-5 relative w-full max-w-[480px] mx-auto lg:max-w-none group px-2 sm:px-0">

          {/* Rotating Sacred Geometry Watermark */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -left-12 sm:-top-16 sm:-left-16 w-48 h-48 sm:w-64 sm:h-64 text-[#C9A14A]/10 pointer-events-none"
          >
            <svg viewBox="0 0 200 200" className="fill-none stroke-currentColor stroke-[0.75]">
              <circle cx="100" cy="100" r="90" />
              <circle cx="100" cy="100" r="60" className="stroke-dashed opacity-60" />
              {[...Array(16)].map((_, i) => (
                <line key={i} x1="100" y1="100" x2={100 + 100 * Math.cos(i * 22.5 * Math.PI / 180)} y2={100 + 100 * Math.sin(i * 22.5 * Math.PI / 180)} />
              ))}
            </svg>
          </motion.div>

          {/* Main Frame Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden bg-white border border-[#C9A14A]/25 p-3 sm:p-4 shadow-[0_30px_70px_rgba(201,161,74,0.08)]"
          >
            {/* The Image Asset */}
            <div
              className="w-full h-full bg-cover bg-center grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-1000 ease-out"
              style={{ backgroundImage: "url('/img/a.jpeg')" }}
            />

            {/* Ambient Overlay Vignette */}
            <div className="absolute inset-3 sm:inset-4 bg-gradient-to-t from-[#C9A14A]/15 via-transparent to-transparent opacity-80 pointer-events-none mix-blend-multiply" />

            {/* Subtle Inner Frame Border */}
            <div className="absolute inset-0 border border-[#C9A14A]/0 group-hover:border-[#C9A14A]/20 transition-all duration-700 pointer-events-none" />
          </motion.div>

          {/* Premium Floating Badge (Refined and fully responsive) */}
          <motion.div
            initial={{ x: 15, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute -bottom-5 right-2 sm:-right-6 bg-[#1A1A1A] text-[#FAF9F5] p-5 sm:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex flex-col gap-0.5 items-start min-w-[160px] sm:min-w-[190px]"
          >
            <div className="flex gap-2 items-center">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A14A]" />
              <p className="font-['Inter'] text-sm uppercase tracking-[0.2em] text-gray-400 font-medium">Years Active</p>
            </div>
            <p className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#C9A14A] leading-none mt-1">10+</p>
            <div className="h-[1px] w-full bg-white/10 my-2" />
            <p className="font-['Inter'] text-sm uppercase tracking-[0.15em] text-gray-300 font-light leading-relaxed">Vastu & Earth Energetics</p>
          </motion.div>
        </div>

        {/* 📜 RIGHT SIDE: NARRATIVE + TIMELINE METRICS */}
        <div className="lg:col-span-7 flex flex-col gap-10 lg:gap-12 w-full mt-4 lg:mt-0">

          {/* Heading Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <span className="font-['Cinzel'] text-sm tracking-[0.5em] text-[#C9A14A] font-bold uppercase block mb-4">
              Our Journey
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl xl:text-6xl text-[#111111] leading-[1.12] font-light mb-6">
              A Legacy Built <br />
              <span className="italic text-[#C9A14A] font-normal">on Trust & Science</span>
            </h2>

            <div className="h-[1px] w-16 bg-[#C9A14A] mx-auto lg:mx-0 mb-8" />

            {/* Editorial Blockquote text wrapper */}
            <div className="space-y-8 font-['Inter'] text-gray-600 leading-relaxed text-base font-light text-left border-l border-[#C9A14A]/30 pl-6 sm:pl-8 max-w-4xl mx-auto lg:mx-0">
              <div className="space-y-2">
                <h3 className="font-['Cinzel'] text-xl tracking-widest text-[#111111] font-bold uppercase">Ashish Singhai</h3>
                <p className="text-[#C9A14A] text-sm tracking-[0.3em] font-bold uppercase">Lead Consultant & Vastu Expert</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#111111] uppercase tracking-wider">Scientific Vastu Corrections Without Demolition</h4>
                <p className="text-zinc-500 font-light">Advanced Space Harmonization for Homes, Flats, Plots & Commercial Sites</p>
                <p>
                  Using advanced diagnostic tools like the <strong className="text-[#111111] font-medium">Lecher Antenna</strong> and <strong className="text-[#111111] font-medium">Universal Aura Scanner</strong>, we identify and neutralize negative energies and Geopathic Stress—completely avoiding structural demolition.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div>
                  <h5 className="font-['Cinzel'] text-[10px] tracking-[0.3em] font-bold text-[#C9A14A] uppercase mb-4">Our Specialized Expertise:</h5>
                  <ul className="space-y-3 text-sm">
                    <li><strong className="text-zinc-900 font-medium uppercase tracking-tighter text-[11px]">Career & Business:</strong> Accelerating Business Growth & Unlocking New Career Opportunities</li>
                    <li><strong className="text-zinc-900 font-medium uppercase tracking-tighter text-[11px]">Financial Wellness:</strong> Enhancing Savings, Liquid Cash Flow & Overcoming Stagnation</li>
                    <li><strong className="text-zinc-900 font-medium uppercase tracking-tighter text-[11px]">Family & Relationships:</strong> Resolving Delays in Marriage & Fostering Deep Family Harmony</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-['Cinzel'] text-[10px] tracking-[0.3em] font-bold text-[#C9A14A] uppercase mb-4 md:mt-0 mt-4">Spatial Excellence:</h5>
                  <ul className="space-y-3 text-sm">
                    <li><strong className="text-zinc-900 font-medium uppercase tracking-tighter text-[11px]">Education:</strong> Boosting Focus, Concentration & Success in Studies</li>
                    <li><strong className="text-zinc-900 font-medium uppercase tracking-tighter text-[11px]">Health & Vitality:</strong> Balancing Space Energies for Better Health Care & Well-being</li>
                    <li className="italic text-zinc-400 text-xs">...and much more.</li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-4 border-t border-[#C9A14A]/10">
                <p className="font-['Cinzel'] text-xs tracking-[0.2em] font-bold text-[#C9A14A] uppercase mb-4 italic">NON-DESTRUCTIVE VASTU SOLUTIONS</p>
                <div className="flex flex-wrap gap-4 text-[10px] tracking-[0.2em] font-bold uppercase mb-6">
                   <span className="px-2 py-1 bg-zinc-100 border border-zinc-200">Scan • Analyze • Harmonize</span>
                   <span className="px-2 py-1 text-zinc-400 font-light italic">No Demolition. Pure Science. Proven Results.</span>
                </div>
                
                <p className="text-xs font-bold tracking-widest text-[#111111] uppercase mb-4 font-['Cinzel']">Transforming Spaces, Elevating Lives:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
                  <p>• New Opportunities in Career & Business Growth</p>
                  <p>• Overcoming Delays in Marriage & Relationships</p>
                  <p>• Academic Success & Sharper Focus for Students</p>
                  <p>• Financial Stability & Sustained Savings</p>
                  <p>• Enhanced Health, Harmony, and Peace of Mind</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Grid Layout: Timeline split from Awards list */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 lg:gap-8 items-start">
            
            {/* Timeline Column */}
            <div className="md:col-span-7 flex flex-col gap-2 relative z-10">
              <TimelineNode
                year="2016"
                title="Our Start"
                description="We started Vrihad Vastu in Indore, offering space planning and architectural consulting."
                delay={0.1}
              />
              <TimelineNode
                year="Present"
                title="Earth Energetics"
                description="We introduced scientific tools like the Lecher Antenna to catch and block geopathic stress and electromagnetic fields."
                delay={0.2}
              />
            </div>

            {/* Awards & Badges Vertical Array */}
            <div className="md:col-span-5 flex flex-col gap-3.5 md:border-l border-[#C9A14A]/20 md:pl-6 w-full">
              <p className="font-['Cinzel'] text-sm tracking-[0.25em] text-[#C9A14A] font-bold uppercase mb-1 text-center md:text-left">
                Awards & Recognition
              </p>
              
              {[
                { text: "Gold Medal (Temple Architecture)", icon: Award },
                { text: "Best Vastuvid — National Award", icon: Award },
                { text: "Sacred Geometry Specialization", icon: MapPin },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -2, border: "1px solid rgba(201, 161, 74, 0.4)" }}
                  className="flex items-center gap-3.5 p-3.5 bg-white border border-[#C9A14A]/15 rounded-sm shadow-[0_4px_15px_rgba(201,161,74,0.02)] transition-all duration-300"
                >
                  <div className="w-7 h-7 rounded-full bg-[#FAF9F5] border border-[#C9A14A]/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-3.5 h-3.5 text-[#C9A14A]" />
                  </div>
                  <span className="font-['Inter'] text-sm uppercase tracking-widest text-[#222222] font-medium leading-tight">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutLegacy;