import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const PremiumNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock Body Scroll when Mobile Menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Close Mobile Menu on Route Change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/', id: '01' },
    { name: 'About', path: '/about', id: '02' },
    { name: 'Services', path: '/services', id: '03' },
    { name: 'Contact', path: '/contact', id: '04' }
  ];

  // Animation variants for mobile menu items
  const menuVars = {
    initial: { scaleY: 0 },
    animate: { 
      scaleY: 1, 
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    },
    exit: { 
      scaleY: 0, 
      transition: { delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const linkVars = {
    initial: { y: 30, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.2, staggerChildren: 0.09, staggerDirection: 1 } }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
          isScrolled || isOpen
            ? 'bg-white/95 backdrop-blur-xl py-4 border-[#C9A14A]/15 shadow-[0_10px_30px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 flex justify-between items-center">
          
          {/* LOGO MATRIX */}
          <Link to="/" className="relative z-[110] flex items-center gap-4 group">
            <img 
              src="img/1-1.webp" 
              alt="Vrihad Vastu" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Operational Indicator - Hidden on Mobile */}
            <div className="hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="w-1.5 h-1.5 bg-[#C9A14A] rounded-full animate-pulse" />
              <span className="text-[8px] font-['Inter'] tracking-[0.3em] text-zinc-400 font-bold uppercase">
                Active
              </span>
            </div>
          </Link>

          {/* DESKTOP ARCHITECTURE */}
          <div className="hidden lg:flex items-center gap-10 z-[110]">
            <div className="flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative group py-2"
                  >
                    <span className={`text-[10px] font-['Inter'] font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
                      isActive ? 'text-[#C9A14A]' : 'text-[#111111] group-hover:text-[#C9A14A]'
                    }`}>
                      {item.name}
                    </span>
                    {/* Active/Hover Indicator Line */}
                    <span className={`absolute bottom-0 left-0 h-[1px] bg-[#C9A14A] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                );
              })}
            </div>
            
            <div className="w-[1px] h-4 bg-[#C9A14A]/30" />

            <Link to="/contact">
              <button className="px-8 py-3 bg-[#111111] text-white text-[10px] font-bold font-['Cinzel'] tracking-[0.3em] uppercase hover:bg-[#C9A14A] hover:text-[#111111] transition-colors duration-500 shadow-sm">
                Book Audit
              </button>
            </Link>
          </div>

          {/* MOBILE TOGGLE MATRIX */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-[110] w-10 h-10 flex items-center justify-center focus:outline-none"
          >
            <div className="flex flex-col items-end gap-1.5 w-6">
              <span className={`block h-[1.5px] bg-[#111111] transition-all duration-500 ease-in-out ${isOpen ? 'w-6 rotate-45 translate-y-[7.5px]' : 'w-6'}`} />
              <span className={`block h-[1.5px] bg-[#C9A14A] transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0 translate-x-2' : 'w-4'}`} />
              <span className={`block h-[1.5px] bg-[#111111] transition-all duration-500 ease-in-out ${isOpen ? 'w-6 -rotate-45 -translate-y-[7.5px]' : 'w-5'}`} />
            </div>
          </button>

        </div>
      </motion.nav>

      {/* EDITORIAL MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-[90] bg-[#FCFAF6] origin-top"
          >
            {/* Background Micro-Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#C9A14A_1px,transparent_1px),linear-gradient(to_bottom,#C9A14A_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            
            <div className="flex flex-col h-full justify-center px-6 sm:px-12 relative z-10 pt-20">
              <motion.div 
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-6 sm:gap-8"
              >
                <div className="mb-4">
                  <span className="text-[#C9A14A] text-[9px] tracking-[0.4em] font-bold uppercase font-['Inter'] block">
                    Navigation
                  </span>
                  <div className="w-12 h-[1px] bg-[#C9A14A]/30 mt-4" />
                </div>

                {navItems.map((item) => (
                  <div key={item.name} className="overflow-hidden">
                    <motion.div variants={linkVars}>
                      <Link
                        to={item.path}
                        className="flex items-baseline gap-4 group"
                      >
                        <span className="font-['Cinzel'] text-xs text-[#C9A14A] font-bold tracking-widest opacity-60">
                          {item.id}
                        </span>
                        <span className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl text-[#111111] font-light tracking-tight group-hover:italic transition-all duration-300">
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                ))}

                <motion.div variants={linkVars} className="mt-12 overflow-hidden">
                  <Link to="/contact" className="block">
                    <button className="w-full py-5 bg-[#111111] text-white text-[10px] font-bold font-['Cinzel'] tracking-[0.3em] uppercase active:bg-[#C9A14A] transition-colors duration-300">
                      Book a Consultation
                    </button>
                  </Link>
                </motion.div>
                
                {/* Mobile Footer Metadata */}
                <motion.div variants={linkVars} className="absolute bottom-10 left-6 sm:left-12 flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#C9A14A]" />
                  <span className="text-[9px] tracking-[0.3em] font-['Inter'] text-zinc-400 font-bold uppercase">
                    Vrihad Vastu · Est. 2000
                  </span>
                </motion.div>

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PremiumNavbar;