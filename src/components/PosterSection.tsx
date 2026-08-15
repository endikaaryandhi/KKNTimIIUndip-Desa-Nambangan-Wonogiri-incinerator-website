import { useState } from "react";
import ViewerFrame from "./ViewerFrame";
import "../styles/poster.css";

interface PosterItem {
  id: string;
  title: string;
  badge: string;
  icon: string;
  subtitle: string;
  pdfUrl: string;
  fileName: string;
  highlights: string[];
}

const posters: PosterItem[] = [
  {
    id: "kesehatan",
    title: "Asap Sampah Mengancam Kesehatan",
    badge: "Kesehatan & Lingkungan",
    icon: "🫁",
    subtitle: "Dampak asap pembakaran sampah terbuka pada kesehatan & solusi incinerator",
    pdfUrl: "/poster_kesehatan.pdf",
    fileName: "Poster_Bahaya_Asap_Sampah.pdf",
    highlights: [
      "Kelompok paling rentan: Anak-anak, Lansia, Ibu Hamil, & Penderita Asma",
      "Dampak kesehatan: Iritasi mata/tenggorokan, gangguan pernapasan, risiko jantung & penurunan daya tahan tubuh",
      "Solusi: Gunakan incinerator sederhana untuk pembakaran terkendali & minim asap",
      "Edukasi pemilahan: Jangan bakar sampah plastik, karet, baterai, atau bahan B3"
    ]
  },
  {
    id: "sungai",
    title: "Jangan Buang Sampah di Sungai",
    badge: "Ekologi Perairan",
    icon: "🌊",
    subtitle: "Menjaga keseimbangan ekosistem sungai & biota air dari pencemaran sampah",
    pdfUrl: "/poster_sungai.pdf",
    fileName: "Poster_Jangan_Buang_Sampah_Sungai.pdf",
    highlights: [
      "Menjaga keseimbangan ekosistem komponen biotik & abiotik perairan",
      "Dampak sampah: Menurunkan kualitas air, merusak habitat dasar sungai, & memutus rantai makanan",
      "Penurunan keanekaragaman hayati sungai akibat air kotor, berbau, & minim oksigen",
      "Solusi nyata: Buang sampah pada tempatnya dan manfaatkan incinerator desa"
    ]
  },
  {
    id: "incinerator",
    title: "Incinerator: Solusi Terarah & Legalitas",
    badge: "Landasan Hukum",
    icon: "⚖️",
    subtitle: "Landasan Hukum UU No. 18 Tahun 2008 & Kolaborasi Pengelolaan Sampah Desa",
    pdfUrl: "/poster_incinerator.pdf",
    fileName: "Poster_Incinerator_Landasan_Hukum.pdf",
    highlights: [
      "Landasan Hukum UU No. 18 Th 2008: Pasal 4, Pasal 5, Pasal 20, Pasal 21, & Pasal 28",
      "Fungsi: Mengurangi volume sampah hingga skala maksimal dengan pembakaran bersuhu tinggi",
      "Peran Mahasiswa KKN: Edukasi, sosialisasi, & penyampaian gagasan sarana pengelolaan sampah",
      "Peran Bersama: Sinergi Pemerintah Desa & Masyarakat untuk lingkungan bersih & sehat"
    ]
  }
];

export default function PosterSection() {
  const [selectedId, setSelectedId] = useState<string>("kesehatan");

  const currentPoster = posters.find((p) => p.id === selectedId) || posters[0];

  return (
    <section className="poster-section section" id="poster-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🖼️ Edukasi & Publikasi</span>
          <h2 className="section-title">Poster & Infografis Edukasi</h2>
          <p className="section-subtitle">
            Media publikasi dan edukasi program KKN untuk peningkatan kesadaran masyarakat
            mengenai kesehatan, kelestarian sungai, dan teknologi incinerator.
          </p>
        </div>

        {/* Poster Selector Tabs */}
        <div className="poster-tabs-container">
          {posters.map((poster) => (
            <button
              key={poster.id}
              className={`poster-tab-card ${selectedId === poster.id ? "active" : ""}`}
              onClick={() => setSelectedId(poster.id)}
            >
              <span className="poster-tab-icon">{poster.icon}</span>
              <div className="poster-tab-info">
                <span className="poster-tab-badge">{poster.badge}</span>
                <h4 className="poster-tab-title">{poster.title}</h4>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Poster Summary & PDF Viewer */}
        <div className="poster-main-grid">
          {/* Key Insights / Summary card */}
          <div className="poster-summary-card">
            <div className="poster-summary-header">
              <span className="poster-summary-icon">{currentPoster.icon}</span>
              <div>
                <span className="poster-summary-badge">{currentPoster.badge}</span>
                <h3 className="poster-summary-title">{currentPoster.title}</h3>
              </div>
            </div>
            <p className="poster-summary-subtitle">{currentPoster.subtitle}</p>

            <div className="poster-highlights-title">📌 Poin Utama Poster:</div>
            <ul className="poster-highlights-list">
              {currentPoster.highlights.map((point, index) => (
                <li key={index} className="poster-highlight-item">
                  <span className="highlight-bullet">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="poster-download-area">
              <a
                href={currentPoster.pdfUrl}
                download={currentPoster.fileName}
                className="poster-btn-download"
              >
                <span>📥</span> Unduh Poster ({currentPoster.fileName})
              </a>
              <a
                href={currentPoster.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="poster-btn-external"
              >
                <span>↗️</span> Buka PDF di Tab Penuh
              </a>
            </div>
            <p className="poster-note">
              💡 Dokumen PDF poster dapat ditaruh di folder <code>public/{currentPoster.fileName}</code>.
            </p>
          </div>

          {/* Embedded Viewer */}
          <div className="poster-viewer-wrapper">
            <ViewerFrame
              title={currentPoster.fileName}
              icon={currentPoster.icon}
              badge="Infografis PDF"
              noPadding
              statusLeft={currentPoster.title}
              statusRight="Adobe PDF Viewer"
            >
              <div className="poster-iframe-box">
                <iframe
                  src={currentPoster.pdfUrl}
                  className="poster-iframe"
                  title={currentPoster.title}
                  loading="lazy"
                />
              </div>
            </ViewerFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
