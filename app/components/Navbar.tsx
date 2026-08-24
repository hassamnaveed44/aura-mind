"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Volume2, VolumeX } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleSound = () => {
    if (!audioRef.current) {
      // Create audio element targeting /ambient.mp3 in public folder
      const audio = new Audio("/ambient.mp3");
      audio.loop = true;
      audio.volume = 0.5; // Set comfortable volume level
      audioRef.current = audio;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Fallback if browser blocks autoplay
        setIsPlaying(false);
      });
    }
  };

  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "States", href: "#states" },
    { name: "Care Pathways", href: "#pathways" },
    { name: "Specialists", href: "#specialists" },
    { name: "Journal", href: "#journal" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#080A0F]/80 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#6F8F78]/20 border border-[#6F8F78]/40 flex items-center justify-center group-hover:scale-105 transition-transform">
            <div className="w-2.5 h-2.5 rounded-full bg-[#6F8F78] animate-pulse" />
          </div>
          <span className="font-serif text-2xl tracking-wide text-[#F4F0E8] group-hover:text-[#D8B477] transition-colors">
            Aura Mind
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#8E9AAF] hover:text-[#F4F0E8] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D8B477] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleSound}
            className={`p-2.5 rounded-full glass-card transition-all ${
              isPlaying ? "text-[#6F8F78] border-[#6F8F78] shadow-lg shadow-[#6F8F78]/20" : "text-[#8E9AAF] hover:text-[#F4F0E8]"
            }`}
            title={isPlaying ? "Mute Ambient Sound" : "Play Ambient Sound"}
          >
            {!isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#6F8F78] animate-pulse" />}
          </button>

          <a
            href="#cta"
            className="group px-5 py-2.5 rounded-full bg-[#6F8F78] hover:bg-[#5E7D67] text-[#F4F0E8] text-sm font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-[#6F8F78]/20 hover:scale-[1.02]"
          >
            <span>Find Your Path</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleSound}
            className="p-2 rounded-full glass-card text-[#8E9AAF]"
          >
            {!isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#6F8F78]" />}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl glass-card text-[#F4F0E8]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-[#080A0F]/95 backdrop-blur-xl px-6 py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-[#8E9AAF] hover:text-[#F4F0E8] py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#cta"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-[#6F8F78] text-[#F4F0E8] text-center font-medium flex items-center justify-center gap-2"
              >
                <span>Find Your Path</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
