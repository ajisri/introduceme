"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function DiagnosisSection() {
    const { dict, language } = useLanguage();
    const [step, setStep] = useState(0); // 0: Black Room, 1: Assumption, 2: Lamp 1 (Failed), 3: Lamp 2 (Success), 4: Smooth Surface

    const nextStep = () => {
        if (step < 4) setStep(step + 1);
    };

    return (
        <section className="w-full min-h-screen relative bg-black overflow-hidden flex flex-col items-center justify-center py-20 px-5 lg:px-12">
            
            {/* Visual Narrative Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* The "Smooth Surface" background gradient that appears at the end */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: step === 4 ? 1 : 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]"
                />

                {/* Light Reveal Effects */}
                <AnimatePresence>
                    {step === 1 && (
                        <motion.div key="bg-step-1" exit={{ opacity: 0 }} className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
                            <motion.span initial={{ opacity: 0, x: -150, y: -80 }} animate={{ opacity: 0.15, x: -250, y: -120, rotate: -15 }} transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} className="absolute font-unbounded text-2xl lg:text-4xl text-white whitespace-nowrap">{dict.landing.diagnosis.floating1}</motion.span>
                            <motion.span initial={{ opacity: 0, x: 200, y: -120 }} animate={{ opacity: 0.1, x: 300, y: -160, rotate: 10 }} transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} className="absolute font-unbounded text-xl lg:text-3xl text-white whitespace-nowrap">{dict.landing.diagnosis.floating2}</motion.span>
                            <motion.span initial={{ opacity: 0, x: -120, y: 150 }} animate={{ opacity: 0.15, x: -200, y: 200, rotate: -5 }} transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} className="absolute font-unbounded text-2xl lg:text-4xl text-white whitespace-nowrap">{dict.landing.diagnosis.floating3}</motion.span>
                            <motion.span initial={{ opacity: 0, x: 180, y: 100 }} animate={{ opacity: 0.12, x: 260, y: 140, rotate: 20 }} transition={{ duration: 4.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} className="absolute font-unbounded text-lg lg:text-2xl text-white whitespace-nowrap">{dict.landing.diagnosis.floating4}</motion.span>
                            <motion.span initial={{ opacity: 0, x: 0, y: -200 }} animate={{ opacity: 0.15, x: 20, y: -260, rotate: -10 }} transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} className="absolute font-unbounded text-xl lg:text-3xl text-white whitespace-nowrap">{dict.landing.diagnosis.floating5}</motion.span>
                            <motion.span initial={{ opacity: 0, x: 50, y: 220 }} animate={{ opacity: 0.1, x: 0, y: 280, rotate: 15 }} transition={{ duration: 3.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} className="absolute font-unbounded text-lg lg:text-2xl text-white whitespace-nowrap">{dict.landing.diagnosis.floating6}</motion.span>
                        </motion.div>
                    )}
                    {step === 2 && (
                        <motion.div 
                            key="bg-step-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 0.2, scale: 1.2 }}
                            exit={{ opacity: 0 }}
                            className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-900 rounded-full blur-[120px]"
                        />
                    )}
                    {step === 3 && (
                        <motion.div 
                            key="bg-step-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute bottom-[5%] md:bottom-[10%] left-1/2 -translate-x-1/2 flex flex-wrap justify-center items-end gap-3 lg:gap-6 w-full max-w-5xl opacity-40 pointer-events-none z-10"
                        >
                            {["PROFIL JELAS", "LOKASI & JAM", "CARA PESAN", "PORTOFOLIO", "TESTIMONI", "PROSEDUR LAYANAN"].map((t, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                    className="px-4 py-2 lg:px-6 lg:py-3 border border-white/40 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                >
                                    <span className="font-mono text-[10px] lg:text-xs tracking-widest text-white whitespace-nowrap">{t}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                    {step >= 3 && (
                        <motion.div 
                            key="bg-step-3-up"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: step === 4 ? 0.2 : 0.4, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute inset-0 bg-[url('/images/official_clarity_bg.png')] bg-cover bg-center bg-no-repeat"
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center">
                
                {/* Progress Label */}
                <motion.span 
                    className="font-mono text-[10px] tracking-widest uppercase text-swiss-red mb-12 opacity-60"
                    animate={{ opacity: step === 4 ? 0.3 : 0.6 }}
                >
                    {dict.landing.diagnosis.label}
                </motion.span>

                <div className="relative min-h-[300px] flex items-center justify-center w-full">
                    <AnimatePresence mode="wait">
                        {step === 0 && (
                            <motion.div 
                                key="step0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex flex-col items-center gap-8"
                            >
                                <h3 className="font-unbounded font-medium text-4xl lg:text-6xl text-white/90 leading-tight">
                                    {dict.landing.diagnosis.storyStep0}
                                </h3>
                                <p className="text-white/40 max-w-sm">{dict.landing.diagnosis.storyStep0Desc}</p>
                                <button 
                                    onClick={nextStep}
                                    className="mt-4 px-8 py-4 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-xs uppercase tracking-widest"
                                >
                                    {dict.landing.diagnosis.storyCta0}
                                </button>
                            </motion.div>
                        )}

                        {step === 1 && (
                            <motion.div 
                                key="step1"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center gap-8"
                            >
                                <h3 className="font-unbounded font-medium text-4xl lg:text-7xl text-white tracking-tighter">
                                    {dict.landing.diagnosis.storyStep1}
                                </h3>
                                <p className="text-white/50 w-full text-center text-sm lg:text-base italic font-light whitespace-nowrap overflow-visible">"{dict.landing.diagnosis.storyStep1Desc}"</p>
                                <button 
                                    onClick={nextStep}
                                    className="mt-4 px-8 py-4 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold"
                                >
                                    {dict.landing.diagnosis.storyCta1}
                                </button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div 
                                key="step2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center gap-8"
                            >
                                <h3 className="font-unbounded font-medium text-4xl lg:text-6xl text-red-500/80 tracking-tighter">
                                    {dict.landing.diagnosis.storyStep2}
                                </h3>
                                <p className="text-white/40 max-w-md">{dict.landing.diagnosis.storyStep2Desc}</p>
                                <button 
                                    onClick={nextStep}
                                    className="mt-4 px-8 py-4 border border-red-500/50 text-red-500 font-mono text-xs uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
                                >
                                    {dict.landing.diagnosis.storyCta2}
                                </button>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div 
                                key="step3"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center gap-8"
                            >
                                <h3 className="font-unbounded font-extrabold text-5xl lg:text-8xl text-white leading-none tracking-tighter">
                                    {dict.landing.diagnosis.storyStep3}
                                </h3>
                                <p className="text-white/70 max-w-lg text-lg">{dict.landing.diagnosis.storyStep3Desc}</p>
                                <button 
                                    onClick={nextStep}
                                    className="mt-8 px-10 py-5 bg-blue-600 text-white font-mono text-sm uppercase tracking-widest font-bold glow-blue shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                                >
                                    {dict.landing.diagnosis.storyCta3}
                                </button>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div 
                                key="step4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full flex flex-col items-center"
                            >
                                <motion.div 
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="w-full"
                                >
                                    <h3 
                                        className="font-unbounded font-medium lowercase text-white leading-[1.1] tracking-tighter text-center mb-12" 
                                        style={{ fontSize: "clamp(2rem, 8vw, 6rem)" }}
                                    >
                                        {dict.landing.diagnosis.title}
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto text-left">
                                        {dict.landing.diagnosis.items.map((item: string, i: number) => (
                                            <motion.div 
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + (i * 0.1) }}
                                                className="p-6 border border-white/5 bg-white/[0.02] backdrop-blur-sm"
                                            >
                                                <span className="block font-mono text-[10px] text-swiss-red mb-2 opacity-40">ITEM_{i+1}</span>
                                                <p className="text-sm lg:text-base text-white/80 leading-relaxed">{item}</p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.5 }}
                                        className="mt-20 flex flex-col items-center gap-4"
                                    >
                                        <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">
                                            {dict.landing.diagnosis.conclusion1}
                                        </span>
                                        <h4 className="font-unbounded text-2xl lg:text-4xl text-white">
                                            {dict.landing.diagnosis.conclusion2}
                                        </h4>
                                        <button 
                                            onClick={() => setStep(0)}
                                            className="mt-12 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 hover:text-swiss-red transition-colors border-b border-white/10 pb-1"
                                        >
                                            {language === "id" ? "( Lihat ulang analisa )" : "( Re-analyze story )"}
                                        </button>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom Counter */}
            <div className="absolute bottom-10 right-10 flex gap-2">
                {[0, 1, 2, 3, 4].map((i) => (
                    <div 
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${step === i ? 'bg-swiss-red w-8' : 'bg-white/20'}`}
                    />
                ))}
            </div>
        </section>
    );
}
