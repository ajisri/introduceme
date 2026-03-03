"use client";
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Synchronize Lenis scroll with GSAP's ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Define the ticker callback for clean removal
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    // Use GSAP's ticker to drive Lenis for perfect synchronization
    gsap.ticker.add(tickerCallback);

    // Turn off lagSmoothing to prevent jumps during heavy load
    gsap.ticker.lagSmoothing(50, 16);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return <div className="smooth-wrapper" style={{ position: 'relative', width: '100%', height: '100%' }}>{children}</div>;
}
