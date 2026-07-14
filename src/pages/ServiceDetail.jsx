import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, ChevronRight, 
  Home as HomeIcon, Briefcase, Factory, Radar,
  ShieldCheck, Zap, Target, Users
} from 'lucide-react';
import Breadcrumbs from '../Components/Breadcrumbs';

const serviceData = {
  "home-design": {
    title: "Home Design",
    heroTitle: "Scientific Home Design for Modern Living",
    heroSubtitle: "Your home influences every aspect of life, including health, relationships, finances, emotional well-being, and personal growth. Our Home Design Consultation combines directional planning, space optimization, and energy balancing principles to create a residence that supports a thriving lifestyle.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a12cf1a50?q=80&w=2070",
    sections: [
      {
        title: "Why Home Design Matters",
        desc: "A well-designed home can help:",
        items: [
          "Improve family harmony",
          "Support physical and mental wellness",
          "Enhance financial stability",
          "Create peaceful living environments",
          "Encourage positive relationships",
          "Increase comfort and functionality"
        ]
      },
      {
        title: "Areas We Analyze",
        grid: [
          { t: "Main Entrance", d: "The entrance acts as the primary energy gateway and influences opportunities, growth, and overall household dynamics." },
          { t: "Living Room", d: "Designed to encourage communication, positivity, and family bonding." },
          { t: "Kitchen", d: "Optimized to support health, nourishment, and household prosperity." },
          { t: "Master Bedroom", d: "Planned for stability, relaxation, and stronger relationships." },
          { t: "Children's Rooms", d: "Designed to improve focus, learning, creativity, and confidence." },
          { t: "Prayer & Meditation Space", d: "Created to enhance inner peace and spiritual growth." }
        ]
      }
    ],
    process: ["Property Layout Analysis", "Directional Mapping", "Energy Assessment", "Recommendations & Planning", "Implementation Support"],
    benefits: ["Better family relationships", "Enhanced peace of mind", "Improved health environment", "Optimized living spaces", "Greater emotional balance", "Long-term residential comfort"],
    cta: "Ready to create a harmonious home environment?",
    ctaBtn: "Schedule Your Home Design Consultation"
  },
  "office-design": {
    title: "Office Design",
    heroTitle: "Strategic Office Design for Business Success",
    heroSubtitle: "Office environments directly influence employee performance, leadership effectiveness, decision-making quality, and business growth.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    sections: [
      {
        title: "Key Focus Areas",
        grid: [
          { t: "Reception Area", d: "Creates strong first impressions and professional credibility." },
          { t: "Executive Cabins", d: "Supports leadership, clarity, confidence, and strategic thinking." },
          { t: "Workstations", d: "Improves employee productivity and collaboration." },
          { t: "Conference Rooms", d: "Encourages effective communication and decision-making." },
          { t: "Finance Department", d: "Supports organization, planning, and financial management." },
          { t: "Innovation Zones", d: "Designed to promote creativity and fresh thinking." }
        ]
      },
      {
        title: "Industries Served",
        items: ["IT Companies", "Corporate Offices", "Startups", "Educational Institutions", "Healthcare Facilities", "Consulting Firms"]
      }
    ],
    process: ["Workplace Assessment", "Functional Analysis", "Strategic Planning", "Implementation Guidance", "Performance Review"],
    benefits: ["Increased productivity", "Better employee engagement", "Enhanced leadership performance", "Improved workplace communication", "Stronger business growth potential", "Better organizational efficiency"],
    cta: "Transform your workspace into a growth-driven environment.",
    ctaBtn: "Book an Office Design Consultation"
  },
  "factory-design": {
    title: "Factory Design",
    heroTitle: "Industrial Planning for Productivity and Performance",
    heroSubtitle: "Factory environments require careful planning to support operational efficiency, employee safety, workflow optimization, and business expansion.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
    sections: [
      {
        title: "Areas Covered",
        grid: [
          { t: "Main Entry & Logistics", d: "Efficient movement of materials and resources." },
          { t: "Production Zones", d: "Optimized layouts for manufacturing efficiency." },
          { t: "Machinery Placement", d: "Strategic positioning for smooth operations." },
          { t: "Raw Material Storage", d: "Improved accessibility and organization." },
          { t: "Quality Control Areas", d: "Designed for effective inspection and compliance." },
          { t: "Administrative Offices", d: "Supports management efficiency and coordination." }
        ]
      },
      {
        title: "Industries We Serve",
        items: ["Manufacturing", "Engineering", "Textile", "Food Processing", "Pharmaceuticals", "Automotive Components", "Packaging"]
      }
    ],
    process: ["Site Survey", "Industrial Layout Analysis", "Process Flow Evaluation", "Planning Recommendations", "Implementation Support"],
    benefits: ["Improved production efficiency", "Better workflow management", "Enhanced worker safety", "Reduced operational bottlenecks", "Better resource utilization", "Long-term scalability"],
    cta: "Build a factory designed for efficiency and growth.",
    ctaBtn: "Request Factory Design Consultation"
  },
  "developer-projects": {
    title: "Developer Projects",
    heroTitle: "Large-Scale Planning Solutions for Developers",
    heroSubtitle: "Comprehensive planning solutions for residential, commercial, and mixed-use developments designed to maximize value and market appeal.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    sections: [
      {
        title: "Project Types",
        items: ["Residential Townships", "Apartment Projects", "Commercial Complexes", "Mixed-Use Developments", "Retail Centers"]
      },
      {
        title: "Services Included",
        grid: [
          { t: "Master Planning", d: "Strategic project layout development." },
          { t: "Site Analysis", d: "Detailed property evaluation." },
          { t: "Zoning Recommendations", d: "Optimal utilization of available land." },
          { t: "Infrastructure Planning", d: "Roads, utilities, and circulation systems." },
          { t: "Amenity Placement", d: "Parks, recreation, and community spaces." }
        ]
      }
    ],
    process: ["Customized project strategies", "Detailed site evaluation", "Practical implementation guidance", "Professional planning methodology", "Scalable solutions for projects of all sizes"],
    benefits: ["Increased project appeal", "Better land utilization", "Enhanced buyer confidence", "Stronger project positioning", "Improved development efficiency", "Greater long-term value"],
    cta: "Large-scale excellence for visionary developers.",
    ctaBtn: "Initiate Developer Consultation"
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const data = serviceData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) return <Navigate to="/services" />;

  return (
    <div className="bg-[#FAF9F5] min-h-screen selection:bg-[#C9A14A]/20">
      <Breadcrumbs 
        title={data.title} 
        subtitle={data.heroTitle}
        image={data.image}
      />

      {/* Main Narrative */}
      <section className="py-24 px-6 sm:px-12 lg:px-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A14A]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="font-['Cinzel'] text-xs tracking-[0.4em] text-[#C9A14A] font-bold uppercase block mb-6">About This Service</span>
                <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-light leading-tight mb-8 text-[#111111]">
                  {data.heroTitle}
                </h2>
                <p className="text-zinc-600 text-lg sm:text-xl font-light leading-relaxed mb-12 italic border-l-2 border-[#C9A14A]/30 pl-8">
                  {data.heroSubtitle}
                </p>

                {data.sections.map((section, idx) => (
                  <div key={idx} className="mb-16 last:mb-0">
                    <h3 className="font-['Cinzel'] text-sm tracking-[0.2em] font-bold text-[#111111] uppercase mb-8 border-b border-[#C9A14A]/10 pb-4">
                      {section.title}
                    </h3>
                    {section.desc && <p className="text-zinc-500 mb-6 font-medium">{section.desc}</p>}
                    
                    {section.grid ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {section.grid.map((item, i) => (
                          <div key={i} className="group">
                             <div className="flex items-center gap-3 mb-2">
                               <div className="w-1.5 h-1.5 rounded-full bg-[#C9A14A]" />
                               <h4 className="font-['Cinzel'] text-xs tracking-widest font-bold text-zinc-900 uppercase">{item.t}</h4>
                             </div>
                             <p className="text-sm text-zinc-500 font-light leading-relaxed pl-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">{item.d}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-3">
                        {section.items.map((item, i) => (
                          <span key={i} className="px-4 py-2 bg-[#FCFAF6] border border-[#C9A14A]/20 text-[#C9A14A] text-[10px] tracking-widest font-bold uppercase rounded-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Sidebar / Stats */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                {/* Benefits Card */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#111111] p-10 rounded-[2rem] text-white shadow-2xl relative overflow-hidden"
                >
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A14A]/10 blur-3xl rounded-full" />
                   <h3 className="font-['Cormorant_Garamond'] text-3xl font-light mb-8 text-[#C9A14A] italic">Key Benefits</h3>
                   <ul className="space-y-5">
                      {data.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-4">
                           <CheckCircle2 className="w-5 h-5 text-[#C9A14A] shrink-0 mt-0.5" />
                           <span className="text-zinc-300 font-light text-sm tracking-wide">{benefit}</span>
                        </li>
                      ))}
                   </ul>
                </motion.div>

                {/* Consultation Process List */}
                <div className="p-10 border border-[#C9A14A]/10 bg-white rounded-[2rem]">
                  <h3 className="font-['Cinzel'] text-xs tracking-[0.3em] font-bold text-[#111111] uppercase mb-8">Our Process</h3>
                  <div className="space-y-6">
                    {data.process.map((step, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full border border-[#C9A14A]/30 flex items-center justify-center text-[10px] font-bold text-[#C9A14A] group-hover:bg-[#C9A14A] group-hover:text-white transition-all duration-300">
                             {i + 1}
                          </div>
                          {i < data.process.length - 1 && <div className="w-[1px] h-full bg-[#C9A14A]/10 mt-2" />}
                        </div>
                        <div className="pb-4">
                           <p className="text-sm font-['Cinzel'] font-bold tracking-widest text-zinc-800 uppercase mb-1">Step {i + 1}</p>
                           <p className="text-xs text-zinc-400 font-light uppercase tracking-widest">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-12 lg:px-16 bg-[#FAF9F5]">
        <div className="max-w-[1280px] mx-auto">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-[#111111] rounded-[3rem] p-12 sm:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#C9A14A]/5 opacity-50" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl font-light text-white mb-6">
                {data.cta}
              </h2>
              <div className="w-16 h-[1px] bg-[#C9A14A] mx-auto mb-10" />
              <Link to="/contact">
                <button className="px-12 py-5 bg-[#C9A14A] hover:bg-white text-[#111111] font-['Cinzel'] text-xs font-bold tracking-[0.3em] uppercase transition-all duration-500 shadow-xl">
                  {data.ctaBtn}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-[#C9A14A]/10 bg-white">
        <p className="text-[9px] tracking-[0.5em] text-zinc-400 font-bold uppercase transition-colors hover:text-[#C9A14A]">
          © 2026 Vrihad Vastu // Vedic Architecture & Earth Energetics
        </p>
      </footer>
    </div>
  );
};

export default ServiceDetail;
