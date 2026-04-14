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
                    <div className="flex flex-col gap-10 lg:gap-16">
                        
                        {/* Scroll Text Reveal — Words illuminate as you scroll */}
                        <ScrollTextReveal 
                            text={dict.landing.refleksi.line1}
                            tag="h2"
                            className="font-light uppercase leading-[0.9] tracking-[-0.05em] font-unbounded text-foreground/40"
                            triggerStart="top 85%"
                            triggerEnd="top 55%"
                        />

                        <ScrollTextReveal 
                            text={dict.landing.refleksi.line2}
                            tag="h2"
                            className="font-light uppercase leading-[0.9] tracking-[-0.05em] font-unbounded text-foreground"
                            triggerStart="top 75%"
                            triggerEnd="top 40%"
                        />
                        
                        {/* The Question — Standard reveal, stays bold */}
                        <div className="mt-4">
                            <p className="refleksi-question font-light uppercase tracking-tight text-swiss-red leading-[0.85] font-unbounded"
                                style={{ fontSize: "clamp(2.5rem, 6vw + 1rem, 6rem)" }}>
                                {dict.landing.refleksi.question}
                            </p>
                        </div>
                        
                        {/* Descriptive mirror text — also scroll-revealed */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 lg:mt-20 pt-10 border-t border-foreground/5">
                            <ScrollTextReveal
                                text={dict.landing.refleksi.desc1}
                                className="font-medium text-foreground/50 leading-relaxed"
                                triggerStart="top 80%"
                                triggerEnd="top 50%"
                            />
                            <ScrollTextReveal
                                text={dict.landing.refleksi.desc2}
                                className="font-black uppercase tracking-tight text-foreground/80 leading-snug"
                                triggerStart="top 75%"
                                triggerEnd="top 45%"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
