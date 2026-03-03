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

export interface BuktiItem {
    val: string;
    label: string;
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
            cta: string;
            scrollLabel: string;
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
        };
        peran: {
            label: string;
            title: string;
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
            closing: string;
            cta: string;
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
        trustIndex: string;
        version: string;
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
