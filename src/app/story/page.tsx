"use client";
import Header from "@/components/Header";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { useLanguage } from "@/context/LanguageContext";

export default function StoryPage() {
    const { dict } = useLanguage();
    return (
        <main className="relative w-full min-h-screen bg-background text-foreground">
            <CustomCursor />
            <Header />
            <div className="pt-32 min-h-screen">
                <div className="swiss-container py-20 border-b-[var(--border-width)] border-foreground/10 mb-20 bg-background/40 backdrop-blur-3xl">
                    <p className="font-mono text-xs uppercase tracking-[0.6em] text-[var(--pop-green)] mb-6 animate-pulse">
                        {dict.storyPage.badge}
                    </p>
                    <h1 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.8] mb-8">
                        {dict.storyPage.title1}<br />
                        <span className="text-stroke">{dict.storyPage.title2}</span><br />
                        {dict.storyPage.title3}
                    </h1>
                    <p className="text-xl md:text-2xl font-mono opacity-40 max-w-xl uppercase tracking-tighter">
                        {dict.storyPage.desc}
                    </p>
                </div>
                <StorySection />
            </div>
            <Footer />
        </main>
    );
}
