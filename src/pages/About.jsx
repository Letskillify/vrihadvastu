import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Award, Quote, ArrowRight, ShieldAlert, Layers, RefreshCw, 
  Briefcase, Wallet, Users, GraduationCap, HeartPulse,
  User, CheckCircle2, ChevronRight
} from 'lucide-react';

import Breadcrumbs from '../Components/Breadcrumbs';

// --- Sub-components for Cleanliness ---

const GlassCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-xl bg-white/40 border border-white/50 shadow-sm rounded-2xl p-8 transition-all duration-500 hover:bg-white/60 hover:shadow-md ${className}`}>
    {children}
  </div>
);

const FeatureItem = ({ icon: Icon, title, desc }) => (
  <div className="flex gap-4 group">
    <div className="flex-shrink-0 w-11 h-11 bg-white border border-[#C9A14A]/10 flex items-center justify-center rounded-xl group-hover:bg-[#C9A14A] group-hover:border-[#C9A14A] transition-all duration-500 shadow-sm">
      <Icon className="w-5 h-5 text-[#C9A14A] group-hover:text-white transition-colors" />
    </div>
    <div>
      <h5 className="text-[13px] font-bold uppercase tracking-widest text-[#111111] mb-1 font-['Cinzel']">{title}</h5>
      <p className="text-sm text-zinc-500 font-light leading-relaxed">{desc}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="bg-[#FAF9F5] text-[#111111] min-h-screen font-['Inter'] selection:bg-[#C9A14A]/20 overflow-x-hidden">
      <Breadcrumbs 
        title="About Us" 
        subtitle="For over 25 years, we have helped map and balance earth energy in homes, offices, and factories across India."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
      />

      {/* 1. COMPACT OVERVIEW & STATS */}
      <section className="py-20 px-6 sm:px-12 lg:px-16 border-b border-[#C9A14A]/10 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-['Cinzel'] text-xs tracking-[0.4em] text-[#C9A14A] font-bold uppercase block mb-4">
                Our History
              </span>
              <h2 className="font-['Cormorant_Garamond'] text-5xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-8">
                A Twenty-Five Year <br />
                <span className="italic">History & Vision</span>
              </h2>
              <p className="text-zinc-600 font-light text-lg leading-relaxed max-w-xl mb-10">
                For over two decades, Vrihad Vastu has shown that buildings and workspaces act as living energy systems. We help align your property with the natural laws of energy to create spaces where people and businesses can thrive.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="font-['Cormorant_Garamond'] text-6xl text-[#111111] font-light block mb-2">25+</span>
                  <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-400">Years Of Deep Research</span>
                </div>
                <div>
                  <span className="font-['Cormorant_Garamond'] text-6xl text-[#111111] font-light block mb-2">10k+</span>
                  <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-400">Environments Harmonized</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070" 
                alt="Environmental Resonance" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-white/70 text-[10px] tracking-[0.3em] uppercase block mb-2">Featured Project</span>
                <h4 className="text-white text-xl font-['Cinzel']">Residential Harmonization Project</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP: DEVENDRA SINGHAI */}
      <section className="py-24 px-6 sm:px-12 lg:px-16 bg-[#FAF9F5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A14A]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="mb-16">
            <span className="font-['Cinzel'] text-xs tracking-[0.4em] text-[#C9A14A] font-bold uppercase block mb-4">Our Founder</span>
            <h2 className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl font-light italic">The Founder's Vision</h2>
          </div>

          <div className="max-w-5xl">
            <GlassCard className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-white shadow-xl">
                <img src="img/Dv.webp" alt="Devendra Singhai" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-light mb-4">Vastuvid <br /> Devendra Singhai</h3>
                <div className="inline-flex items-center gap-3 mb-6">
                  <Award className="w-5 h-5 text-[#C9A14A]" />
                  <span className="text-xs tracking-[0.3em] uppercase font-bold text-[#C9A14A]">Gold Medalist Vastu Expert</span>
                </div>
                <p className="text-zinc-700 text-xl font-light leading-relaxed mb-8 italic border-l-2 border-[#C9A14A]/30 pl-6">
                  "Architecture is not just about brick and mortar; it is about aligning our spaces with the earth's natural energy."
                </p>
                <p className="text-zinc-500 text-lg font-light leading-relaxed">
                  With over 25 years of deep research, Devendra Singhai has committed his life to decoding foundational energy blueprints, transforming ancient Vedic principles into precise physical equations for modern structures.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 2b. LEADERSHIP: ASHISH SINGHAI (EXPANDED PREMIUM SECTION) */}
      <section className="py-24 px-6 sm:px-12 lg:px-16 bg-white border-y border-[#C9A14A]/10 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C9A14A]/5 rounded-full blur-[100px] -ml-32 -mb-32" />
        
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative group">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-[#C9A14A]/20 rounded-3xl translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
                
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white bg-zinc-100">
                  <img 
                    src="img/a.jpeg" 
                    alt="Ashish Singhai" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Accent Badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#111111] text-white p-6 rounded-2xl shadow-xl border border-white/10 hidden md:block">
                  <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#C9A14A] block mb-1">Vastu Specialist</span>
                  <span className="font-['Cinzel'] text-sm font-bold">Ashish Singhai</span>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <span className="font-['Cinzel'] text-xs tracking-[0.4em] text-[#C9A14A] font-bold uppercase block mb-4">Lead Consultant</span>
              <h2 className="font-['Cormorant_Garamond'] text-5xl lg:text-7xl font-light mb-2">Ashish Singhai</h2>
              <h4 className="font-['Cinzel'] text-sm tracking-[0.2em] font-bold text-zinc-400 uppercase mb-8">Vastu & Earth Energetics expert</h4>
              
              <div className="space-y-8 mb-12">
                <div className="space-y-2">
                  <h3 className="font-['Cinzel'] text-xl tracking-widest text-[#111111] font-bold uppercase">Scientific Vastu Corrections Without Demolition</h3>
                  <p className="text-zinc-600 text-lg font-light leading-relaxed">
                    Advanced Space Harmonization for Homes, Flats, Plots & Commercial Sites
                  </p>
                </div>
                <p className="text-zinc-600 text-base leading-relaxed font-light">
                  Using advanced diagnostic tools like the <strong className="text-[#111111] font-medium">Lecher Antenna</strong> and <strong className="text-[#111111] font-medium">Universal Aura Scanner</strong>, we identify and neutralize negative energies and Geopathic Stress—completely avoiding structural demolition.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
                <div className="space-y-4">
                  <h5 className="font-['Cinzel'] text-[11px] tracking-[0.3em] font-bold uppercase text-[#C9A14A] mb-4 border-b border-[#C9A14A]/10 pb-2">Our Specialized Expertise:</h5>
                  <ul className="space-y-4">
                    {[
                      { t: "Career & Business", d: "Accelerating Business Growth & Unlocking New Career Opportunities" },
                      { t: "Financial Wellness", d: "Enhancing Savings, Liquid Cash Flow & Overcoming Stagnation" },
                      { t: "Family & Relationships", d: "Resolving Delays in Marriage & Fostering Deep Family Harmony" }
                    ].map((item, idx) => (
                      <li key={idx} className="group">
                        <span className="block text-sm font-bold uppercase tracking-wider text-[#111111] mb-1 group-hover:text-[#C9A14A] transition-colors">{item.t}</span>
                        <span className="text-xs text-zinc-500 font-light leading-relaxed block">{item.d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 md:pt-10">
                  <ul className="space-y-4">
                    {[
                      { t: "Education", d: "Boosting Focus, Concentration & Success in Studies" },
                      { t: "Health & Vitality", d: "Balancing Space Energies for Better Health Care & Well-being" },
                    ].map((item, idx) => (
                      <li key={idx} className="group">
                        <span className="block text-sm font-bold uppercase tracking-wider text-[#111111] mb-1 group-hover:text-[#C9A14A] transition-colors">{item.t}</span>
                        <span className="text-xs text-zinc-500 font-light leading-relaxed block">{item.d}</span>
                      </li>
                    ))}
                    <li>
                       <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-400 italic">...and much more.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Second Content Block Integration */}
              <div className="pt-8 border-t border-[#C9A14A]/10">
                <h4 className="font-['Cinzel'] text-sm tracking-[0.3em] font-bold text-[#111111] uppercase mb-6 italic text-zinc-400">NON-DESTRUCTIVE VASTU SOLUTIONS</h4>
                <div className="flex flex-wrap gap-x-8 gap-y-4 mb-6">
                   <span className="text-xs tracking-[0.2em] font-bold uppercase py-1 px-3 bg-[#FCFAF6] border border-[#C9A14A]/20 text-[#C9A14A]">Scan • Analyze • Harmonize</span>
                   <span className="text-xs tracking-[0.2em] font-light text-zinc-500 italic">No Demolition. Pure Science. Proven Results.</span>
                </div>
                <p className="text-sm text-zinc-600 font-light mb-6">Customized Vastu & Energy Audits for Homes, Plots, and Businesses.</p>
                <div className="space-y-3">
                  <p className="text-xs font-bold tracking-widest text-[#111111] uppercase mb-4 font-['Cinzel']">Transforming Spaces, Elevating Lives:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-zinc-500 uppercase tracking-widest font-medium">
                    <div className="flex items-center gap-2">
                       <span className="w-1 h-1 bg-[#C9A14A] rounded-full" />
                       New Opportunities in Career & Business Growth
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="w-1 h-1 bg-[#C9A14A] rounded-full" />
                       Overcoming Delays in Marriage & Relationships
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="w-1 h-1 bg-[#C9A14A] rounded-full" />
                       Academic Success & Sharper Focus for Students
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="w-1 h-1 bg-[#C9A14A] rounded-full" />
                       Financial Stability & Sustained Savings
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="w-1 h-1 bg-[#C9A14A] rounded-full" />
                       Enhanced Health, Harmony, and Peace of Mind
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* 3. CORE EXPERTISE MATRIX */}
      <section className="py-24 px-6 sm:px-12 lg:px-16 bg-white border-y border-[#C9A14A]/10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4">
            <span className="font-['Cinzel'] text-xs tracking-[0.4em] text-[#C9A14A] font-bold uppercase block mb-4">Our Services</span>
            <h2 className="font-['Cormorant_Garamond'] text-5xl font-light mb-6">Key Solutions</h2>
            <p className="text-zinc-600 text-base font-light leading-relaxed mb-8">
              We offer personalized Vastu and Earth Energy audits for homes, offices, and factories to improve health, sleep, and operations.
            </p>
            <Link to="/services" className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] font-bold uppercase hover:text-[#C9A14A] transition-colors group">
              Explore Our Services <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <FeatureItem icon={Briefcase} title="Business Growth" desc="Boost team productivity and clear stale or blocked business energies." />
            <FeatureItem icon={Wallet} title="Financial Flow" desc="Improve financial savings and resolve obstacles to money flow." />
            <FeatureItem icon={Users} title="Family & Office Harmony" desc="Bring back family peace, work harmony, and better partner dynamics." />
            <FeatureItem icon={HeartPulse} title="Health & Energy" desc="Remove harmful grid line stress for better sleep and wellness." />
          </div>
        </div>
      </section>

      {/* 4. THE PHYSICS BLOCK (DARK & PREMIUM) */}
      <section className="py-24 px-6 sm:px-12 lg:px-16 bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#C9A14A_1px,transparent_1px),linear-gradient(to_bottom,#C9A14A_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-['Cinzel'] text-xs tracking-[0.4em] text-[#C9A14A] font-bold uppercase block mb-4">Scientific Basis</span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-light">The Science of Earth Energetics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldAlert, t: "Geopathic Stress", d: "Finding and blocking harmful energy lines caused by underground water and rock cracks." },
              { icon: Layers, t: "Hartmann & Curry Grids", d: "Mapping grid networks on the plot to prevent placing beds or desks on stressful nodes." },
              { icon: RefreshCw, t: "Energy Clearing", d: "Clearing stored historical memory from the property to make it feel fresh and clean." }
            ].map((item, i) => (
              <div key={i} className="text-center border border-white/10 p-10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500">
                <item.icon className="w-10 h-10 text-[#C9A14A] mx-auto mb-6 stroke-[1px]" />
                <h4 className="text-base font-bold uppercase tracking-widest text-white mb-4 font-['Cinzel']">{item.t}</h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VALIDATED METRICS & CTA */}
      <section className="py-24 px-6 sm:px-12 lg:px-16 bg-[#FAF9F5]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
            <div className="lg:col-span-5">
              <span className="font-['Cinzel'] text-xs tracking-[0.3em] text-[#C9A14A] font-bold uppercase block mb-6">Proven Results</span>
              <div className="space-y-12">
                <div>
                  <span className="font-['Cormorant_Garamond'] text-7xl font-light text-[#111111] block mb-2">42%</span>
                  <p className="text-sm tracking-widest uppercase text-zinc-400 font-bold">Productivity Boost</p>
                </div>
                <div>
                  <span className="font-['Cormorant_Garamond'] text-7xl font-light text-[#111111] block mb-2">60%</span>
                  <p className="text-sm tracking-widest uppercase text-zinc-400 font-bold">Fewer Machine Breakdowns</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-12 rounded-3xl shadow-sm border border-[#C9A14A]/10 relative">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-[#C9A14A]/10" />
                <p className="font-['Cormorant_Garamond'] text-2xl italic text-zinc-600 leading-relaxed font-light mb-8">
                  "After Vrihad Vastu scanned our factory floor and placed remedies, machine breakdowns stopped completely. The work environment feels peaceful and productive."
                </p>
                <div>
                  <span className="block font-['Cinzel'] text-xs tracking-widest font-bold text-[#111111] uppercase">Factory Owner</span>
                  <span className="block text-[10px] text-zinc-400 font-bold uppercase mt-1 tracking-wider">Industrial Client</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#111111] rounded-[2rem] p-12 sm:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#C9A14A]/5 opacity-50" />
            <div className="relative z-10">
              <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl font-light text-white mb-8">
                Improve the Energy of <br />
                <span className="italic text-[#C9A14A]">Your Space</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact">
                  <button className="px-10 py-4 bg-[#C9A14A] text-[#111111] font-['Cinzel'] text-xs font-bold tracking-[0.2em] hover:bg-white transition-all duration-300">
                    Book an Energy Audit
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-10 py-4 border border-white/20 text-white font-['Cinzel'] text-xs font-bold tracking-[0.2em] hover:bg-[#C9A14A] hover:border-[#C9A14A] hover:text-[#111111] transition-all duration-300">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center bg-white border-t border-[#C9A14A]/10">
        <p className="text-[10px] tracking-[0.4em] text-zinc-400 font-bold uppercase">
          © 2026 Vrihad Vastu // Vedic Architecture & Earth Energetics
        </p>
      </footer>
    </div>
  );
};

export default About;