import React from 'react';
import HeroSection from '../Components/home/HeroSection';
import About from '../Components/home/About';
import ServicesSection from '../Components/home/ServicesSection';
import CTA from '../Components/home/TrustSection';
import { BenefitsSection, TestimonialSection } from '../Components/home/Testemonials';
import EarthEnergeticsLab from '../Components/home/EarthLab';
import { ProcessSection, ToolsSection } from '../Components/home/Process';

const Home = () => {
  return (
    <main className="bg-[#FAF9F5] text-[#111827]">
      <HeroSection />
      
      <div className="border-t border-[#C9A14A]/10">
        <About />
      </div>
      
      <ServicesSection />
      
      <div className="border-t border-[#C9A14A]/10">
        <EarthEnergeticsLab/>
      </div>
      
      <div className="border-t border-[#C9A14A]/10">
        <ToolsSection/>
      </div>
      
      <div className="border-t border-[#C9A14A]/10">
        <ProcessSection/>
      </div>
      
      <BenefitsSection/>
      
      <div className="border-t border-[#C9A14A]/10">
        <TestimonialSection/>
      </div>
      
      <CTA /> 
    </main>
  );
};

export default Home;

