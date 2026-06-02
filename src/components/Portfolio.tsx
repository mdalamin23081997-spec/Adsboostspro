import React, { useState } from 'react';
import { PORTFOLIO_CASE_STUDIES } from '../data';
import { CaseStudy } from '../types';
import { CheckCircle2, TrendingUp, Calendar, Target, DollarSign, Percent, BarChart3 } from 'lucide-react';

export default function Portfolio() {
  const [selectedCaseId, setSelectedCaseId] = useState(PORTFOLIO_CASE_STUDIES[0].id);

  const activeCase = PORTFOLIO_CASE_STUDIES.find((cs) => cs.id === selectedCaseId) || PORTFOLIO_CASE_STUDIES[0];

  // Helper metrics for past benchmarks
  const getMetricIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('spend')) return <DollarSign className="w-5 h-5 text-zinc-500" />;
    if (l.includes('sales') || l.includes('value') || l.includes('attributed')) return <TrendingUp className="w-5 h-5 text-emerald-500" />;
    if (l.includes('roas') || l.includes('roi')) return <CheckCircle2 className="w-5 h-5 text-blue-500" />;
    return <Percent className="w-5 h-5 text-violet-500" />;
  };

  return (
    <section id="portfolio" className="py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase bg-zinc-100 px-3 py-1 rounded-full">
            Proven Customer ROI
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-zinc-900 mt-4">
            Portfolio of Past Ad Results
          </h2>
          <p className="text-zinc-600 mt-4 leading-relaxed">
            Real campaign performance data and full transparency. We do not hide behind vague indicators — here are actual verified conversions, ROAS, and boosting metrics.
          </p>
        </div>

        {/* Client Selection Grid Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {PORTFOLIO_CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              onClick={() => setSelectedCaseId(study.id)}
              className={`px-5 py-2.5 rounded-full font-semibold text-xs transition-all cursor-pointer ${
                selectedCaseId === study.id
                  ? 'bg-black text-white border-black border'
                  : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-650 border border-zinc-200'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 text-[9px] font-bold rounded-xs bg-zinc-800 text-white flex items-center justify-center">
                  {study.logoText}
                </span>
                <span>{study.clientName}</span>
                <span className="opacity-60 font-light">({study.industry})</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Client Case Study Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left panel: Context, Overview, and Strategies */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-zinc-50 rounded-2xl p-6 sm:p-8 border border-zinc-200 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-[10.5px] font-mono font-bold tracking-wider uppercase bg-black text-white px-2.5 py-0.5 rounded-full">
                    {activeCase.campaignType}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-zinc-950 mt-3 tracking-tight">
                    {activeCase.clientName}
                  </h3>
                </div>
                <div className="flex items-center text-[10.5px] text-zinc-500 bg-white border border-zinc-200 px-3 py-1 rounded-full font-mono">
                  <Calendar className="w-3.5 h-3.5 mr-1 text-zinc-400" />
                  <span>Duration: {activeCase.duration}</span>
                </div>
              </div>

              <p className="text-base font-light text-zinc-800 leading-relaxed italic border-l-2 border-black pl-4 py-1 mb-6">
                &ldquo;{activeCase.summary}&rdquo;
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-display">
                    Project Overview & Challenge
                  </h4>
                  <p className="text-sm text-gray-550 leading-relaxed mt-2 font-light">
                    {activeCase.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-450 font-display flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-zinc-700" />
                    <span>Implemented Strategy Strategy Blueprint</span>
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    {activeCase.strategy.map((item, index) => (
                      <li key={index} className="flex items-start text-xs text-zinc-700 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mr-2 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Past metric blocks cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {activeCase.metrics.map((metric, idx) => (
                <div key={idx} className="bg-white border border-zinc-200 p-5 rounded-2xl text-center">
                  <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center mx-auto mb-3 border border-zinc-200">
                    {getMetricIcon(metric.label)}
                  </div>
                  <div className="text-xs font-semibold text-zinc-400 capitalize truncate">{metric.label}</div>
                  <div className="text-lg sm:text-xl font-bold font-mono tracking-tight text-zinc-950 mt-1">
                    {metric.value}
                  </div>
                  <div className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100/40 rounded-full py-0.5 px-2 inline-block mt-2">
                    {metric.improvement}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel: Custom Vector Graph Chart & Visualization */}
          <div className="lg:col-span-5 bg-zinc-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-zinc-800 flex flex-col justify-between">
            <div className="border-b border-zinc-800 pb-4 mb-6">
              <div className="flex items-center space-x-2 text-zinc-400 mb-1.5">
                <BarChart3 className="w-4 h-4 text-blue-400" />
                <span className="text-xs tracking-wider uppercase font-mono">Performance Metric Curve</span>
              </div>
              <h4 className="text-md font-display font-semibold">Weekly Results & Conversions Escalation</h4>
              <p className="text-xs text-zinc-500 mt-1">
                Visualizing scale from initial campaign setup of <strong>{activeCase.clientName}</strong>.
              </p>
            </div>

            {/* Custom SVG line chart visualization with glowing gradient */}
            <div className="relative py-4 h-48 sm:h-56">
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                <defs>
                  {/* Subtle glowing gradients */}
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1877F2" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#1877F2" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>

                {/* Grid guidelines */}
                <line x1="0" y1="40" x2="400" y2="40" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="4,4" />
                <line x1="0" y1="100" x2="400" y2="100" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="4,4" />
                <line x1="0" y1="160" x2="400" y2="160" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="4,4" />

                {/* Polyfill area chart under the curve */}
                <path
                  d={`M 20 180 
                     L 20 ${180 - (activeCase.chartData[0].conversions / 270) * 150} 
                     L 130 ${180 - (activeCase.chartData[1].conversions / 270) * 150} 
                     L 250 ${180 - (activeCase.chartData[2].conversions / 270) * 150} 
                     L 370 ${180 - (activeCase.chartData[3].conversions / 270) * 150} 
                     L 370 180 Z`}
                  fill="url(#chartGradient)"
                />

                {/* Main curve line */}
                <path
                  d={`M 20 ${180 - (activeCase.chartData[0].conversions / 270) * 150} 
                     L 130 ${180 - (activeCase.chartData[1].conversions / 270) * 150} 
                     L 250 ${180 - (activeCase.chartData[2].conversions / 270) * 150} 
                     L 370 ${180 - (activeCase.chartData[3].conversions / 270) * 150}`}
                  fill="none"
                  stroke="url(#lineColor)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Data point indicators */}
                <circle cx="20" cy={180 - (activeCase.chartData[0].conversions / 270) * 150} r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="130" cy={180 - (activeCase.chartData[1].conversions / 270) * 150} r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="250" cy={180 - (activeCase.chartData[2].conversions / 270) * 150} r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="370" cy={180 - (activeCase.chartData[3].conversions / 270) * 150} r="6" fill="#10b981" stroke="#ffffff" strokeWidth="2" />

                {/* Values values overlay */}
                <text x="20" y={155 - (activeCase.chartData[0].conversions / 270) * 150} fill="#9ca3af" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  {activeCase.chartData[0].conversions}
                </text>
                <text x="130" y={155 - (activeCase.chartData[1].conversions / 270) * 150} fill="#9ca3af" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  {activeCase.chartData[1].conversions}
                </text>
                <text x="250" y={155 - (activeCase.chartData[2].conversions / 270) * 150} fill="#9ca3af" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  {activeCase.chartData[2].conversions}
                </text>
                <text x="370" y={155 - (activeCase.chartData[3].conversions / 270) * 150} fill="#10b981" fontWeight="bold" fontSize="10" textAnchor="middle" fontFamily="monospace">
                  {activeCase.chartData[3].conversions}
                </text>
              </svg>
            </div>

            {/* Weekly labels */}
            <div className="flex justify-between px-3 text-[10px] text-zinc-500 font-mono border-t border-zinc-900 pt-3">
              <span className="flex flex-col items-center">
                <span>Week 1</span>
                <span className="text-zinc-600">CTR {activeCase.chartData[0].ctr}%</span>
              </span>
              <span className="flex flex-col items-center">
                <span>Week 2</span>
                <span className="text-zinc-600">CTR {activeCase.chartData[1].ctr}%</span>
              </span>
              <span className="flex flex-col items-center">
                <span>Week 3</span>
                <span className="text-zinc-600">CTR {activeCase.chartData[2].ctr}%</span>
              </span>
              <span className="flex flex-col items-center">
                <span>Week 4 (Peak)</span>
                <span className="text-emerald-500 font-bold">CTR {activeCase.chartData[3].ctr}%</span>
              </span>
            </div>

            {/* Summary bullet highlights */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mt-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="border-r border-zinc-800">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Total Budget</div>
                  <div className="text-base font-bold font-mono text-white mt-0.5">{activeCase.totalSpend}</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Closing ROAS</div>
                  <div className="text-base font-bold font-mono text-emerald-400 mt-0.5">{activeCase.roasResult}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
