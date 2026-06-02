import React from 'react';
import { ServiceItem } from '../types';
import * as LucideIcons from 'lucide-react';
import { Check, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectSpec: () => void;
}

export default function ServiceCard({ service, onSelectSpec }: ServiceCardProps) {
  // Safe dynamic look-up for Lucide Icons
  const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Zap;

  return (
    <div className="card-premium h-full flex flex-col justify-between group relative !border-zinc-200/60">
      <div>
        {/* Dynamic badge indicator */}
        {service.badge && (
          <span className="absolute top-4 right-4 bg-black text-white text-[9px] font-bold font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full z-10">
            {service.badge}
          </span>
        )}
 
        {/* Feature Icon Header */}
        <div className="w-12 h-12 bg-gray-50 border border-zinc-150 rounded-full flex items-center justify-center text-zinc-900 group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-xs mb-6">
          <IconComponent className="w-5 h-5" />
        </div>
 
        {/* Title */}
        <h3 className="text-xl font-display font-bold text-zinc-950 group-hover:text-zinc-900 transition-colors">
          {service.title}
        </h3>
        
        {/* Subtitle list description */}
        <p className="text-xs font-semibold text-zinc-400 mt-1 font-display tracking-wide uppercase">
          {service.tagline}
        </p>
 
        <p className="text-sm text-gray-500 mt-4 leading-relaxed font-light">
          {service.description}
        </p>
 
        {/* Checklist items list */}
        <div className="mt-6 pt-6 border-t border-zinc-100 space-y-2.5">
          <h4 className="text-[10px] font-bold uppercase text-zinc-400 tracking-wider font-display">
            What is Included:
          </h4>
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-xs text-zinc-700 font-light">
                <Check className="w-4 h-4 text-zinc-900 shrink-0 mr-2 mt-0.5" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
 
      {/* Recommended For & Estimates footer CTA */}
      <div className="mt-8 pt-6 border-t border-zinc-100 space-y-4">
        <div className="flex items-start justify-between gap-4 text-xs">
          <div>
            <span className="text-zinc-400 font-semibold block">Best suited for</span>
            <span className="font-semibold text-zinc-900 leading-tight mt-0.5 block">{service.recommendedFor}</span>
          </div>
          <div className="text-right shrink-0">
            <span className="text-zinc-400 font-semibold block">Ad Investment</span>
            <span className="font-mono font-bold text-zinc-900 mt-0.5 block">{service.priceEstimate}</span>
          </div>
        </div>
 
        {/* Click action to trigger contact */}
        <button
          onClick={onSelectSpec}
          className="w-full flex items-center justify-center bg-transparent hover:bg-black text-gray-900 hover:text-white font-bold text-xs py-2.5 px-4 rounded-full transition-all duration-200 cursor-pointer border border-zinc-200 hover:border-black"
        >
          <span>Request Strategy</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
