import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function WhatsAppBubble() {
  const whatsappUrl = "https://wa.me/8801746835448?text=Hello!";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 pointer-events-none">
      {/* Mini notification helper */}
      <div className="bg-white text-zinc-900 border border-zinc-200/80 rounded-2xl p-3.5 shadow-xl max-w-xs animate-float pointer-events-auto transition-all hover:scale-[1.03] hidden sm:block">
        <div className="flex items-center space-x-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-bold text-zinc-400 tracking-wider font-mono uppercase">
            Specialist Online
          </span>
        </div>
        <p className="text-xs text-zinc-700 font-medium mt-1">
          Ready to scale your page reach? Tap below to chat!
        </p>
      </div>

      {/* Main floating action button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="pointer-events-auto bg-emerald-500 text-white flex items-center space-x-2.5 px-4.5 py-3.5 rounded-full shadow-2xl hover:bg-emerald-600 transition-all duration-300 hover:scale-[1.07] active:scale-95 group font-display font-semibold text-sm mr-2 cursor-pointer border border-emerald-400/30"
      >
        {/* Pulsating green ring behind icon */}
        <div className="relative">
          <span className="absolute -inset-1.5 bg-white/20 rounded-full animate-ping opacity-50"></span>
          {/* Custom SVG for WhatsApp Icon */}
          <svg
            className="w-5 h-5 fill-current text-white relative z-10"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.022-.08-.117-.146-.217-.196-.123-.06-1.114-.548-1.288-.61-.173-.06-.3-.09-.425.097-.125.185-.485.61-.595.734-.11.123-.22.138-.436.03-.22-.11-.924-.34-1.76-1.088-.65-.58-1.09-1.3-1.216-1.517-.127-.215-.014-.33.093-.437.1-.1.217-.25.327-.376.11-.123.14-.21.21-.35.07-.14.03-.263-.016-.36-.046-.097-.424-1.02-.58-1.4-.15-.365-.3-.314-.424-.314-.11 0-.236-.01-.36-.01s-.327.046-.497.23c-.173.185-.66.645-.66 1.573 0 .928.675 1.825.77 1.95.097.125 1.327 2.028 3.213 2.84.45.193.8.31 1.07.397.452.144.863.124 1.188.076.363-.054 1.114-.455 1.27-.894.156-.44.156-.818.11-1.002zM12.003 21c-1.74 0-3.41-.49-4.86-1.41l-.35-.21-3.61.95.96-3.52-.23-.37C2.96 14.93 2.19 12.87 2.19 10.74c.003-5.37 4.4-9.74 9.81-9.74 2.62 0 5.09 1.01 6.94 2.86 1.86 1.85 2.88 4.3 2.88 6.89-.002 5.37-4.4 9.75-9.81 9.75M12.003 0C5.383 0 .005 5.257.002 11.714c0 2.062.55 4.075 1.59 5.85L0 24l6.63-1.697c1.71.91 3.62 1.39 5.36 1.396 6.62 0 12.003-5.26 12.006-11.72.003-3.13-1.248-6.07-3.52-8.293C18.196 1.43 15.22 0 12.003 0" />
          </svg>
        </div>
        <span className="tracking-tight select-none">
          Chat on <span className="underline decoration-white/30 truncate">WhatsApp</span>
        </span>
      </a>
    </div>
  );
}
