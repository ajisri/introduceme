"use client";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
    handleMouseMove: (e: React.MouseEvent) => void;
}

export default function HeroSection({ handleMouseMove }: HeroSectionProps) {
    const { dict } = useLanguage();

    return (
        <section
            className="swiss-container relative min-h-screen flex flex-col justify-center pt-40 pb-32 lg:pt-48 lg:pb-40 perspective-1000"
            onMouseMove={handleMouseMove}
            style={{ position: 'relative', containIntrinsicHeight: 'auto 900px' }}
        >
            {/* Pop Art Accents — Controlled chaos, brand identity */}
            <div className="pop-accent-1 hero-parallax-reverse absolute top-24 right-[5%] w-[22vw] h-[22vw] max-w-[336px] max-h-[336px] border-[var(--border-width)] border-foreground bg-[var(--pop-yellow)] opacity-[0.12] -z-10 -rotate-6 will-change-transform" style={{ position: 'absolute' }} />
            <div className="pop-accent-2 hero-parallax-reverse absolute bottom-[15%] left-[3%] w-[16vw] h-[16vw] max-w-[240px] max-h-[240px] bg-[var(--pop-pink)] opacity-[0.15] -z-10 rounded-full will-change-transform" style={{ position: 'absolute' }} />
            <div className="pop-accent-3 hero-parallax-reverse absolute top-[42%] right-[14%] w-[10vw] h-[10vw] max-w-[152px] max-h-[152px] border-[var(--border-width)] border-foreground bg-[var(--swiss-red)] opacity-[0.08] -z-10 rotate-12 will-change-transform" style={{ position: 'absolute' }} />

            {/* Tagline — Mono Label */}
            <div className="hero-parallax mb-16 lg:mb-20" style={{ position: 'relative' }}>
                <span className="hero-line font-mono text-[10px] font-black uppercase tracking-[0.6em] bg-foreground text-background px-5 py-2 inline-block border-2 border-foreground will-change-transform">
                    {dict.landing.hero.tagline}
                </span>
            </div>

            {/* Main Title — Unbounded Display Font + text-stroke */}
            <div className="hero-parallax mb-16 lg:mb-24" style={{ position: 'relative' }}>
                <div className="max-w-[1200px]">
                    <div className="overflow-hidden mb-2 lg:mb-3">
                        <h1 className="hero-line text-[12vw] lg:text-[8vw] font-black uppercase leading-[0.85] tracking-[-0.04em] will-change-transform font-[family-name:var(--font-unbounded)]">
                            {dict.landing.hero.title1}
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <p className="hero-line text-[12vw] lg:text-[8vw] font-black uppercase leading-[0.85] tracking-[-0.04em] text-[var(--swiss-red)] will-change-transform font-[family-name:var(--font-unbounded)]">
                            {dict.landing.hero.title2}
                        </p>
                    </div>
                </div>
            </div>

            {/* Subtitle — Clean, visible */}
            <div className="hero-parallax mb-20 lg:mb-28" style={{ position: 'relative' }}>
                <p className="hero-line text-lg lg:text-xl font-bold tracking-tight opacity-60 max-w-[520px] leading-relaxed will-change-transform">
                    {dict.landing.hero.subtitle}
                </p>
            </div>

            {/* Description + Stat + CTA — Grid with brutalist card */}
            <div className="grid grid-cols-12 gap-6 lg:gap-8 items-end hero-parallax" style={{ position: 'relative' }}>
                {/* Description — Brutalist Card */}
                <div className="hero-subtext col-span-12 md:col-span-5 lg:col-span-4 p-8 border-[var(--border-width)] border-foreground bg-background relative" style={{ position: 'relative' }}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-[var(--swiss-red)]" style={{ position: 'absolute' }} />
                    <p className="text-base lg:text-lg font-medium leading-relaxed opacity-60 mb-4">
                        {dict.landing.hero.desc1}
                    </p>
                    <p className="text-base lg:text-lg font-black uppercase tracking-tight leading-tight">
                        {dict.landing.hero.desc2}
                    </p>
                </div>

                {/* Single Strong Stat */}
                <div className="hero-subtext col-span-6 md:col-span-2 lg:col-span-2 lg:col-start-7">
                    <p className="stat-value text-5xl lg:text-6xl font-black tracking-tighter leading-none font-[family-name:var(--font-unbounded)]">{dict.landing.hero.stat}</p>
                    <p className="font-mono text-[8px] uppercase tracking-widest opacity-40 mt-2">{dict.landing.hero.statLabel}</p>
                </div>

                {/* CTA */}
                <div className="hero-cta col-span-12 md:col-span-4 lg:col-span-3 lg:col-start-10">
                    <button className="btn-brutal w-full group relative overflow-hidden" aria-label={dict.landing.hero.cta}>
                        <span className="relative z-10 text-sm lg:text-base">{dict.landing.hero.cta}</span>
                        <div className="absolute inset-0 bg-[var(--swiss-red)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" style={{ position: 'absolute' }} />
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute right-4 top-48 h-[calc(100%-16rem)] w-px bg-foreground/10 hidden lg:block" style={{ position: 'absolute' }}>
                <div className="absolute bottom-0 right-0 rotate-90 origin-bottom-right whitespace-nowrap" style={{ position: 'absolute' }}>
                    <span className="font-mono text-[8px] uppercase tracking-[0.8em] opacity-20">{dict.landing.hero.scrollLabel}</span>
                </div>
            </div>
        </section>
    );
}
