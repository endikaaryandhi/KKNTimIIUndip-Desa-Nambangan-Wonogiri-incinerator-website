import { useState } from "react";
import ViewerFrame from "./ViewerFrame";
import "../styles/flipbook.css";

export default function Flipbook() {
  const [activeTab, setActiveTab] = useState<"fliphtml" | "pdf">("fliphtml");

  return (
    <section className="flipbook-section section" id="flipbook">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">📖 Panduan</span>
          <h2 className="section-title">Panduan Penggunaan Incinerator</h2>
          <p className="section-subtitle">
            Pelajari cara mengoperasikan incinerator dengan aman dan efisien melalui buku panduan digital kami.
          </p>
        </div>

        <ViewerFrame
          title={activeTab === "fliphtml" ? "Buku Panduan Digital (Flipbook)" : "Panduan_Penggunaan_Incinerator.pdf"}
          icon={activeTab === "fliphtml" ? "📖" : "📄"}
          badge={activeTab === "fliphtml" ? "Interactive" : "PDF"}
          noPadding
          statusLeft={activeTab === "fliphtml" ? "FlipHTML5 Book Reader" : "Adobe PDF Reader"}
          statusRight={activeTab === "fliphtml" ? "online.fliphtml5.com" : "Download Available"}
        >
          {/* Tabs */}
          <div className="viewer-tabs">
            <button
              className={`viewer-tab ${activeTab === "fliphtml" ? "active" : ""}`}
              onClick={() => setActiveTab("fliphtml")}
              aria-label="Tampilkan Buku Interaktif"
            >
              <span className="viewer-tab-icon">📖</span>
              <span>Buku Interaktif (FlipHTML5)</span>
            </button>
            <button
              className={`viewer-tab ${activeTab === "pdf" ? "active" : ""}`}
              onClick={() => setActiveTab("pdf")}
              aria-label="Tampilkan Dokumen PDF"
            >
              <span className="viewer-tab-icon">📄</span>
              <span>Dokumen PDF (Viewer)</span>
            </button>
          </div>

          {/* Content */}
          <div className="viewer-tab-content">
            {activeTab === "fliphtml" ? (
              <div className="iframe-container">
                <iframe
                  src="https://online.fliphtml5.com/bgrui/insen-fix/"
                  className="viewer-iframe"
                  allowFullScreen
                  title="FlipHTML5 Booklet"
                  loading="lazy"
                />
                <div className="iframe-actions">
                  <a
                    href="https://online.fliphtml5.com/bgrui/insen-fix/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="viewer-btn-primary"
                  >
                    <span>↗️</span> Buka Buku di Tab Baru
                  </a>
                  <p className="viewer-hint">
                    Gunakan penampil interaktif di atas untuk membalik halaman panduan secara digital.
                  </p>
                </div>
              </div>
            ) : (
              <div className="iframe-container">
                <iframe
                  src="/Panduan_Penggunaan_Incinerator.pdf"
                  className="viewer-iframe"
                  title="PDF Document"
                  loading="lazy"
                />
                <div className="iframe-actions">
                  <a
                    href="/Panduan_Penggunaan_Incinerator.pdf"
                    download
                    className="viewer-btn-primary"
                  >
                    <span>📥</span> Unduh Dokumen PDF
                  </a>
                  <p className="viewer-hint">
                    Catatan: Jika dokumen PDF tidak tampil, pastikan file <code>Panduan_Penggunaan_Incinerator.pdf</code> telah diunggah ke folder <code>public/</code>.
                  </p>
                </div>
              </div>
            )}
          </div>
        </ViewerFrame>
      </div>
    </section>
  );
}
