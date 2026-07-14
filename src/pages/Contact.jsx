import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Globe, 
  Instagram,
  Linkedin,
  Facebook
} from 'lucide-react';

import Breadcrumbs from '../Components/Breadcrumbs';

const ContactField = ({ label, type = "text", placeholder, name, value, onChange, required = true }) => (
  <div className="flex flex-col gap-2.5 w-full">
    <label className="text-sm tracking-[0.2em] uppercase text-[#C9A14A] font-bold font-['Inter']">
      {label} {required && <span className="opacity-50">*</span>}
    </label>
    <input 
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="bg-transparent border-b border-[#C9A14A]/20 py-4 focus:border-[#111111] outline-none transition-all duration-300 font-light text-base sm:text-lg text-[#111111] placeholder:text-zinc-400"
    />
  </div>
);

const VrihadVastuContact = () => {
  const [activeTab, setActiveTab] = useState('industrial');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    concerns: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Vrihad Vastu Energy Audit Request*%0A%0A` +
      `*Full Name:* ${formData.name}%0A` +
      `*Company:* ${formData.company || 'N/A'}%0A` +
      `*Address:* ${formData.address}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Audit Type:* ${activeTab.toUpperCase()}%0A` +
      `*Concerns:* ${formData.concerns}`;
    
    window.open(`https://wa.me/919312437037?text=${message}`, '_blank');
  };

  return (
    <div className="bg-[#FAF8F4] min-h-screen selection:bg-[#C9A14A]/20">
      <Breadcrumbs 
        title="Contact Us" 
        subtitle="Reach out to Vrihad Vastu for a personalised Vastu or Earth Energetics consultation. We serve homes, offices, and industrial units across India."
        image="https://images.unsplash.com/photo-1423739139446-24af0a242f36?q=80&w=2070"
      />
      
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
        
        {/* Subtle Luxury Geometric Lines */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#C9A14A_1px,transparent_1px),linear-gradient(to_bottom,#C9A14A_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        
        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT SIDE: EDITORIAL CONTACT INDEX */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="space-y-10">
                
                {/* Office Frame */}
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-[#111111] flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105">
                    <MapPin size={18} className="text-[#C9A14A]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-xs font-mono tracking-widest text-zinc-500 block mb-1 font-bold">Our Offices</span>
                    <h4 className="font-['Cormorant_Garamond'] text-2xl text-[#111111] font-light tracking-tight mb-2">Office Locations</h4>
                    <p className="text-zinc-600 font-light text-base leading-relaxed">
                      <strong>Delhi:</strong> 8, Bahubali Enclave, Delhi-92 <br />
                      <strong>Faridabad:</strong> 147, 1st Floor, Om Shubham Tower, N.I.T. <br />
                      <strong>Indore:</strong> 134, Tilak Nagar, Indore-18 (M.P.)
                    </p>
                  </div>
                </div>

                {/* Direct Line Frame */}
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-[#111111] flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105">
                    <Phone size={18} className="text-[#C9A14A]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-xs font-mono tracking-widest text-zinc-500 block mb-1 font-bold">Phone</span>
                    <h4 className="font-['Cormorant_Garamond'] text-2xl text-[#111111] font-light tracking-tight mb-2">Call Us</h4>
                    <a href="tel:+919312437037" className="text-[#C9A14A] text-lg font-bold hover:text-[#b8902e] transition-colors tracking-wide block">
                      +91 93124 37037
                    </a>
                    <a href="tel:+919770066611" className="text-[#C9A14A] text-lg font-bold hover:text-[#b8902e] transition-colors tracking-wide block">
                      +91 97700 66611
                    </a>
                  </div>
                </div>

                {/* Digital Inquiry Frame */}
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-[#111111] flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105">
                    <Mail size={18} className="text-[#C9A14A]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-xs font-mono tracking-widest text-zinc-500 block mb-1 font-bold">Email</span>
                    <h4 className="font-['Cormorant_Garamond'] text-2xl text-[#111111] font-light tracking-tight mb-2">Write to Us</h4>
                    <a href="mailto:connect@vrihadvastu.com" className="text-zinc-700 text-lg font-light hover:text-[#C9A14A] transition-colors tracking-wide block">
                      connect@vrihadvastu.com
                    </a>
                    <a href="mailto:ask@vrihadvastu.com" className="text-zinc-700 text-lg font-light hover:text-[#C9A14A] transition-colors tracking-wide block">
                      ask@vrihadvastu.com
                    </a>
                  </div>
                </div>

              </div>

              {/* Social Footprint Section */}
              <div className="pt-10 border-t border-[#C9A14A]/15">
                <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 font-bold mb-5 font-['Inter']">
                  Follow Us
                </p>
                <div className="flex gap-5">
                  {[
                    { Icon: Instagram, link: "#" },
                    { Icon: Linkedin, link: "#" },
                    { Icon: Facebook, link: "#" },
                    { Icon: Globe, link: "#" }
                  ].map((item, i) => (
                    <motion.a 
                      key={i} 
                      href={item.link} 
                      whileHover={{ y: -3 }}
                      className="w-10 h-10 bg-white border border-[#C9A14A]/20 flex items-center justify-center text-[#111111] hover:text-[#C9A14A] hover:border-[#C9A14A] transition-colors"
                    >
                      <item.Icon size={16} strokeWidth={1.5} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: FLAT LUXURY CHALK PANEL FORM */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#C9A14A]/15 shadow-[0_25px_50px_rgba(201,161,74,0.03)] relative"
            >
              {/* Form Label Tag */}
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#111111] text-[#C9A14A] font-mono text-xs tracking-[0.25em] px-3 py-1 uppercase font-bold">
                Free Consultation
              </div>

              {/* Architectural Block Tabs Selector */}
              <div className="flex flex-wrap gap-2 mb-12 border-b border-zinc-100 pb-6">
                {['Industrial', 'Commercial', 'Residential'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`px-5 py-2.5 text-xs tracking-[0.25em] uppercase font-bold transition-all duration-300 ${
                      activeTab === tab.toLowerCase()
                        ? 'bg-[#111111] text-white' 
                        : 'bg-[#FAF8F4] text-zinc-500 border border-transparent hover:border-[#C9A14A]/30 hover:text-[#111111]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                  <ContactField 
                    label="Your Full Name" 
                    placeholder="e.g., Ashish Singhai" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <ContactField 
                    label="Company / Property Name" 
                    placeholder="e.g., My Business Name" 
                    name="company"
                    required={false}
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                  <ContactField 
                    label="Your Email" 
                    type="email" 
                    placeholder="name@domain.com" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <ContactField 
                    label="Your Phone Number" 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Row 3 Full Width Layout Element */}
                <ContactField 
                  label="Property Address" 
                  placeholder="City, State or full address" 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />

                {/* Textarea Concerns Frame */}
                <div className="flex flex-col gap-2.5 w-full">
                  <label className="text-sm tracking-[0.3em] uppercase text-[#C9A14A] font-bold font-['Inter']">
                    Your Concerns *
                  </label>
                  <textarea 
                    rows="4"
                    name="concerns"
                    value={formData.concerns}
                    onChange={handleChange}
                    required
                    placeholder="Describe what problems you are facing — health issues, machine breakdowns, financial stress, sleep problems, etc."
                    className="bg-transparent border-b border-[#C9A14A]/20 py-4 focus:border-[#111111] outline-none transition-all duration-300 font-light text-base sm:text-lg text-[#111111] placeholder:text-zinc-400 resize-none"
                  />
                </div>

                {/* Extreme Premium Action Trigger */}
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                  className="w-full py-5 bg-[#111111] text-white font-['Cinzel'] tracking-[0.3em] text-sm font-bold uppercase flex items-center justify-center gap-4 transition-colors duration-300 hover:bg-[#C9A14A] hover:text-[#111111] relative shadow-lg group"
                >
                  <span>Send Message on WhatsApp</span>
                  <Send size={12} className="transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
                </motion.button>

              </form>

              {/* Frame Footer Legal Compliance Text */}
              <p className="mt-6 text-center text-zinc-500 text-xs tracking-widest font-light font-mono font-bold">
                * Your information is kept private and will only be used to contact you about your consultation.
              </p>
            </motion.div>

          </div>

          {/* EDITORIAL GEOMETRIC MAP PLACEHOLDER */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-24 h-[400px] w-full border border-[#C9A14A]/20 relative group overflow-hidden bg-zinc-100"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033')] bg-cover bg-center grayscale brightness-95 opacity-20 transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-transparent to-transparent" />
            
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="bg-white p-8 border border-[#C9A14A]/20 max-w-md text-center shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
                <span className="text-[#C9A14A] font-mono text-[9px] tracking-[0.4em] block mb-2 uppercase">Our Reach</span>
                <h3 className="font-['Cormorant_Garamond'] text-3xl text-[#111111] font-light tracking-tight mb-2">Serving Across India</h3>
                <p className="text-xs text-zinc-500 uppercase tracking-[0.2em] leading-relaxed">
                  We consult for homes, offices, factories, and real estate projects across Delhi, Faridabad, Indore, and all major cities in India.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default VrihadVastuContact;