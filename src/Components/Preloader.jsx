import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

const VrihadVastuPreloader = ({ setLoading }) => {
  const [counter, setCounter] = useState(0);

  // Simulating a loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);
    
    // Auto-close after 3.5 seconds or once counter hits 100
    const exitTimer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(exitTimer);
    };
  }, [setLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[999] bg-[#FDFCF9] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 1. Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,161,74,0.08),transparent_70%)]" />

      <div className="relative flex items-center justify-center">
        
        {/* 2. Rotating Directional Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-64 h-64 flex items-center justify-center"
        >
          {/* SVG Progress Circle */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <motion.circle
              cx="128"
              cy="128"
              r="120"
              stroke="#C9A14A"
              strokeWidth="1"
              fill="transparent"
              strokeDasharray="754" // 2 * PI * r
              initial={{ strokeDashoffset: 754 }}
              animate={{ strokeDashoffset: 754 - (754 * counter) / 100 }}
              transition={{ duration: 0.5 }}
              strokeOpacity="0.5"
            />
          </svg>

          {/* Vastu Directions Fading In Staggered */}
          {directions.map((dir, i) => {
            const rotation = i * 45;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="absolute text-[#C9A14A] text-sm font-bold tracking-widest font-['Cinzel']"
                style={{
                  transform: `rotate(${rotation}deg) translateY(-120px) rotate(-${rotation}deg)`,
                }}
              >
                {dir}
              </motion.div>
            );
          })}
        </motion.div>

        {/* 3. Center Branding - Now uses Header Logo */}
        <div className="absolute flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <img 
              src="img/1-1.webp" 
              alt="Logo" 
              className="w-24 h-auto object-contain brightness-110 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* 4. Bottom Counter */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-['Inter'] text-[10px] tracking-[0.5em] text-gray-400 uppercase mb-2"
        >
          Aligning Space and Energy
        </motion.span>
        <div className="font-['Cinzel'] text-[#C9A14A] text-xl font-light">
          {counter}%
        </div>
      </div>

      {/* 5. Decorative Floating Stardust (Light Theme) */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#C9A14A]/20 rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
          }}
          animate={{ 
            y: [0, -100], 
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            duration: 3 + Math.random() * 2, 
            repeat: Infinity, 
            delay: Math.random() * 2 
          }}
        />
      ))}
    </motion.div>
  );
};

export default VrihadVastuPreloader;