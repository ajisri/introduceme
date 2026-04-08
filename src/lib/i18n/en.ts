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
            tagline: "[ ROOT CAUSE ANALYSIS ]",
            title1: "HIGH TRAFFIC.",
            title2: "ZERO CLOSE.",
            subtitle: "WHY DO AUDIENCES STOP RESPONDING RIGHT BEFORE THE TRANSACTION POINT?",
            desc1: "The Core Issue: It's never about your price or service quality.",
            desc2: "The human brain automatically aborts decisions the moment it detects a 1% ambiguity in your information structure.",
            stat: "99%",
            statLabel: "DECISIONS ABORTED DUE TO VISUAL DOUBT",
            point1: "Visual clarity dictates",
            point2: "Conversion rate logic",
            cta: "→ RUN DIAGNOSTICS",
            scrollLabel: "INITIATE_ANALYSIS",
            qualifier: "ENGINEERED EXCLUSIVELY FOR B2B FACING INVISIBLE CONVERSION LEAKS"
        },
        refleksi: {
            label: "// 01_REFLECTION",
            line1: "Reality occurs when your office is closed.",
            line2: "When potential customers search for you tonight,",
            question: "What do they actually find?",
            desc1: "Decisions rarely happen in front of you.",
            desc2: "They happen in silence, as customers compare you with other alternatives without a word."
        },
        diagnosis: {
            label: "// 02_ROOT_CAUSE_ANALYSIS",
            title: "UNPACKING THE LEAK",
            items: [
                "WHY 1: Clients hesitate to close. Why? Because they feel uncertain.",
                "WHY 2: Why uncertainty? Absolute absence of instant proof in the first 5 seconds.",
                "WHY 3: Why is there no proper proof? The layout is flooded with self-proclaimed decor.",
                "WHY 4: Why lack parameters? Objective truth is buried due to zero information architecture."
            ],
            conclusion1: "THE STRUCTURAL ROOT CAUSE:",
            conclusion2: "selling with emotion, killing logic."
        },
        peran: {
            label: "// 03_PROTOCOL_DEFINITION",
            title: "Trust engineering through the elimination of architectural friction.",
            notLine1: "Beyond visual aesthetics.",
            notLine2: "No redundant ornamentation.",
            mainDesc: "Identifying and sealing information gaps that hinder the flow of conviction in digital architectures."
        },
        bukti: {
            label: "// 04_VERIFICATION_PARAMETERS",
            items: [
                { val: "100%", label: "ZERO_ASSUMPTIONS" },
                { val: "ZERO", label: "NAVIGATION_DEAD_ENDS" },
                { val: "SWIFT", label: "INFORMATION_ABSORPTION" },
                { val: "CLINICAL", label: "VALIDATION_SYSTEM" }
            ]
        },
        penutup: {
            line1: "When the structure is precise,",
            line2: "people don't feel they're being convinced.",
            line3: "They simply feel the decision makes sense.",
            closing: "And that is trust.",
            cta: "→ Build with precision"
        },
        marquee1: {
            part1: "Precision_Architecture",
            part2: "Trust_Structure",
            part3: "Conviction_Engineering"
        },
        contrast: {
            label: "// AUDIT_PARAMETERS",
            agencyLabel: "STANDARD_AUDIT",
            agencyLine: "Focus on aesthetics and linear navigation flow.",
            engineerLabel: "VALIDATED_AUDIT",
            engineerLine: "Focus on logical architecture and conviction engineering."
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
