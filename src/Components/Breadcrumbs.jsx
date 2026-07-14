import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = ({ title, subtitle, image = "" }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="relative bg-[#FAF8F4] pt-[120px] lg:pt-[140px] pb-12 sm:pb-16 overflow-hidden border-b border-[#C9A14A]/15">
      
      {/* 🖼️ HIGH-KEY LIGHT TEXTURE LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.img 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.07 }}
          transition={{ duration: 1.5 }}
          src={image}
          alt="Structural Background" 
          className="w-full h-full object-cover grayscale mix-blend-multiply"
        />
        {/* Light Gradient Fade-out */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F4]/50 via-transparent to-[#FAF8F4]" />
        
        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#C9A14A_1px,transparent_1px),linear-gradient(to_bottom,#C9A14A_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col items-start max-w-4xl">
          
          {/* COMPACT BREADCRUMB TRACK */}
          <motion.nav 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center flex-wrap gap-2.5 mb-6 text-[10px] sm:text-xs tracking-[0.2em] font-bold uppercase font-['Inter']"
          >
            <Link 
              to="/" 
              className="text-zinc-400 hover:text-[#C9A14A] transition-colors"
            >
              Index
            </Link>

            {pathnames.length > 0 && (
              <ChevronRight size={12} className="text-[#C9A14A]/50" strokeWidth={2.5} />
            )}

            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;

              return (
                <React.Fragment key={name}>
                  {index > 0 && (
                    <ChevronRight size={12} className="text-[#C9A14A]/50" strokeWidth={2.5} />
                  )}
                  {isLast ? (
                    <span className="text-[#C9A14A]">
                      {name.replace(/-/g, ' ')}
                    </span>
                  ) : (
                    <Link 
                      to={routeTo}
                      className="text-zinc-400 hover:text-[#111111] transition-colors"
                    >
                      {name.replace(/-/g, ' ')}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </motion.nav>

          {/* MAIN TITLE BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-light leading-[1.1] tracking-tight mb-4">
              {title || pathnames[pathnames.length - 1]?.replace(/-/g, ' ') || 'Index'}
            </h1>
            
            {subtitle && (
              <p className="text-zinc-600 font-light text-base sm:text-lg max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;