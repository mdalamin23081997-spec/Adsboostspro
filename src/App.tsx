import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import BudgetCalculator from './components/BudgetCalculator';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import WhatsAppBubble from './components/WhatsAppBubble';
import { SERVICES_DATA } from './data';
import { Sparkles, Megaphone, CheckCircle, Shield, Play } from 'lucide-react';

export default function App() {
  const [selectedObjectiveFilter, setSelectedObjectiveFilter] = useState('');

  // Handle smooth scrolls to specific section IDs
  const scrollSectionIntoView = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset scrolling for sticky header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleServiceSelect = (objectiveKey: string) => {
    let prefill = '';
    if (objectiveKey === 'campaign-management') {
      prefill = 'Lead Generation conversion campaign';
    } else if (objectiveKey === 'facebook-boosting') {
      prefill = 'Facebook Page boosting & engagement buildup';
    } else if (objectiveKey === 'retargeting-funnels') {
      prefill = 'E-commerce direct sales scale';
    } else if (objectiveKey === 'pixel-capi-setup') {
      prefill = 'Tracking integration setup only (Pixel/CAPI)';
    }

    setSelectedObjectiveFilter(prefill);
    scrollSectionIntoView('contact');
  };

  return (
    <div className="font-sans antialiased text-zinc-900 bg-white min-h-screen selection:bg-zinc-900 selection:text-white">
      {/* Sticky navigation header bar */}
      <Navbar onNavClick={scrollSectionIntoView} />

      {/* Main Screen Hero segment */}
      <Hero
        onLearnMoreClick={() => scrollSectionIntoView('services')}
        onContactClick={() => scrollSectionIntoView('contact')}
      />

      {/* Trust credentials accent bar */}
      <div className="bg-zinc-50 border-y border-zinc-100 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-14 text-xs font-mono text-zinc-500 uppercase tracking-widest">
            <span className="flex items-center gap-1.5 font-bold">
              ⚡ ROI Optimized
            </span>
            <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full hidden sm:block"></span>
            <span className="flex items-center gap-1.5 font-bold">
              🛠️ Server-side Meta CAPI Integration
            </span>
            <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full hidden sm:block"></span>
            <span className="flex items-center gap-1.5 font-bold">
              🛡️ Ad-Account Protection Guard
            </span>
          </div>
        </div>
      </div>

      {/* Services Grid segment */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase bg-zinc-100 px-3 py-1 rounded-full">
            What We Do Best
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-zinc-900 mt-4">
            Facebook Ads & Boosting Systems
          </h2>
          <p className="text-zinc-650 mt-4 leading-relaxed">
            Choose the marketing structure that fits your business needs. From building high-ROAS purchase funnels to running professional post boosts that fill up your inbox, we deliver.
          </p>
        </div>

        {/* Dynamic Card rendering */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div id={`svc-${service.id}`} key={service.id} className="min-h-full">
              <ServiceCard
                service={service}
                onSelectSpec={() => handleServiceSelect(service.id)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Interactive budget / forecasting system */}
      <BudgetCalculator onContactClick={() => scrollSectionIntoView('contact')} />

      {/* Past results portfolio metrics display */}
      <Portfolio />

      {/* Customer testimonials layout references */}
      <Testimonials />

      {/* Leads contact and intake module */}
      <ContactSection preselectedObjective={selectedObjectiveFilter} />

      {/* Professional Footer */}
      <footer className="bg-zinc-950 text-white border-t border-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4 text-left">
            <h3 className="font-display font-bold text-xl flex items-center space-x-2">
              <span className="bg-white text-zinc-950 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-semibold">
                F
              </span>
              <span>
                Ads<span className="text-zinc-400 font-normal">Boost</span>
              </span>
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
              We provide professional Facebook Ads Campaign Management, Pixel setup, server-side Conversions API integration, and custom Boosting strategies designed to scale revenue. Our focus is ROI and absolute efficiency.
            </p>
            <div className="text-xs text-zinc-400 font-mono space-y-1.5 pt-2">
              <div>📍 Support Coordinates: South Asia & Global Client Coverage</div>
              <div>✉️ Primary support Inbox: mdalamin23081997@gmail.com</div>
              <div>📞 Direct Telephone line: +8801746835448</div>
            </div>
          </div>

          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-4">
              Our Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-500 font-semibold">
              <li>
                <button onClick={() => scrollSectionIntoView('services')} className="hover:text-white transition-colors cursor-pointer">
                  Campaign Ads Funnels
                </button>
              </li>
              <li>
                <button onClick={() => scrollSectionIntoView('services')} className="hover:text-white transition-colors cursor-pointer">
                  Page Post Boosting
                </button>
              </li>
              <li>
                <button onClick={() => scrollSectionIntoView('services')} className="hover:text-white transition-colors cursor-pointer">
                  Remarketing & Customer Lists
                </button>
              </li>
              <li>
                <button onClick={() => scrollSectionIntoView('services')} className="hover:text-white transition-colors cursor-pointer">
                  Pixel & Server CAPI setup
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
              Instant Onboarding Response
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Skip waiting queues and ping our manager directly on WhatsApp or Messenger to schedule a screen share.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              <a
                href="https://wa.me/8801746835448"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600/10 hover:bg-emerald-600 border border-emerald-500/20 text-emerald-400 hover:text-white text-[11px] font-bold px-3.5 py-2 rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Direct WhatsApp Chat</span>
              </a>
              <a
                href="https://m.me/mdalamin23081997"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600/10 hover:bg-blue-600 border border-blue-500/20 text-blue-400 hover:text-white text-[11px] font-bold px-3.5 py-2 rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Messenger Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="max-w-7xl mx-auto px-6 border-t border-zinc-900 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Facebook Ads & Boosting Specialist. All rights reserved.
          </div>
          <div className="text-zinc-650 max-w-md text-right text-[10px] leading-normal hidden sm:block">
            Disclaimer: We are an independent marketing consultancy. Facebook, Meta, Messenger and WhatsApp are registered trademarks of Meta Platforms, Inc.
          </div>
        </div>
      </footer>

      {/* Floating Bottom Right WhatsApp Call to Action Bubble */}
      <WhatsAppBubble />
    </div>
  );
}
