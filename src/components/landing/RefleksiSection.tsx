"use client";
import { useLanguage } from "@/context/LanguageContext";
import ScrollTextReveal from "./ScrollTextReveal";

export default function RefleksiSection() {
    const { dict } = useLanguage();

    return (
        <section className="w-full py-32 lg:py-48 relative border-t border-foreground/15 bg-transparent">
            <div className="swiss-container">
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
                                    className="font-light leading-[0.9] tracking-[-0.05em] font-swiss-display text-foreground/40"
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
                                    className="font-light leading-[0.9] tracking-[-0.05em] font-swiss-display text-foreground"
                                    triggerStart="top 75%"
                                    triggerEnd="top 40%"
                                />
                            </div>
                        </div>
                        
                        {/* The Question — In asymmetric grid frame */}
                        <div className="grid grid-cols-12 gap-0 w-full mt-4">
                            <div className="col-span-12 lg:col-start-2 lg:col-span-10 border border-foreground/15 p-6 md:p-8 lg:p-12 relative overflow-hidden bg-foreground/[0.01]">
                                <div className="absolute right-4 bottom-0 font-mono text-[6rem] md:text-[8rem] font-bold text-foreground opacity-[0.03] leading-none select-none pointer-events-none">
                                    01
                                </div>
                                <p className="refleksi-question relative z-10 font-light tracking-tight text-swiss-red leading-[1.2] font-swiss-display"
                                    style={{ fontSize: "clamp(1.5rem, 4vw + 0.8rem, 3.8rem)" }}>
                                    {dict.landing.refleksi.question}
                                </p>
                            </div>
                        </div>
                        
                        {/* Descriptive mirror text — asymmetrically structured */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-foreground/10 pt-16 mt-8">
                            <div className="pr-8 pb-8 lg:pb-0 lg:border-r border-foreground/10">
                                <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/30 block mb-4">[ INSIGHT_A ]</span>
                                <ScrollTextReveal
                                    text={dict.landing.refleksi.desc1}
                                    className="font-medium text-foreground/60 leading-relaxed text-sm md:text-base"
                                    triggerStart="top 80%"
                                    triggerEnd="top 50%"
                                />
                            </div>
                            <div className="lg:pl-8 pt-8 lg:pt-16"> {/* Vertical height shift */}
                                <span className="font-mono text-[9px] uppercase tracking-widest text-swiss-red block mb-4">[ INSIGHT_B ]</span>
                                <ScrollTextReveal
                                    text={dict.landing.refleksi.desc2}
                                    className="font-black tracking-tight text-foreground leading-snug text-base md:text-lg"
                                    triggerStart="top 75%"
                                    triggerEnd="top 45%"
                                />
                            </div>
                        </div>

                        {/* Visual Diagram — CONFUSION -> DOUBT -> EXIT */}
                        <div className="border-t border-foreground/10 pt-16 mt-8 w-full">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/30 block mb-8">[ POSITIONING_FAILURE_SEQUENCE ]</span>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-foreground/10 bg-foreground/[0.01]">
                                <div className="p-6 md:p-8 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-foreground/10 min-h-[140px]">
                                    <span className="font-mono text-[8px] opacity-40">STAGE_01</span>
                                    <div>
                                        <h4 className="font-unbounded font-black text-sm md:text-base text-foreground tracking-wider mb-2">CONFUSION</h4>
                                        <p className="font-sans text-[10px] text-foreground/50 leading-relaxed">Messaging is generic or unclear.</p>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-foreground/10 min-h-[140px] bg-swiss-red/[0.02]">
                                    <span className="font-mono text-[8px] text-swiss-red font-bold">STAGE_02</span>
                                    <div>
                                        <h4 className="font-unbounded font-black text-sm md:text-base text-swiss-red tracking-wider mb-2">DOUBT</h4>
                                        <p className="font-sans text-[10px] text-swiss-red/60 leading-relaxed">Brain fills information gap with risk.</p>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 flex flex-col justify-between min-h-[140px]">
                                    <span className="font-mono text-[8px] opacity-40">STAGE_03</span>
                                    <div>
                                        <h4 className="font-unbounded font-black text-sm md:text-base text-foreground/50 tracking-wider mb-2">EXIT</h4>
                                        <p className="font-sans text-[10px] text-foreground/40 leading-relaxed">Visitor leaves silently for competitors.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
}
