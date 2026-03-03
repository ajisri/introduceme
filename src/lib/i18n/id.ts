import { Dictionary } from "@/types";
import { en } from "./en";

export const id = {
    header: {
        status: "STATUS: OPERASIONAL // V.01-2026",
        protocol: "PROTOKOL: OTORITAS_DESAIN",
        location: "LOK: JARINGAN_GLOBAL",
        nav: {
            core: "Inti",
            vault: "Ruang_Besi",
            manifesto: "Manifesto",
            authority: "Otoritas",
            exit: "Keluar",
            cmd: "Cmd"
        },
        mobile: {
            items: [
                { label: "01_Inti", href: "/", color: "var(--swiss-red)", isAnchor: false },
                { label: "02_Ruang_Besi", href: "/story", color: "var(--pop-blue)", isAnchor: false },
                { label: "03_Manifesto", href: "#about", color: "var(--pop-pink)", isAnchor: true },
                { label: "04_Otoritas", href: "/#authority", color: "var(--pop-green)", isAnchor: true }
            ],
            terminate: "[ Akhiri_Sesi ]"
        }
    },
    landing: {
        hero: {
            tagline: "[ INSINYUR KEPERCAYAAN // 2026 ]",
            title1: "KEPERCAYAAN TIDAK DIBUAT.",
            title2: "IA DIREKAYASA.",
            subtitle: "Dalam arsitektur digital, setiap struktur menentukan keputusan.",
            desc1: "Mayoritas website menampilkan informasi. Sedikit yang dirancang untuk menghilangkan keraguan.",
            desc2: "Kami merancang sistem yang membuat keyakinan muncul secara logis. Tanpa tekanan. Tanpa manipulasi.",
            stat: "99.9%",
            statLabel: "Stabilitas_Sistem",
            cta: "→ Masuk ke ruang keputusan",
            scrollLabel: "PRESISI_ARSITEKTUR"
        },
        refleksi: {
            label: "// 01_REFLEKSI",
            line1: "Website Anda mungkin terlihat baik.",
            line2: "Namun pertanyaannya sederhana:",
            question: "Apakah ia benar-benar membuat orang yakin?",
            desc1: "Banyak bisnis kehilangan kepercayaan bukan karena kualitas,",
            desc2: "tetapi karena struktur yang tidak presisi."
        },
        diagnosis: {
            label: "// 02_DIAGNOSIS",
            title: "Kepercayaan hilang ketika:",
            items: [
                "Informasi tidak tersusun dengan logis",
                "Fokus terpecah",
                "Navigasi menciptakan friksi",
                "Pesan tidak konsisten"
            ],
            conclusion1: "Keraguan bukan emosi.",
            conclusion2: "Ia adalah hasil dari struktur yang lemah."
        },
        peran: {
            label: "// 03_DEFINISI",
            title: "Kami bekerja sebagai insinyur kepercayaan.",
            notLine1: "Bukan mempercantik tampilan.",
            notLine2: "Bukan menambah animasi.",
            mainDesc: "Kami menguji, menyederhanakan, dan menyusun ulang arsitektur digital hingga tidak ada celah bagi keraguan."
        },
        bukti: {
            label: "// 04_BUKTI",
            items: [
                { val: "99.9%", label: "Keandalan_Sistem" },
                { val: "ZERO", label: "Disorientasi_Pengguna" },
                { val: "EKSKLUSIF", label: "Struktur_Terukur" },
                { val: "PERMANEN", label: "Dirancang_Bertahan" }
            ]
        },
        penutup: {
            line1: "Ketika struktur tepat,",
            line2: "orang tidak merasa sedang diyakinkan.",
            line3: "Mereka hanya merasa keputusan itu masuk akal.",
            closing: "Dan itulah kepercayaan.",
            cta: "→ Bangun dengan presisi"
        },
        marquee1: {
            part1: "Presisi_Arsitektur",
            part2: "Struktur_Kepercayaan",
            part3: "Rekayasa_Keyakinan"
        },
        contrast: {
            label: "// PERBEDAAN_KRUSIAL",
            agencyLabel: "Agency biasa berkata:",
            agencyLine: "\"Kami meningkatkan konversi.\"",
            engineerLabel: "Insinyur kepercayaan berkata:",
            engineerLine: "\"Kami menghilangkan alasan untuk tidak percaya.\""
        }
    },
    footer: {
        textPath1: "OTORITAS_SISTEM — WARISAN_DESAIN — SWISS_POP_EST_2026 —",
        textPath2: "PROTOKOL_AKTIF — JARINGAN_STABIL — DATA_TERVERIFIKASI — KEPERCAYAAN_TERJAGA —",
        authIndex: "( INDEKS_OTORISASI )",
        portfolioAsc: "PORTOFOLIO.ARC.26",
        nav: {
            home: "Beranda_Protokol",
            vault: "Masuk_Ruang_Besi",
            manifesto: "Baca_Manifesto"
        },
        accessPoint: "( TITIK_AKSES )",
        globalNetwork: "JARINGAN_INTI_GLOBAL",
        copyright: "© 2026 SWISS_POP_BRUTALIST",
        sysNominal: "SEMUA_SISTEM_NOMINAL",
        galleryLabel: "[ CACHE_ASET_VISUAL ]",
        expandArchive: "PERLUAS_ARSIP"
    },
    legacy: {
        badge: "[ AKSES_TERBATAS // ARSIP_04 ]",
        title1: "ASET",
        title2: "WARISAN",
        title3: "KITA",
        subtitle: "Membangun Otoritas Melalui Urutan Asal yang Terbukti",
        ref: "REF_",
        sequence: "URUTAN_DATA_",
        quote: "\"Warisan Anda bukanlah beban. Itu adalah bahan bakar untuk era dominasi Anda berikutnya.\"",
        trustIndex: "INDEKS_KEPERCAYAAN: AA+",
        version: "VERSI: WARISAN_ULTIMATE"
    },
    storyPage: {
        badge: "( DEKRIPSI_BIOGRAFI )",
        title1: "RUANG",
        title2: "BESI",
        title3: "PRIBADI",
        desc: "Akses sah ke urutan asal dari sang arsitek.",
        floors: [
            { id: 1, text: "KEBANGKITAN", content: "<p>Di sebuah pagi yang tampak biasa, seseorang terbangun—namun dunia di sekitarnya tidak lagi terasa sama.</p>" },
            { id: 2, text: "AKSA", content: "<p><strong>Namanya Aksa.</strong></p><p>Pernah, di masa silam, ia dikenal sebagai sosok yang menyala. Dalam diamnya, ada nyala tekad. Dalam langkahnya, ada arah yang selalu jelas.</p><p>Ia bukan hanya cerdas, tapi juga penuh visi. Seakan segala hal yang disentuhnya, tumbuh menjadi sesuatu yang berarti.</p>" },
            { id: 3, text: "WAKTU", content: "<p>Namun waktu… tak selalu bersahabat.</p><p>Perlahan, tanpa disadarinya, Aksa mulai berjalan tanpa arah. Bukan karena ia kehilangan tujuan, tapi karena terlalu lama membiarkan dirinya terjebak dalam kenyamanan semu.</p>" },
            { id: 4, text: "TERJEBAK", content: "<p>Hari-harinya diisi dengan distraksi kecil yang menjelma besar. Ia menunda, menanti, lalu mengulanginya. Hari demi hari, tanpa progres. Ia tahu itu, <br><br><strong>tapi seperti lumpur, makin ia mencoba bergerak, makin dalam ia tenggelam.</strong></p>" },
            { id: 5, text: "UJIAN", content: "<p>Hingga akhirnya… datang ujian itu.</p><p>Bukan bencana besar, bukan pula kegagalan mencolok. Tapi cukup untuk menyentaknya.</p>" },
            { id: 6, text: "SADAR", content: "<p>Sebuah kesempatan besar—yang dulu akan ia taklukkan dengan mudah—kini berdiri di hadapannya, dan <br><br><strong>ia sadar: ia tidak lagi siap.</strong></p><p>Tangannya ragu, pikirannya lambat, hatinya ciut.</p>" },
            { id: 7, text: "REFLEKSI", content: "<p>Saat itulah ia melihat bayangannya sendiri.</p><p>Bukan yang ada di cermin, tapi yang ada dalam ingatannya—versi dirinya yang dulu. Yang penuh bara. Yang bisa menyala kapan saja.</p><p><strong>Ia tidak ingin menjadi penonton dari hidupnya sendiri.</strong></p>" },
            { id: 8, text: "PERJALANAN", content: "<p>Perjalanan kembali dimulai. Berat. Lambat. Penuh rasa malu karena harus mengulang.</p><p>Tapi satu hal yang kini tertanam kuat di dadanya: <strong>ia masih punya nyala.</strong> Meskipun kecil, ia menyimpannya. Dan itu cukup untuk membuatnya bergerak.</p>" },
            { id: 9, text: "HARAPAN", content: "<p>Hari ini, Aksa belum kembali menjadi dirinya yang dulu.</p><p>Tapi setiap langkahnya kini adalah <strong>pilihan sadar untuk tidak menyerah.</strong></p><p>Setiap detik, ia bertaruh pada kemungkinan bahwa dirinya masih bisa kembali menjadi sosok yang bukan hanya baik, tapi berarti.</p>" }
        ]
    },
    loading: {
        init: "INISIALISASI_PROTOKOL"
    }
} satisfies Dictionary;
