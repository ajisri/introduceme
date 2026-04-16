import { Dictionary } from "@/types";

export const en = {
    header: {
        status: "STATUS: OPERATIONAL // V.01-2026",
        protocol: "PROTOCOL: DESIGN_AUTHORITY",
        location: "LOC: GLOBAL_NETWORK",
        nav: {
            core: "Core",
            vault: "Vault",
            manifesto: "Manifesto",
            authority: "Authority",
            exit: "Exit",
            cmd: "Cmd"
        },
        mobile: {
            items: [
                { label: "01_Core", href: "/", color: "var(--swiss-red)", isAnchor: false },
                { label: "02_Vault", href: "/story", color: "var(--pop-blue)", isAnchor: false },
                { label: "03_Manifesto", href: "#about", color: "var(--pop-pink)", isAnchor: true },
                { label: "04_Authority", href: "/#authority", color: "var(--pop-green)", isAnchor: true }
            ],
            terminate: "[ Terminate_Session ]"
        }
    },
    landing: {
        hero: {
            tagline: "[ DIGITAL BEHAVIOR ANALYSIS ]",
            title1: "STAY RELEVANT.",
            title2: "STAY PROFESSIONAL.",
            subtitle: "A website is just one tool for business growth and staying professional in a changing market.",
            desc1: "Why? Because when confirming something risky, people's behavior changes.",
            desc2: "From visiting stores directly to confirm, it shifts to Google confirmation and seeking digital alternatives.",
            stat: "99%",
            statLabel: "PEOPLE DON'T CARE ABOUT YOUR HARD WORK",
            cta: "→ SEE REALITY",
            scrollLabel: "INITIATE_ANALYSIS",
            qualifier: "YOUR BUSINESS IS EITHER READY OR NOT READY TO CONVINCE THEM."
        },
        refleksi: {
            label: "// 01_MARKET_PSYCHOLOGY",
            line1: "However... what doesn't change?",
            line2: "Ensuring official information, reputation, and professionalism.",
            question: "They simply… leave.",
            desc1: "Opening 3–5 options, comparing silently. They never say 'I'm hesitant'.",
            desc2: "The human brain naturally fills information gaps with risk."
        },
        diagnosis: {
            label: "// 02_UNCERTAINTY_ANALYSIS",
            title: "FILLING THE GAPS",
            items: [
                "No official information center → customer brain fills the gap with assumptions.",
                "Doubt arises when information is unclear (The Black Room).",
                "What is needed is an information center that makes people stop doubting.",
                "Driving decisions by providing clarity that flows smoothly."
            ],
            conclusion1: "INFORMATION BALANCE:",
            conclusion2: "simple yet convincing.",
            storyStep0: "The Black Room.",
            storyStep0Desc: "Doubt arises when information is unclear. Everything is dark.",
            storyStep1: "Assumptions fill the void.",
            storyStep1Desc: "The brain naturally fills information gaps with risk.",
            storyStep2: "Different contact.",
            storyStep2Desc: "There's effort, but not at the right point. Still no official clarity.",
            storyStep3: "THE LAMP IS ON.",
            storyStep3Desc: "Official clarity kills wild assumptions.",
            storyCta0: "Try to see",
            storyCta1: "Find a switch",
            storyCta2: "Try another one",
            storyCta3: "Push further"
        },
        peran: {
            label: "// 03_SIMPLE_STRATEGY",
            title: "Many businesses only need a simple version to avoid customer confusion.",
            notLine1: "Not all businesses need complex systems.",
            notLine2: "Clarity is the key to trust.",
            mainDesc: "Clear Profile • Location & Hours • Ordering Process • Portfolio • Testimonials • Service Procedures."
        },
        bukti: {
            label: "// 04_CLARITY_PARAMETERS",
            items: [
                { val: "100%", label: "ZERO_WILD_ASSUMPTIONS" },
                { val: "ZERO", label: "CUSTOMER_DOUBT" },
                { val: "FOCUS", label: "FIRM_DECISIONS" },
                { val: "CLEAR", label: "CONFIRMATION_FLOW" }
            ]
        },
        penutup: {
            line1: "Your business is ready,",
            line2: "Or not ready,",
            line3: "To convince them.",
            closing: "Choose to be trusted.",
            cta: "→ Build Clarity"
        },
        marquee1: {
            part1: "Grow_Professional",
            part2: "Official_Info_Center",
            part3: "Conversion_Clarity"
        },
        contrast: {
            label: "// STRATEGY COMPARISON",
            agencyLabel: "COMPLEX SYSTEMS",
            agencyLine: "Focus on complicated features that often confuse customers.",
            engineerLabel: "RIGHT STRATEGY",
            engineerLine: "Focus on fulfilling information needs so customers stop doubting."
        }
    },
    footer: {
        textPath1: "SYSTEM_AUTHORITY — PROVENANCE_DATA — SWISS_POP_EST_2026 —",
        textPath2: "PROTOCOL_ACTIVE — NETWORK_STABLE — DATA_VERIFIED — TRUST_MAINTAINED —",
        authIndex: "( AUTH_INDEX )",
        portfolioAsc: "PORTFOLIO.ARC.26",
        nav: {
            home: "Protocol_Home",
            vault: "Enter_Vault",
            manifesto: "Read_Manifesto"
        },
        accessPoint: "( ACCESS_POINT )",
        globalNetwork: "GLOBAL_CORE_NETWORK",
        copyright: "© 2026 SWISS_POP_BRUTALIST",
        sysNominal: "ALL_SYSTEMS_NOMINAL",
        galleryLabel: "[ VISUAL_ASSETS_CACHE ]",
        expandArchive: "EXPAND_ARCHIVE"
    },
    legacy: {
        badge: "[ RESTRICTED_ACCESS // AUTHORITY_ARCHIVE ]",
        title1: "PROVENANCE",
        title2: "DATA",
        title3: "RECORDS",
        subtitle: "Architecture for Authority Through Verified Provenance",
        ref: "REF_",
        sequence: "DATA_SEQUENCE_",
        quote: "Historical data constitutes the structural foundation for digital authority.",
        trustIndex: "TRUST_INDEX: AA+",
        version: "VERSION: PROVENANCE_V1"
    },
    storyPage: {
        badge: "( DECRYPTING_BIOGRAPHY )",
        title1: "THE",
        title2: "PRIVATE",
        title3: "VAULT",
        desc: "Authorized access to the origin sequence of the architect.",
        floors: [
            { id: 1, text: "AWAKENING", content: "<p>On an ordinary morning, someone woke up—but the world around them no longer felt the same.</p>" },
            { id: 2, text: "AKSA", content: "<p><strong>His name is Aksa.</strong></p><p>Once, in the past, he was known as someone who blazed bright. In his silence, there was determination. In his steps, a clear direction.</p><p>He was not only smart, but full of vision. It seemed everything he touched grew into something meaningful.</p>" },
            { id: 3, text: "TIME", content: "<p>But time... is not always a friend.</p><p>Slowly, without realizing it, Aksa began walking aimlessly. Not because he lost his purpose, but because he let himself be trapped in a false comfort for too long.</p>" },
            { id: 4, text: "STUCK", content: "<p>His days became filled with small distractions that turned into massive obstacles. He procrastinated, waited, then repeated. Day after day, with no progress. He knew it, <br><br><strong>but like mud, the harder he tried to move, the deeper he sank.</strong></p>" },
            { id: 5, text: "TEST", content: "<p>Until finally... the test came.</p><p>Not a massive disaster, nor an obvious failure. But it was enough to awaken him.</p>" },
            { id: 6, text: "REALIZE", content: "<p>A huge opportunity—one he would have conquered easily in the past—now stood before him, and <br><br><strong>he realized: he was no longer ready.</strong></p><p>His hands hesitated, his mind was slow, his heart shrank.</p>" },
            { id: 7, text: "REFLECTION", content: "<p>That was when he saw his own reflection.</p><p>Not the one in the mirror, but the one in his memories—the version of his past self. Full of fire. Ready to blaze at any time.</p><p><strong>He did not want to be a mere spectator of his own life.</strong></p>" },
            { id: 8, text: "JOURNEY", content: "<p>The journey back began. It felt heavy. Slow. Full of shame for having to start over.</p><p>But one thing is now firmly planted in his chest: <strong>he still has the flame.</strong> Though small, he preserves it. And that is enough to keep him moving.</p>" },
            { id: 9, text: "HOPE", content: "<p>Today, Aksa has not fully become his past self again.</p><p>But every step he takes now is a <strong>conscious choice not to give up.</strong></p><p>Every second, he bets on the possibility that he can still become someone who is not just good, but meaningful.</p>" }
        ]
    },
    loading: {
        init: "INITIALIZING_PROTOCOL"
    }
} satisfies Dictionary;
