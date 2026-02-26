"use client";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !cursorRef.current) return;

        const cursor = cursorRef.current;

        const moveCursor = (e: MouseEvent) => {
            const trailElements = document.querySelectorAll('.trail-text');

            // Main Block Cursor
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });

            // Text Trail Stagger
            if (trailElements.length > 0) {
                gsap.to(trailElements, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.5,
                    stagger: 0.05,
                    opacity: 1,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            }
        };

        const handleMouseDown = () => {
            const trailElements = document.querySelectorAll('.trail-text');
            gsap.to(cursor, { scale: 0.5, duration: 0.2 });
            gsap.to(trailElements, { scale: 1.5, color: "var(--pop-blue)", duration: 0.2 });
        };

        const handleMouseUp = () => {
            const trailElements = document.querySelectorAll('.trail-text');
            gsap.to(cursor, { scale: 1, duration: 0.2 });
            gsap.to(trailElements, { scale: 1, color: "var(--swiss-red)", duration: 0.2 });
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [mounted]);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-4 h-4 bg-[var(--swiss-red)] z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:flex items-center justify-center pointer-events-none"
            >
                <div className="w-full h-full bg-current"></div>
            </div>

            {/* Text Trail - Only render after mount to prevent hydration mismatch */}
            {mounted && Array.from({ length: 5 }).map((_, i) => (
                <div
                    key={i}
                    className="trail-text fixed top-0 left-0 text-[10px] font-mono font-bold text-[var(--swiss-red)] pointer-events-none z-[9998] mix-blend-difference hidden md:block opacity-0"
                    data-index={i}
                >
                    {["S", "W", "I", "S", "S"][i % 5]}
                </div>
            ))}
        </>
    );
}
