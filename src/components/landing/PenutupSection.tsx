"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

export default function PenutupSection() {
    const { dict, language } = useLanguage();
    const containerRef = useRef<HTMLElement>(null);
    const noButtonRef = useRef<HTMLButtonElement>(null);

    const handleEvade = (e?: React.MouseEvent | React.TouchEvent) => {
        if (!noButtonRef.current) return;
        
        let moveX = (Math.random() - 0.5) * 200; 
        let moveY = (Math.random() - 0.5) * 100;

        if (e && 'clientX' in e) {
            const rect = noButtonRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Hitung arah dorongan kursor (mouse -> center of button)
            const dirX = centerX - e.clientX;
            const dirY = centerY - e.clientY;
            const length = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
            
            // Dorong berlawanan dengan arah datangnya mouse secara agresif
            const pushX = (dirX / length) * 180 + (Math.random() * 60 - 30);
            const pushY = (dirY / length) * 100 + (Math.random() * 40 - 20);
            
            // Ambil posisi transform saat ini
            const currentX = (gsap.getProperty(noButtonRef.current, "x") as number) || 0;
            const currentY = (gsap.getProperty(noButtonRef.current, "y") as number) || 0;

            moveX = currentX + pushX;
            moveY = currentY + pushY;

            // Batasi ruang gerak agar tidak hilang dari layar ("cage limit")
            const limitX = 220;
            const limitY = 120;
            
            // Jika terpojok, teleportasi silang secara acak
            if (moveX > limitX) moveX = -limitX + Math.random() * 50;
            if (moveX < -limitX) moveX = limitX - Math.random() * 50;
            if (moveY > limitY) moveY = -limitY + Math.random() * 30;
            if (moveY < -limitY) moveY = limitY - Math.random() * 30;
        }

        gsap.to(noButtonRef.current, {
            x: moveX,
            y: moveY,
            duration: 0.1, // Jauh lebih cepat (instant reflex)
            ease: "expo.out", // Sangat tajam dan agresif 
            overwrite: "auto"
        });
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const penutupLines = gsap.utils.toArray(".penutup-line") as HTMLElement[];

            if (penutupLines.length === 0) return;

            // SET INITIAL STATE: Hardware acceleration enabled
            gsap.set(penutupLines, {
                opacity: 0,
                y: "6vh",
                force3D: true
            });
            gsap.set(".penutup-cta-container", {
                opacity: 0,
                y: "4vh",
                force3D: true
            });

            // CHOREOGRAPHY
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center", 
                    end: "+=100%", 
                    pin: true,
                    scrub: 1,    
                    anticipatePin: 1
                }
            });

            tl.to(penutupLines, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "expo.out"
            })
            .to(".penutup-cta-container", {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "expo.out"
            }, "-=0.8"); 
            
            // Breathing room end frame
            tl.to({}, { duration: 0.5 });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full relative penutup-section overflow-hidden min-h-[100svh] bg-background border-t border-foreground/5 pt-16 lg:pt-20 pb-10 lg:pb-20 flex flex-col justify-between"
        >
            <div className="swiss-container flex-grow flex flex-col justify-between relative z-10 h-full">
                
                {/* =========================================
                    TOP MODULE: READING & ACTION (ASYMMETRICAL)
                    ========================================= */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 lg:gap-0 border-b border-foreground/10 pb-12 lg:pb-16">
                    
                    {/* Left: Structured Reflection */}
                    <div className="flex flex-col gap-14 max-w-lg">
                        <span className="penutup-line inline-block font-mono font-black uppercase tracking-[0.4em] text-swiss-red opacity-60" style={{ fontSize: "0.65rem" }}>
                            // 05_CLOSURE_PROTOCOL
                        </span>
                        
                        <div className="border-l border-foreground/20 pl-6 lg:pl-8 space-y-10">
                            <p className="penutup-line font-medium leading-[1.6] text-foreground/50 italic" style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)" }}>
                                {dict.landing.penutup.line1} <br/> {dict.landing.penutup.line2}
                            </p>
                            <p className="penutup-line font-bold leading-[1.4] tracking-tight text-foreground" style={{ fontSize: "clamp(1.2rem, 1.5vw, 1.4rem)" }}>
                                {dict.landing.penutup.line3}
                            </p>
                        </div>
                    </div>

                    {/* Right: Studio Monk Style CTA + Evasive Button */}
                    <div className="penutup-cta-container w-full lg:w-auto flex flex-col-reverse lg:flex-row items-center justify-start lg:justify-end gap-12 relative z-50">
                        
                        <button 
                            ref={noButtonRef}
                            onMouseEnter={handleEvade}
                            onClick={handleEvade}
                            className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-foreground/50 border border-foreground/10 px-8 py-5 bg-transparent whitespace-nowrap hover:border-swiss-red hover:text-swiss-red transition-colors duration-300"
                            style={{ position: "relative" }}
                        >
                            {language === "id" ? "pindah alternatif lain" : "find alternatives"}
                        </button>

                        <Magnetic strength={0.25}>
                            <Link href="/story" aria-label={dict.landing.penutup.cta} className="group relative flex items-center justify-between gap-10 border border-foreground/10 bg-transparent hover:bg-foreground hover:border-foreground transition-all duration-700 px-8 py-6 w-full lg:w-auto">
                                <span className="font-unbounded font-semibold uppercase tracking-widest text-foreground group-hover:text-background transition-colors duration-500" style={{ fontSize: "0.75rem" }}>
                                    {dict.landing.penutup.cta}
                                </span>
                                <span className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-swiss-red group-hover:border-transparent transition-colors duration-500">
                                    <svg className="w-4 h-4 text-foreground group-hover:text-white rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                            </Link>
                        </Magnetic>
                    </div>

                </div>

                {/* =========================================
                    BOTTOM MODULE: PURE TYPOGRAPHIC SCALE
                    ========================================= */}
                <div className="pt-16 lg:pt-auto mt-auto flex flex-col justify-end">
                    <div className="penutup-line overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.h1 
                                key={language + dict.landing.penutup.closing}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-100%" }}
                                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                                className="font-unbounded font-medium uppercase text-foreground leading-[0.8] tracking-tighter w-full text-left" 
                                style={{ fontSize: "clamp(2.5rem, 10vw, 11rem)" }}
                            >
                                {dict.landing.penutup.closing.split(" ").map((word, i) => (
                                    <span key={i} className="inline-block mr-[0.2em]">{word}</span>
                                ))}
                            </motion.h1>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
            
            {/* =========================================
                ENVIRONMENTAL: BLEEDING BRUTALIST LINES
                ========================================= */}
            <div className="absolute top-0 left-[5%] lg:left-[8%] w-[1px] h-full bg-foreground/5 pointer-events-none" />
            <div className="absolute top-0 right-[5%] lg:right-[8%] w-[1px] h-full bg-foreground/5 pointer-events-none" />
            
        </section>
    );
}
