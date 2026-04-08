"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import LegacySection from "./LegacySection";
import {
    HeroSection,
    MarqueeOne,
    RefleksiSection,
    DiagnosisSection,
    PeranSection,
    BuktiSection,
    ContrastSection,
    PenutupSection,
    MaskTransition
} from "./landing";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * LANDING PAGE - Insinyur Kepercayaan
 * Psychological architecture: Refleksi → Diagnosis → Definisi → Bukti → Penutup
 * Visual philosophy: Precision = minimal. White space = confidence.
 */
export default function LandingPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const animationStartedRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible || animationStartedRef.current) return;

        const ctx = gsap.context(() => {
            animationStartedRef.current = true;

            {/* 1. HERO ANIMATIONS — Olivier Larose Style 'Line-by-Line' Reveal */}
            const heroLines = gsap.utils.toArray(".reveal-mask h1, .reveal-mask h2") as HTMLElement[];
            gsap.set(heroLines, { y: "110%", opacity: 0 });
            gsap.to(heroLines, { 
                y: "0%", 
                opacity: 1, 
                duration: 1.8, 
                stagger: 0.15, 
                ease: "power4.out", 
                delay: 0.5 
            });

            const heroSubtext = gsap.utils.toArray(".hero-subtext") as HTMLElement[];
            gsap.set(heroSubtext, { y: 20, opacity: 0 });
            gsap.to(heroSubtext, { 
                y: 0, 
                opacity: 1, 
                duration: 1.2, 
                delay: 1.4, 
                ease: "expo.out" 
            });

            gsap.from(".hero-cta-wrapper", { scale: 0.9, opacity: 0, duration: 1.4, delay: 1.8, ease: "expo.out" });

            // 2. ACCENT FLOATING ANIMATIONS — Subdued & Ghostly
            gsap.to(".pop-accent-1", { rotation: 12, scale: 1.05, x: 20, duration: 6, yoyo: true, repeat: -1, ease: "sine.inOut" });
            gsap.to(".pop-accent-2", { rotation: -8, scale: 0.95, y: -20, duration: 8, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1 });

            // Scroll indicator bar pulse
            gsap.to(".scroll-indicator-bar", { 
                scaleY: 1, 
                duration: 2, 
                ease: "power2.inOut", 
                repeat: -1, 
                yoyo: true,
                transformOrigin: "top left"
            });

            // 3. REFLEKSI — Reveal with precision
            gsap.from(".refleksi-label", {
                scrollTrigger: { trigger: ".refleksi-label", start: "top 90%", toggleActions: "play none none reverse" },
                x: -30, opacity: 0, duration: 1, ease: "power4.out"
            });
            const refleksiLines = gsap.utils.toArray(".refleksi-line") as HTMLElement[];
            gsap.set(refleksiLines, { y: 40, opacity: 0 });
            gsap.to(refleksiLines, {
                scrollTrigger: { trigger: ".refleksi-line", start: "top 85%" },
                y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out"
            });
            gsap.from(".refleksi-question", {
                scrollTrigger: { trigger: ".refleksi-question", start: "top 80%" },
                y: 60, opacity: 0, duration: 1.5, ease: "power4.out"
            });
            gsap.from(".refleksi-desc", {
                scrollTrigger: { trigger: ".refleksi-desc", start: "top 85%" },
                scale: 0.98, opacity: 0, duration: 1.2, ease: "power2.out"
            });

            // 4. DIAGNOSIS — Precise clinical reveal
            gsap.from(".diagnosis-title", {
                scrollTrigger: { trigger: ".diagnosis-title", start: "top 80%" },
                y: 50, opacity: 0, duration: 1.2, ease: "power4.out"
            });
            const diagnosisItems = gsap.utils.toArray(".diagnosis-item") as HTMLElement[];
            diagnosisItems.forEach((item, i) => {
                gsap.from(item, {
                    scrollTrigger: { trigger: item, start: "top 90%" },
                    x: 30, opacity: 0, duration: 1, delay: i * 0.1, ease: "power3.out"
                });
            });
            gsap.from(".diagnosis-conclusion", {
                scrollTrigger: { trigger: ".diagnosis-conclusion", start: "top 85%" },
                y: 40, opacity: 0, duration: 1.2, ease: "power4.out"
            });

            // 5. PERAN — Authority reveal (inverted section)
            gsap.from(".peran-title", {
                scrollTrigger: { trigger: ".peran-title", start: "top 85%", toggleActions: "play none none reverse" },
                y: 60, opacity: 0, duration: 1, ease: "power3.out"
            });
            gsap.from(".peran-negation", {
                scrollTrigger: { trigger: ".peran-negation", start: "top 88%", toggleActions: "play none none reverse" },
                y: 30, opacity: 0, duration: 0.7, ease: "power2.out"
            });
            gsap.from(".peran-main", {
                scrollTrigger: { trigger: ".peran-main", start: "top 88%", toggleActions: "play none none reverse" },
                x: 40, opacity: 0, duration: 0.8, ease: "power2.out"
            });

            // 6. BUKTI — Stats scale reveal (subtle)
            gsap.utils.toArray(".bukti-item").forEach((item) => {
                gsap.from(item as HTMLElement, {
                    scrollTrigger: { trigger: item as HTMLElement, start: "top 90%", toggleActions: "play none none reverse" },
                    y: 30, opacity: 0, duration: 0.6, ease: "power2.out"
                });
            });
            gsap.utils.toArray(".stat-value").forEach((stat) => {
                gsap.from(stat as HTMLElement, {
                    scrollTrigger: { trigger: stat as HTMLElement, start: "top 90%", toggleActions: "play none none reverse" },
                    scale: 0.9, opacity: 0, duration: 0.5, ease: "back.out(1.2)"
                });
            });

            // 7. CONTRAST — Side-by-side reveal
            gsap.from(".contrast-agency", {
                scrollTrigger: { trigger: ".contrast-agency", start: "top 88%", toggleActions: "play none none reverse" },
                x: -30, opacity: 0, duration: 0.7, ease: "power2.out"
            });
            gsap.from(".contrast-engineer", {
                scrollTrigger: { trigger: ".contrast-engineer", start: "top 88%", toggleActions: "play none none reverse" },
                x: 30, opacity: 0, duration: 0.7, delay: 0.15, ease: "power2.out"
            });

        }, containerRef);

        return () => ctx.revert();
    }, [isVisible]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.015;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.015;
        gsap.to(".hero-parallax", { x: moveX, y: moveY, duration: 0.8, ease: "power2.out" });
        gsap.to(".hero-parallax-reverse", { x: -moveX * 1.5, y: -moveY * 1.5, duration: 1, ease: "power2.out" });
    };

    return (
        <main
            ref={containerRef}
            className="w-full bg-background text-foreground"
            style={{ position: 'relative', width: '100%' }}
        >
            <CustomCursor />
            <Header />

            <HeroSection handleMouseMove={handleMouseMove} />
            <MarqueeOne />
            <RefleksiSection />
            <DiagnosisSection />
            <MaskTransition bgColor="var(--foreground)">
                <PeranSection />
            </MaskTransition>
            <BuktiSection />
            <ContrastSection />
            <LegacySection />
            <PenutupSection />

            <Footer />
        </main>
    );
}
