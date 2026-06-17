import { Dictionary } from "@/types";

export const en = {
    header: {
        status: "STATUS: ACTIVE // V.01-2026",
        protocol: "PROTOCOL: TRUST_ARCHITECTURE",
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
            tagline: "[ Reducing Digital Uncertainty ]",
            title1: "People decide who to trust",
            title2: "before they decide who to hire.",
            subtitle: "I help professionals, consultants, and growing businesses build websites that communicate credibility before the first conversation.",
            desc1: "",
            desc2: "",
            stat: "CORE",
            statLabel: "[ THE TRUST METHOD ]",
            statDesc: "Many Businesses Only Need A Simple Version To Avoid Customer Confusion.",
            cta: "→ See My Thinking",
            scrollLabel: "Initiate analysis",
            qualifier: "Your business is either ready or not ready to convince them."
        },
        refleksi: {
            label: "// 01_The_Observation",
            line1: "Most websites fail before people read them.",
            line2: "Visitors don't leave because they dislike your business.",
            question: "They leave because they don't understand it.",
            desc1: "When positioning is unclear,",
            desc2: "trust disappears within seconds."
        },
        diagnosis: {
            label: "// 02_Uncertainty_Analysis",
            title: "Filling the Gaps",
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
            storyCta3: "Push further",
            floating1: "Clear profile?",
            floating2: "Where's the location?",
            floating3: "The portfolio?",
            floating4: "What time do you open?",
            floating5: "Service procedures?",
            floating6: "How to order?"
        },
        peran: {
            label: "// 03_Philosophy",
            title: "What I believe.",
            whyCare: "A website should not impress people. It should remove uncertainty. Most websites focus on attention. I focus on understanding.",
            beliefsTitle: "Because trust is created when people:",
            beliefs: [
                "immediately understand who you are,",
                "what you do,",
                "and why it matters."
            ],
            notLine1: "A website should not impress people.",
            notLine2: "It should remove uncertainty.",
            mainDesc: "Editorial Structure • Structured Case Data • Typographic Precision • Low Cognitive Load"
        },
        bukti: {
            label: "// 02_The_Framework",
            items: [
                { 
                    val: "01", 
                    label: "Clarity", 
                    desc: "Can people explain what you do after 10 seconds?" 
                },
                { 
                    val: "02", 
                    label: "Authority", 
                    desc: "Can people verify your expertise?" 
                },
                { 
                    val: "03", 
                    label: "Trust", 
                    desc: "Do people find reasons to believe you?" 
                },
                { 
                    val: "04", 
                    label: "Direction", 
                    desc: "Do people know what to do next?" 
                }
            ]
        },
        penutup: {
            line1: "Need a second opinion",
            line2: "on your website?",
            line3: "Let's talk.",
            financialCare: "websites are tools to reduce uncertainty",
            closing: "Get a second opinion.",
            cta: "→ Let's talk",
            inquire: "Want honest feedback on your digital presence? Start here."
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
        },
        notes: {
            label: "// 05_THINKING_PROOF",
            title: "Notes on trust, positioning, and digital credibility.",
            items: [
                {
                    title: "Why most personal websites fail",
                    desc: "It's not because the design is bad. It's because visitors never understand who is behind it. When identity is missing, the brain assumes risk."
                },
                {
                    title: "The difference between a portfolio and a credibility system",
                    desc: "A portfolio shows what you did. A credibility system explains how you think. In high-ticket consulting, the latter is infinitely more valuable."
                },
                {
                    title: "The hidden cost of confusing messaging",
                    desc: "If visitors have to think to understand what you do, they leave. Confusion is the ultimate conversion killer."
                }
            ]
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
        badge: "[ THE_DESIGN_LAB // EXPERIMENTS ]",
        title1: "Design",
        title2: "Experiments",
        title3: "Archive",
        subtitle: "I'm interested in one question: Why do people trust some professionals immediately while ignoring others? My work explores how design, structure, and positioning influence that decision.",
        ref: "REF_",
        sequence: "EXPERIMENT_SEQ_",
        quote: "Historical data constitutes the structural foundation for digital authority.",
        trustQuote: "If you are tired of competing on price, start competing on trust.",
        trustIndex: "TRUST_INDEX: AA+",
        version: "VERSION: PROVENANCE_V1",
        cards: [
            {
                title: "Personal Brand Architecture",
                question: "How can a professional appear more trustworthy online?",
                hypothesis: "Simplifying visual components while maximizing text weight establishes higher perceived authority.",
                exploration: "Enforcing asymmetric layouts that emphasize typographical details, removing typical marketing visual noise.",
                insight: "Lowering cognitive friction makes editorial authority immediately clear without needing client logos."
            },
            {
                title: "The Credibility System",
                question: "How to represent proof of expertise without standard portfolios?",
                hypothesis: "Presenting raw case reasoning directly built credibility more effectively than static visual grids.",
                exploration: "Replacing case galleries with strategic questions, hypotheses, and structured thinking blocks.",
                insight: "A visitor decides to trust when they understand the decision-making process behind the work."
            },
            {
                title: "Clarity Conversion Funnel",
                question: "Why do high-quality visitors bounce from minimal landing pages?",
                hypothesis: "Minimalism without immediate context creates risk, leading to rapid exits.",
                exploration: "Structuring layouts specifically around answering visitor doubts rather than focusing on aesthetic empty spaces.",
                insight: "Clarity of value within the first 10 seconds is the ultimate driver of user journey progression."
            }
        ]
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
