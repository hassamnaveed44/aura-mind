/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  detail: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "For the first time, getting support didn't feel like admitting something was wrong with me. It felt like giving my mind room to breathe.",
    name: "Illustrative Member Reflection",
    detail: "Conceptual Reflection • Anxiety & Overthinking",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "t2",
    quote:
      "I didn't expect a mental health platform to feel this calm. Booking felt like the easiest decision I'd made in months.",
    name: "Illustrative Member Reflection",
    detail: "Conceptual Reflection • Burnout Recovery",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "t3",
    quote:
      "My psychiatrist actually listened before prescribing anything. That alone changed how I felt about asking for help again.",
    name: "Illustrative Member Reflection",
    detail: "Conceptual Reflection • Psychiatry & Bio-Care",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const active = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  // Auto-advance every 6 seconds, paused when hovered
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#080A0F] border-t border-white/5 relative overflow-hidden">
      
      {/* Background Ambient Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D8B477]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        
        {/* Animated Testimonial Card */}
        <div 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="glass-card p-8 sm:p-14 rounded-3xl border border-white/10 space-y-8 text-center relative shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-full bg-[#D8B477]/15 border border-[#D8B477]/30 flex items-center justify-center mx-auto text-[#D8B477]">
                <Quote className="w-6 h-6" />
              </div>

              {/* Quote Text */}
              <blockquote className="font-serif text-2xl sm:text-4xl text-[#F4F0E8] leading-relaxed tracking-tight">
                &ldquo;{active.quote}&rdquo;
              </blockquote>

              {/* Member Attribution */}
              <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/10 mx-auto w-fit">
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold text-[#F4F0E8]">{active.name}</p>
                  <p className="text-xs text-[#8E9AAF] italic">{active.detail}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls: Arrows + Dots */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button 
            onClick={prev} 
            className="p-2.5 rounded-full glass-card text-[#8E9AAF] hover:text-[#F4F0E8] hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#D8B477]"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-[#D8B477]" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>

          <button 
            onClick={next} 
            className="p-2.5 rounded-full glass-card text-[#8E9AAF] hover:text-[#F4F0E8] hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#D8B477]"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
