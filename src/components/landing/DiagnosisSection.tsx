"use client";
import { useLanguage } from "@/context/LanguageContext";
import ScrollTextReveal from "./ScrollTextReveal";

export default function DiagnosisSection() {
    const { dict } = useLanguage();

    return (
        <section className="w-full min-h-screen relative border-t border-foreground/5 bg-background pt-32 pb-20 overflow-hidden flex flex-col justify-between">
            {/* DOVES Top Text (Massive Title) */}
            <div className="w-full px-5 lg:px-12 mb-24 lg:mb-32">
                <ScrollTextReveal
                    text={dict.landing.diagnosis.title}
                    tag="h2"
                    className="font-unbounded font-medium text-foreground tracking-tighter text-[clamp(2.5rem,7vw,10rem)] leading-[0.85]"
                    triggerStart="top 90%"
                />
            </div>

            {/* The 4-Whys Album Credit Clusters */}
            <div className="w-full px-5 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-10">
                 <div className="md:col-span-6 lg:col-span-3">
                      <span className="block font-mono text-[10px] tracking-widest uppercase text-swiss-red mb-3 opacity-60"># 01</span>
                      <p className="text-xs lg:text-sm tracking-tight font-medium leading-relaxed max-w-[280px]">{dict.landing.diagnosis.items[0]}</p>
                 </div>
                 <div className="md:col-span-6 lg:col-span-4">
                      <span className="block font-mono text-[10px] tracking-widest uppercase text-swiss-red mb-3 opacity-60"># 02</span>
                      <p className="text-xs lg:text-sm tracking-tight font-medium leading-relaxed max-w-[300px]">{dict.landing.diagnosis.items[1]}</p>
                 </div>
                 <div className="md:col-span-8 lg:col-span-4 lg:col-start-9 md:mt-10 lg:mt-0">
                      <span className="block font-mono text-[10px] tracking-widest uppercase text-swiss-red mb-3 opacity-60"># 03</span>
                      <p className="text-xs lg:text-sm tracking-tight font-medium leading-relaxed max-w-[320px]">{dict.landing.diagnosis.items[2]}</p>
                 </div>
            </div>
            
            <div className="w-full px-5 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 mb-32 lg:mb-40">
                 <div className="md:col-span-8 lg:col-span-4 lg:col-start-9">
                      <span className="block font-mono text-[10px] tracking-widest uppercase text-swiss-red mb-3 opacity-60"># 04</span>
                      <p className="text-xs lg:text-sm tracking-tight font-medium leading-relaxed max-w-[320px]">{dict.landing.diagnosis.items[3]}</p>
                 </div>
            </div>

            {/* DOVES Horizontal Line and Conclusion 1 */}
            <div className="w-full px-5 lg:px-12 mb-6 mt-auto">
                 <div className="flex items-center gap-4 lg:gap-8 w-full">
                     <span className="font-unbounded font-medium tracking-tight text-3xl lg:text-6xl shrink-0 opacity-40">5)</span>
                     <div className="h-[2px] bg-foreground/80 w-full relative">
                         {/* Small label above line */}
                         <div className="absolute bottom-3 left-0">
                             <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">
                                 {dict.landing.diagnosis.conclusion1}
                             </span>
                         </div>
                     </div>
                 </div>
            </div>

            {/* DOVES Massive Lowercase Root Cause */}
            <div className="w-full px-5 lg:px-12 pb-5 overflow-hidden">
                 <h3 className="font-unbounded font-medium lowercase text-foreground whitespace-nowrap" style={{ fontSize: "clamp(2rem, 10vw, 12rem)", letterSpacing: "-0.05em", lineHeight: "0.8" }}>
                     {dict.landing.diagnosis.conclusion2} <span className="text-[0.2em] align-top opacity-40 ml-4 font-sans tracking-normal hidden md:inline-block leading-none">(05.00)</span>
                 </h3>
            </div>
        </section>
    );
}
