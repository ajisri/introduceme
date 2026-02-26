"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { storyFloors } from "@/data/story-content";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// =============================================================================
// FOOTER COMPONENT
// Swiss-Pop-Brutalist Design with:
// - Edge-to-edge SVG text path animation
// - Parallax gallery scroll
// - Technical monospace aesthetics
// =============================================================================

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const pathRefs = useRef<(SVGTextPathElement | null)[]>([]);
    const { dict } = useLanguage();

    // Use window scroll for the text path animation as it's at the top of the footer
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ['start end', 'end start']
    });

    // =========================================================================
    // TEXT PATH ANIMATION - Smooth scroll-linked movement
    // =========================================================================
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            pathRefs.current.forEach((path, i) => {
                if (path) {
                    const baseOffset = -60 + (i * 50);
                    const scrollOffset = latest * 80;
                    path.setAttribute("startOffset", `${baseOffset + scrollOffset}%`);
                }
            });
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <footer
            ref={footerRef}
            className="w-full z-30 bg-background border-t-[var(--border-width)] border-foreground mt-24 lg:mt-32"
            style={{ position: 'relative' }}
        >
            {/* ================================================================
                SVG TEXT PATH - Edge to Edge Curved Text
            ================================================================ */}
            <div className="relative w-full pt-16 lg:pt-24 pb-12 overflow-visible bg-halftone" style={{ position: 'relative' }}>
                <svg
                    className="w-[120%] h-auto -ml-[10%]"
                    viewBox="0 0 1200 180"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ minHeight: '120px' }}
                >
                    <defs>
                        <path
                            id="curve-main"
                            fill="none"
                            d="M-100,140 C200,30 400,160 600,80 C800,0 1000,150 1300,60"
                        />
                        <path
                            id="curve-secondary"
                            fill="none"
                            d="M-100,100 C150,180 350,20 600,120 C850,220 1050,40 1300,100"
                        />
                    </defs>

                    <text
                        className="font-black uppercase fill-foreground font-mono"
                        style={{
                            fontSize: '18px',
                            letterSpacing: '0.15em'
                        }}
                    >
                        {[0, 1, 2].map((i) => (
                            <textPath
                                key={`main-${i}`}
                                ref={(el) => { pathRefs.current[i] = el; }}
                                href="#curve-main"
                                startOffset={`${-60 + i * 50}%`}
                            >
                                {dict.footer.textPath1}
                            </textPath>
                        ))}
                    </text>

                    <text
                        className="font-black uppercase fill-foreground/30 font-mono"
                        style={{
                            fontSize: '12px',
                            letterSpacing: '0.2em'
                        }}
                    >
                        {[3, 4].map((i) => (
                            <textPath
                                key={`secondary-${i}`}
                                ref={(el) => { pathRefs.current[i] = el; }}
                                href="#curve-secondary"
                                startOffset={`${-40 + (i - 3) * 60}%`}
                            >
                                {dict.footer.textPath2}
                            </textPath>
                        ))}
                    </text>
                </svg>
            </div>

            {/* Gallery Section with its own local scroll target */}
            <FooterGallery />

            {/* Credits Section */}
            <div className="bg-foreground text-background p-6 lg:p-12 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-background/10" style={{ position: 'relative' }}>
                <div className="flex flex-col gap-2">
                    <span className="font-mono text-[8px] uppercase tracking-[0.5em] opacity-50">
                        {dict.footer.authIndex}
                    </span>
                    <span className="text-xl lg:text-2xl font-black tracking-tighter">
                        {dict.footer.portfolioAsc}
                    </span>
                </div>

                <nav className="hidden lg:flex gap-8 font-mono text-[9px] uppercase tracking-widest opacity-60">
                    <a href="#" className="hover:opacity-100 hover:text-[var(--pop-green)] transition-all">
                        {dict.footer.nav.home}
                    </a>
                    <a href="/story" className="hover:opacity-100 hover:text-[var(--pop-pink)] transition-all">
                        {dict.footer.nav.vault}
                    </a>
                    <a href="#about" className="hover:opacity-100 hover:text-[var(--pop-yellow)] transition-all">
                        {dict.footer.nav.manifesto}
                    </a>
                </nav>

                <div className="flex flex-col gap-2 md:text-right mt-8 md:mt-0">
                    <span className="font-mono text-[8px] uppercase tracking-[0.5em] opacity-50">
                        {dict.footer.accessPoint}
                    </span>
                    <span className="text-xl lg:text-2xl font-black tracking-tighter">
                        {dict.footer.globalNetwork}
                    </span>
                </div>
            </div>

            <div className="bg-foreground text-background px-6 lg:px-12 py-4 border-t border-background/5 flex justify-between items-center font-mono text-[8px] uppercase tracking-widest opacity-40" style={{ position: 'relative' }}>
                <span>{dict.footer.copyright}</span>
                <span>{dict.footer.sysNominal}</span>
            </div>
        </footer>
    );
}

