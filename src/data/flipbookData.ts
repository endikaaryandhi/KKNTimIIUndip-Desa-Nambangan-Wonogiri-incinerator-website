export interface FlipbookPage {
  id: number;
  title: string;
  subtitle: string;
  content: string[];
  icon: string;
  bgGradient: string;
}

export const flipbookPages: FlipbookPage[] = [
  {
    id: 1,
    title: "INCINERATOR Simple GuideBook",
    subtitle: "Panduan Pembuatan, Penggunaan, dan Pemilahan Sampah",
    content: [
      "Buku panduan praktis untuk pembuatan, pemilahan sampah, dan penggunaan incinerator sederhana di tingkat rumah tangga dan komunitas.",
      "Program Kontribusi KKN-R UNDIP 2026",
      "Lokasi: Desa Nambangan",
      "Guide to Construction, Waste Sorting, and Use"
    ],
    icon: "📘",
    bgGradient: "linear-gradient(135deg, hsl(215, 80%, 45%), hsl(225, 70%, 35%))",
  },
  {
    id: 2,
    title: "Apa Itu Incinerator?",
    subtitle: "What is an Incinerator?",
    content: [
      "Incinerator merupakan alat pembakaran sampah skala kecil yang dirancang untuk mengurangi volume sampah rumah tangga melalui pembakaran terkendali.",
      "Alat ini memiliki ruang bakar, saluran udara, dan cerobong untuk mendukung proses pembakaran.",
      "Mengapa Bata Ringan? Penggunaan bata ringan/hebel membuat incinerator lebih tahan lama dibandingkan bahan drum logam. Alat ini ditujukan untuk penggunaan skala rumah tangga, komunitas, maupun industri kecil.",
      "(Yahya & Ningrum, 2023)."
    ],
    icon: "🔥",
    bgGradient: "linear-gradient(135deg, hsl(24, 65%, 62%), hsl(35, 70%, 55%))",
  },
  {
    id: 3,
    title: "Persiapan Pembuatan",
    subtitle: "Preparation",
    content: [
      "1️⃣ Siapkan Alat dan Bahan: Pastikan alat dan bahan yang dibutuhkan sudah tersedia sebelum mulai membangun.",
      "2️⃣ Basahi Bata Ringan: Basahi bata ringan dengan air sebelum menggunakan lem perekat.",
      "3️⃣ Ukur Bata: Ukur bata ringan terlebih dahulu agar susunan sesuai dengan rancangan.",
      "4️⃣ Siapkan Area Kerja: Pastikan area tempat pembangunan sesuai dengan kebutuhan konstruksi."
    ],
    icon: "📋",
    bgGradient: "linear-gradient(135deg, hsl(200, 50%, 62%), hsl(210, 55%, 55%))",
  },
  {
    id: 4,
    title: "Alat & Bahan",
    subtitle: "Tools & Materials",
    content: [
      "🛠️ Alat / Tools: Sendok Semen (Trowels), Gergaji (Saw), Gerinda (Grinder), Meteran (Measuring Tape), Wadah Semen, Cangkul (Hoe), Kuas (Brush).",
      "🧱 Bahan / Materials: 55 buah HEBEL (bata ringan), 2 buah besi beton 10mm (panjang 3m), Semen Anti Panas (5 kg), Semen Mortar 1 Sak (Perekat Hebel).",
      "📝 Catatan: Basahi bata ringan sebelum direkatkan dan ukur terlebih dahulu sebelum disusun."
    ],
    icon: "🔧",
    bgGradient: "linear-gradient(135deg, hsl(30, 65%, 60%), hsl(20, 60%, 55%))",
  },
  {
    id: 5,
    title: "Tahapan Pembuatan 1",
    subtitle: "Construction Steps 1",
    content: [
      "1️⃣ Ratakan Tanah (Level the Ground): Pada permukaan tempat incinerator akan dibangun, pastikan tanah rata. Tanam 5 bata ringan tanpa lem dengan posisi tertidur berjajaran.",
      "2️⃣ Pembuatan Alas (Build the Base): Susun 5 bata ringan yang sudah dibasahi dengan posisi tertidur berjajaran menggunakan lem perekat, di atas 5 bata yang sudah ditanam ke tanah.",
      "3️⃣ Pemasangan Besi (Install the Steel Bars): Susun 4 bata ringan pada sisi kanan dan kiri. Pasang 5 besi beton pada bata yang telah ditandai."
    ],
    icon: "🧱",
    bgGradient: "linear-gradient(135deg, hsl(150, 40%, 52%), hsl(160, 45%, 48%))",
  },
  {
    id: 6,
    title: "Tahapan Pembuatan 2",
    subtitle: "Construction Steps 2",
    content: [
      "4️⃣ Menutup Input Udara (Close the Air Inlet): Susun 1 bata ringan di bagian belakang. Susun 2 bata panjang 50 cm di sisi kanan dan kiri di atas besi. Susun 2 bata posisi tertidur di bagian depan.",
      "5️⃣ Membuat Penyangga Mulut (Build the Mouth Support): Susun 1 bata di bagian belakang, 2 bata panjang 47,7 cm di sisi kanan dan kiri, lalu 2 bata segitiga kecil di depan bata segitiga besar.",
      "6️⃣ Membuat Mulut Incinerator (1) (Build the Mouth 1): Susun 2 bata yang sudah dibasahi dengan posisi tertidur berjajaran menggunakan lem di atas bata segitiga kecil dan besar."
    ],
    icon: "🧱",
    bgGradient: "linear-gradient(135deg, hsl(45, 70%, 58%), hsl(40, 65%, 52%))",
  },
  {
    id: 7,
    title: "Tahapan Pembuatan 3",
    subtitle: "Construction Steps 3",
    content: [
      "7️⃣ Membuat Mulut Incinerator (2) (Build the Mouth 2): Susun 2 bata panjang 30 cm yang sudah dibasahi secara tegak di sisi kanan dan kiri menggunakan lem.",
      "8️⃣ Membuat Mulut Incinerator (3) (Build the Mouth 3): Susun 2 bata yang sudah dibasahi dengan posisi tertidur berjajaran di atas bata panjang 30 cm. Gunakan gambar susunan bata pada tahap 7-8 agar bentuk mulut incinerator lebih mudah dipahami.",
      "9️⃣ Cerobong Asap (1) (Chimney 1): Susun bagian depan dan belakang cerobong menggunakan 3 bata posisi tegak horizontal berjajaran. Pada sisi kanan dan kiri, susun 1 bata posisi tegak vertikal."
    ],
    icon: "🧱",
    bgGradient: "linear-gradient(135deg, hsl(270, 40%, 65%), hsl(280, 38%, 58%))",
  },
  {
    id: 8,
    title: "Tahapan Pembuatan 4",
    subtitle: "Construction Steps 4",
    content: [
      "1️⃣0️⃣ Cerobong Asap (2) (Chimney 2): Susun 4 bata yang sudah dibasahi dengan posisi tegak horizontal menggunakan lem pada setiap sisi: kanan, kiri, depan, dan belakang.",
      "1️⃣1️⃣ Cerobong Asap (3) (Chimney 3): Susun kembali bagian depan dan belakang menggunakan 3 bata berjajaran. Pada sisi kanan dan kiri, susun 1 bata posisi tegak vertikal.",
      "1️⃣2️⃣ Cerobong Asap (4) (Chimney 4): Susun 1 bata panjang 40 cm di bagian belakang, 2 bata yang sudah dipotong di sisi kanan dan kiri, dan 1 bata posisi tertidur di bagian depan."
    ],
    icon: "🧱",
    bgGradient: "linear-gradient(135deg, hsl(160, 40%, 55%), hsl(175, 42%, 50%))",
  },
  {
    id: 9,
    title: "Kenali Sampahmu",
    subtitle: "Know Your Waste",
    content: [
      "Pemilahan sampah adalah tahap awal sebelum menggunakan incinerator. Pemilahan yang tepat membantu proses pembakaran lebih optimal, menghasilkan panas lebih stabil, dan mengurangi asap berlebihan.",
      "🍃 Sampah Organik (Organic Waste): Sisa makanan, sayuran, buah, daun, dan ranting kecil. Sampah ini mudah terurai dan berkadar air tinggi, sehingga lebih baik dimanfaatkan sebagai kompos daripada dibakar.",
      "📦 Sampah Anorganik Dapat Dibakar: Kertas, kardus, tisu, kayu kering, dan daun kering. Sampah ini lebih mudah terbakar jika dalam kondisi kering."
    ],
    icon: "🗑️",
    bgGradient: "linear-gradient(135deg, hsl(350, 55%, 68%), hsl(340, 50%, 60%))",
  },
  {
    id: 10,
    title: "Sampah Dilarang Dibakar",
    subtitle: "Waste That Should Not Be Burned",
    content: [
      "Tidak semua sampah cocok untuk dibakar. Pisahkan bahan-bahan berikut dari sampah yang akan dimasukkan ke incinerator:",
      "🚫 Baterai / Batteries & Lampu / Lamps",
      "🚫 Kaleng Bertekanan (Aerosol) / Aerosol Cans",
      "🚫 Kaca / Glass & Logam / Metal",
      "🚫 Sampah Elektronik & Limbah Medis / Medical Waste",
      "Ingat: Pilah sampah terlebih dahulu dan jangan mencampurkan bahan yang membutuhkan penanganan khusus."
    ],
    icon: "⚠️",
    bgGradient: "linear-gradient(135deg, hsl(0, 60%, 65%), hsl(10, 55%, 58%))",
  },
  {
    id: 11,
    title: "Cara Membakar Sampah 1",
    subtitle: "How to Use & Burn Waste 1",
    content: [
      "1️⃣ Pastikan Incinerator Kering: Incinerator harus kering agar pembakaran berlangsung efektif. Jangan gunakan jika bagian dalam basah karena hujan atau genangan air.",
      "2️⃣ Pilah Sampah Terlebih Dahulu: Pisahkan sampah organik dari sampah anorganik yang mudah terbakar. Sampah organik sebaiknya dijadikan kompos.",
      "3️⃣ Pastikan Sampah Kering: Sampah yang akan dibakar harus kering. Sampah basah membuat pembakaran tidak sempurna dan menghasilkan asap berlebihan.",
      "4️⃣ Siapkan Sumbu Pembakaran: Siapkan bahan pemantik/sumbu sesuai panduan yang digunakan."
    ],
    icon: "🔥",
    bgGradient: "linear-gradient(135deg, hsl(20, 65%, 60%), hsl(30, 60%, 55%))",
  },
  {
    id: 12,
    title: "Cara Membakar Sampah 2",
    subtitle: "How to Use & Burn Waste 2",
    content: [
      "5️⃣ Masukkan Sampah: Masukkan sampah secukupnya melalui mulut incinerator agar sirkulasi udara tetap optimal.",
      "6️⃣ Nyalakan & Awasi: Nyalakan sumbu sesuai prosedur, lalu tutup bagian mulut dan belakang agar asap keluar melalui cerobong. Awasi proses dari awal hingga selesai.",
      "7️⃣ Tunggu Abu Dingin: Setelah pembakaran selesai, biarkan abu dingin sebelum dibersihkan. Abu dari sampah organik kering tertentu dapat dimanfaatkan sebagai pestisida alami.",
      "8️⃣ Bersihkan & Tutup Kembali: Bersihkan sisa abu. Jika tidak digunakan, tutup cerobong dengan terpal atau bata ringan, terutama saat musim hujan."
    ],
    icon: "🧹",
    bgGradient: "linear-gradient(135deg, hsl(180, 45%, 55%), hsl(190, 40%, 50%))",
  },
  {
    id: 13,
    title: "Boleh & Tidak Boleh",
    subtitle: "Do's & Don'ts",
    content: [
      "✅ BOLEH / DO: Pilah sampah organik/anorganik, pastikan sampah dan incinerator kering, tutup mulut/belakang saat pembakaran, tutup cerobong saat hujan, tunggu abu dingin, manfaatkan abu.",
      "❌ TIDAK BOLEH / DON'T: Jangan bakar sampah basah/tercampur, jangan membakar saat hujan/angin kencang, jangan tinggalkan tanpa pengawasan, jangan biarkan anak-anak mendekat.",
      "🚫 JANGAN BAKAR: Baterai, lampu, aerosol, kaca, logam, e-waste, limbah medis, popok/pembalut dalam jumlah banyak, atau bahan mudah meledak."
    ],
    icon: "🛡️",
    bgGradient: "linear-gradient(135deg, hsl(140, 45%, 52%), hsl(150, 40%, 48%))",
  },
  {
    id: 14,
    title: "Pemeliharaan",
    subtitle: "Maintenance",
    content: [
      "🕒 Setelah Digunakan: Tunggu abu benar-benar dingin sebelum dibersihkan. Bersihkan sisa abu dari ruang bakar.",
      "☔ Saat Tidak Digunakan: Tutup cerobong dengan terpal atau bata ringan, terutama saat musim hujan, agar bagian dalam tetap kering.",
      "🔍 Periksa Kondisi Alat: Perhatikan kondisi bata, perekat, bagian mulut, dan cerobong sebelum digunakan kembali."
    ],
    icon: "🔧",
    bgGradient: "linear-gradient(135deg, hsl(220, 50%, 65%), hsl(230, 45%, 58%))",
  },
  {
    id: 15,
    title: "Glosarium & Penutup",
    subtitle: "Glossary & Closing",
    content: [
      "📖 Glosarium: Incinerator (Alat pembakar), Bata ringan/Hebel, Cerobong asap (Chimney), Mulut incinerator (Incinerator mouth), Ruang bakar (Combustion chamber), Sumbu/pemantik (Kindling), Pemilahan sampah (Waste sorting).",
      "✉️ Demikian modul panduan ini disusun sebagai bagian dari kontribusi Program KKN-R UNDIP 2026 untuk Desa Nambangan. Semoga dapat dimanfaatkan dengan baik untuk mendukung lingkungan desa yang bersih dan sehat.",
      "Referensi: Yahya & Ningrum (2023)."
    ],
    icon: "📖",
    bgGradient: "linear-gradient(135deg, hsl(280, 45%, 65%), hsl(290, 40%, 58%))",
  },
];
