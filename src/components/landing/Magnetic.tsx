"use client";
import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

interface MagneticProps {
    children: ReactNode;
    strength?: number;
}

export default function Magnetic({ children, strength = 0.5 }: MagneticProps) {
    const magneticRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magneticRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magneticRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            if (!magneticRef.current) return;
            const { clientX, clientY } = e;
            const { height, width, left, top } = magneticRef.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * strength);
            yTo(y * strength);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        const element = magneticRef.current;
        if (element) {
            element.addEventListener("mousemove", handleMouseMove);
            element.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (element) {
                element.removeEventListener("mousemove", handleMouseMove);
                element.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [strength]);

    return (
        <div ref={magneticRef} className="inline-block">
            {children}
        </div>
    );
}
