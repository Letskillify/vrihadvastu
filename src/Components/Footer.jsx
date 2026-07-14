import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  MapPin, 
  ArrowUpRight
} from 'lucide-react';

const PremiumFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", path: "/" },
      { name: "Our Story", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
    ],
    expertise: [
      { name: "Industrial Vastu", path: "/services" },
      { name: "Commercial Vastu", path: "/services" },
      { name: "Residential Vastu", path: "/services" },
      { name: "Earth Energetics", path: "/services" },
    ]
  };

  return (
    <footer className="relative bg-[#080808] pt-24 pb-10 overflow-hidden selection:bg-[#C9A14A]/20">
      
      {/* Top Architectural Alignment Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A14A]/25 to-transparent" />
      
      {/* Structural Tech Grid Lines Accent */}
      <div className="absolute top-0 right-12 w-[1px] h-full bg-zinc-900/40 hidden lg:block" />
      <div className="absolute top-0 left-12 w-[1px] h-full bg-zinc-900/40 hidden lg:block" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">
          
          {/* BRAND IDENTITY BLOCK */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Link to="/" className="inline-block transition-transform duration-500 hover:scale-[1.02] origin-left">
              <img 
                src="img/1-1.webp" 
                alt="VrihadVastu Logo" 
                className="h-16 w-auto brightness-125 saturate-[0.9]"
              />
            </Link>
            
            <p className="font-['Inter'] text-zinc-400 text-sm sm:text-base leading-relaxed tracking-wide max-w-sm font-light">
              Vrihad Vastu (Est. 2000) combines ancient Vastu Shastra wisdom with modern Earth Energetics to help homes, offices, and factories become healthier and more productive spaces.
            </p>
            
            {/* Minimal Square Nodes for Social footprint */}
            <div className="flex gap-3 pt-2">
              {[
                { Icon: Instagram, link: "#" },
                { Icon: Twitter, link: "#" },
                { Icon: Linkedin, link: "#" }
              ].map((item, i) => (
                <a key={i} href={item.link} className="group">
                  <div className="w-12 h-12 border border-zinc-800 bg-zinc-900/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:bg-[#111111]">
                    <item.Icon className="w-4 h-4 text-zinc-400 group-hover:text-[#C9A14A] transition-colors" strokeWidth={1.5} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* DIRECTORY NAVIGATION */}
          <div className="lg:col-span-2 lg:pl-4">
            <span className="text-xs font-mono tracking-[0.35em] text-zinc-500 block mb-8 uppercase font-bold">Navigation</span>
            <h4 className="text-[#C9A14A] text-sm tracking-[0.25em] uppercase font-bold mb-6 font-['Inter']">Directory</h4>
            <ul className="space-y-5">
              {footerLinks.navigation.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-zinc-300 text-sm hover:text-white transition-colors duration-300 tracking-[0.18em] uppercase flex items-center gap-2 group">
                    <span className="w-2 h-[1px] bg-zinc-700 transition-all duration-300 group-hover:w-4 group-hover:bg-[#C9A14A]"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLUTIONS INDEX */}
          <div className="lg:col-span-2">
            <span className="text-xs font-mono tracking-[0.35em] text-zinc-500 block mb-8 uppercase font-bold">Our Services</span>
            <h4 className="text-[#C9A14A] text-sm tracking-[0.25em] uppercase font-bold mb-6 font-['Inter']">Solutions</h4>
            <ul className="space-y-5">
              {footerLinks.expertise.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-zinc-300 text-sm hover:text-white transition-colors duration-300 tracking-[0.15em] uppercase flex items-center gap-2 group">
                    <span className="w-2 h-[1px] bg-zinc-700 transition-all duration-300 group-hover:w-4 group-hover:bg-[#C9A14A]"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* GLOBAL FIELD COORDINATES */}
          <div className="lg:col-span-3 lg:pl-4">
            <span className="text-xs font-mono tracking-[0.35em] text-zinc-500 block mb-8 uppercase font-bold">Get In Touch</span>
            <h4 className="text-[#C9A14A] text-sm tracking-[0.25em] uppercase font-bold mb-6 font-['Inter']">Contact</h4>
            <div className="space-y-6">
              {/* Locations */}
              <div className="flex items-start gap-4 cursor-default group">
                <MapPin className="w-5 h-5 text-[#C9A14A] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-zinc-300 text-sm leading-relaxed tracking-[0.15em] uppercase font-bold">
                    Offices:
                  </p>
                  <p className="text-zinc-400 text-sm font-mono mt-1 tracking-wider uppercase">
                    Delhi • Faridabad • Indore
                  </p>
                </div>
              </div>

              {/* Direct Comms */}
              <div className="space-y-4 pt-2 border-t border-zinc-900">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase font-bold">Phone:</span>
                  <a href="tel:+919312437037" className="text-[#C9A14A] text-sm font-bold font-mono hover:text-[#b8902e] transition-colors">+91 93124 37037</a>
                  <a href="tel:+919770066611" className="text-[#C9A14A] text-sm font-bold font-mono hover:text-[#b8902e] transition-colors">+91 97700 66611</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase font-bold">Email:</span>
                  <a href="mailto:connect@vrihadvastu.com" className="text-zinc-300 text-sm font-mono hover:text-[#C9A14A] transition-colors">connect@vrihadvastu.com</a>
                  <a href="mailto:ask@vrihadvastu.com" className="text-zinc-300 text-sm font-mono hover:text-[#C9A14A] transition-colors">ask@vrihadvastu.com</a>
                </div>
              </div>
              
              <div className="pt-4">
                <Link to="/contact" className="inline-flex items-center gap-4 text-white text-sm font-bold tracking-[0.25em] uppercase border-b border-[#C9A14A]/40 pb-2 hover:border-[#C9A14A] hover:gap-6 transition-all duration-300 group">
                  Book a Consultation
                  <ArrowUpRight className="w-4 h-4 text-[#C9A14A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METRIC BAR */}
        <div className="pt-10 mt-4 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-zinc-500 tracking-[0.3em] uppercase font-mono text-center sm:text-left">
            © {currentYear} Vrihad Vastu. Vedic Architecture & Earth Energetics.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-sm text-zinc-500 hover:text-[#C9A14A] transition-colors duration-300 tracking-[0.25em] font-mono uppercase">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-zinc-500 hover:text-[#C9A14A] transition-colors duration-300 tracking-[0.25em] font-mono uppercase">
              Terms of Use
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default PremiumFooter;