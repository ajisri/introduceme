"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function PeranSection() {
    const { dict, language } = useLanguage();
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

    // Split the solution description into items (removed unused variable)

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
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                        <div className="flex flex-col gap-12 lg:gap-16">
                            {/* Interactive Word Shuffle with structural border frame */}
                            <div className="relative border border-background/15 p-6 md:p-10 lg:p-12 bg-background/[0.02] backdrop-blur-[2px]">
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

                            {/* Personal Narrative */}
                            <div className="border-l-2 border-swiss-red pl-6 md:pl-10 space-y-6 max-w-3xl">
                                <span className="font-mono text-[9px] text-swiss-red uppercase tracking-widest block font-black">
                                    {language === "id" ? "[ MENGAPA_SAYA_PEDULI ]" : "[ WHY_I_CARE ]"}
                                </span>
                                <p className="font-sans font-medium text-background/85 leading-relaxed text-sm md:text-lg">
                                    {dict.landing.peran.whyCare}
                                </p>
                            </div>

                            {/* Philosophy / Beliefs Grid */}
                            <div className="border-t border-background/15 pt-12">
                                <span className="font-mono text-[9px] opacity-40 uppercase tracking-widest block mb-8">
                                    {dict.landing.peran.beliefsTitle}
                                </span>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {dict.landing.peran.beliefs.map((belief: string, idx: number) => (
                                        <div key={idx} className="border border-background/10 p-6 bg-background/[0.02] flex flex-col justify-between min-h-[160px]">
                                            <span className="font-mono text-[8px] text-swiss-red font-black">
                                                [ BELIEF_0{idx + 1} ]
                                            </span>
                                            <p className="font-sans text-xs md:text-sm text-background/80 leading-relaxed font-semibold mt-4">
                                                {belief}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
