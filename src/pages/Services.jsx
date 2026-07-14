import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveRight } from 'lucide-react';
import Breadcrumbs from '../Components/Breadcrumbs';

const services = [
  {
    title: "Home Design",
    desc: "Create a balanced and harmonious living environment that supports health, prosperity, relationships, and overall well-being through scientifically planned spaces.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a12cf1a50?q=80&w=2070",
    focus: "Health • Harmony • Prosperity",
    slug: "home-design"
  },
  {
    title: "Office Design",
    desc: "Design workspaces that encourage focus, productivity, leadership, teamwork, decision-making, and long-term business growth.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    focus: "Focus • Growth • Success",
    slug: "office-design"
  },
  {
    title: "Factory Design",
    desc: "Optimize industrial facilities to improve workflow, production efficiency, operational safety, equipment performance, and workforce productivity.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
    focus: "Production • Safety • Efficiency",
    slug: "factory-design"
  },
  {
    title: "Developer Projects",
    desc: "Planning solutions for residential and commercial developments that enhance buyer attraction, project value, sales performance, and brand reputation.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    focus: "Projects • Sales • Branding",
    slug: "developer-projects"
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="group relative overflow-hidden"
  >
    <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C9A14A]/10 bg-[#111111] shadow-2xl">
      {/* Background Image with Parallax-like effect on hover */}
      <img 
        src={service.image} 
        alt={service.title} 
        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
      />
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent opacity-90 group-hover:from-[#111111]/95 transition-all duration-500" />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <span className="font-['Cinzel'] text-[10px] tracking-[0.4em] text-[#C9A14A] font-bold uppercase block mb-4">
             // {service.focus}
          </span>
          
          <h3 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-4xl xl:text-5xl text-white font-light leading-tight mb-4 group-hover:text-[#C9A14A] transition-colors duration-500">
            {service.title}
          </h3>

          <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 mb-8">
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light max-w-sm">
              {service.desc}
            </p>
          </div>

          <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-3 text-white text-[11px] tracking-[0.3em] font-bold uppercase group/link">
            Learn More
            <div className="w-8 h-[1px] bg-[#C9A14A] group-hover/link:w-12 transition-all duration-300" />
            <MoveRight size={14} className="text-[#C9A14A]" />
          </Link>
        </div>
      </div>

      {/* Subtle Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#C9A14A_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  </motion.div>
);

const ServicesPage = () => {
  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <Breadcrumbs 
        title="Our Services" 
        subtitle="Vrihad Vastu offers expert Vastu and Earth Energetics consultations for homes, offices, and industrial units — without any demolition."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
      />

      <section className="py-24 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        {/* Architectural Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C9A14A]/[0.02] -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#C9A14A]/[0.02] skew-x-12 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto">
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="font-['Cinzel'] text-xs tracking-[0.5em] text-[#C9A14A] font-bold uppercase block mb-4">
                What We Offer
              </span>
              <h2 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl lg:text-7xl font-light leading-none tracking-tight text-[#111111]">
                Specialized <br />
                <span className="italic">Services</span>
              </h2>
            </div>
            <div className="max-w-md pb-4">
              <p className="text-zinc-500 font-light text-lg leading-relaxed">
                From homes to large factories, we offer Vastu and Earth Energetics solutions that improve health, productivity, and business growth — all without demolition.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="pb-24 px-6 sm:px-12 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111111] rounded-[2.5rem] p-12 sm:p-20 relative overflow-hidden flex flex-col items-center text-center group shadow-3xl"
        >
          <div className="absolute inset-0 bg-[#C9A14A]/[0.03] transition-colors duration-500 group-hover:bg-[#C9A14A]/[0.05]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#C9A14A]/5 blur-[120px] rounded-full" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="font-['Cinzel'] text-[10px] tracking-[0.4em] text-[#C9A14A] font-bold uppercase block mb-6">
              Get In Touch
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl font-light text-white mb-8 tracking-tight">
              Need a <br />
              <span className="italic text-[#C9A14A]">Custom Solution?</span>
            </h2>
            <p className="text-zinc-400 font-light text-base sm:text-lg mb-12 leading-relaxed">
              Every property is unique. Contact us for a personalised consultation — whether it's a home, office, factory, or a large development project.
            </p>
            <Link to="/contact">
              <button className="px-12 py-5 bg-[#C9A14A] hover:bg-white text-[#111111] font-['Cinzel'] text-xs font-bold tracking-[0.3em] uppercase transition-all duration-500 shadow-xl">
                Request a Consultation
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <footer className="py-12 border-t border-[#C9A14A]/10 text-center">
        <p className="font-['Cinzel'] text-[9px] tracking-[0.5em] text-zinc-400 font-bold uppercase">
          © 2026 Vrihad Vastu // Engineered Environmental Resonance
        </p>
      </footer>
    </div>
  );
};

export default ServicesPage;