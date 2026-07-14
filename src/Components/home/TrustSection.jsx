import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-[#FDFCF9] overflow-hidden">
      
      {/* 🌊 SUBTLE ENERGY WAVES (Animated background) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [1, 2.5], 
              opacity: [0, 0.15, 0] 
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "easeInOut"
            }}
            className="absolute w-[400px] h-[400px] rounded-full border border-[#C9A14A]"
          />
        ))}
      </div>

      {/* 💡 PULSING GOLD GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(circle_at_center,_rgba(201,161,74,0.12),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Eyebrow Label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-['Cinzel'] text-sm tracking-[0.6em] text-[#C9A14A] font-bold uppercase block mb-5"
          >
            Start Your Journey
          </motion.span>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl text-[#1A1A1A] mb-8 leading-[1.1] font-medium italic"
          >
            Make Your Space <br />
            <span className="not-italic font-light text-[#C9A14A]">Work For You</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="w-20 h-[1px] bg-[#C9A14A] mx-auto mt-8 origin-center mb-12"
          />

          {/* Description */}
          <p className="font-['Inter'] text-gray-500 text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Whether it's a home, office, or factory — Vrihad Vastu helps you identify hidden energy problems and fix them without demolition. Get a healthier, more productive space starting from the ground up.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#C9A14A', color: '#FFF' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-[#1A1A1A] text-white font-['Cinzel'] text-sm tracking-[0.3em] font-bold shadow-2xl transition-all duration-500 flex items-center gap-4 group"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, borderColor: '#1A1A1A', color: '#1A1A1A' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 border border-[#C9A14A] text-[#C9A14A] font-['Cinzel'] text-sm tracking-[0.3em] font-bold transition-all duration-500"
              >
                Contact Expert
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Geometric Elements (Small Details) */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 left-10 opacity-20 hidden lg:block"
        >
          <div className="w-12 h-12 border border-[#C9A14A] rotate-45" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-20 opacity-20 hidden lg:block"
        >
          <div className="w-8 h-8 rounded-full border-2 border-dashed border-[#C9A14A]" />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;