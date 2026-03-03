"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic imports for heavy components to improve initial bundle size and TBT
const SmoothScrolling = dynamic(() => import("@/components/SmoothScrolling"), {
    ssr: false
});

const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
    ssr: false,
    // Preload important textures/shaders happens inside the component
});

/**
 * CLIENT LAYOUT - Core Wrapper
 * Phase 3: Optimized loading with dynamic imports and SSR: false
 */
export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="w-full min-h-screen" style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
                <SmoothScrolling>
                    {children}
                </SmoothScrolling>
            </div>

            {isLoading && (
                <div className="fixed inset-0 z-[var(--z-loading)]">
                    <LoadingScreen setIsDoneAction={() => setIsLoading(false)} />
                </div>
            )}
        </div>
    );
}
