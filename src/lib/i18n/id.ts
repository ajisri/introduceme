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
            tagline: "[ ANALISA AKAR MASALAH (ROOT CAUSE) ]",
            title1: "TRAFIK TINGGI.",
            title2: "CLOSING MATI.",
            subtitle: "MENGAPA AUDIENS BERHENTI MERESPONS SAAT PROSES MENDEKATI TITIK TRANSAKSI?",
            desc1: "Akar Masalah: Tentu bukan pada harga atau kualitas layanan Anda.",
            desc2: "Otak manusia otomatis membatalkan keputusan ketika mendeteksi sekecil 1% ambiguitas dalam struktur informasi layar Anda.",
            stat: "99%",
            statLabel: "KEPUTUSAN DIBATALKAN KARENA KERAGUAN VISUAL",
            point1: "Tingkat kejelasan visual menuntun",
            point2: "Tingkat konversi dan transaksi",
            cta: "→ LAKUKAN DIAGNOSA",
            scrollLabel: "MULAI_ANALISIS",
            qualifier: "DIRANCANG KHUSUS UNTUK B2B YANG MENGALAMI KEBOCORAN KONVERSI"
        },
        refleksi: {
            label: "// 01_REFLEKSI",
            line1: "Realita terjadi saat kantor Anda tutup.",
            line2: "Saat calon pelanggan mencari Anda malam ini,",
            question: "Apa yang sesungguhnya mereka temukan?",
            desc1: "Keputusan jarang terjadi di depan Anda.",
            desc2: "Ia terjadi dalam sunyi, saat pelanggan membandingkan Anda dengan alternatif lain tanpa suara."
        },
        diagnosis: {
            label: "// 02_ROOT_CAUSE_ANALYSIS",
            title: "MENGURAI KEBOCORAN",
            items: [
                "WHY 1: Klien batal membeli. Kenapa? Karena mereka merasa ragu.",
                "WHY 2: Mengapa ragu? Absennya bukti instan tegas di 5 detik pertama.",
                "WHY 3: Mengapa tidak ada bukti instan? Layar dipenuhi klaim sepihak dan jargon dekoratif.",
                "WHY 4: Mengapa penuh jargon? Bukti dan parameter objektif tertimbun karena kurangnya arsitektur informasi."
            ],
            conclusion1: "AKAR MASALAH (ROOT CAUSE) PADA VISUAL ANDA:",
            conclusion2: "menjual dgn emosi, mematikan logika."
        },
        peran: {
            label: "// 03_DEFINISI_PROTOKOL",
            title: "Rekayasa kepercayaan melalui eliminasi friksi arsitektural.",
            notLine1: "Bukan sekadar estetika visual.",
            notLine2: "Bukan penambahan ornamen tanpa fungsi.",
            mainDesc: "Identifikasi dan pembersihan celah informasi yang menghambat alur keyakinan pada arsitektur digital."
        },
        bukti: {
            label: "// 04_PARAMETER_VERIFIKASI",
            items: [
                { val: "100%", label: "BEBAS_ASUMSI_LIAR" },
                { val: "NOL", label: "JALAN_BUNTU_NAVIGASI" },
                { val: "CEPAT", label: "DAYA_SERAP_INFORMASI" },
                { val: "KLINIS", label: "SISTEM_VALIDASI" }
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
            label: "// PARAMETER_AUDIT",
            agencyLabel: "AUDIT_STANDAR",
            agencyLine: "Fokus pada estetika dan alur navigasi linear.",
            engineerLabel: "AUDIT_VALIDASI",
            engineerLine: "Fokus pada arsitektur logika dan rekayasa keyakinan."
        }
    },
    footer: {
        textPath1: "OTORITAS_SISTEM — PROVENANCE_DATA — SWISS_POP_EST_2026 —",
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
        badge: "[ AKSES_TERBATAS // ARSIP_OTORITAS ]",
        title1: "REKAM",
        title2: "JEJAK",
        title3: "HISTORIS",
        subtitle: "Membangun Otoritas Melalui Data Histori yang Terverifikasi",
        ref: "REF_",
        sequence: "URUTAN_DATA_",
        quote: "Data histori membentuk fondasi struktural bagi keberlanjutan otoritas digital.",
        trustIndex: "INDEKS_KEPERCAYAAN: AA+",
        version: "VERSI: PROVENANCE_V1"
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
