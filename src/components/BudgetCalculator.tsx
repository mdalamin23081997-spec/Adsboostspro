import React, { useState, useMemo } from 'react';
import { INDUSTRIES_CONFIG } from '../data';
import { IndustryConfig } from '../types';
import { TrendingUp, Sparkles, DollarSign, Eye, Users, ShoppingBag } from 'lucide-react';

interface CalculatorProps {
  onContactClick: () => void;
}

export default function BudgetCalculator({ onContactClick }: CalculatorProps) {
  const [selectedIndustryName, setSelectedIndustryName] = useState(INDUSTRIES_CONFIG[0].name);
  const [monthlySpend, setMonthlySpend] = useState(500);

  const selectedIndustry = useMemo(() => {
    return (
      INDUSTRIES_CONFIG.find((ind) => ind.name === selectedIndustryName) ||
      INDUSTRIES_CONFIG[0]
    );
  }, [selectedIndustryName]);

  // Projected Performance Calculations
  const projections = useMemo(() => {
    const { estimatedCtr, estimatedCpc, conversionRate, avgOrderValue } = selectedIndustry;
    
    // Low-budget post boosting vs high-budget campaign optimizations are modeled here
    const cpcAdjusted = monthlySpend < 150 ? estimatedCpc * 0.75 : estimatedCpc; // Boosting is generally cheaper per click
    const ctrAdjusted = monthlySpend < 150 ? estimatedCtr * 1.2 : estimatedCtr; // Boosting has high CTR but lower conversion rates
    
    // Estimate Reach (Average CPM is $8.50 in local/general sectors)
    const averageCpm = monthlySpend < 200 ? 5.50 : 8.50; 
    const estimatedReach = Math.round((monthlySpend / averageCpm) * 1000);
    
    // Estimated Clicks based on Spend and CPC
    const estimatedClicks = Math.round(monthlySpend / cpcAdjusted);
    
    // Estimated Conversions (Clicks * Conversion Rate)
    const rateAdjusted = monthlySpend < 150 ? conversionRate * 0.4 : conversionRate; // Simple boosting has lower sales conversions than full funnel
    const estimatedConversions = Math.round((estimatedClicks * rateAdjusted) / 100);
    
    // Projected Revenue
    const estimatedRevenue = estimatedConversions * avgOrderValue;
    
    // ROAS (Return On Ad Spend)
    const roas = monthlySpend > 0 ? (estimatedRevenue / monthlySpend).toFixed(1) : '0';

    return {
      reach: estimatedReach,
      clicks: estimatedClicks,
      conversions: estimatedConversions,
      revenue: estimatedRevenue,
      roas: parseFloat(roas),
      cpc: cpcAdjusted.toFixed(2),
      ctr: ctrAdjusted.toFixed(2)
    };
  }, [monthlySpend, selectedIndustry]);

  return (
    <section id="calculator" className="py-24 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gray-500 font-mono text-[10.5px] tracking-wider uppercase bg-gray-100 px-3 py-1 rounded-full font-bold">
            Interactive Growth Forecasting
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-zinc-900 mt-4">
            Estimate Your Facebook Ad Results
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed font-light">
            Select your industry vertical and adjust your intended monthly ad budget below to see projected traffic, CTRs, leads/sales, and estimated ROAS powered by real agency benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Box */}
          <div className="lg:col-span-5 bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Step 1: Select Industry */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4 font-display">
                  1. Choose Your Industry Vertical
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {INDUSTRIES_CONFIG.map((industry) => (
                    <button
                      key={industry.name}
                      onClick={() => setSelectedIndustryName(industry.name)}
                      className={`text-left px-5 py-3 rounded-full border text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                        selectedIndustryName === industry.name
                          ? 'border-black bg-black text-white shadow-xs'
                          : 'border-zinc-200 hover:border-zinc-400 bg-white text-zinc-650'
                      }`}
                    >
                      <span>{industry.name}</span>
                      {selectedIndustryName === industry.name && (
                        <Sparkles className="w-3.5 h-3.5 text-yellow-400 shrink-0 animate-pulse" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Budget */}
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 font-display">
                    2. Intended Monthly Ad Spend
                  </label>
                  <span className="text-2xl font-mono font-bold text-zinc-950">
                    ${monthlySpend.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-black focus:outline-none"
                />
                <div className="flex justify-between text-[11px] font-mono text-zinc-400 mt-2">
                  <span>$100 (Boosting)</span>
                  <span>$5,000</span>
                  <span>$10,000+ (Full Scale)</span>
                </div>
              </div>
            </div>

            {/* Campaign recommendations tag */}
            <div className="mt-6 pt-6 border-t border-zinc-100">
              <h4 className="text-[10px] font-bold uppercase text-zinc-400 tracking-wider mb-2 font-display">
                Recommended Strategy
              </h4>
              <p className="text-xs text-zinc-655 leading-relaxed font-light">
                {monthlySpend < 250 ? (
                  <span className="text-zinc-700">
                    🌟 <strong>Post Boosting & Engagement:</strong> Best for building immediate local social proof, driving messages directly to WhatsApp, and growing page likes.
                  </span>
                ) : (
                  <span className="text-zinc-700">
                    🚀 <strong>Full Funnel Campaign Optimization:</strong> Ideal for setting up proper tracking, running creative A/B testing, pixel-backed remarketing, and scaling purchase ROAS.
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Results dashboard display */}
          <div className="lg:col-span-7 bg-black text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Ambient subtle glow background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-900 rounded-full blur-3xl opacity-40 pointer-events-none -mr-20 -mt-20"></div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
                <div>
                  <h3 className="text-lg font-display font-semibold tracking-tight text-white">
                    Projected Performance Metrics
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Estimates based on current FB Ads auction trends for <strong>{selectedIndustry.name}</strong>.
                  </p>
                </div>
                <div className="bg-white/10 px-3 py-1 rounded-full border border-white/15 flex items-center space-x-1.5 self-start">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  <span className="text-[10px] uppercase tracking-wider font-bold text-white font-mono">Metrics Stable</span>
                </div>
              </div>

              {/* Major grid metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
                <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <div className="flex items-center space-x-1.5 text-zinc-400 text-xs mb-1">
                    <Eye className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Est. Reach</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold font-mono tracking-tight text-white">
                    {projections.reach.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-1">Unique Local Users</div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <div className="flex items-center space-x-1.5 text-zinc-400 text-xs mb-1">
                    <Users className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Est. Clicks</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold font-mono tracking-tight text-white">
                    {projections.clicks.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-1">CPC: ${projections.cpc}</div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <div className="flex items-center space-x-1.5 text-zinc-400 text-xs mb-1">
                    <ShoppingBag className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Conversions</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold font-mono tracking-tight text-white">
                    {projections.conversions}
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-1">
                    CR: {selectedIndustry.conversionRate}%
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <div className="flex items-center space-x-1.5 text-zinc-400 text-xs mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Est. ROAS</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold font-mono tracking-tight text-emerald-400">
                    {projections.roas}x
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-1">Return on Spend</div>
                </div>
              </div>

              {/* Large high-impact results highlight */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 sm:p-6 mb-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 font-display">
                    Projected Revenue Opportunity
                  </span>
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono mt-1 flex items-baseline">
                    <span className="text-xl font-medium text-emerald-400 mr-0.5">$</span>
                    {projections.revenue.toLocaleString()}
                  </div>
                  <p className="text-xs text-zinc-400 mt-1.5 font-light">
                    Net value generated based on industry-specific average transaction / lifetime value of{' '}
                    <strong className="text-white">${selectedIndustry.avgOrderValue}</strong>.
                  </p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 text-center shrink-0 w-full sm:w-auto">
                  <div className="text-xs text-emerald-400 font-mono font-bold uppercase tracking-wider">
                    Target ROI Margin
                  </div>
                  <div className="text-2xl font-black font-mono text-emerald-400 mt-0.5">
                    +{Math.round((projections.revenue - monthlySpend) / monthlySpend * 100)}%
                  </div>
                </div>
              </div>
            </div>

            {/* CTA action hook */}
            <div className="pt-6 border-t border-zinc-850 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-zinc-450 leading-relaxed max-w-md font-light">
                💡 These numbers are projections based on historical advertising averages. Actual campaign performance fluctuates based on creative quality, product-market demand, and local region competition.
              </span>
              <button
                onClick={onContactClick}
                className="bg-white text-black hover:bg-zinc-150 font-bold text-xs px-6 py-3.5 rounded-full transition-all shrink-0 flex items-center justify-center cursor-pointer shadow-md"
              >
                Claim Strategy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
