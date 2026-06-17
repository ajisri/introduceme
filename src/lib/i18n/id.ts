import { Dictionary } from "@/types";

export const id = {
    header: {
        status: "STATUS: AKTIF // V.01-2026",
        protocol: "PROTOKOL: ARSITEKTUR_KEPERCAYAAN",
        location: "LOK: JARINGAN_GLOBAL",
        nav: {
            core: "Inti",
            vault: "Brankas",
            manifesto: "Manifesto",
            authority: "Otoritas",
            exit: "Keluar",
            cmd: "Cmd"
        },
        mobile: {
            items: [
                { label: "01_Inti", href: "/", color: "var(--swiss-red)", isAnchor: false },
                { label: "02_Brankas", href: "/story", color: "var(--pop-blue)", isAnchor: false },
                { label: "03_Manifesto", href: "#about", color: "var(--pop-pink)", isAnchor: true },
                { label: "04_Otoritas", href: "/#authority", color: "var(--pop-green)", isAnchor: true }
            ],
            terminate: "[ Akhiri_Sesi ]"
        }
    },
    landing: {
        hero: {
            tagline: "[ Mengurangi Ketidakpastian Digital ]",
            title1: "Orang memutuskan siapa yang dipercaya",
            title2: "sebelum mereka memutuskan siapa yang disewa.",
            subtitle: "Saya membantu para profesional, konsultan, dan bisnis yang sedang berkembang membangun website yang mengomunikasikan kredibilitas sebelum percakapan pertama dimulai.",
            desc1: "",
            desc2: "",
            stat: "CORE",
            statLabel: "[ METODE KEPERCAYAAN ]",
            statDesc: "Banyak Bisnis Hanya Membutuhkan Versi Sederhana Untuk Menghindari Kebingungan Pelanggan.",
            cta: "→ Lihat Cara Berpikir Saya",
            scrollLabel: "Mulai analisis",
            qualifier: "Bisnis Anda antara siap atau tidak siap untuk meyakinkan mereka."
        },
        refleksi: {
            label: "// 01_Observasi",
            line1: "Sebagian besar website gagal sebelum orang-orang membacanya.",
            line2: "Pengunjung tidak pergi karena mereka tidak menyukai bisnis Anda.",
            question: "Mereka pergi karena mereka tidak memahaminya.",
            desc1: "Ketika positioning tidak jelas,",
            desc2: "kepercayaan lenyap dalam hitungan detik."
        },
        diagnosis: {
            label: "// 02_Analisis_Ketidakpastian",
            title: "Mengisi Celah",
            items: [
                "Tidak ada pusat informasi resmi → otak pelanggan mengisi celah dengan asumsi.",
                "Keraguan muncul saat informasi tidak jelas (Ruang Gelap).",
                "Yang dibutuhkan adalah pusat informasi yang membuat orang berhenti ragu.",
                "Mendorong keputusan dengan memberikan kejelasan yang mengalir lancar."
            ],
            conclusion1: "KESEIMBANGAN INFORMASI:",
            conclusion2: "sederhana namun meyakinkan.",
            storyStep0: "Ruang Gelap.",
            storyStep0Desc: "Keraguan muncul saat informasi tidak jelas. Semuanya gelap.",
            storyStep1: "Asumsi mengisi kekosongan.",
            storyStep1Desc: "Otak secara alami mengisi celah informasi dengan risiko.",
            storyStep2: "Kontak yang berbeda.",
            storyStep2Desc: "Ada usaha, tapi tidak pada titik yang tepat. Tetap tidak ada kejelasan resmi.",
            storyStep3: "LAMPU MENYALA.",
            storyStep3Desc: "Kejelasan resmi membunuh asumsi liar.",
            storyCta0: "Coba lihat",
            storyCta1: "Cari sakelar",
            storyCta2: "Coba yang lain",
            storyCta3: "Dorong lebih jauh",
            floating1: "Profil jelas?",
            floating2: "Di mana lokasinya?",
            floating3: "Portofolio?",
            floating4: "Jam berapa buka?",
            floating5: "Prosedur layanan?",
            floating6: "Cara pesan?"
        },
        peran: {
            label: "// 03_Filosofi",
            title: "Apa yang saya yakini.",
            whyCare: "Sebuah website seharusnya tidak memukau orang. Website harus menghilangkan ketidakpastian. Kebanyakan website fokus pada perhatian. Saya fokus pada pemahaman.",
            beliefsTitle: "Karena kepercayaan tercipta ketika orang:",
            beliefs: [
                "segera memahami siapa Anda,",
                "apa yang Anda lakukan,",
                "dan mengapa itu penting."
            ],
            notLine1: "Sebuah website seharusnya tidak memukau orang.",
            notLine2: "Website harus menghilangkan ketidakpastian.",
            mainDesc: "Struktur Editorial • Data Kasus Terstruktur • Presisi Tipografi • Beban Kognitif Rendah"
        },
        bukti: {
            label: "// 02_Kerangka_Kerja",
            items: [
                { 
                    val: "01", 
                    label: "Kejelasan", 
                    desc: "Dapatkah orang menjelaskan apa yang Anda lakukan setelah 10 detik?" 
                },
                { 
                    val: "02", 
                    label: "Otoritas", 
                    desc: "Dapatkah orang memverifikasi keahlian Anda?" 
                },
                { 
                    val: "03", 
                    label: "Kepercayaan", 
                    desc: "Apakah orang menemukan alasan untuk mempercayai Anda?" 
                },
                { 
                    val: "04", 
                    label: "Arah", 
                    desc: "Apakah orang tahu apa yang harus dilakukan selanjutnya?" 
                }
            ]
        },
        penutup: {
            line1: "Butuh pendapat kedua",
            line2: "tentang website Anda?",
            line3: "Mari berbicara.",
            financialCare: "website adalah alat pengurang ketidakpastian",
            closing: "Dapatkan pendapat kedua.",
            cta: "→ Mari berbicara",
            inquire: "Ingin umpan balik jujur tentang kehadiran digital Anda? Mulai di sini."
        },
        marquee1: {
            part1: "Tumbuh_Profesional",
            part2: "Pusat_Info_Resmi",
            part3: "Kejelasan_Konversi"
        },
        contrast: {
            label: "// PERBANDINGAN STRATEGI",
            agencyLabel: "SISTEM KOMPLEKS",
            agencyLine: "Fokus pada fitur rumit yang sering membingungkan pelanggan.",
            engineerLabel: "STRATEGI TEPAT",
            engineerLine: "Fokus memenuhi kebutuhan informasi agar pelanggan berhenti ragu."
        },
        notes: {
            label: "// 05_BUKTI_PEMIKIRAN",
            title: "Catatan tentang kepercayaan, positioning, dan kredibilitas digital.",
            items: [
                {
                    title: "Mengapa sebagian besar website pribadi gagal?",
                    desc: "Bukan karena desainnya buruk. Itu karena pengunjung tidak pernah memahami siapa di balik itu. Ketika identitas hilang, otak berasumsi adanya risiko."
                },
                {
                    title: "Perbedaan antara portofolio dan sistem kredibilitas",
                    desc: "Portofolio menunjukkan apa yang telah Anda lakukan. Sistem kredibilitas menjelaskan bagaimana Anda berpikir. Dalam konsultasi bernilai tinggi, yang kedua jauh lebih berharga."
                },
                {
                    title: "Biaya tersembunyi dari pesan yang membingungkan",
                    desc: "Jika pengunjung harus berpikir keras untuk memahami apa yang Anda lakukan, mereka pergi. Kebingungan adalah pembunuh konversi utama."
                }
            ]
        }
    },
    footer: {
        textPath1: "OTORITAS_SISTEM — DATA_ASAL — SWISS_POP_EST_2026 —",
        textPath2: "PROTOKOL_AKTIF — JARINGAN_STABIL — DATA_TERVERIFIKASI — KEPERCAYAAN_TERJAGA —",
        authIndex: "( INDEKS_OTORITAS )",
        portfolioAsc: "PORTOFOLIO.ARC.26",
        nav: {
            home: "Beranda_Protokol",
            vault: "Masuk_Brankas",
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
        badge: "[ LAB_DESAIN // EKSPERIMEN ]",
        title1: "Desain",
        title2: "Eksperimen",
        title3: "Arsip",
        subtitle: "Saya tertarik pada satu pertanyaan: Mengapa orang langsung mempercayai beberapa profesional sementara mengabaikan yang lain? Pekerjaan saya mengeksplorasi bagaimana desain, struktur, dan positioning memengaruhi keputusan tersebut.",
        ref: "REF_",
        sequence: "URUTAN_EKSPERIMEN_",
        quote: "Data historis membentuk fondasi struktural untuk otoritas digital.",
        trustQuote: "Jika Anda lelah bersaing dalam harga, mulailah bersaing dalam kepercayaan.",
        trustIndex: "INDEKS_KEPERCAYAAN: AA+",
        version: "VERSI: PROVENANCE_V1",
        cards: [
            {
                title: "Arsitektur Personal Brand",
                question: "Bagaimana seorang profesional bisa terlihat lebih kredibel secara online?",
                hypothesis: "Menyederhanakan komponen visual sekaligus memaksimalkan bobot teks membangun otoritas yang dipersepsikan lebih tinggi.",
                exploration: "Menerapkan tata letak asimetris yang menekankan detail tipografi, menghilangkan kebisingan visual pemasaran biasa.",
                insight: "Menurunkan friksi kognitif membuat otoritas editorial langsung terlihat tanpa memerlukan logo klien."
            },
            {
                title: "Sistem Kredibilitas",
                question: "Bagaimana cara menyajikan bukti keahlian tanpa portofolio standar?",
                hypothesis: "Menyajikan penalaran kasus mentah secara langsung membangun kredibilitas lebih efektif daripada grid visual statis.",
                exploration: "Mengganti galeri kasus dengan pertanyaan strategis, hipotesis, dan blok pemikiran terstruktur.",
                insight: "Pengunjung memutuskan untuk percaya ketika mereka memahami proses pengambilan keputusan di balik pekerjaan tersebut."
            },
            {
                title: "Funnel Konversi Kejelasan",
                question: "Mengapa pengunjung berkualitas tinggi terpental dari landing page minimalis?",
                hypothesis: "Minimalisme tanpa konteks langsung menciptakan risiko, mengarah pada jalan keluar cepat.",
                exploration: "Menyusun tata letak secara khusus di sekitar menjawab keraguan pengunjung daripada berfokus pada ruang kosong estetis.",
                insight: "Kejelasan nilai dalam 10 detik pertama adalah pendorong utama kelanjutan perjalanan pengguna."
            }
        ]
    },
    storyPage: {
        badge: "( DEKRIPSI_BIOGRAFI )",
        title1: "THE",
        title2: "PRIVATE",
        title3: "VAULT",
        desc: "Akses sah ke urutan asal sang arsitek.",
        floors: [
            { id: 1, text: "KEBANGKITAN", content: "<p>Pada suatu pagi yang biasa, seseorang terbangun—tapi dunia di sekitarnya tak lagi terasa sama.</p>" },
            { id: 2, text: "AKSA", content: "<p><strong>Namanya Aksa.</strong></p><p>Dulu, di masa lalu, ia dikenal sebagai seseorang yang menyala terang. Dalam diamnya ada ketegasan. Dalam langkahnya ada arah yang jelas.</p><p>Ia bukan sekadar pintar, tapi penuh visi. Rasanya apa pun yang ia sentuh tumbuh menjadi sesuatu yang berarti.</p>" },
            { id: 3, text: "WAKTU", content: "<p>Tapi waktu... tidak selalu menjadi kawan.</p><p>Perlahan, tanpa disadari, Aksa mulai berjalan tanpa arah. Bukan karena kehilangan tujuan, tapi karena membiarkan dirinya terjebak dalam kenyamanan palsu terlalu lama.</p>" },
            { id: 4, text: "TERJEBAK", content: "<p>Hari-harinya menjadi dipenuhi distraksi kecil yang berubah menjadi rintangan raksasa. Ia menunda, menunggu, lalu mengulanginya. Hari demi hari, tanpa ada kemajuan. Ia tahu itu, <br><br><strong>tapi seperti lumpur, semakin keras ia mencoba bergerak, semakin dalam ia tenggelam.</strong></p>" },
            { id: 5, text: "UJIAN", content: "<p>Hingga akhirnya... ujian itu datang.</p><p>Bukan bencana besar, bukan pula kegagalan yang nyata. Tapi itu cukup untuk membangunkannya.</p>" },
            { id: 6, text: "SADAR", content: "<p>Sebuah peluang besar—yang di masa lalu akan dengan mudah ia taklukkan—kini berdiri di hadapannya, dan <br><br><strong>ia sadar: ia tidak lagi siap.</strong></p><p>Tangannya ragu, pikirannya lambat, hatinya menciut.</p>" },
            { id: 7, text: "REFLEKSI", content: "<p>Saat itulah ia melihat pantulannya sendiri.</p><p>Bukan yang ada di cermin, melainkan yang ada dalam ingatannya—versi dirinya yang dulu. Penuh api. Siap menyala kapan saja.</p><p><strong>Ia tidak ingin hanya menjadi penonton dalam hidupnya sendiri.</strong></p>" },
            { id: 8, text: "PERJALANAN", content: "<p>Perjalanan kembali pun dimulai. Terasa berat. Lambat. Penuh rasa malu karena harus memulai lagi dari awal.</p><p>Tapi satu hal kini tertanam kuat di dadanya: <strong>ia masih memiliki api itu.</strong> Meski kecil, ia menjaganya. Dan itu sudah cukup untuk terus bergerak.</p>" },
            { id: 9, text: "HARAPAN", content: "<p>Hari ini, Aksa belum sepenuhnya kembali menjadi dirinya yang dulu.</p><p>Tapi setiap langkah yang ia ambil sekarang adalah <strong>pilihan sadar untuk tidak menyerah.</strong></p><p>Setiap detik, ia bertaruh pada kemungkinan bahwa ia masih bisa menjadi seseorang yang tidak hanya baik, tapi berarti.</p>" }
        ]
    },
    loading: {
        init: "MENGINISIALISASI_PROTOKOL"
    }
} satisfies Dictionary;
