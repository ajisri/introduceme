"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { storyFloors } from "@/data/story-content";
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function StorySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const visualsRef = useRef<HTMLDivElement>(null);
    const { dict } = useLanguage();

    useEffect(() => {
        // Wait for layout to settle
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        const ctx = gsap.context(() => {
            // 1. PINNING LOGIC
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: visualsRef.current,
                pinSpacing: false,
                scrub: true,
            });

            // 2. SCROLL DRIVEN ANIMATIONS (Direct DOM, No React State)
            storyFloors.forEach((floor) => {
                ScrollTrigger.create({
                    trigger: `#story-text-${floor.id}`,
                    start: "top center",
                    end: "bottom center",
                    onToggle: (self) => {
                        const isActive = self.isActive;
                        const visual = document.getElementById(`visual-${floor.id}`);
                        const visualContainer = document.getElementById(`visual-container-${floor.id}`);
                        const bgText = document.getElementById(`bg-text-${floor.id}`);

                        // 1. Text Animation
                        if (bgText) {
                            gsap.to(bgText, {
                                opacity: isActive ? 0.15 : 0,
                                scale: isActive ? 1 : 0.9,
                                filter: isActive ? "blur(0px)" : "blur(10px)",
                                duration: 0.5,
                                overwrite: true
                            });
                        }

                        // 2. Visual Animation (Mask Entry + Floating)
                        if (visual) {
                            if (isActive) {
                                // REVEAL
                                gsap.fromTo(visual,
                                    { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, filter: "grayscale(100%) blur(5px)" },
                                    {
                                        clipPath: "inset(0% 0% 0% 0%)",
                                        opacity: 1,
                                        filter: "grayscale(0%) blur(0px)",
                                        duration: 0.8,
                                        ease: "power4.out",
                                        overwrite: true
                                    }
                                );

                                // FLOAT (Continuous)
                                gsap.to(visual.querySelector('img'), {
                                    y: -15, // Floating range
                                    duration: 2.5,
                                    yoyo: true,
                                    repeat: -1,
                                    ease: "sine.inOut",
                                    delay: 0.5 // Wait for reveal
                                });

                            } else {
                                // HIDE
                                gsap.to(visual, {
                                    clipPath: "inset(0% 0% 100% 0%)", // Exit downwards (wipe)
                                    opacity: 0,
                                    filter: "grayscale(100%)",
                                    duration: 0.5,
                                    overwrite: true
                                });
                                gsap.killTweensOf(visual.querySelector('img')); // Stop float
                            }
                        }

                        // 3. Container Border
                        if (visualContainer) {
                            gsap.to(visualContainer, {
                                borderColor: isActive ? "var(--swiss-red)" : "transparent",
                                duration: 0.3
                            });
                        }
                    }
                });
            });
        }, containerRef);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    // No State needed for rendering!

    return (
        <section ref={containerRef} className="relative w-full bg-transparent border-b-[var(--border-width)] border-[var(--swiss-red)]">

            {/* Pinned Visual Container */}
            <div ref={visualsRef} className="absolute top-0 left-0 h-screen w-full overflow-hidden flex flex-col md:flex-row z-0 pointer-events-none bg-background">

                {/* Background Typography - Mini Brutalism: Huge, Bold, Tight */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                    {storyFloors.map((floor, i) => (
                        <h2
                            key={floor.id}
                            id={`bg-text-${floor.id}`}
                            className="absolute text-[30vw] font-black tracking-tighter uppercase text-white/5 opacity-0 scale-90 blur-sm transition-none will-change-transform leading-none"
                            style={{ WebkitTextStroke: "2px var(--swiss-red)" }}
                        >
                            {dict.storyPage.floors[i]?.text || floor.backgroundText}
                        </h2>
                    ))}
                </div>

                {/* Side: Image Display - Brutalist Frame */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-full relative z-10 flex items-center justify-center p-4 md:p-12">
                    <div className="relative w-full max-w-md md:max-w-xl aspect-square bg-background shadow-[16px_16px_0px_var(--swiss-red)] border-[var(--border-width)] border-[var(--swiss-red)] p-2 md:p-0">
                        <div className="relative w-full h-full overflow-hidden bg-gray-900 border-2 border-white/10">
                            {/* Static "NO SIGNAL" or Grid background for empty state */}
                            <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAA5OTkAAABEREQAAAAAAABEREOAgIAaa1VeAAAACHRSTlMAmpwDpMzMzk4Fv6UAAABSSURBVDjL7dJBDoAgDETR1kP4/yeWjqIRCxsTzR/w4b5mAAh5iIAQhEBEIAQhEBEIQAhEBEIQAhGBEIRARCAEIRC9E4L4TiD+E4L4TgjHO6E434kFylxTvJ4AAAAASUVORK5CYII=')] opacity-10 z-0"></div>

                            {/* Image Transition Logic */}
                            {storyFloors.map((floor, i) => (
                                floor.image && (
                                    <div
                                        key={floor.id}
                                        id={`visual-container-${floor.id}`}
                                        className="absolute inset-0 border-4 border-transparent transition-colors duration-300 overflow-hidden"
                                    >
                                        <div
                                            id={`visual-${floor.id}`}
                                            className="absolute inset-0 opacity-0 will-change-transform bg-background"
                                            style={{ clipPath: "inset(100% 0% 0% 0%)" }} // Initial Mask
                                        >
                                            <Image
                                                src={floor.image}
                                                alt={dict.storyPage.floors[i]?.text || floor.backgroundText}
                                                fill
                                                className="object-cover scale-110" // Initial slight zoom
                                                sizes="(max-width: 768px) 90vw, 40vw"
                                            />
                                            {/* Brutalist Label Overlay */}
                                            <div className="absolute top-0 left-0 bg-[var(--swiss-red)] text-white font-mono text-xs px-2 py-1 font-bold z-10">
                                                FIG. 0{floor.id}
                                            </div>
                                            {/* Pixel Noise Overlay */}
                                            <div className="absolute inset-0 opacity-10 pointer-events-none bg-halftone mix-blend-overlay"></div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Spacer */}
                <div className="hidden md:block w-1/2 h-full"></div>
            </div>

            {/* Scrolling Text Content Layer */}
            <div className="relative z-10">
                {storyFloors.map((floor, i) => (
                    <div
                        key={floor.id}
                        id={`story-text-${floor.id}`}
                        className="min-h-screen grid grid-cols-1 md:grid-cols-2 w-full swiss-container border-none pointer-events-none"
                    >
                        {/* Mobile: Space */}
                        <div className="h-[50vh] md:h-auto pointer-events-none"></div>

                        {/* Text Content - Brutalist Card */}
                        <div className="flex flex-col justify-start md:justify-center p-6 md:p-20 pointer-events-auto">
                            <div className="max-w-lg bg-background border-[var(--border-width)] border-[var(--swiss-red)] shadow-[12px_12px_0px_var(--pop-green)] p-6 md:p-10 transform transition-transform hover:-translate-y-1 hover:shadow-[16px_16px_0px_var(--pop-green)] duration-300">
                                <div className="flex items-center gap-4 mb-6 border-b-2 border-[var(--swiss-red)] pb-4">
                                    <span className="font-mono text-sm md:text-base bg-[var(--swiss-red)] text-white px-2 py-1 font-bold">
                                        0{floor.id}
                                    </span>
                                    <span className="font-mono text-sm md:text-base text-[var(--pop-green)] uppercase font-bold tracking-wider">
                                        {dict.storyPage.floors[i]?.text || floor.backgroundText}
                                    </span>
                                </div>
                                <div
                                    className="prose prose-lg md:prose-xl prose-invert dark:prose-invert prose-p:font-bold prose-p:text-foreground prose-headings:font-black prose-headings:text-foreground tracking-tight"
                                    dangerouslySetInnerHTML={{ __html: dict.storyPage.floors[i]?.content || floor.content }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
