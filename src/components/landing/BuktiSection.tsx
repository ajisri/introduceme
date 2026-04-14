"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function BuktiSection() {
    const { dict } = useLanguage();

    return (
        <section className="swiss-container py-32 lg:py-48 relative border-t border-foreground/5 bg-transparent overflow-hidden">
            {/* Structural Ghost Layer — Architectural Depth */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-swiss-grid opacity-[0.03] pointer-events-none" />

            <div className="grid grid-cols-12 gap-8 lg:gap-12 relative z-10">
                {/* Sticky Side Label */}
                <div className="col-span-12 lg:col-span-3">
                    <div className="sticky top-32 lg:pb-10">
                        <span className="bukti-label inline-block font-mono font-black uppercase tracking-[0.5rem] text-foreground opacity-30"
                            style={{ fontSize: "0.6rem" }}>
                            {dict.landing.bukti.label}
                        </span>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
                        {dict.landing.bukti.items.map((item, i) => (
                            <div key={i} className="bg-transparent p-10 lg:p-14 flex flex-col justify-between aspect-square lg:aspect-auto lg:min-h-[300px] group transition-colors hover:bg-foreground/[0.02]">
                                <span className="font-mono font-black text-swiss-red opacity-40 mb-10" style={{ fontSize: "0.7rem" }}>
                                    [ PARAMETER_0{i + 1} ]
                                </span>
                                
                                <div className="space-y-4">
                                    <p className="font-light uppercase tracking-tighter leading-none text-foreground font-unbounded"
                                        style={{ fontSize: "clamp(3rem, 5vw, 6rem)" }}>
                                        {item.val}
                                    </p>
                                    <p className="font-black uppercase tracking-[0.3em] text-foreground opacity-30"
                                        style={{ fontSize: "0.6rem" }}>
                                        {item.label}
                                    </p>
                                </div>

                                <div className="mt-10 h-[1px] w-0 bg-swiss-red transition-all duration-700 group-hover:w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
