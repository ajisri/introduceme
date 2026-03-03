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
    PenutupSection
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

            // 1. HERO ANIMATIONS — Clean, precise entrance
            const heroLines = gsap.utils.toArray(".hero-line") as HTMLElement[];
            gsap.set(heroLines, { y: "100%", opacity: 0, transformOrigin: "center bottom" });
            gsap.to(heroLines, { y: "0%", opacity: 1, duration: 1.4, stagger: 0.1, ease: "power4.out", delay: 0.2 });
            gsap.from(".hero-subtext", { y: 30, opacity: 0, duration: 1, delay: 0.8, ease: "power3.out" });
            gsap.from(".hero-cta", { y: 20, opacity: 0, duration: 0.8, delay: 1.1, ease: "power2.out" });

            // 2. ACCENT FLOATING ANIMATIONS — Pop Art DNA
            gsap.to(".pop-accent-1", { rotation: 8, scale: 1.03, x: 10, duration: 4.5, yoyo: true, repeat: -1, ease: "sine.inOut" });
            gsap.to(".pop-accent-2", { rotation: -6, scale: 0.98, y: -15, duration: 5.5, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 0.5 });
            gsap.to(".pop-accent-3", { rotation: 4, x: -8, y: 8, duration: 3.8, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1 });

            // 3. REFLEKSI — Emerge gently on scroll
            gsap.from(".refleksi-label", {
                scrollTrigger: { trigger: ".refleksi-label", start: "top 90%", toggleActions: "play none none reverse" },
                y: 20, opacity: 0, duration: 0.6, ease: "power2.out"
            });
            const refleksiLines = gsap.utils.toArray(".refleksi-line") as HTMLElement[];
            refleksiLines.forEach((line, i) => {
                gsap.from(line, {
                    scrollTrigger: { trigger: line, start: "top 88%", toggleActions: "play none none reverse" },
                    y: 40, opacity: 0, duration: 0.8, delay: i * 0.1, ease: "power3.out"
                });
            });
            gsap.from(".refleksi-question", {
                scrollTrigger: { trigger: ".refleksi-question", start: "top 85%", toggleActions: "play none none reverse" },
                y: 60, opacity: 0, duration: 1, ease: "power3.out"
            });
            gsap.from(".refleksi-desc", {
                scrollTrigger: { trigger: ".refleksi-desc", start: "top 88%", toggleActions: "play none none reverse" },
                x: 40, opacity: 0, duration: 0.8, ease: "power2.out"
            });

            // 4. DIAGNOSIS — Clinical reveal
            gsap.from(".diagnosis-title", {
                scrollTrigger: { trigger: ".diagnosis-title", start: "top 85%", toggleActions: "play none none reverse" },
                y: 50, opacity: 0, duration: 0.8, ease: "power3.out"
            });
            const diagnosisItems = gsap.utils.toArray(".diagnosis-item") as HTMLElement[];
            diagnosisItems.forEach((item, i) => {
                gsap.from(item, {
                    scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none reverse" },
                    x: 30, opacity: 0, duration: 0.6, delay: i * 0.08, ease: "power2.out"
                });
            });
            gsap.from(".diagnosis-conclusion", {
                scrollTrigger: { trigger: ".diagnosis-conclusion", start: "top 88%", toggleActions: "play none none reverse" },
                y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
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

            // 8. PENUTUP — Gentle text emergence
            gsap.from(".penutup-text", {
                scrollTrigger: { trigger: ".penutup-text", start: "top 80%", toggleActions: "play none none reverse" },
                y: 50, opacity: 0, duration: 1.2, ease: "power3.out"
            });
            gsap.from(".penutup-cta", {
                scrollTrigger: { trigger: ".penutup-cta", start: "top 90%", toggleActions: "play none none reverse" },
                y: 20, opacity: 0, duration: 0.8, delay: 0.3, ease: "power2.out"
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
            <PeranSection />
            <BuktiSection />
            <ContrastSection />
            <LegacySection />
            <PenutupSection />

            <Footer />
        </main>
    );
}
