"use client";
import { useLanguage } from "@/context/LanguageContext";
import ScrollTextReveal from "./ScrollTextReveal";

export default function RefleksiSection() {
    const { dict } = useLanguage();

    return (
        <section className="swiss-container py-32 lg:py-48 relative border-t border-foreground/5 bg-transparent">
            <div className="grid grid-cols-12 gap-8 lg:gap-12 relative z-10">
                {/* Sticky Side Label */}
                <div className="col-span-12 lg:col-span-3">
                    <div className="sticky top-32 lg:pb-10">
                        <span className="refleksi-label inline-block font-mono font-black uppercase tracking-[0.4em] text-swiss-red opacity-60"
                            style={{ fontSize: "0.6rem" }}>
                            {dict.landing.refleksi.label}
                        </span>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                    <div className="flex flex-col gap-12 lg:gap-20">
                        
                        {/* Staggered Scroll Text Reveal Grid */}
                        <div className="grid grid-cols-12 gap-0 w-full">
                            <div className="col-span-12 lg:col-span-10">
                                <ScrollTextReveal 
                                    text={dict.landing.refleksi.line1}
                                    tag="h2"
                                    className="font-light uppercase leading-[0.9] tracking-[-0.05em] font-swiss-display text-foreground/40"
                                    triggerStart="top 85%"
                                    triggerEnd="top 55%"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-0 w-full">
                            <div className="col-span-12 lg:col-start-3 lg:col-span-10">
                                <ScrollTextReveal 
                                    text={dict.landing.refleksi.line2}
                                    tag="h2"
                                    className="font-light uppercase leading-[0.9] tracking-[-0.05em] font-swiss-display text-foreground"
                                    triggerStart="top 75%"
                                    triggerEnd="top 40%"
                                />
                            </div>
                        </div>
                        
                        {/* The Question — In asymmetric grid frame */}
                        <div className="grid grid-cols-12 gap-0 w-full mt-4">
                            <div className="col-span-12 lg:col-start-2 lg:col-span-10 border border-foreground/15 p-8 lg:p-12 relative overflow-hidden bg-foreground/[0.01]">
                                <div className="absolute right-4 bottom-0 font-mono text-[8rem] font-bold text-foreground/[0.02] leading-none select-none pointer-events-none">
                                    01
                                </div>
                                <p className="refleksi-question relative z-10 font-light uppercase tracking-tight text-swiss-red leading-[0.85] font-swiss-display"
                                    style={{ fontSize: "clamp(2.5rem, 6vw + 1rem, 6rem)" }}>
                                    {dict.landing.refleksi.question}
                                </p>
                            </div>
                        </div>
                        
                        {/* Descriptive mirror text — asymmetrically structured */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-foreground/10 pt-16 mt-8">
                            <div className="pr-8 pb-8 lg:pb-0 lg:border-r border-foreground/10">
                                <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/30 block mb-4">[ ANALISIS_01_A ]</span>
                                <ScrollTextReveal
                                    text={dict.landing.refleksi.desc1}
                                    className="font-medium text-foreground/60 leading-relaxed text-sm md:text-base"
                                    triggerStart="top 80%"
                                    triggerEnd="top 50%"
                                />
                            </div>
                            <div className="lg:pl-8 pt-8 lg:pt-16"> {/* Vertical height shift */}
                                <span className="font-mono text-[9px] uppercase tracking-widest text-swiss-red block mb-4">[ ANALISIS_01_B ]</span>
                                <ScrollTextReveal
                                    text={dict.landing.refleksi.desc2}
                                    className="font-black uppercase tracking-tight text-foreground leading-snug text-base md:text-lg"
                                    triggerStart="top 75%"
                                    triggerEnd="top 45%"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
