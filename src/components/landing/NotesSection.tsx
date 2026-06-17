"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotesSection() {
    const { dict } = useLanguage();
    
    // Safety check for translations
    const notesData = dict.landing.notes || {
        label: "// 05_THINKING_PROOF",
        title: "Notes on trust, positioning, and digital credibility.",
        items: []
    };

    return (
        <section className="w-full py-32 lg:py-48 relative border-t border-foreground/15 bg-transparent overflow-hidden">
            {/* Architectural Grid Background */}
            <div className="absolute top-0 left-0 w-[50%] h-full bg-swiss-grid opacity-[0.02] pointer-events-none" />

            <div className="swiss-container">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 relative z-10">
                {/* Sticky Side Label */}
                <div className="col-span-12 lg:col-span-3">
                    <div className="sticky top-32 lg:pb-10">
                        <span className="bukti-label inline-block font-mono font-black uppercase tracking-[0.5rem] text-foreground opacity-30"
                            style={{ fontSize: "0.6rem" }}>
                            {notesData.label}
                        </span>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                    <div className="max-w-3xl mb-16 lg:mb-24">
                        <h3 className="font-unbounded font-black text-foreground tracking-tighter text-3xl sm:text-4xl lg:text-5xl leading-none">
                            {notesData.title}
                        </h3>
                    </div>

                    {/* Thinking Proof Articles list */}
                    <div className="flex flex-col border-t border-foreground/15">
                        {notesData.items.map((note, idx) => (
                            <div 
                                key={idx} 
                                className="group border-b border-foreground/15 py-10 lg:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-foreground/[0.01] transition-colors duration-300 px-4"
                            >
                                {/* Number index */}
                                <div className="col-span-12 md:col-span-1 font-mono text-[9px] text-swiss-red font-black pt-1">
                                    [ NOTE_0{idx + 1} ]
                                </div>

                                {/* Article Title */}
                                <div className="col-span-12 md:col-span-5 md:col-start-2">
                                    <h4 className="font-unbounded font-bold text-lg sm:text-xl text-foreground tracking-tight group-hover:text-swiss-red transition-colors duration-300">
                                        {note.title}
                                    </h4>
                                </div>

                                {/* Article Muted Description & Action */}
                                <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-4">
                                    <p className="font-sans text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                                        {note.desc}
                                    </p>
                                    <div className="pt-2">
                                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-swiss-red group-hover:underline cursor-pointer">
                                            {dict.landing.penutup.inquire.includes("Umpan") || dict.landing.penutup.cta.includes("Diskusikan") ? "[ Baca Catatan → ]" : "[ Read Article → ]"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);
}
