export type Language = "en" | "id";

export interface StoryFloor {
    id: number;
    text: string;
    content: string;
}

export interface NavItem {
    label: string;
    href: string;
    color: string;
    isAnchor: boolean;
}

export interface ManifestoItem {
    title: string;
    desc: string;
}

export interface LegacyCardContent {
    title: string;
    question: string;
    hypothesis: string;
    exploration: string;
    insight: string;
}

export interface BuktiItem {
    val: string;
    label: string;
    desc: string;
}

export interface NotesItem {
    title: string;
    desc: string;
}

export interface Dictionary {
    header: {
        status: string;
        protocol: string;
        location: string;
        nav: {
            core: string;
            vault: string;
            manifesto: string;
            authority: string;
            exit: string;
            cmd: string;
        };
        mobile: {
            items: NavItem[];
            terminate: string;
        };
    };
    landing: {
        hero: {
            tagline: string;
            title1: string;
            title2: string;
            subtitle: string;
            desc1: string;
            desc2: string;
            stat: string;
            statLabel: string;
            statDesc?: string;
            point1?: string;
            point2?: string;
            cta: string;
            scrollLabel: string;
            qualifier: string;
        };
        refleksi: {
            label: string;
            line1: string;
            line2: string;
            question: string;
            desc1: string;
            desc2: string;
        };
        diagnosis: {
            label: string;
            title: string;
            items: string[];
            conclusion1: string;
            conclusion2: string;
            storyStep0: string;
            storyStep0Desc: string;
            storyStep1: string;
            storyStep1Desc: string;
            storyStep2: string;
            storyStep2Desc: string;
            storyStep3: string;
            storyStep3Desc: string;
            storyCta0: string;
            storyCta1: string;
            storyCta2: string;
            storyCta3: string;
            floating1: string;
            floating2: string;
            floating3: string;
            floating4: string;
            floating5: string;
            floating6: string;
        };
        peran: {
            label: string;
            title: string;
            whyCare: string;
            beliefsTitle: string;
            beliefs: string[];
            notLine1: string;
            notLine2: string;
            mainDesc: string;
        };
        bukti: {
            label: string;
            items: BuktiItem[];
        };
        penutup: {
            line1: string;
            line2: string;
            line3: string;
            financialCare: string;
            closing: string;
            cta: string;
            inquire: string;
        };
        marquee1: {
            part1: string;
            part2: string;
            part3: string;
        };
        contrast: {
            label: string;
            agencyLabel: string;
            agencyLine: string;
            engineerLabel: string;
            engineerLine: string;
        };
        notes: {
            label: string;
            title: string;
            items: NotesItem[];
        };
    };
    footer: {
        textPath1: string;
        textPath2: string;
        authIndex: string;
        portfolioAsc: string;
        nav: {
            home: string;
            vault: string;
            manifesto: string;
        };
        accessPoint: string;
        globalNetwork: string;
        copyright: string;
        sysNominal: string;
        galleryLabel: string;
        expandArchive: string;
    };

    legacy: {
        badge: string;
        title1: string;
        title2: string;
        title3: string;
        subtitle: string;
        ref: string;
        sequence: string;
        quote: string;
        trustQuote: string;
        trustIndex: string;
        version: string;
        cards: LegacyCardContent[];
    };
    storyPage: {
        badge: string;
        title1: string;
        title2: string;
        title3: string;
        desc: string;
        floors: StoryFloor[];
    };
    loading: {
        init: string;
    };
}