// =============================================================================
// GALLERY COMPONENT - Self-contained Parallax Image Strip
// =============================================================================
const FooterGallery = () => {
    const galleryRef = useRef<HTMLDivElement>(null);
    const { dict } = useLanguage();

    // Each component manages its own target for maximum accuracy and zero warnings
    const { scrollYProgress } = useScroll({
        target: galleryRef,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);
    const x = useTransform(scrollYProgress, [0, 1], [50, 0]);

    return (
        <div
            ref={galleryRef}
            className="h-[200px] lg:h-[400px] bg-background overflow-hidden w-full border-t-[var(--border-width)] border-foreground"
            style={{ position: 'relative' }}
        >
            {/* Section Label */}
            <div
                className="absolute top-4 left-4 z-20 font-mono text-[9px] uppercase font-black bg-[var(--pop-green)] text-black px-3 py-1.5 border-2 border-foreground shadow-[4px_4px_0px_var(--foreground)]"
                style={{ position: 'absolute' }}
            >
                {dict.footer.galleryLabel}
            </div>

            <div className="w-full h-full overflow-hidden" style={{ position: 'relative' }}>
                <motion.div
                    id="footer-parallax-container"
                    style={{ y, x, display: 'flex', position: 'relative' }}
                    className="h-full flex items-center gap-4 lg:gap-10 px-4 lg:px-12"
                >
                    {storyFloors.slice(0, 6).map((floor, i) => (
                        <div
                            key={i}
                            className="relative w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] shrink-0 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer border-[var(--border-width)] border-foreground hover:shadow-[10px_10px_0px_var(--swiss-red)] hover:-translate-y-2 hover:-translate-x-2 overflow-hidden group"
                            style={{ position: 'relative' }}
                        >
                            {floor.image && (
                                <Image
                                    src={floor.image}
                                    alt={floor.backgroundText}
                                    fill
                                    sizes="(max-width: 768px) 150px, 300px"
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />
                            )}

                            <div className="absolute bottom-0 right-0 text-[9px] lg:text-xs text-white bg-black px-3 py-1.5 font-black font-mono" style={{ position: 'absolute' }}>
                                //0{i + 1}
                            </div>

                            <div className="absolute inset-0 bg-[var(--swiss-red)]/0 group-hover:bg-[var(--swiss-red)]/10 transition-colors duration-500" style={{ position: 'absolute' }} />
                        </div>
                    ))}

                    <div className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] shrink-0 border-[var(--border-width)] border-foreground bg-halftone flex flex-col items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all cursor-pointer group" style={{ position: 'relative' }}>
                        <span className="text-4xl lg:text-5xl font-black group-hover:scale-125 transition-transform duration-300">
                            +
                        </span>
                        <span className="font-mono text-[9px] lg:text-[10px] mt-3 uppercase font-black tracking-widest">
                            {dict.footer.expandArchive}
                        </span>
                    </div>
                </motion.div>

                <div className="absolute top-0 right-0 h-full w-32 lg:w-48 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" style={{ position: 'absolute' }} />
            </div>
        </div>
    );
};
