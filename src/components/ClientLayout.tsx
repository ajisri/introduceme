"use client";
import { useState, useEffect } from "react";
import SmoothScrolling from "@/components/SmoothScrolling";
import LoadingScreen from "@/components/LoadingScreen";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Force show content after loading is done
        if (!isLoading) {
            console.log("Loading complete, showing content");
        }
    }, [isLoading]);

    return (
        <div className="w-full min-h-screen" style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
                <SmoothScrolling>
                    {children}
                </SmoothScrolling>
            </div>
            {isLoading && (
                <div className="fixed inset-0 z-[10000]">
                    <LoadingScreen setIsDoneAction={() => setIsLoading(false)} />
                </div>
            )}
        </div>
    );
}
