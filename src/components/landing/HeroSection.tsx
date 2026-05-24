"use client";
import React, { useState } from "react";
import Magnetic from "./Magnetic";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
    handleMouseMove: (e: React.MouseEvent) => void;
}

export default function HeroSection({ handleMouseMove }: HeroSectionProps) {
    const { dict, language } = useLanguage();
    const [showReality, setShowReality] = useState(false);

    return (
        <section
            onMouseMove={handleMouseMove}
            className="w-full min-h-[90vh] pt-32 lg:pt-40 pb-20 flex flex-col justify-start relative overflow-hidden bg-transparent border-b border-foreground/5"
        >
            <div className="swiss-container relative z-10 flex flex-col h-full">
                
                {/* Technical Header */}
                <div className="w-full flex justify-between items-center border-b border-foreground/10 pb-4 mb-16 font-mono text-[9px] uppercase tracking-widest text-foreground/40">
                    <span>{"// PROTOKOL_OTORITAS_DESAIN_GRID"}</span>
                    <span className="hidden md:inline">ZURICH, CH (47.3769° N, 8.5417° E)</span>
                    <span>V.01_2026</span>
                </div>

                {/* Typographic Asymmetric Title Grid */}
                <div className="grid grid-cols-12 gap-0 border-b border-foreground/10 pb-16 mb-16 relative w-full">
                    {/* title1 Rata Kiri, span 10 */}
                    <div className="col-span-12 lg:col-span-10 reveal-mask py-2">
                        <h1 className="font-swiss-display font-bold uppercase tracking-tighter text-foreground break-words sm:whitespace-nowrap"
                            style={{ fontSize: "clamp(1.8rem, 6.5vw, 9rem)" }}>
                            {dict.landing.hero.title1}
                        </h1>
                    </div>
                    {/* Right Info Box */}
                    <div className="hidden lg:flex lg:col-span-2 flex-col justify-end items-end border-l border-foreground/10 pb-4 pr-4">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-swiss-red font-black">SYS_STATUS</span>
                        <span className="font-mono text-[8px] opacity-40">OPERASIONAL_AKTIF</span>
                    </div>
                    
                    {/* title2 Rata Kanan, offset col-start-3 span 10 */}
                    <div className="col-span-12 lg:col-start-3 lg:col-span-10 reveal-mask py-2">
                        <h1 className="font-swiss-display font-bold uppercase tracking-tighter text-swiss-red break-words sm:whitespace-nowrap"
                            style={{ fontSize: "clamp(1.8rem, 6.5vw, 9rem)" }}>
                            {dict.landing.hero.title2}
                        </h1>
                    </div>
                </div>

                {/* 3-Column Asymmetric Content Grid */}
                <div className="grid grid-cols-12 gap-0 border-b border-foreground/10 pb-20">
                    
                    {/* Column 1: Tagline & Qualifier (span 3) */}
                    <div className="col-span-12 lg:col-span-3 border-b lg:border-b-0 lg:border-r border-foreground/10 pb-8 lg:pb-0 lg:pr-8">
                        <div className="flex flex-col gap-8 items-start relative">
                            {/* HIGHLIGHTED LABEL */}
                            <div className="bg-foreground px-3 py-1 mb-2 shadow-[4px_4px_0px_var(--swiss-red)]">
                                <span className="font-mono font-black uppercase tracking-[0.4em] text-background"
                                    style={{ fontSize: "0.6rem" }}>
                                    {dict.landing.hero.tagline}
                                </span>
                            </div>
                            
                            {/* Kualifikasi Transparan — Cermin Target Audiens */}
                            <div className="border border-foreground/30 px-4 py-3 bg-foreground/[0.03] max-w-[200px]">
                                <p className="font-sans font-black uppercase tracking-[0.15em] leading-[1.6] text-foreground" style={{ fontSize: "0.55rem" }}>
                                    {dict.landing.hero.qualifier}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Primary Subtitle & Description (span 5) */}
                    <div className="col-span-12 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-foreground/10 py-8 lg:py-0 lg:px-8">
                        <div className="border-l-4 border-swiss-red pl-6 lg:pl-8 h-min">
                            <p className="hero-subtext font-sans font-medium text-foreground/80 leading-relaxed mb-8"
                                style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)" }}>
                                {dict.landing.hero.subtitle}
                            </p>
                            <p className="hero-subtext font-sans font-bold text-foreground leading-[1.4]"
                                style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)" }}>
                                {dict.landing.hero.desc1}
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Secondary Description & CTA (span 4) */}
                    <div className="col-span-12 lg:col-span-4 pt-8 lg:pt-0 lg:pl-8 flex flex-col justify-between">
                        <p className="hero-subtext font-sans font-medium text-foreground/80 leading-relaxed mb-10"
                            style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)" }}>
                            {dict.landing.hero.desc2}
                        </p>
                        
                        <div className="hero-cta-wrapper pt-8 border-t border-foreground/10">
                            <Magnetic strength={0.2}>
                                <button 
                                    onClick={() => setShowReality(true)}
                                    className="group w-full relative overflow-hidden bg-foreground text-background px-10 py-5 font-black uppercase tracking-[0.3em] transition-all hover:pr-14 flex justify-between items-center"
                                >
                                    <span className="relative z-10 transition-transform duration-500 block group-hover:-translate-x-2">
                                        {dict.landing.hero.cta}
                                    </span>
                                    <span className="relative z-10 font-bold transition-transform duration-500 block group-hover:translate-x-2">→</span>
                                    <div className="absolute top-0 right-0 w-12 h-full bg-swiss-red translate-x-full transition-transform duration-500 group-hover:translate-x-0 flex items-center justify-center">
                                        <span className="text-white">→</span>
                                    </div>
                                </button>
                            </Magnetic>
                        </div>
                    </div>

                </div>

                {/* Verification Matrix — 1px precision */}
                <div className={`grid grid-cols-12 gap-0 pt-16 transition-opacity duration-1000 ${showReality ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-foreground/10 pb-6 md:pb-0 md:pr-8 flex flex-col gap-2">
                        <span className="font-swiss-display font-black tracking-tighter leading-none text-foreground text-[4.5rem]">
                            99%
                        </span>
                        <span className="font-mono font-black uppercase opacity-60 tracking-[0.3em]"
                            style={{ fontSize: "0.55rem" }}>
                            {dict.landing.hero.statLabel}
                        </span>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:pl-8 flex items-center">
                        <p className="font-mono text-[10px] uppercase tracking-widest font-black leading-relaxed bg-swiss-red text-white p-4 w-full">
                            {language === "id" 
                                ? "Sembilan puluh sembilan persen orang tidak peduli dengan keringat yang Anda keluarkan. Anda sembunyikan hingga pelanggan melihat realita sebenarnya."
                                : "Ninety-nine percent of people don't care about the sweat you put in. You hide it until the user clicks see reality."}
                        </p>
                    </div>
                </div>

            </div>
            
            {/* Subtle background grid intersection & Parallax Accents */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 border-r border-b border-foreground pointer-events-none" />
            
            {/* Pop Art Abstract Shapes for Parallax */}
            <div className="hero-parallax absolute top-[20%] left-[5%] w-32 h-32 md:w-48 md:h-48 border-[1px] border-foreground/10 rounded-full pointer-events-none opacity-20 hidden md:block" />
            <div className="hero-parallax-reverse absolute bottom-[15%] right-[10%] w-16 h-16 md:w-24 md:h-24 bg-swiss-red/5 pointer-events-none rotate-45 hidden md:block" />
            
            {/* Pop Accent Floating Elements (Managed by LandingPage GSAP timeline) */}
            <div className="pop-accent-1 absolute top-[30%] right-[15%] w-4 h-4 bg-pop-blue opacity-20 rounded-sm pointer-events-none hidden md:block" />
            <div className="pop-accent-2 absolute bottom-[40%] left-[8%] w-3 h-3 border border-pop-pink opacity-30 rounded-full pointer-events-none hidden md:block" />
        </section>
    );
}
