"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";

export default function Journal() {
  const articles = [
    {
      title: "Why your mind feels louder when life gets quiet",
      category: "Mental Reflection",
      readTime: "5 min read",
      date: "August 2026",
      excerpt: "Exploring the cognitive psychology behind solitude, overthinking, and how to sit comfortably with stillness.",
      image: "/images/ocean.avif",
    },
    {
      title: "What burnout actually feels like in the body",
      category: "Bio-Care & Stress",
      readTime: "4 min read",
      date: "August 2026",
      excerpt: "Burnout is not just mental fatigue—it affects sleep architecture, nervous system regulation, and focus.",
      image: "/images/burnout.avif",
    },
    {
      title: "The anatomy of finding the right therapeutic match",
      category: "Care Guidance",
      readTime: "6 min read",
      date: "August 2026",
      excerpt: "A practical breakdown of different therapeutic modalities (CBT, IFS, Psychodynamic) and how to choose what fits.",
      image: "/images/greenleaves.png",
    },
  ];

  return (
    <section id="journal" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#080A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#D8B477] font-semibold">
              The Aura Journal
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#F4F0E8] tracking-tight">
              Thoughtful reading for quiet minds
            </h2>
          </div>
          <p className="text-sm text-[#8E9AAF] max-w-md">
           Evidence-informed essays and guides written by psychologists to help you navigate lifes complexities.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group space-y-4 cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden glass-card border border-white/10">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Metadata */}
              <div className="flex items-center justify-between text-xs text-[#8E9AAF]">
                <span className="text-[#D8B477] font-medium uppercase tracking-wider">{art.category}</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{art.readTime}</span>
                </div>
              </div>

              {/* Title & Excerpt */}
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-[#F4F0E8] group-hover:text-[#6F8F78] transition-colors flex items-start justify-between gap-2">
                  <span>{art.title}</span>
                  <ArrowUpRight className="w-5 h-5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-[#6F8F78]" />
                </h3>
                <p className="text-sm text-[#8E9AAF] leading-relaxed line-clamp-2">
                  {art.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
