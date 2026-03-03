"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function PenutupSection() {
    const { dict } = useLanguage();

    return (
        <section
            className="swiss-container py-40 lg:py-56 relative"
            style={{ position: 'relative' }}
        >
            {/* Pop Art accent — subtle postmodern break */}
            <div className="absolute top-[15%] left-[5%] w-[12vw] h-[12vw] max-w-[160px] max-h-[160px] bg-[var(--pop-pink)] opacity-[0.06] rounded-full -z-10" style={{ position: 'absolute' }} />
            <div className="absolute bottom-[20%] right-[8%] w-[8vw] h-[8vw] max-w-[120px] max-h-[120px] border-[var(--border-width)] border-foreground opacity-[0.06] rotate-12 -z-10" style={{ position: 'absolute' }} />

            <div className="grid grid-cols-12 gap-6 lg:gap-8">
                {/* Poetic Closing — Centered, Calm but visible */}
                <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
                    <div className="penutup-text space-y-3 lg:space-y-4 mb-20 lg:mb-28">

                        <p className="text-lg lg:text-xl font-medium leading-snug opacity-60">
                            {dict.landing.penutup.line1}
                        </p>

                        <p className="text-xl lg:text-2xl font-semibold leading-snug opacity-70">
                            {dict.landing.penutup.line2}
                        </p>

                        <p className="text-2xl lg:text-3xl font-bold leading-snug opacity-90">
                            {dict.landing.penutup.line3}
                        </p>

                        <p className="text-5xl lg:text-8xl font-black uppercase tracking-[-0.03em] leading-none pt-8 lg:pt-12 font-[family-name:var(--font-unbounded)]">
                            {dict.landing.penutup.closing}
                        </p>

                    </div>


                    {/* CTA — Brutalist button, not quiet */}
                    <Link href="/story" className="group relative inline-block penutup-cta">
                        <div className="absolute -inset-6 bg-foreground scale-0 group-hover:scale-100 transition-transform duration-700 origin-center" style={{ position: 'absolute' }} />
                        <div className="relative border-[var(--border-width)] border-foreground px-12 lg:px-20 py-6 lg:py-8 bg-background group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500 shadow-[4px_4px_0px_var(--foreground)] group-hover:shadow-[6px_6px_0px_var(--swiss-red)]" style={{ position: 'relative' }}>
                            <span className="relative z-10 text-lg lg:text-xl font-black uppercase tracking-tighter group-hover:text-[var(--swiss-red)] transition-colors font-[family-name:var(--font-unbounded)]">
                                {dict.landing.penutup.cta}
                            </span>
                            <div className="mt-3 w-full h-1 bg-foreground group-hover:bg-[var(--swiss-red)] transition-colors" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
