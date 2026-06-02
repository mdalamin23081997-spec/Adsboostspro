import React from 'react';
import { ArrowDown, Check, ArrowUpRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface HeroProps {
  onLearnMoreClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onLearnMoreClick, onContactClick }: HeroProps) {
  const whatsappUrl = "https://wa.me/8801746835448?text=Hello!%20I%20visited%2520your%2520website%2520and%2520am%252520interested%2520in%2520scaling%2520my%2520business%2520using%2520Facebook%2520Ads.%2520Can%252520we%2520chat?";
  const messengerUrl = "https://m.me/mdalamin23081997"; // Using standard alias derived from email/name or general messenger standard format

  return (
    <section id="hero" className="relative pt-36 pb-20 overflow-hidden bg-white">
      {/* Background radial soft pattern */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-40">
        <div className="absolute top-[-100px] left-[10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl"></div>
        <div className="absolute top-[200px] right-[5%] w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Meta Certified Banner */}
            <div className="inline-block">
              <span className="px-3 py-1 bg-gray-150/80 text-gray-600 text-[10.5px] font-bold uppercase tracking-widest rounded-full font-mono">
                Certified Meta Media Buyer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tighter text-zinc-950 leading-[1.05] md:leading-[1.1]">
              Drive real growth with precise <br />
              <span className="text-[#1877F2]">Facebook Ads</span> & Boosting
            </h1>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl font-light">
              Specialized campaign management and professional page boosting services designed to maximize your ROI, lower acquire costs, and systematically scale your brand.
            </p>

            {/* Proof values checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center space-x-2.5 text-sm text-zinc-800 font-medium">
                <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span>Advanced Pixel & Conversions API (CAPI)</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-zinc-800 font-medium">
                <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span>Advanced Custom Audience Funnels</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-zinc-800 font-medium font-display">
                <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span>Local Boosting for Local Outreach</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-zinc-800 font-medium font-display">
                <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span>Transparent Daily Metric Sheets Included</span>
              </div>
            </div>

            {/* High contrast Call to Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <button
                onClick={onContactClick}
                className="btn-primary !px-7 !py-3.5 text-sm rounded-full group cursor-pointer"
              >
                <span>Inquire About Campaigns</span>
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !px-6 !py-3.5 text-sm rounded-full flex items-center justify-center space-x-2"
              >
                <Zap className="w-4 h-4 text-emerald-500 shrink-0 fill-current" />
                <span>Instant WhatsApp Consult</span>
              </a>
            </div>

            {/* Direct support message */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-400 font-mono pt-2">
              <span>✉️ Agency Direct: mdalamin23081997@gmail.com</span>
              <span className="hidden sm:inline">•</span>
              <span>📞 Contact Number: +8801746835448</span>
            </div>
          </div>

          {/* Hero Right Visual Column - Stats card & preview */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-md bg-zinc-50 border border-zinc-200/60 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              {/* Decorative top dot header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200/50">
                <div className="flex space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
                <span className="text-[10px] font-bold text-zinc-400 font-mono tracking-widest uppercase">
                  Meta Ad Manager live
                </span>
              </div>

              {/* Major Client Highlight STAT PANEL */}
              <div>
                <span className="text-xs text-zinc-400 font-medium font-mono uppercase tracking-wider block">
                  Active Spend Managed
                </span>
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 font-display mt-1.5 flex items-baseline">
                  $250,000<span className="text-xl font-semibold text-zinc-400 ml-1">+</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed mt-2">
                  Total client capital deployed across local boost products and advanced multi-country campaigns with rigorous analytics.
                </p>
              </div>

              {/* Dynamic stats elements inside card */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-zinc-150 p-4 rounded-xl shadow-sm">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Avg ROAS</span>
                  <div className="text-xl font-bold font-mono text-zinc-900 mt-0.5">4.18x</div>
                  <div className="text-[9px] text-emerald-600 font-semibold mt-1">High-Efficiency leads</div>
                </div>

                <div className="bg-white border border-zinc-150 p-4 rounded-xl shadow-sm">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">CTR Rate</span>
                  <div className="text-xl font-bold font-mono text-zinc-900 mt-0.5">2.87%</div>
                  <div className="text-[9px] text-zinc-500 mt-1">Meta baseline is 0.9%</div>
                </div>
              </div>

              {/* Instant Messenger CTA banner */}
              <a
                href={messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-50 border border-blue-100/50 rounded-2xl p-4 transition-all hover:bg-blue-100/60 hover:-translate-y-0.5 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {/* Messenger icon SVG inside */}
                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-md">
                      <svg
                        className="w-5 h-5 fill-current text-white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C6.48 2 2 6.14 2 11.25c0 2.91 1.45 5.51 3.75 7.15.2.14.31.38.27.62l-.46 2.7c-.05.3.23.54.51.41l3.04-1.42c.16-.08.34-.09.5-.04 1.15.34 2.37.53 3.64.53 5.52 0 10-4.14 10-9.25C22 6.14 17.52 2 12 2zm1.18 11.33l-2.02-2.15-3.94 2.15c-.41.22-.88-.23-.65-.65l2.02-3.94 2.02 2.15 3.94-2.15c.42-.23.89.22.65.65l-2.02 3.94z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                        Facebook Messenger Support
                      </h4>
                      <p className="text-[11px] text-zinc-500 mt-0.5">Send a quick DM on Facebook</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-colors shrink-0" />
                </div>
              </a>
            </div>

            {/* Glowing aesthetic floating indicator */}
            <div className="absolute top-1/2 left-2 lg:-left-6 -translate-y-1/2 bg-white/95 backdrop-blur border border-zinc-200/80 rounded-2xl p-3.5 shadow-xl flex items-center space-x-3 max-w-[190px] animate-float">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold text-xs shrink-0">
                <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-zinc-400 font-mono tracking-wider uppercase">Scale Growth</div>
                <div className="text-xs font-semibold text-zinc-800 mt-0.5">Optimized ROAS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll helper */}
        <div className="flex justify-center mt-16 animate-pulse">
          <button
            onClick={onLearnMoreClick}
            className="text-xs text-zinc-400 hover:text-zinc-600 transition-colors flex flex-col items-center gap-1 cursor-pointer"
          >
            <span>Learn About Our Services</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
