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
                    <div className="grid grid-cols-12 gap-0 border border-foreground/15">
                        
                        {/* Standard Audit — Faded/Technical Debt (col-span-4) */}
                        <div className="col-span-12 lg:col-span-4 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-foreground/15 bg-background text-foreground/40">
                            <span className="font-mono font-bold uppercase tracking-[0.2em] text-foreground/30 mb-8 block text-[9px]">
                                [ 01_STANDARD_AUDIT ]
                            </span>
                            <h3 className="font-unbounded font-medium uppercase tracking-tight text-foreground/50 mb-6 leading-[1.15] break-words text-lg sm:text-xl lg:text-2xl">
                                {dict.landing.contrast.agencyLabel}
                            </h3>
                            <p className="font-sans font-medium text-foreground/45 leading-relaxed max-w-sm text-xs sm:text-sm">
                                {dict.landing.contrast.agencyLine}
                            </p>
                        </div>
 
                        {/* Validated Audit — High Performance/Authority (col-span-8) */}
                        <div className="col-span-12 lg:col-span-8 p-6 sm:p-10 lg:p-14 bg-foreground text-background relative overflow-hidden group">
                            {/* Halftone pop art texture overlay */}
                            <div className="absolute inset-0 bg-halftone-dense opacity-[0.08] pointer-events-none" />
                            
                            <span className="font-mono font-bold uppercase tracking-[0.2em] text-swiss-red mb-8 block text-[9px] relative z-10">
                                [ 02_VALIDATED_AUDIT // AKTIF ]
                            </span>
                            
                            <h3 className="font-unbounded font-bold uppercase tracking-tight text-background mb-6 leading-[1.1] break-words text-xl sm:text-2xl lg:text-3xl relative z-10">
                                {dict.landing.contrast.engineerLabel}
                            </h3>
                            
                            <p className="font-sans font-medium text-background/80 leading-relaxed bg-background/10 p-4 max-w-md text-xs sm:text-sm border-l-2 border-swiss-red mb-8 relative z-10">
                                {dict.landing.contrast.engineerLine}
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-6 relative z-10">
                                {["Profil Jelas", "Lokasi & Jam", "Cara Pesan", "Portofolio", "Testimoni", "Prosedur Layanan"].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-background/90 hover:text-swiss-red transition-colors duration-300">
                                        <div className="w-1.5 h-1.5 bg-swiss-red" />
                                        <span className="font-mono font-bold uppercase tracking-widest text-[9px]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
 
                    {/* Performance Metrics — Aligned strictly to the columns above */}
                    <div className="grid grid-cols-12 gap-8 mt-16 lg:mt-24 pt-10 border-t border-foreground/15 opacity-95">
                        {/* Logic depth aligns to Standard Audit column (col-span-4) */}
                        <div className="col-span-12 md:col-span-4 flex flex-col gap-2">
                            <span className="font-mono font-bold uppercase text-[9px] tracking-widest text-foreground/40">LOGIC_DEPTH [ 40% ]</span>
                            <div className="h-1.5 w-full bg-foreground/10 overflow-hidden">
                                <div className="h-full w-[40%] bg-foreground/45" />
                            </div>
                        </div>
                        
                        {/* Next three metrics align to Validated Audit column (col-span-8) */}
                        <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex flex-col gap-2">
                                <span className="font-mono font-bold uppercase text-swiss-red text-[9px] tracking-widest">CONVICTION_VAL [ MAX ]</span>
                                <div className="h-1.5 w-full bg-swiss-red/20 overflow-hidden">
                                    <div className="h-full w-[95%] bg-swiss-red" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-mono font-bold uppercase text-foreground text-[9px] tracking-widest">GAPS_SEALED [ 100% ]</span>
                                <div className="h-1.5 w-full bg-foreground/10 overflow-hidden">
                                    <div className="h-full w-full bg-foreground" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-mono font-bold uppercase text-swiss-red text-[9px] tracking-widest">DATA_INTEGRITY [ 99.8% ]</span>
                                <div className="h-1.5 w-full bg-swiss-red/20 overflow-hidden">
                                    <div className="h-full w-[98%] bg-swiss-red" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
