export interface RABItem {
  id: number;
  kategori: string;
  item: string;
  satuan: string;
  volume: number;
  hargaSatuan: number;
  keterangan?: string;
}

export interface RABCategory {
  nama: string;
  icon: string;
  items: RABItem[];
}

export const rabCategories: RABCategory[] = [
  {
    nama: "Belanja Material",
    icon: "🧱",
    items: [
      {
        id: 1,
        kategori: "Belanja Material",
        item: "Bata Ringan (Hebel)",
        satuan: "Pcs",
        volume: 60,
        hargaSatuan: 9285,
        keterangan: "TB. SumberHarapan",
      },
      {
        id: 2,
        kategori: "Belanja Material",
        item: "Semen Mortar (Modacon)",
        satuan: "Sak",
        volume: 1,
        hargaSatuan: 131000,
        keterangan: "TB. SumberHarapan",
      },
      {
        id: 3,
        kategori: "Belanja Material",
        item: "Pipa Besi Solid (D8)",
        satuan: "Meter",
        volume: 5,
        hargaSatuan: 4583,
        keterangan: "TB. Maeso Jenar",
      },
      {
        id: 4,
        kategori: "Belanja Material",
        item: "Gergaji Hebel",
        satuan: "Pcs",
        volume: 1,
        hargaSatuan: 35000,
        keterangan: "TB. Maeso Jenar",
      },
      {
        id: 5,
        kategori: "Belanja Material",
        item: "Kuas cat",
        satuan: "Pcs",
        volume: 2,
        hargaSatuan: 35000,
        keterangan: "TB. SumberHarapan",
      },
      {
        id: 6,
        kategori: "Belanja Material",
        item: "Plakat Prasasti (20x30 cm)",
        satuan: "Pcs",
        volume: 1,
        hargaSatuan: 130000,
        keterangan: "Damar Art Selopadi",
      },
    ],
  },
  {
    nama: "Belanja Jasa",
    icon: "👷",
    items: [
      {
        id: 7,
        kategori: "Belanja Jasa",
        item: "Sewa Jasa Tukang",
        satuan: "Hari",
        volume: 3,
        hargaSatuan: 100000,
        keterangan: "-",
      },
    ],
  },
];

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateCategoryTotal(category: RABCategory): number {
  return category.items.reduce(
    (sum, item) => sum + item.volume * item.hargaSatuan,
    0
  );
}

export function calculateGrandTotal(): number {
  return rabCategories.reduce(
    (sum, cat) => sum + calculateCategoryTotal(cat),
    0
  );
}
