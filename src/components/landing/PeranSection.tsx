"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function PeranSection() {
    const { dict } = useLanguage();

    return (
        <section id="authority" className="w-full bg-foreground text-background py-32 lg:py-48 overflow-hidden relative border-t border-background/5">
            <div className="absolute top-0 left-0 w-full h-full bg-halftone-dense opacity-[0.02] pointer-events-none" />
            <div className="swiss-container relative z-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 relative">
                    {/* Sticky Sidebar Label */}
                    <div className="col-span-12 lg:col-span-3">
                        <div className="sticky top-32 lg:pb-10">
                            <span className="peran-label inline-block font-mono font-black uppercase tracking-[0.5em] text-swiss-red opacity-80"
                                style={{ fontSize: "0.6rem" }}>
                                {dict.landing.peran.label}
                            </span>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                        <div className="flex flex-col gap-16 lg:gap-24">
                            <div className="reveal-mask">
                                <h2 className="peran-title font-light uppercase leading-[0.85] tracking-[-0.07em] font-unbounded text-background"
                                    style={{ fontSize: "clamp(2.5rem, 6vw + 1rem, 6rem)" }}>
                                    {dict.landing.peran.title}
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                                <div className="lg:col-span-5 peran-negation space-y-4">
                                    <p className="font-bold leading-tight opacity-20 line-through decoration-1 decoration-swiss-red" style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }}>
                                        {dict.landing.peran.notLine1}
                                    </p>
                                    <p className="font-bold leading-tight opacity-20 line-through decoration-1 decoration-swiss-red" style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }}>
                                        {dict.landing.peran.notLine2}
                                    </p>
                                </div>
                                <div className="lg:col-span-6 lg:col-start-7 border-l border-background/10 pl-8 lg:pl-12">
                                    <p className="font-black uppercase tracking-tight leading-[1.2] text-background/90" style={{ fontSize: "clamp(1.2rem, 2vw + 1rem, 2rem)" }}>
                                        {dict.landing.peran.mainDesc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
