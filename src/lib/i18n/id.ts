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
            tagline: "[ ANALISA PERILAKU DIGITAL ]",
            title1: "TETAP RELEVAN.",
            title2: "TETAP PROFESIONAL.",
            subtitle: "Website hanyalah salah satu alat agar bisnis terus bertumbuh menjadi profesional dan tidak tertinggal saat pasar berubah.",
            desc1: "Kenapa? Karena saat ingin memastikan sesuatu yang memiliki risiko, perilaku orang berubah.",
            desc2: "Dari mendatangi gerai langsung untuk konfirmasi, berubah menjadi konfirmasi Google dan mencari alternatif secara digital.",
            stat: "99%",
            statLabel: "ORANG TIDAK PEDULI DENGAN KERINGAT ANDA",
            cta: "→ LIHAT REALITA",
            scrollLabel: "MULAI_ANALISIS",
            qualifier: "USAHA ANDA HANYA PERLU SIAP ATAU TIDAK SIAP UNTUK MEYAKINKAN MEREKA."
        },
        refleksi: {
            label: "// 01_PSIKOLOGI_PASAR",
            line1: "Namun... apa yang tidak berubah?",
            line2: "Memastikan informasi resmi, reputasi, dan profesionalitas.",
            question: "Saat ragu, Mereka hanya… pergi.",
            desc1: "Membuka 3–5 pilihan, membandingkan diam-diam. Tidak pernah bilang “Saya ragu.”",
            desc2: "Otak manusia secara natural mengisi kekosongan informasi dengan risiko."
        },
        diagnosis: {
            label: "// 02_ANALISA_KERAGUAN",
            title: "MENGISI KEKOSONGAN",
            items: [
                "Tanpa pusat informasi resmi → otak pelanggan mengisi kekosongan dengan asumsi.",
                "Keraguan muncul saat informasi tidak jelas (The Black Room).",
                "Yang dibutuhkan adalah pusat informasi yang membuat orang berhenti ragu.",
                "Mendorong keputusan dengan menghadirkan kejelasan yang mengalir lancar."
            ],
            conclusion1: "KESEIMBANGAN INFORMASI:",
            conclusion2: "sederhana namun meyakinkan.",
            storyStep0: "The Black Room.",
            storyStep0Desc: "Keraguan muncul saat informasi tidak jelas. Semuanya gelap.",
            storyStep1: "Asumsi mengisi kekosongan.",
            storyStep1Desc: "Otak secara natural mengisi kekosongan informasi dengan risiko.",
            storyStep2: "Saklar yang salah.",
            storyStep2Desc: "Upaya ada, tapi bukan di titik yang tepat. Masih belum ada kejelasan resmi.",
            storyStep3: "LAMPU MENYALA.",
            storyStep3Desc: "Kejelasan resmi mematikan asumsi liar.",
            storyCta0: "Coba melihat",
            storyCta1: "Cari saklar",
            storyCta2: "Coba yang lain",
            storyCta3: "Lanjutkan",
            floating1: "Profil jelas?",
            floating2: "Dimana lokasi?",
            floating3: "Portofolionya?",
            floating4: "Buka jam berapa?",
            floating5: "Prosedur layanan?",
            floating6: "Cara pesan?"
        },
        peran: {
            label: "// 03_STRATEGI_SEDERHANA",
            title: "Banyak bisnis hanya butuh versi sistem sederhana agar pelanggan tidak bingung.",
            notLine1: "Tidak semua bisnis butuh sistem kompleks.",
            notLine2: "Kejelasan adalah kunci dari kepercayaan.",
            mainDesc: "Profil Jelas • Lokasi & Jam • Cara Pesan • Portofolio • Testimoni • Prosedur Layanan."
        },
        bukti: {
            label: "// 04_PARAMETER_KEJELASAN",
            items: [
                { val: "100%", label: "BEBAS_ASUMSI_LIAR" },
                { val: "NOL", label: "KERAGUAN_PELANGGAN" },
                { val: "FOKUS", label: "KEPUTUSAN_MANTAP" },
                { val: "JELAS", label: "ALUR_KONFIRMASI" }
            ]
        },
        penutup: {
            line1: "Bisnis Anda siap,",
            line2: "Atau tidak siap,",
            line3: "Untuk meyakinkan mereka.",
            closing: "Pilih untuk dipercaya.",
            cta: "→ Bangun Kejelasan"
        },
        marquee1: {
            part1: "Bertumbuh_Profesional",
            part2: "Pusat_Informasi_Resmi",
            part3: "Kejelasan_Konversi"
        },
        contrast: {
            label: "// PERBANDINGAN STRATEGI",
            agencyLabel: "SISTEM KOMPLEKS",
            agencyLine: "Fokus pada fitur rumit yang seringkali membingungkan pelanggan.",
            engineerLabel: "STRATEGI TEPAT",
            engineerLine: "Fokus pada pemenuhan kebutuhan informasi agar pelanggan berhenti ragu."
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
        quote: "Data histori mengenalkan prinsip dan metodologi anda kepada pembaca",
        trustQuote: "Jika Anda lelah bersaing di harga, mulailah bersaing di kepercayaan.",
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
