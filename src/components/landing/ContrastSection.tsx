"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function ContrastSection() {
    const { dict } = useLanguage();

    return (
        <section className="swiss-container py-32 lg:py-48 relative border-t border-foreground/5 bg-transparent overflow-hidden">
            <div className="grid grid-cols-12 gap-8 lg:gap-12 relative z-10">
                
                {/* Sticky Side Label */}
                <div className="col-span-12 lg:col-span-3">
                    <div className="sticky top-32 lg:pb-10">
                        <div className="inline-block bg-foreground px-2 py-0.5 mb-4">
                            <span className="contrast-label font-mono font-black uppercase tracking-[0.4em] text-background"
                                style={{ fontSize: "0.6rem" }}>
                                {dict.landing.contrast.label}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-foreground/10">
                        
                        {/* Standard Audit — Faded/Technical Debt */}
                        <div className="p-6 sm:p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-foreground/10 bg-foreground/[0.02]">
                            <span className="font-mono font-black uppercase tracking-[0.3em] text-foreground opacity-20 mb-8 lg:mb-10 block" style={{ fontSize: "0.6rem" }}>
                                [ 01_STANDARD_AUDIT ]
                            </span>
                            <h3 className="font-bold uppercase tracking-tighter text-foreground/60 mb-6 lg:mb-8 font-unbounded leading-[1.1] break-words"
                                style={{ fontSize: "clamp(1.2rem, 2.8vw, 2.2rem)" }}>
                                {dict.landing.contrast.agencyLabel}
                            </h3>
                            <p className="font-sans font-medium text-foreground/60 leading-relaxed max-w-sm"
                                style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)" }}>
                                {dict.landing.contrast.agencyLine}
                            </p>
                        </div>

                        {/* Validated Audit — High Performance/Authority */}
                        <div className="p-6 sm:p-10 lg:p-16 bg-transparent relative group">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-swiss-red opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <span className="font-mono font-black uppercase tracking-[0.3em] text-swiss-red opacity-60 mb-10 block" style={{ fontSize: "0.6rem" }}>
                                [ 02_VALIDATED_AUDIT ]
                            </span>
                            <h3 className="font-black uppercase tracking-tighter text-foreground mb-8 font-unbounded leading-[1.1] break-words"
                                style={{ fontSize: "clamp(1.2rem, 2.8vw, 2.5rem)" }}>
                                {dict.landing.contrast.engineerLabel}
                            </h3>
                            <p className="font-sans font-semibold text-foreground/90 leading-relaxed bg-foreground/5 p-4 max-w-md"
                                style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)" }}>
                                {dict.landing.contrast.engineerLine}
                            </p>
                            <div className="mt-8 flex flex-col gap-4">
                                {["Profil Jelas", "Lokasi & Jam", "Cara Pesan", "Portofolio", "Testimoni", "Prosedur Layanan"].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 text-foreground/80 hover:text-swiss-red transition-colors duration-300">
                                        <div className="w-1.5 h-1.5 bg-swiss-red rounded-sm" />
                                        <span className="font-sans font-bold uppercase tracking-widest text-xs">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Performance Metrics — Competence through achievement, not words */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 lg:mt-24 pt-10 border-t border-foreground/10 opacity-90">
                        <div className="flex flex-col gap-2">
                            <span className="font-mono font-black uppercase" style={{ fontSize: "0.6rem" }}>LOGIC_DEPTH</span>
                            <div className="h-1 w-full bg-foreground/10 rounded-full overflow-hidden">
                                <div className="h-full w-[40%] bg-foreground/40" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-mono font-black uppercase text-swiss-red" style={{ fontSize: "0.6rem" }}>CONVICTION_VAL</span>
                            <div className="h-1 w-full bg-swiss-red/10 rounded-full overflow-hidden">
                                <div className="h-full w-[95%] bg-swiss-red" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-mono font-black uppercase" style={{ fontSize: "0.6rem" }}>GAPS_SEALED</span>
                            <div className="h-1 w-full bg-foreground/10 rounded-full overflow-hidden">
                                <div className="h-full w-full bg-foreground/40" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-mono font-black uppercase text-swiss-red" style={{ fontSize: "0.6rem" }}>DATA_INTEGRITY</span>
                            <div className="h-1 w-full bg-swiss-red/10 rounded-full overflow-hidden">
                                <div className="h-full w-[98%] bg-swiss-red" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
