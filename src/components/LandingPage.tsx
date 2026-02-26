"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";
import CustomCursor from "./CustomCursor";
import Link from "next/link";
import Footer from "./Footer";
import LegacySection from "./LegacySection";
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// =============================================================================
// LANDING PAGE - Swiss-Pop-Brutalist Portfolio
// =============================================================================

export default function LandingPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const animationStartedRef = useRef(false);
    const { dict } = useLanguage();

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
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            animationStartedRef.current = true;
            const heroLines = gsap.utils.toArray(".hero-line") as HTMLElement[];

            gsap.set(heroLines, { y: "120%", opacity: 0, rotateX: 15, transformOrigin: "center bottom" });
            gsap.to(heroLines, { y: "0%", opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.12, ease: "power4.out", delay: 0.15 });
            gsap.from(".hero-subtext", { y: 40, opacity: 0, duration: 1, delay: 0.6, ease: "power3.out" });
            gsap.from(".hero-cta", { y: 30, opacity: 0, duration: 0.8, delay: 0.9, ease: "power2.out" });

            gsap.to(".pop-accent-1", { rotation: 8, scale: 1.03, x: 10, duration: 4.5, yoyo: true, repeat: -1, ease: "sine.inOut" });
            gsap.to(".pop-accent-2", { rotation: -6, scale: 0.98, y: -15, duration: 5.5, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 0.5 });
            gsap.to(".pop-accent-3", { rotation: 4, x: -8, y: 8, duration: 3.8, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1 });

            const principles = gsap.utils.toArray(".principle-item") as HTMLElement[];
            principles.forEach((item, i) => {
                gsap.from(item, {
                    scrollTrigger: { trigger: item, start: "top 88%", toggleActions: "play none none reverse" },
                    y: 60, opacity: 0, duration: 0.7, ease: "power2.out", delay: i * 0.05
                });
                const title = item.querySelector('h3');
                const number = item.querySelector('.principle-number');
                item.addEventListener('mouseenter', () => {
                    if (title) gsap.to(title, { x: 24, duration: 0.35, ease: "power2.out" });
                    if (number) gsap.to(number, { scale: 1.15, duration: 0.35, ease: "power2.out" });
                });
                item.addEventListener('mouseleave', () => {
                    if (title) gsap.to(title, { x: 0, duration: 0.35, ease: "power2.out" });
                    if (number) gsap.to(number, { scale: 1, duration: 0.35, ease: "power2.out" });
                });
            });

            gsap.to(".authority-text", {
                scrollTrigger: { trigger: ".authority-section", start: "top bottom", end: "bottom top", scrub: 1 },
                y: -80, ease: "none"
            });

            gsap.utils.toArray(".stat-value").forEach((stat) => {
                gsap.from(stat as HTMLElement, {
                    scrollTrigger: { trigger: stat as HTMLElement, start: "top 90%", toggleActions: "play none none reverse" },
                    scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out(1.5)"
                });
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

            <section
                ref={heroRef}
                className="swiss-container relative pt-48 pb-40 min-h-screen flex flex-col justify-center perspective-1000"
                onMouseMove={handleMouseMove}
                style={{ position: 'relative' }}
            >
                <div className="pop-accent-1 hero-parallax-reverse absolute top-24 right-[5%] w-[25vw] h-[25vw] max-w-[400px] max-h-[400px] border-[var(--border-width)] border-foreground bg-[var(--pop-yellow)] opacity-15 -z-10 -rotate-6" style={{ position: 'absolute' }} />
                <div className="pop-accent-2 hero-parallax-reverse absolute bottom-[15%] left-[3%] w-[18vw] h-[18vw] max-w-[280px] max-h-[280px] bg-[var(--pop-pink)] opacity-20 -z-10 rounded-full" style={{ position: 'absolute' }} />
                <div className="pop-accent-3 hero-parallax-reverse absolute top-[40%] right-[15%] w-[12vw] h-[12vw] max-w-[180px] max-h-[180px] border-[var(--border-width)] border-foreground bg-[var(--swiss-red)] opacity-10 -z-10 rotate-12" style={{ position: 'absolute' }} />

                <div className="grid grid-cols-12 gap-4 w-full relative hero-parallax" style={{ position: 'relative' }}>
                    <div className="col-span-12 mb-6">
                        <span className="font-mono text-[10px] font-black uppercase tracking-[0.6em] bg-foreground text-background px-5 py-2 inline-block border-2 border-foreground">
                            {dict.landing.hero.established}
                        </span>
                    </div>
                    <div className="col-span-12 lg:col-span-11">
                        <div className="overflow-hidden mb-2">
                            <h1 className="hero-line text-[15vw] lg:text-[12vw] font-black uppercase leading-[0.85] tracking-[-0.04em]">{dict.landing.hero.title1}</h1>
                        </div>
                        <div className="overflow-hidden mb-2">
                            <h1 className="hero-line text-[15vw] lg:text-[12vw] font-black uppercase leading-[0.85] tracking-[-0.04em] text-stroke">{dict.landing.hero.title2}</h1>
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="hero-line text-[15vw] lg:text-[12vw] font-black uppercase leading-[0.85] tracking-[-0.04em] text-[var(--swiss-red)]">{dict.landing.hero.title3}</h1>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-6 mt-20 items-end hero-parallax" style={{ position: 'relative' }}>
                    <div className="hero-subtext col-span-12 md:col-span-5 lg:col-span-4 p-8 border-[var(--border-width)] border-foreground bg-background relative" style={{ position: 'relative' }}>
                        <div className="absolute top-0 left-0 w-full h-1 bg-[var(--swiss-red)]" style={{ position: 'absolute' }} />
                        <p className="font-mono text-[9px] uppercase font-black text-[var(--swiss-red)] mb-4 tracking-widest">{dict.landing.hero.mission}</p>
                        <p className="text-lg lg:text-xl font-black uppercase tracking-tight leading-tight">{dict.landing.hero.desc}</p>
                    </div>
                    <div className="hidden md:block md:col-span-3 lg:col-span-5" />
                    <div className="hero-cta col-span-12 md:col-span-4 lg:col-span-3">
                        <button className="btn-brutal w-full group relative overflow-hidden">
                            <span className="relative z-10 text-sm lg:text-base">{dict.landing.hero.cta}</span>
                            <div className="absolute inset-0 bg-[var(--pop-green)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" style={{ position: 'absolute' }} />
                        </button>
                        <p className="font-mono text-[8px] uppercase tracking-widest opacity-40 mt-3 text-center">{dict.landing.hero.response}</p>
                    </div>
                </div>

                <div className="absolute right-4 top-48 h-[calc(100%-16rem)] w-px bg-foreground/10 hidden lg:block" style={{ position: 'absolute' }}>
                    <div className="absolute bottom-0 right-0 rotate-90 origin-bottom-right whitespace-nowrap" style={{ position: 'absolute' }}>
                        <span className="font-mono text-[8px] uppercase tracking-[0.8em] opacity-30">{dict.landing.hero.scrollLabel}</span>
                    </div>
                </div>
            </section>

            <section className="authority-section w-full bg-foreground text-background py-32 lg:py-44 overflow-hidden relative" style={{ position: 'relative' }}>
                <div className="absolute top-0 left-0 w-full h-full bg-halftone opacity-5" style={{ position: 'absolute' }} />
                <div className="swiss-container relative z-10" style={{ position: 'relative' }}>
                    <div className="grid grid-cols-12 gap-8 lg:gap-12">
                        <div className="col-span-12 lg:col-span-6">
                            <div className="authority-text">
                                <h2 className="text-[18vw] lg:text-[9vw] font-black uppercase leading-[0.75] tracking-[-0.03em]">{dict.landing.authority.title1}<br />{dict.landing.authority.title2}<br />{dict.landing.authority.title3}<br />{dict.landing.authority.title4}</h2>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
                            <p className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-10 leading-none">{dict.landing.authority.quote}</p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { val: "99.9%", label: dict.landing.authority.stats.system },
                                    { val: "ZERO", label: dict.landing.authority.stats.visual },
                                    { val: "100%", label: dict.landing.authority.stats.code },
                                    { val: "PERMANENT", label: dict.landing.authority.stats.presence }
                                ].map((stat, i) => (
                                    <div key={i} className="stat-value p-5 border-2 border-background/20 bg-background/5 hover:bg-background/10 transition-colors">
                                        <p className="text-3xl lg:text-4xl font-black tracking-tighter leading-none">{stat.val}</p>
                                        <p className="font-mono text-[8px] uppercase opacity-50 tracking-widest mt-2">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full border-y-[var(--border-width)] border-foreground py-10 bg-background overflow-hidden" style={{ position: 'relative' }}>
                <div className="animate-marquee flex w-max">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex items-center shrink-0 gap-20 px-10">
                            <span className="text-6xl lg:text-8xl font-black uppercase text-stroke whitespace-nowrap tracking-[-0.04em] font-[family-name:var(--font-unbounded)]">{dict.landing.marquee1.part1}</span>
                            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[var(--pop-pink)] border-[var(--border-width)] border-foreground rotate-45 shrink-0" />
                            <span className="text-6xl lg:text-8xl font-black uppercase text-[var(--pop-blue)] whitespace-nowrap tracking-[-0.04em] font-[family-name:var(--font-unbounded)]">{dict.landing.marquee1.part2}</span>
                            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[var(--pop-green)] border-[var(--border-width)] border-foreground rounded-full shrink-0" />
                            <span className="text-6xl lg:text-8xl font-black uppercase text-[var(--swiss-red)] whitespace-nowrap tracking-[-0.04em] font-[family-name:var(--font-unbounded)]">{dict.landing.marquee1.part3}</span>
                            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[var(--pop-yellow)] border-[var(--border-width)] border-foreground rotate-12 shrink-0" />
                        </div>
                    ))}
                </div>
            </div>

            <section id="about" className="swiss-container py-32 lg:py-44 border-t-[var(--border-width)] border-foreground mt-24" style={{ position: 'relative' }}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-20 border-b-[var(--border-width)] border-foreground pb-8" style={{ position: 'relative' }}>
                    <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none">{dict.landing.manifesto.title}</h2>
                    <span className="font-mono text-[9px] uppercase opacity-40 tracking-widest mt-4 md:mt-0 whitespace-nowrap">{dict.landing.manifesto.subtitle}</span>
                </div>
                <div className="divide-y-[var(--border-width)] divide-foreground border-b-[var(--border-width)] border-foreground" style={{ position: 'relative' }}>
                    {dict.landing.manifesto.items.map((item, index) => {
                        const colors = [
                            "var(--swiss-red)", "var(--pop-pink)", "var(--pop-green)",
                            "var(--pop-yellow)", "var(--swiss-red)", "var(--foreground)"
                        ];
                        const color = colors[index % colors.length];
                        return (
                            <div key={index} className="principle-item group py-12 lg:py-16 grid grid-cols-12 gap-4 lg:gap-8 px-2 lg:px-4 border-b border-foreground/10 hover:border-foreground transition-all duration-500 cursor-pointer" style={{ position: 'relative' }}>
                                {/* Number - Clean Bracketed Style */}
                                <div className="col-span-2 md:col-span-1 flex items-start">
                                    <div className="flex items-center font-mono text-sm font-black tracking-tighter group-hover:text-[var(--pop-green)] transition-colors">
                                        <span className="text-2xl mr-1">(</span>
                                        <span className="mt-1">{String(index + 1).padStart(2, '0')}</span>
                                        <span className="text-2xl ml-1">)</span>
                                    </div>
                                </div>

                                {/* Title - Boxed Background Style (As per user image) */}
                                <div className="col-span-10 md:col-span-6 flex items-center">
                                    <h3 className="relative text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none transition-all duration-500 inline-block px-4 py-2 group-hover:text-background z-10">
                                        <span className="relative z-10">{item.title}</span>
                                        <div
                                            className="absolute inset-0 -z-0 transition-transform duration-500 scale-x-0 group-hover:scale-x-100 origin-left"
                                            style={{ backgroundColor: color }}
                                        />
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="col-span-12 md:col-span-4 md:col-start-9 flex items-center mt-6 md:mt-0">
                                    <p className="text-base lg:text-lg font-medium leading-tight opacity-60 group-hover:opacity-100 transition-opacity">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            <div className="w-full border-y-[var(--border-width)] border-foreground py-10 bg-foreground text-background overflow-hidden relative" style={{ position: 'relative' }}>
                <div className="absolute inset-0 bg-halftone opacity-10" style={{ position: 'absolute' }} />
                <div className="animate-marquee-fast flex w-max relative z-10" style={{ position: 'relative' }}>
                    {[1, 2].map((i) => (
                        <div key={i} className="flex items-center shrink-0 gap-20 px-10">
                            <span className="text-4xl lg:text-6xl font-black uppercase tracking-[-0.05em] italic whitespace-nowrap font-mono">{dict.landing.marquee2.part1}</span>
                            <div className="w-3 h-3 lg:w-4 lg:h-4 bg-[var(--pop-green)] rounded-full shrink-0" />
                            <span className="text-4xl lg:text-6xl font-black uppercase tracking-[-0.05em] whitespace-nowrap font-mono">{dict.landing.marquee2.part2}</span>
                            <div className="w-3 h-3 lg:w-4 lg:h-4 bg-[var(--swiss-red)] shrink-0" />
                            <span className="text-4xl lg:text-6xl font-black uppercase tracking-[-0.05em] italic whitespace-nowrap font-mono">{dict.landing.marquee2.part3}</span>
                            <div className="w-3 h-3 lg:w-4 lg:h-4 bg-[var(--pop-blue)] rounded-full shrink-0" />
                        </div>
                    ))}
                </div>
            </div>

            <LegacySection />

            <section className="swiss-container py-40 lg:py-52 flex flex-col items-center justify-center" style={{ position: 'relative' }}>
                <div className="text-center mb-12">
                    <p className="font-mono text-xs uppercase tracking-[0.5em] mb-6 opacity-60">{dict.landing.cta.subtitle}</p>
                    <h2 className="text-[12vw] lg:text-[10vw] font-black uppercase leading-[0.8] tracking-tighter text-stroke">{dict.landing.cta.title1}<br />{dict.landing.cta.title2}</h2>
                </div>
                <Link href="/story" className="group relative mt-8">
                    <div className="absolute -inset-10 bg-foreground scale-0 group-hover:scale-100 transition-transform duration-700 origin-center" style={{ position: 'absolute' }} />
                    <div className="relative border-[var(--border-width)] border-foreground px-12 lg:px-16 py-8 bg-background group-hover:-translate-y-4 group-hover:translate-x-4 transition-all duration-500" style={{ position: 'relative' }}>
                        <span className="text-2xl lg:text-3xl font-black uppercase tracking-tighter group-hover:text-[var(--pop-pink)] transition-colors">{dict.landing.cta.btn}</span>
                        <div className="mt-4 w-full h-1 bg-foreground group-hover:bg-[var(--pop-pink)] transition-colors" />
                    </div>
                </Link>
            </section>

            <Footer />
        </main>
    );
}
