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

    return (
        <section id="authority" className="w-full bg-foreground text-background py-32 lg:py-48 overflow-hidden relative border-t border-background/5">
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
                                Kata-kata di bawah akan bergeser secara rapi untuk menyesuaikan struktur baru.
                            </motion.div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                        <div className="flex flex-col gap-16 lg:gap-24">
                            <div className="relative group">
                                {/* Gunakan Motion Div dengan layout prop untuk transisi 'rapi' */}
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
                                                    // Klik untuk pindahkan ke depan (simulasi reorder rapi)
                                                    if (idx > 0) moveWord(idx, idx - 1);
                                                    else moveWord(idx, words.length - 1);
                                                }}
                                            >
                                                <span 
                                                    className="font-unbounded font-medium uppercase leading-[0.9] tracking-[-0.05em] text-background block hover:text-swiss-red transition-colors duration-300"
                                                    style={{ fontSize: "clamp(1.8rem, 5vw, 4.5rem)" }}
                                                >
                                                    {wordObj.text}{idx === words.length - 1 ? "." : ""}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </motion.div>
                                
                                <div className="absolute -top-6 right-0 font-mono text-[8px] opacity-20 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-background rounded-full animate-pulse" />
                                    SYSTEM_LOGIC_ACTIVE
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                                <div className="lg:col-span-8 peran-negation space-y-4">
                                    <p className="font-bold leading-tight opacity-20 line-through decoration-1 decoration-swiss-red" style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }}>
                                        {dict.landing.peran.notLine1}
                                    </p>
                                    <p className="font-bold leading-tight opacity-20 line-through decoration-1 decoration-swiss-red" style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }}>
                                        {dict.landing.peran.notLine2}
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
