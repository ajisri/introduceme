"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function PeranSection() {
    const { dict } = useLanguage();

    return (
        <section id="authority" className="w-full bg-foreground text-background py-32 lg:py-48 overflow-hidden relative border-t border-background/5">
            <div className="absolute top-0 left-0 w-full h-full bg-halftone-dense opacity-[0.02] pointer-events-none" />
            
            <div className="swiss-container relative z-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 relative">
                    {/* Sticky Sidebar Label */}
                    <div className="col-span-12 lg:col-span-3">
                        <div className="sticky top-32 lg:pb-10">
                            {/* HIGHLIGHTED LABEL — Enhanced readability */}
                            <div className="inline-block bg-swiss-red px-3 py-1 mb-4 shadow-[4px_4px_0px_rgba(255,255,255,0.1)]">
                                <span className="peran-label font-mono font-black uppercase tracking-[0.5em] text-white"
                                    style={{ fontSize: "0.6rem" }}>
                                    {dict.landing.peran.label}
                                </span>
                            </div>
                            
                            {/* Instruction Removed */}
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                        <div className="flex flex-col gap-16 lg:gap-24">
                            {/* TITLE */}
                            <h2 className="font-unbounded font-medium uppercase leading-none tracking-[-0.05em] text-background"
                                style={{ fontSize: "clamp(2rem, 6vw, 6rem)" }}>
                                {dict.landing.peran.title}
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                                <div className="lg:col-span-8 peran-negation space-y-4">
                                    <p className="font-bold leading-tight opacity-20 line-through decoration-1 decoration-swiss-red" style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }}>
                                        {dict.landing.peran.notLine1}
                                    </p>
                                    <p className="font-bold leading-tight opacity-20 line-through decoration-1 decoration-swiss-red" style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }}>
                                        {dict.landing.peran.notLine2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
