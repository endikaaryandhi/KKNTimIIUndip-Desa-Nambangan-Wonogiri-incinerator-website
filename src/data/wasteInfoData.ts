export interface WasteType {
  id: number;
  nama: string;
  icon: string;
  deskripsi: string;
  contoh: string[];
  bisa: boolean;
}

export const wasteTypes: WasteType[] = [
  {
    id: 1,
    nama: "Sampah Anorganik Dapat Dibakar",
    icon: "📦",
    deskripsi: "Bahan kertas, kayu, dan daun kering yang mudah terbakar jika dalam kondisi kering.",
    contoh: ["Kertas", "Kardus", "Tisu", "Kayu kering", "Daun kering"],
    bisa: true,
  },
  {
    id: 2,
    nama: "Sampah Organik Basah",
    icon: "🍃",
    deskripsi: "Sisa makanan dan daun basah berkadar air tinggi. Lebih baik dimanfaatkan sebagai kompos daripada dibakar.",
    contoh: ["Sisa makanan", "Sayuran", "Buah", "Daun basah", "Ranting basah"],
    bisa: false,
  },
  {
    id: 3,
    nama: "Sampah Anorganik Tidak Dapat Dibakar",
    icon: "🧴",
    deskripsi: "Plastik, karet, dan bahan sintetis yang menghasilkan asap hitam pekat dan racun jika dibakar suhu rendah.",
    contoh: ["Plastik", "Karet", "Bahan sintetis", "Popok/pembalut"],
    bisa: false,
  },
  {
    id: 4,
    nama: "Bahan Berbahaya & Padat (Dilarang)",
    icon: "⚠️",
    deskripsi: "Bahan yang tidak dapat terbakar, merusak incinerator, menimbulkan ledakan, atau emisi berbahaya.",
    contoh: ["Baterai", "Lampu", "Kaleng aerosol", "Kaca", "Logam", "Limbah medis", "E-waste"],
    bisa: false,
  },
];

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Pastikan Incinerator Kering",
    description: "Incinerator harus kering agar pembakaran berlangsung efektif. Jangan gunakan jika bagian dalam basah.",
    icon: "☀️",
  },
  {
    id: 2,
    title: "Pilah Sampah Terlebih Dahulu",
    description: "Pisahkan sampah organik dari sampah anorganik yang mudah terbakar. Organik dijadikan kompos.",
    icon: "📦",
  },
  {
    id: 3,
    title: "Pastikan Sampah Kering",
    description: "Sampah basah membuat pembakaran tidak sempurna dan menghasilkan asap berlebih.",
    icon: "💨",
  },
  {
    id: 4,
    title: "Siapkan Sumbu Pembakaran",
    description: "Siapkan bahan pemantik/sumbu di bagian bawah dekat saluran udara.",
    icon: "🔥",
  },
  {
    id: 5,
    title: "Masukkan Sampah Secukupnya",
    description: "Masukkan melalui mulut incinerator secukupnya agar sirkulasi udara tetap optimal.",
    icon: "🚪",
  },
  {
    id: 6,
    title: "Nyalakan dan Awasi",
    description: "Nyalakan sumbu, lalu tutup bagian mulut dan belakang agar asap terarah keluar dari cerobong.",
    icon: "👁️",
  },
  {
    id: 7,
    title: "Bersihkan Sisa Abu",
    description: "Biarkan abu mendingin sebelum dibersihkan. Tutup cerobong jika tidak digunakan kembali.",
    icon: "🧹",
  },
];

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export const statistics: StatItem[] = [
  {
    label: "Kebutuhan Bata Ringan",
    value: 55,
    suffix: " buah",
    icon: "🧱",
  },
  {
    label: "Besi Beton Penyangga",
    value: 5,
    suffix: " batang",
    icon: "🔩",
  },
  {
    label: "Ketebalan Dinding Bata",
    value: 10,
    suffix: " cm",
    icon: "📏",
  },
  {
    label: "Langkah Pembakaran",
    value: 8,
    suffix: " tahapan",
    icon: "📋",
  },
];

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Mengapa hebel dipilih dibanding drum besi?",
    answer:
      "Bata ringan (hebel) jauh lebih tahan panas dan tahan karat dibandingkan dengan drum besi biasa yang mudah berkarat dan keropos akibat paparan api secara terus-menerus.",
  },
  {
    id: 2,
    question: "Apakah abu incinerator ini bisa langsung digunakan?",
    answer:
      "Ya, sisa abu pembakaran dari sampah organik kering tertentu dapat dimanfaatkan secara alami sebagai alternatif pestisida nabati untuk tanaman.",
  },
  {
    id: 3,
    question: "Mengapa dilarang keras membakar sampah plastik?",
    answer:
      "Pembakaran plastik pada suhu rendah di incinerator sederhana akan menghasilkan senyawa kimia berbahaya seperti dioksin dan furan, serta menimbulkan asap hitam pekat yang merusak pernapasan.",
  },
  {
    id: 4,
    question: "Bagaimana cara merawat incinerator saat musim hujan?",
    answer:
      "Cukup tutup lubang cerobong asap dan mulut incinerator menggunakan terpal atau sisa bata ringan agar ruang bakar di dalamnya tetap kering dan tidak lembap.",
  },
];
