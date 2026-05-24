"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function PeranSection() {
    const { dict } = useLanguage();
    const [words, setWords] = useState<{ id: string, text: string }[]>([]);

    useEffect(() => {
        const updateWords = () => {
            if (dict.landing.peran.title) {
                const wordsList = dict.landing.peran.title.split(" ").map((word, i) => ({
                    id: `peran-${i}-${word}`,
                    text: word
                }));
                setWords(wordsList);
            }
        };

        // Rely on Framer Motion 'layout' props for smooth transitions
        updateWords();
    }, [dict.landing.peran.title]);

    // Fungsi untuk menukar posisi kata secara logis (Shuffle Logic)
    const moveWord = (fromIndex: number, toIndex: number) => {
        const newWords = [...words];
        const [movedItem] = newWords.splice(fromIndex, 1);
        newWords.splice(toIndex, 0, movedItem);
        setWords(newWords);
    };

    // Split the solution description into items
    const solutionItems = dict.landing.peran.mainDesc 
        ? dict.landing.peran.mainDesc.split("•").map(item => item.trim()).filter(Boolean)
        : [];

    return (
        <section id="authority" className="w-full bg-foreground text-background py-32 lg:py-48 overflow-hidden relative border-t border-background/10">
            <div className="absolute top-0 left-0 w-full h-full bg-halftone-dense opacity-[0.02] pointer-events-none" />
            
            <div className="swiss-container relative z-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 relative">
                    <div className="col-span-12 lg:col-span-3">
                        <div className="sticky top-32 lg:pb-10">
                            <div className="inline-block bg-swiss-red px-3 py-1 mb-4 shadow-[4px_4px_0px_rgba(255,255,255,0.1)]">
                                <span className="peran-label font-mono font-black uppercase tracking-[0.5em] text-white"
                                    style={{ fontSize: "0.6rem" }}>
                                    {dict.landing.peran.label}
                                </span>
                            </div>
                            
                            <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 0.5, x: 0 }}
                                transition={{ delay: 1 }}
                                className="mt-8 font-mono text-[9px] uppercase tracking-widest leading-relaxed max-w-[180px]"
                            >
                                <span className="text-swiss-red">[ LOGIKA_SISTEM ]</span><br />
                                Kata-kata di samping akan bergeser secara rapi ketika Anda klik untuk menyesuaikan struktur baru.
                            </motion.div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                        <div className="flex flex-col gap-12 lg:gap-16">
                            {/* Interactive Word Shuffle with structural border frame */}
                            <div className="relative border border-background/15 p-6 md:p-10 lg:p-12 bg-background/[0.02] backdrop-blur-[2px]">
                                {/* Technical labels for Swiss design aesthetic */}
                                <div className="absolute -top-2.5 left-6 bg-foreground text-background px-2 py-0.5 text-[8px] font-mono tracking-widest">
                                    [ INTERACTION_SHUFFLE_BOARD ]
                                </div>
                                <div className="absolute -top-2.5 right-6 bg-background text-foreground px-2 py-0.5 text-[8px] font-mono tracking-widest opacity-80 hidden sm:block">
                                    SYS_REORDER: CLICK_TO_SHUFFLE
                                </div>
                                <div className="absolute -bottom-2 right-6 bg-background text-foreground px-2 py-0.5 text-[8px] font-mono tracking-widest opacity-40">
                                    LOC: 50.10°N // 08.41°E
                                </div>

                                <motion.div 
                                    layout
                                    className="flex flex-wrap gap-x-[0.4em] gap-y-[0.6em] pointer-events-auto"
                                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                                >
                                    <AnimatePresence mode="popLayout">
                                        {words.map((wordObj, idx) => (
                                            <motion.div 
                                                key={wordObj.id}
                                                layout
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                transition={{ 
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30
                                                }}
                                                className="cursor-pointer"
                                                onClick={() => {
                                                    // Click to move to the front
                                                    if (idx > 0) moveWord(idx, idx - 1);
                                                    else moveWord(idx, words.length - 1);
                                                }}
                                            >
                                                <span 
                                                    className="font-unbounded font-medium uppercase leading-[0.9] tracking-[-0.05em] text-background block hover:text-swiss-red transition-colors duration-300"
                                                    style={{ fontSize: "clamp(1.6rem, 4.5vw, 4rem)" }}
                                                >
                                                    {wordObj.text}{idx === words.length - 1 ? "." : ""}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </motion.div>
                            </div>

                            {/* Asymmetric 2-column layout for Negation vs Solution */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-background/15 pt-12">
                                {/* Left column: Negated claims (col-span-5) */}
                                <div className="lg:col-span-5 space-y-4">
                                    <div className="font-mono text-[9px] opacity-40 uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-swiss-red rounded-full"></span>
                                        [ STATUS_DIABAIKAN / NEGASI ]
                                    </div>
                                    <div className="space-y-4 pt-2">
                                        <p className="font-sans font-medium leading-snug opacity-20 line-through decoration-swiss-red decoration-2" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.15rem)" }}>
                                            {dict.landing.peran.notLine1}
                                        </p>
                                        <p className="font-sans font-medium leading-snug opacity-20 line-through decoration-swiss-red decoration-2" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.15rem)" }}>
                                            {dict.landing.peran.notLine2}
                                        </p>
                                    </div>
                                </div>

                                {/* Right column: Solution Blueprint items (col-span-7) */}
                                <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-background/15 lg:pl-10 pt-8 lg:pt-0">
                                    <div className="font-mono text-[9px] text-swiss-red uppercase tracking-widest mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-swiss-red"></span>
                                        [ PROTOKOL_SOLUSI_KOMUNIKASI ]
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                        {solutionItems.map((item, idx) => (
                                            <div key={idx} className="border-b border-background/10 pb-2 flex justify-between items-end">
                                                <span className="font-mono text-[8px] opacity-40">INDEX_0{idx + 1}</span>
                                                <span className="font-unbounded font-medium text-[11px] tracking-tight text-background uppercase">{item}</span>
                                            </div>
                                        ))}
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
