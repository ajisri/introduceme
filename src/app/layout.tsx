import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded } from "next/font/google";
import "./globals.css";
import { Providers, ClientLayout } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SWISS POP | Interactive Brutalist Portfolio",
  description: "A high-performance, interactive portfolio built with Swiss International Style and Pop Art aesthetics. Designed by a Staff Engineer level developer.",
  keywords: ["Swiss Style", "Brutalist Design", "Portfolio", "GSAP", "Three.js", "Next.js", "Staff Engineer"],
  authors: [{ name: "Swiss Pop Designer" }],
  openGraph: {
    title: "SWISS POP | Interactive Brutalist Portfolio",
    description: "High-performance digital experiences with a Swiss-Pop-Brutalist aesthetic.",
    url: "https://portfolio-swiss.vercel.app", // Fallback URL
    siteName: "Swiss Pop Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure this exists later
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SWISS POP | Interactive Brutalist Portfolio",
    description: "High-performance digital experiences with a Swiss-Pop-Brutalist aesthetic.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable}`} suppressHydrationWarning>
        <Providers>
          <div className="bg-grain-overlay" />
          <ClientLayout>
            {children}
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
