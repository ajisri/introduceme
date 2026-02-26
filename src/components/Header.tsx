"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const { dict } = useLanguage();

    /**
     * Handle anchor navigation properly across Next.js pages
     * @see https://nextjs.org/docs/app/api-reference/functions/use-router
     */
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
        e.preventDefault();

        // If we're not on the home page, navigate to home first then scroll
        if (pathname !== '/') {
            router.push('/' + anchor);
        } else {
            // Already on home page, just scroll to anchor
            const element = document.querySelector(anchor);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-[1001]">
                {/* Protocol Bar - Industrial Labeling */}
                <div className="w-full h-8 bg-foreground text-background flex items-center justify-between px-4 md:px-8 font-mono text-[9px] font-bold uppercase tracking-[0.3em]">
                    <span>{dict.header.status}</span>
                    <span className="hidden md:block">{dict.header.protocol}</span>
                    <span>{dict.header.location}</span>
                </div>

                <div className="swiss-container flex justify-between items-center h-20 border-b-[var(--border-width)] border-foreground bg-background/80 backdrop-blur-xl">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="text-2xl font-black uppercase tracking-tighter flex items-center gap-0">
                            <span className="bg-[var(--swiss-red)] text-white px-3 py-1 border-2 border-[var(--swiss-red)]">SW</span>
                            <span className="border-2 border-foreground px-3 py-1 bg-foreground text-background">POP</span>
                        </Link>
                    </div>

                    <nav className="hidden lg:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                        <Link href="/" className="px-6 py-2 hover:bg-[var(--swiss-red)] hover:text-white transition-all border-2 border-transparent">{dict.header.nav.core}</Link>
                        <Link href="/story" className="px-6 py-2 bg-[var(--pop-blue)] text-white border-2 border-[var(--pop-blue)] hover:bg-transparent hover:text-foreground transition-all">{dict.header.nav.vault}</Link>
                        <a
                            href="/#about"
                            onClick={(e) => handleAnchorClick(e, '#about')}
                            className="px-6 py-2 hover:bg-[var(--pop-pink)] hover:text-white transition-all border-2 border-transparent cursor-pointer"
                        >
                            {dict.header.nav.manifesto}
                        </a>
                        <div className="w-px h-8 bg-foreground/20 mx-4"></div>
                        <LanguageToggle />
                        <ThemeToggle />
                    </nav>

                    <div className="flex lg:hidden items-center gap-4">
                        <LanguageToggle />
                        <ThemeToggle />
                        <button
                            className="bg-foreground text-background px-4 py-2 font-black uppercase text-xs border-2 border-foreground hover:bg-[var(--pop-green)] hover:text-black transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? dict.header.nav.exit : dict.header.nav.cmd}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Overlay - Postmodern Chaos */}
            {isOpen && (
                <div className="fixed inset-0 z-[1002] bg-background text-foreground flex flex-col justify-center p-8 md:p-16">
                    <div className="absolute top-0 left-0 w-full h-full bg-halftone opacity-10 pointer-events-none"></div>
                    <nav className="relative z-10 flex flex-col gap-4">
                        {dict.header.mobile.items.map((item, i) => (
                            item.isAnchor ? (
                                <a
                                    key={i}
                                    href={item.href.startsWith('#') ? '/' + item.href : item.href}
                                    onClick={(e) => handleAnchorClick(e, item.href.startsWith('#') ? item.href : item.href.replace('/', ''))}
                                    className="text-6xl md:text-8xl font-black uppercase tracking-tighter hover:italic flex items-center gap-4 group cursor-pointer"
                                >
                                    <span className="text-sm font-mono opacity-40 group-hover:opacity-100 transition-opacity">{item.label.split('_')[0]}</span>
                                    <span className="group-hover:translate-x-4 transition-transform duration-500">{item.label.split('_')[1]}</span>
                                </a>
                            ) : (
                                <Link
                                    key={i}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-6xl md:text-8xl font-black uppercase tracking-tighter hover:italic flex items-center gap-4 group"
                                >
                                    <span className="text-sm font-mono opacity-40 group-hover:opacity-100 transition-opacity">{item.label.split('_')[0]}</span>
                                    <span className="group-hover:translate-x-4 transition-transform duration-500">{item.label.split('_')[1]}</span>
                                </Link>
                            )
                        ))}
                    </nav>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute bottom-12 left-12 btn-brutal"
                    >
                        {dict.header.mobile.terminate}
                    </button>
                </div>
            )}
        </>
    );
}
