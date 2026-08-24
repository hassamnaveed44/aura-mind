/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, X } from "lucide-react";

interface Article {
  id: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Why your mind feels louder when life gets quiet",
    category: "Mental Reflection",
    readTime: "5 min read",
    date: "August 2026",
    author: "Dr. Maya Chen",
    excerpt: "Exploring the cognitive psychology behind solitude, overthinking, and how to sit comfortably with stillness.",
    content: "When constant stimuli recede, the brain transitions from external processing to default mode network (DMN) activity. For many, this sudden shift allows unresolved thoughts, anxieties, and lingering decisions to surface. Learning to sit with stillness involves shifting from reactive judgment to gentle observation.",
    image: "/images/ocean.avif",
  },
  {
    id: 2,
    title: "What burnout actually feels like in the body",
    category: "Bio-Care & Stress",
    readTime: "4 min read",
    date: "August 2026",
    author: "Dr. Elias Morgan",
    excerpt: "Burnout is not just mental fatigue—it affects sleep architecture, nervous system regulation, and focus.",
    content: "Systemic burnout alters cortisol rhythms, disrupts REM sleep cycles, and creates persistent physical muscle tension. Recovery requires more than just a weekend off; it necessitates establishing sustainable boundaries and physiological nervous system regulation.",
    image: "/images/burnout.avif",
  },
  {
    id: 3,
    title: "The anatomy of finding the right therapeutic match",
    category: "Care Guidance",
    readTime: "6 min read",
    date: "August 2026",
    author: "Dr. Noor Shah",
    excerpt: "A practical breakdown of different therapeutic modalities (CBT, IFS, Psychodynamic) and how to choose what fits.",
    content: "The single greatest predictor of successful therapy outcomes is the strength of the therapeutic alliance. Understanding whether you thrive with structured behavioral exercises or open-ended psychodynamic exploration helps narrow your care search.",
    image: "/images/greenleaves.png",
  },
];

export default function Journal() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

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
            Evidence-informed essays and guides written by psychologists to help you navigate life&apos;s complexities. Click any article to read.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <motion.article
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group space-y-4 cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden glass-card border border-white/10">
                <motion.div
                  initial={{ x: "0%" }}
                  whileInView={{ x: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                  className="absolute inset-0 bg-[#11151C] z-10 pointer-events-none"
                />
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[#8E9AAF]">
                <span className="text-[#D8B477] font-medium uppercase tracking-wider">{art.category}</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{art.readTime}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-[#F4F0E8] group-hover:text-[#6F8F78] transition-colors flex items-start justify-between gap-2">
                  <span>{art.title}</span>
                  <ArrowUpRight className="w-5 h-5 shrink-0 text-[#6F8F78] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </h3>
                <p className="text-sm text-[#8E9AAF] leading-relaxed line-clamp-2">
                  {art.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-[#080A0F]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card p-6 sm:p-10 rounded-3xl border border-white/15 z-10 space-y-6"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-card text-[#8E9AAF] hover:text-[#F4F0E8]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-[#D8B477] font-semibold uppercase tracking-wider">
                  <span>{selectedArticle.category}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8]">
                  {selectedArticle.title}
                </h3>
                <p className="text-xs text-[#8E9AAF]">
                  Written by <strong className="text-[#F4F0E8]">{selectedArticle.author}</strong> • {selectedArticle.date}
                </p>
              </div>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-4 text-base text-[#8E9AAF] leading-relaxed font-sans">
                <p>{selectedArticle.content}</p>
                <p>At Aura Mind, we encourage taking small, intentional steps toward self-understanding. Contact our care team if you would like to explore these topics with a clinical specialist.</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}