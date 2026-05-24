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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/15 border border-foreground/15">
                        {dict.landing.bukti.items.map((item, i) => (
                            <div key={i} className="bg-background p-6 md:p-8 flex flex-col justify-between min-h-[260px] group transition-colors hover:bg-foreground/[0.02]">
                                <div className="flex flex-col gap-2">
                                    <span className="font-mono font-black text-swiss-red opacity-60 text-[9px] tracking-wider">
                                        [ PARAMETER_0{i + 1} ]
                                    </span>
                                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/45 leading-tight">
                                        {item.label}
                                    </span>
                                </div>
                                
                                <div className="border-t border-foreground/10 pt-6 mt-8">
                                    <p className="font-unbounded font-medium uppercase tracking-tighter leading-none text-foreground text-4xl sm:text-5xl group-hover:text-swiss-red transition-colors duration-300">
                                        {item.val}
                                    </p>
                                    <div className="mt-4 h-[2px] w-0 bg-swiss-red transition-all duration-500 group-hover:w-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
