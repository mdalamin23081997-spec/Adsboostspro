import React from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { Star, ShieldCheck, Trophy } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-50/50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gray-500 font-mono text-[10.5px] tracking-wider uppercase bg-gray-100 px-3 py-1 rounded-full font-bold">
            Social Proof & Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-zinc-900 mt-4 font-bold">
            Hear From Our Scale Partners
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed font-light">
            Real companies, real results, and actual verified tracking. Read what managers, developers, and founders say about their performance growth.
          </p>
        </div>

        {/* Testimonials grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group"
            >
              {/* Highlight card banner trust indicator */}
              <div className="absolute top-6 right-6 flex items-center space-x-1 text-emerald-800 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full text-[9px] font-bold font-mono tracking-wide uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Client</span>
              </div>

              <div>
                {/* Visual Stars */}
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Main Quote text body */}
                <blockquote className="text-sm sm:text-base text-zinc-700 leading-relaxed italic text-left font-light">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author details card footer layout */}
              <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center space-x-3.5 text-left">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.author}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full border border-zinc-250 object-cover shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-zinc-950 font-display truncate">
                    {testimonial.author}
                  </h4>
                  <p className="text-[10px] uppercase font-bold text-zinc-400 mt-0.5 tracking-wider truncate">
                    {testimonial.role}, <strong className="text-zinc-550">{testimonial.company}</strong>
                  </p>
                  
                  {/* Results highlight callout */}
                  <div className="flex items-center space-x-1.5 text-emerald-800 text-[10px] font-bold mt-1 bg-emerald-50 border border-emerald-100 rounded-md px-1.5 py-0.5 w-fit uppercase font-mono">
                    <Trophy className="w-3 h-3 text-emerald-650 shrink-0" />
                    <span>{testimonial.resultsAchieved}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global agency trust indicators badge details */}
        <div className="mt-16 pt-10 border-t border-zinc-200/60 flex flex-wrap justify-center items-center gap-y-6 gap-x-12 opacity-95">
          <div className="text-center">
            <div className="text-3xl font-display font-medium text-zinc-950 tracking-tight font-bold">98%</div>
            <div className="text-[10px] text-zinc-450 uppercase font-mono tracking-wider mt-0.5">Ad Account Retention</div>
          </div>
          <div className="w-px h-8 bg-zinc-200 hidden md:block"></div>
          <div className="text-center">
            <div className="text-3xl font-display font-medium text-zinc-950 tracking-tight font-bold">4.1x</div>
            <div className="text-[10px] text-zinc-450 uppercase font-mono tracking-wider mt-0.5">Average Customer ROAS</div>
          </div>
          <div className="w-px h-8 bg-zinc-200 hidden md:block"></div>
          <div className="text-center">
            <div className="text-3xl font-display font-medium text-zinc-950 tracking-tight font-bold">$250k+</div>
            <div className="text-[10px] text-zinc-450 uppercase font-mono tracking-wider mt-0.5">Total Capital Deployed</div>
          </div>
          <div className="w-px h-8 bg-zinc-200 hidden md:block"></div>
          <div className="text-center">
            <div className="text-3xl font-display font-medium text-zinc-950 tracking-tight font-bold">12 Hours</div>
            <div className="text-[10px] text-zinc-450 uppercase font-mono tracking-wider mt-0.5">Average Proposal Turnaround</div>
          </div>
        </div>
      </div>
    </section>
  );
}
