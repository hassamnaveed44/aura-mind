"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IntakeModal({ isOpen, onClose }: IntakeModalProps) {
  const [step, setStep] = useState(1);
  const [selectedFocus, setSelectedFocus] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");

  const focusOptions = ["Anxiety & Stress", "Burnout & Fatigue", "Therapy & Talk Care", "Psychiatry Evaluation", "General Wellness"];
  const formatOptions = ["Telehealth Virtual Care", "In-Person Urban Center", "No Preference"];

  const handleReset = () => {
    setStep(1);
    setSelectedFocus("");
    setSelectedFormat("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="absolute inset-0 bg-[#080A0F]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg glass-card p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-6 right-6 p-2 rounded-full glass-card text-[#8E9AAF] hover:text-[#F4F0E8]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-2 mb-6">
              <span className="text-xs uppercase tracking-wider text-[#D8B477] font-semibold">
                Care Match Quiz • Step {step} of 3
              </span>
              <h3 className="font-serif text-2xl text-[#F4F0E8]">
                {step === 1 && "What brings you to Aura Mind today?"}
                {step === 2 && "What is your preferred care format?"}
                {step === 3 && "Your Recommended Match"}
              </h3>
            </div>

            {/* Step 1: Focus */}
            {step === 1 && (
              <div className="space-y-3">
                {focusOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedFocus(opt)}
                    className={`w-full p-4 rounded-xl text-left text-sm font-medium transition-all flex items-center justify-between ${
                      selectedFocus === opt
                        ? "bg-[#6F8F78] text-[#F4F0E8] shadow-lg"
                        : "glass-card text-[#8E9AAF] hover:text-[#F4F0E8]"
                    }`}
                  >
                    <span>{opt}</span>
                    {selectedFocus === opt && <Check className="w-4 h-4" />}
                  </button>
                ))}

                <button
                  disabled={!selectedFocus}
                  onClick={() => setStep(2)}
                  className="w-full mt-4 py-3 rounded-xl bg-[#6F8F78] hover:bg-[#5E7D67] text-[#F4F0E8] font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 2: Format */}
            {step === 2 && (
              <div className="space-y-3">
                {formatOptions.map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setSelectedFormat(fmt)}
                    className={`w-full p-4 rounded-xl text-left text-sm font-medium transition-all flex items-center justify-between ${
                      selectedFormat === fmt
                        ? "bg-[#6F8F78] text-[#F4F0E8] shadow-lg"
                        : "glass-card text-[#8E9AAF] hover:text-[#F4F0E8]"
                    }`}
                  >
                    <span>{fmt}</span>
                    {selectedFormat === fmt && <Check className="w-4 h-4" />}
                  </button>
                ))}

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3 rounded-xl glass-card text-[#8E9AAF] hover:text-[#F4F0E8] font-medium text-sm"
                  >
                    Back
                  </button>
                  <button
                    disabled={!selectedFormat}
                    onClick={() => setStep(3)}
                    className="w-2/3 py-3 rounded-xl bg-[#6F8F78] hover:bg-[#5E7D67] text-[#F4F0E8] font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                  >
                    <span>See Recommendation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Recommendation Confirmation */}
            {step === 3 && (
              <div className="space-y-6 text-center py-4">
                <div className="w-12 h-12 rounded-full bg-[#6F8F78]/20 border border-[#6F8F78] flex items-center justify-center mx-auto text-[#6F8F78]">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[#8E9AAF]">Based on your selection:</p>
                  <p className="text-lg font-serif text-[#D8B477]">
                    &quot;{selectedFocus}&quot; via {selectedFormat}
                  </p>
                  <p className="text-xs text-[#8E9AAF] max-w-xs mx-auto">
                    We have matched you with 3 clinical specialists available for booking this week.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="w-full py-3.5 rounded-xl bg-[#6F8F78] hover:bg-[#5E7D67] text-[#F4F0E8] font-medium text-sm transition-all"
                >
                  Close & View Specialists
                </button>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
