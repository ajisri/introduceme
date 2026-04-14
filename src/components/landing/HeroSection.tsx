"use client";
import Magnetic from "./Magnetic";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
    handleMouseMove: (e: React.MouseEvent) => void;
}

export default function HeroSection({ handleMouseMove }: HeroSectionProps) {
    const { dict } = useLanguage();

    return (
        <section
            onMouseMove={handleMouseMove}
            className="w-full min-h-[90vh] pt-32 lg:pt-40 pb-20 flex flex-col justify-start relative overflow-hidden bg-transparent border-b border-foreground/5"
        >
            {/* 
                PHILOSOPHY: Decisions occur in silence. 
                DESIGN: Compact & Packed (Olivier Larose influence).
                TYPE: Thin & Massive (font-light 300).
            */}

            <div className="swiss-container relative z-10 flex flex-col h-full">
                <div className="grid grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* Sticky Side Tagline — The Map */}
                    <div className="col-span-12 lg:col-span-3">
                        <div className="sticky top-32 flex flex-col gap-8 items-start relative">
                            <span className="font-mono font-black uppercase tracking-[0.6em] text-swiss-red opacity-60"
                                style={{ fontSize: "0.6rem" }}>
                                {dict.landing.hero.tagline}
                            </span>
                            
                            {/* Kualifikasi Transparan — Cermin Target Audiens */}
                            <div className="border border-foreground/10 px-4 py-3 bg-foreground/[0.02] max-w-[200px]">
                                <p className="font-sans font-bold uppercase tracking-[0.15em] leading-[1.6] text-foreground/70" style={{ fontSize: "0.55rem" }}>
                                    {dict.landing.hero.qualifier}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Audit Content */}
                    <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                        <div className="mb-16 lg:mb-24 flex flex-col items-start gap-0 relative">
                            <div className="reveal-mask overflow-hidden py-2">
                                <h1 className="font-unbounded font-bold uppercase leading-[0.95] tracking-tight text-foreground"
                                    style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}>
                                    {dict.landing.hero.title1}
                                </h1>
                            </div>
                            <div className="reveal-mask overflow-hidden py-2">
                                <h1 className="font-unbounded font-bold uppercase leading-[0.95] tracking-tight text-swiss-red"
                                    style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}>
                                    {dict.landing.hero.title2}
                                </h1>
                            </div>
                        </div>

                        {/* Diagnostic Description — Packed & Focused */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
                            <div className="border-l border-foreground/10 pl-6 lg:pl-10 h-min">
                                <p className="hero-subtext font-mono font-black uppercase text-foreground leading-[1.6] opacity-30 mb-8"
                                    style={{ fontSize: "0.65rem", letterSpacing: "0.3em" }}>
                                    {dict.landing.hero.subtitle}
                                </p>
                                <p className="hero-subtext font-black uppercase leading-tight tracking-tight text-foreground/80"
                                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)" }}>
                                    {dict.landing.hero.desc1}
                                </p>
                            </div>
                            <div className="flex flex-col justify-start">
                                <p className="hero-subtext font-medium text-foreground opacity-35 leading-relaxed mb-10"
                                    style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)" }}>
                                    {dict.landing.hero.desc2}
                                </p>
                                
                                <div className="hero-cta-wrapper pt-8 border-t border-foreground/5">
                                    <Magnetic strength={0.2}>
                                        <button className="group relative overflow-hidden bg-foreground text-background px-10 py-5 font-black uppercase tracking-[0.3em] transition-all hover:pr-14">
                                            <span className="relative z-10 transition-transform duration-500 block group-hover:-translate-x-2">
                                                {dict.landing.hero.cta}
                                            </span>
                                            <div className="absolute top-0 right-0 w-12 h-full bg-swiss-red translate-x-full transition-transform duration-500 group-hover:translate-x-0 flex items-center justify-center">
                                                <span className="text-white">→</span>
                                            </div>
                                        </button>
                                    </Magnetic>
                                </div>
                            </div>
                        </div>

                        {/* Verification Matrix — 1px precision */}
                        <div className="grid grid-cols-2 border-t border-foreground/10 pt-10">
                            <div className="flex flex-col gap-2">
                                <span className="font-unbounded font-medium tracking-tight leading-none text-foreground"
                                    style={{ fontSize: "4rem" }}>
                                    {dict.landing.hero.stat}
                                </span>
                                <span className="font-mono font-black uppercase opacity-25 tracking-[0.3em]"
                                    style={{ fontSize: "0.55rem" }}>
                                    {dict.landing.hero.statLabel}
                                </span>
                            </div>
                            <div className="flex flex-col gap-3 text-right items-end justify-center">
                                <div className="flex items-center gap-3">
                                    <span className="font-mono font-black uppercase opacity-30" style={{ fontSize: "0.55rem" }}>{dict.landing.hero.point1}</span>
                                    <div className="w-1 h-1 bg-swiss-red rounded-full" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-mono font-black uppercase opacity-30" style={{ fontSize: "0.55rem" }}>{dict.landing.hero.point2}</span>
                                    <div className="w-1 h-1 bg-foreground/30 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Subtle background grid intersection */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 border-r border-b border-foreground pointer-events-none" />
        </section>
    );
}
