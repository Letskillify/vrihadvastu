import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Compass, Search } from "lucide-react";

const VrihadVastuNotFound = () => {
  return (
    <section className="relative min-h-screen bg-[#FDFCF9] overflow-hidden flex items-center justify-center font-['Inter'] px-6 pt-32">
      
      {/* 🌌 ENERGY GRID BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(201,161,74,0.08),transparent_70%)] rounded-full blur-3xl" />
        
        {/* Subtle grid pattern from previous sections */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `radial-gradient(#C9A14A 1px, transparent 1px)`,
               backgroundSize: '50px 50px' 
             }} 
        />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        
        {/* 🧭 ROTATING ASTROLABE ERROR CODE */}
        <div className="relative flex justify-center mb-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-48 h-48 lg:w-64 lg:h-64 border border-[#C9A14A]/20 rounded-full flex items-center justify-center relative"
          >
            {/* Outer ticks */}
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-full h-[1px] bg-[#C9A14A]/10" 
                style={{ transform: `rotate(${i * 30}deg)` }}
              />
            ))}
            
            {/* The 404 Text */}
            <div className="bg-[#FDFCF9] px-6 relative z-10">
               <h1 className="text-8xl lg:text-9xl font-['Cinzel'] text-[#1A1A1A] font-bold tracking-tighter">
                4<span className="text-[#C9A14A]">0</span>4
               </h1>
            </div>
          </motion.div>
          
          {/* Floating Compass Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 right-1/4 bg-white p-3 rounded-full shadow-xl border border-[#C9A14A]/20 text-[#C9A14A]"
          >
            <Compass size={24} strokeWidth={1.5} />
          </motion.div>
        </div>

        {/* 🖋️ ERROR MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl lg:text-3xl font-['Cinzel'] text-[#1A1A1A] mb-4 uppercase tracking-widest">
            Spatial Misalignment
          </h2>
          <p className="text-gray-500 font-light text-lg mb-12 leading-relaxed max-w-md mx-auto">
            The coordinates you are seeking have shifted in the energy grid. 
            This path is currently unmapped in our directional directory.
          </p>

          {/* 🔘 ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="flex items-center gap-3 px-10 py-4 border border-[#C9A14A] text-[#C9A14A] font-['Cinzel'] tracking-widest text-xs uppercase hover:bg-[#C9A14A] hover:text-white transition-all duration-500"
            >
              <ArrowLeft size={16} />
              Return to Path
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#1A1A1A] text-white font-['Cinzel'] tracking-widest text-xs uppercase shadow-2xl shadow-[#1A1A1A]/20 hover:bg-[#C9A14A] transition-all duration-500"
            >
              Consult the Map
            </motion.button>
          </div>
        </motion.div>

        {/* 🌌 BOTTOM ORNAMENT */}
        <div className="mt-20 flex items-center justify-center gap-4 opacity-30">
          <div className="h-[1px] w-12 bg-[#C9A14A]" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#1A1A1A] font-bold">Vrihad Vastu</span>
          <div className="h-[1px] w-12 bg-[#C9A14A]" />
        </div>
      </div>
    </section>
  );
};

export default VrihadVastuNotFound;