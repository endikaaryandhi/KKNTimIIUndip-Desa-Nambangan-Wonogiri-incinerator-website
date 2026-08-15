export interface RABItem {
  id: number;
  kategori: string;
  item: string;
  satuan: string;
  volume: number;
  hargaSatuan: number;
}

export interface RABCategory {
  nama: string;
  icon: string;
  items: RABItem[];
}

export const rabCategories: RABCategory[] = [
  {
    nama: "Material Konstruksi",
    icon: "🧱",
    items: [
      {
        id: 1,
        kategori: "Material Konstruksi",
        item: "Bata ringan / Hebel",
        satuan: "buah",
        volume: 55,
        hargaSatuan: 10000,
      },
      {
        id: 2,
        kategori: "Material Konstruksi",
        item: "Besi beton Ø10mm (3m)",
        satuan: "buah",
        volume: 2,
        hargaSatuan: 60000,
      },
      {
        id: 3,
        kategori: "Material Konstruksi",
        item: "Semen anti panas",
        satuan: "kg",
        volume: 5,
        hargaSatuan: 30000,
      },
      {
        id: 4,
        kategori: "Material Konstruksi",
        item: "Semen Mortar (perekat hebel)",
        satuan: "sak",
        volume: 1,
        hargaSatuan: 85000,
      },
    ],
  },
  {
    nama: "Alat Kerja",
    icon: "🔧",
    items: [
      {
        id: 5,
        kategori: "Alat Kerja",
        item: "Sendok semen (Trowel)",
        satuan: "buah",
        volume: 1,
        hargaSatuan: 25000,
      },
      {
        id: 6,
        kategori: "Alat Kerja",
        item: "Gergaji hebel",
        satuan: "buah",
        volume: 1,
        hargaSatuan: 45000,
      },
      {
        id: 7,
        kategori: "Alat Kerja",
        item: "Kuas cat (pembersih hebel)",
        satuan: "buah",
        volume: 1,
        hargaSatuan: 15000,
      },
      {
        id: 8,
        kategori: "Alat Kerja",
        item: "Ember adukan semen",
        satuan: "buah",
        volume: 1,
        hargaSatuan: 20000,
      },
    ],
  },
  {
    nama: "Tenaga Kerja & Lainnya",
    icon: "👷",
    items: [
      {
        id: 9,
        kategori: "Tenaga Kerja & Lainnya",
        item: "Jasa tukang bangunan (1 hari)",
        satuan: "orang",
        volume: 1,
        hargaSatuan: 150000,
      },
      {
        id: 10,
        kategori: "Tenaga Kerja & Lainnya",
        item: "Biaya logistik & transportasi",
        satuan: "ls",
        volume: 1,
        hargaSatuan: 50000,
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
