import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Phone, ArrowRight, CheckCircle2, Copy, Trash2 } from 'lucide-react';

interface ContactSectionProps {
  preselectedObjective?: string;
}

interface Inquiry {
  id: string;
  name: string;
  company: string;
  industry: string;
  budget: string;
  objective: string;
  message: string;
  date: string;
}

export default function ContactSection({ preselectedObjective = '' }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    industry: 'E-commerce & Retail',
    budget: '$500 - $1,500 / month',
    objective: preselectedObjective || 'Lead Generation conversion campaign',
    message: ''
  });

  useEffect(() => {
    if (preselectedObjective) {
      setFormData((prev) => ({ ...prev, objective: preselectedObjective }));
    }
  }, [preselectedObjective]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [pastInquiries, setPastInquiries] = useState<Inquiry[]>(() => {
    try {
      const stored = localStorage.getItem('fb_ads_inquiries');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const whatsappUrl = `https://wa.me/8801746835448?text=Hello!%20I%20just%20filled%20out%20your%20campaign%20inquiry%20form.%20My%20name%20is%20${encodeURIComponent(
    formData.name || 'Client'
  )}%20from%2520${encodeURIComponent(formData.company || 'My Brand')}.%20Our%2520industry%2520is%2520${encodeURIComponent(
    formData.industry
  )}%2520and%2520our%2520monthly%2520ad%2520budget%2520is%2520${encodeURIComponent(
    formData.budget
  )}.%2520Can%252520we%2520connect?`;

  const messengerUrl = "https://m.me/mdalamin23081997";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company) return;

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: Math.random().toString(36).substring(2, 9),
        name: formData.name,
        company: formData.company,
        industry: formData.industry,
        budget: formData.budget,
        objective: formData.objective,
        message: formData.message,
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const updated = [newInquiry, ...pastInquiries];
      setPastInquiries(updated);
      try {
        localStorage.setItem('fb_ads_inquiries', JSON.stringify(updated));
      } catch (err) {
        console.error('Storage write error:', err);
      }

      setIsSubmitting(false);
      setIsSubmitSuccess(true);
    }, 1200);
  };

  const clearInquiries = () => {
    setPastInquiries([]);
    localStorage.removeItem('fb_ads_inquiries');
  };

  const triggerReset = () => {
    setFormData({
      name: '',
      company: '',
      industry: 'E-commerce & Retail',
      budget: '$500 - $1,500 / month',
      objective: 'Lead Generation conversion campaign',
      message: ''
    });
    setIsSubmitSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-zinc-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left panel: Info & Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <span className="text-gray-500 font-mono text-[10.5px] tracking-wider uppercase bg-gray-100 px-3 py-1 rounded-full font-bold">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-zinc-900 mt-4 leading-tight font-bold">
                Ready to Scale Your Ads?
              </h2>
              <p className="text-gray-550 mt-4 leading-relaxed text-sm sm:text-base font-light">
                Whether you need advanced pixel integration, a continuous lead generation engine, or simple page level post boosting, feel free to fill out the details. We will analyze your digital footprint and send over a <strong>personalized competitive strategy draft within 12 hours</strong>.
              </p>

              {/* Direct channels */}
              <div className="space-y-3 pt-8">
                {/* Channel 1: WhatsApp */}
                <a
                  href="https://wa.me/8801746835448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 1.967 14.069.932 11.456.932c-5.414 0-9.82 4.369-9.824 9.796-.002 2.012.525 3.985 1.528 5.723L2.14 19.86l4.507-1.18c.001 0 .001.001 0 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">WhatsApp line</h4>
                    <p className="text-sm text-zinc-950 font-bold font-mono mt-0.5">+8801746835448</p>
                  </div>
                </a>

                {/* Channel 2: FB Messenger */}
                <a
                  href={messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.14 2 11.25c0 2.91 1.45 5.51 3.75 7.15.2.14.31.38.27.62l-.46 2.7c-.05.3.23.54.51.41l3.04-1.42c.16-.08.34-.09.5-.04 1.15.34 2.37.53 3.64.53 5.52 0 10-4.14 10-9.25C22 6.14 17.52 2 12 2zm1.18 11.33l-2.02-2.15-3.94 2.15c-.41.22-.88-.23-.65-.65l2.02-3.94 2.02 2.15 3.94-2.15c.42-.23.89.22.65.65l-2.02 3.94z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Messenger Direct</h4>
                    <p className="text-sm text-zinc-950 font-bold mt-0.5">mdalamin23081997</p>
                  </div>
                </a>

                {/* Channel 3: Email */}
                <a
                  href="mailto:mdalamin23081997@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Inbox Mail</h4>
                    <p className="text-sm text-zinc-950 font-bold font-mono mt-0.5">mdalamin23081997@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Display list of simulated submitted proposals stored in state for client diagnostics review! Super fun! */}
            {pastInquiries.length > 0 && (
              <div className="border-t border-zinc-100 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-bold uppercase text-zinc-400 tracking-wider">
                    Your Inquiries ({pastInquiries.length})
                  </h4>
                  <button
                    onClick={clearInquiries}
                    className="text-red-500 hover:text-red-700 transition-colors flex items-center text-xs font-semibold cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5 mr-1" />
                    Clear list
                  </button>
                </div>
                <div className="max-h-44 overflow-y-auto space-y-2.5 pr-2 scrollbar-hide">
                  {pastInquiries.map((inq) => (
                    <div key={inq.id} className="bg-zinc-50 border border-zinc-200 p-3 rounded-xl block text-xs">
                      <div className="flex justify-between font-bold text-zinc-800">
                        <span>{inq.company}</span>
                        <span className="font-mono font-normal text-zinc-400 text-[10px]">{inq.date}</span>
                      </div>
                      <div className="text-zinc-650 mt-1 min-w-0 truncate">Objective: {inq.objective}</div>
                      <div className="text-[10px] text-zinc-400 font-mono mt-1">Budget: {inq.budget} • Industry: {inq.industry}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right panel: High-converting intake form / success screen */}
          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-center">
            {isSubmitSuccess ? (
              // Polished Success Panel state
              <div className="text-center py-10 px-4 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-zinc-900">Inquiry Proposal Generated!</h3>
                  <p className="text-sm text-zinc-650 mt-3 leading-relaxed max-w-lg mx-auto">
                    Excellent! We have logged your marketing objectives for <strong>{formData.company || 'your brand'}</strong>. Our Facebook certified specialist is drafting a detailed competitor spend forecast and strategy proposal.
                  </p>
                </div>

                {/* Instant Skip wait list call to action */}
                <div className="bg-white border border-emerald-100 rounded-2xl p-5 max-w-md mx-auto text-center space-y-3 shadow-md">
                  <div className="flex items-center justify-center space-x-1.5 text-emerald-600 font-bold text-xs uppercase tracking-wider font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Highly Recommended Action</span>
                  </div>
                  <h4 className="text-sm font-semibold text-zinc-900 leading-tight">
                    Skip The Line & Chat on WhatsApp now
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Click the button below to directly open WhatsApp and copy your calculated details. Chat immediately to launch your boosting within hours.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs px-5 py-3 rounded-xl transition-all cursor-pointer w-full shadow-lg"
                  >
                    <span>Instant Launch over WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </a>
                </div>

                {/* Action button to reset form */}
                <button
                  onClick={triggerReset}
                  className="text-xs font-semibold text-zinc-400 hover:text-zinc-600 transition-colors uppercase tracking-widest block mx-auto underline cursor-pointer"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              // Main intake form
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="border-b border-zinc-200 pb-4 mb-2">
                  <h3 className="text-lg font-display font-bold text-zinc-950">Campaign Blueprint Form</h3>
                  <p className="text-xs text-zinc-500 font-light">Provide basic inputs to receive a verified competitive proposal.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 font-display">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Al-Amin Chowdhury"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-zinc-200 rounded-full px-5 py-3 text-xs font-semibold text-zinc-800 placeholder-zinc-400 outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 font-display">
                      Business or Page Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="e.g. Apex Tech Ltd"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-zinc-200 rounded-full px-5 py-3 text-xs font-semibold text-zinc-800 placeholder-zinc-400 outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Industry */}
                  <div>
                    <label className="block text-[10.5px] font-bold uppercase tracking-wider text-zinc-400 mb-2 font-display">
                      Industry Category
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-zinc-200 rounded-full px-5 py-3 text-xs font-semibold text-zinc-850 outline-none focus:border-black cursor-pointer appearance-none"
                    >
                      <option>E-commerce & Retail</option>
                      <option>Professional & Business Services</option>
                      <option>Real Estate & Properties</option>
                      <option>Local Food & Bistros</option>
                      <option>Coaching, Consulting & EdTech</option>
                      <option>Other Niche</option>
                    </select>
                  </div>

                  {/* Ad budget */}
                  <div>
                    <label className="block text-[10.5px] font-bold uppercase tracking-wider text-zinc-400 mb-2 font-display">
                      Target Monthly Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-zinc-200 rounded-full px-5 py-3 text-xs font-semibold text-zinc-850 outline-none focus:border-black cursor-pointer appearance-none"
                    >
                      <option>$100 - $250 / month (Boosting focus)</option>
                      <option>$250 - $500 / month (Local lead growth)</option>
                      <option>$500 - $1,500 / month</option>
                      <option>$1,500 - $5,000 / month</option>
                      <option>$5,000+ / month (High scaling)</option>
                    </select>
                  </div>
                </div>

                {/* Campaign objective */}
                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-zinc-400 mb-2 font-display">
                    Ad Objective Focus
                  </label>
                  <select
                    name="objective"
                    value={formData.objective}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-zinc-200 rounded-full px-5 py-3 text-xs font-semibold text-zinc-850 outline-none focus:border-black cursor-pointer appearance-none"
                  >
                    <option>Lead Generation conversion campaign</option>
                    <option>E-commerce direct sales scale</option>
                    <option>Facebook Page boosting & engagement buildup</option>
                    <option>WhatsApp/Messenger message interactions growth</option>
                    <option>Tracking integration setup only (Pixel/CAPI)</option>
                  </select>
                </div>

                {/* Project Details Description */}
                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-zinc-400 mb-2 font-display">
                    Project Details / Target Audience Describe
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Briefly describe your product price points, local coordinate targets, past advertising struggles so we can isolate exact solution options..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-zinc-200 rounded-2xl px-5 py-3.5 text-xs font-semibold text-zinc-850 placeholder-zinc-400 outline-none focus:border-black resize-none transition-colors"
                  ></textarea>
                </div>

                {/* Submission core CTA button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary text-xs font-semibold p-4 rounded-full flex items-center justify-center gap-2 cursor-pointer ${
                    isSubmitting ? 'opacity-80 cursor-wait' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      {/* Loading icon */}
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Analyzing competitive space...</span>
                    </>
                  ) : (
                    <>
                      <span>Generate Competitive Ads Blueprint Contract</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
