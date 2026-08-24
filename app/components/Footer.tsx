"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#080A0F] border-t border-white/10 text-[#8E9AAF] text-xs">
      
      {/* Responsible Crisis Support Banner */}
      <div className="w-full bg-[#11151C] border-b border-white/5 py-4 px-4 sm:px-6 lg:px-8 text-center">
        <p className="max-w-4xl mx-auto text-[#8E9AAF]">
          <strong className="text-[#F4F0E8]">Need immediate support?</strong> Contact your local emergency or crisis service. If you are in crisis in the US, call or text <strong>988</strong> for free, confidential 24/7 care.
        </p>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#6F8F78]/20 border border-[#6F8F78]/40 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#6F8F78]" />
            </div>
            <span className="font-serif text-xl text-[#F4F0E8]">Aura Mind</span>
          </div>
          <p className="text-xs text-[#8E9AAF] leading-relaxed">
            A quieter, human-centric approach to mental health care, therapy, and psychiatry.
          </p>
        </div>

        {/* Column 2: Pathways */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#F4F0E8]">Care Pathways</p>
          <ul className="space-y-2">
            <li><a href="#pathways" className="hover:text-[#F4F0E8] transition-colors">Psychotherapy</a></li>
            <li><a href="#pathways" className="hover:text-[#F4F0E8] transition-colors">Psychiatry & Bio-Care</a></li>
            <li><a href="#pathways" className="hover:text-[#F4F0E8] transition-colors">Guided Self-Care</a></li>
          </ul>
        </div>

        {/* Column 3: Philosophy */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#F4F0E8]">About Aura</p>
          <ul className="space-y-2">
            <li><a href="#philosophy" className="hover:text-[#F4F0E8] transition-colors">Our Philosophy</a></li>
            <li><a href="#specialists" className="hover:text-[#F4F0E8] transition-colors">Specialists</a></li>
            <li><a href="#journal" className="hover:text-[#F4F0E8] transition-colors">The Journal</a></li>
          </ul>
        </div>

        {/* Column 4: Disclaimers */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#F4F0E8]">Legal & Demo Notice</p>
          <p className="text-[11px] leading-relaxed text-[#8E9AAF]">
            Aura Mind is a conceptual mental wellness landing page designed for demonstration purposes. All doctor profiles and member stories are conceptual demo content.
          </p>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 py-6 px-4 text-center text-[11px] text-[#8E9AAF]">
        <p>© 2026 Aura Mind. Built with Next.js, Tailwind CSS & Framer Motion.</p>
      </div>

    </footer>
  );
}
