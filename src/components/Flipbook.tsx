import ViewerFrame from "./ViewerFrame";
import "../styles/flipbook.css";

export default function Flipbook() {
  return (
    <section className="flipbook-section section" id="flipbook">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">📖 Buku Panduan</span>
          <h2 className="section-title">Panduan Penggunaan Incinerator</h2>
          <p className="section-subtitle">
            Pelajari cara pembuatan, pengoperasian, dan pemeliharaan incinerator secara interaktif melalui modul digital berikut.
          </p>
        </div>

        <ViewerFrame
          title="Buku Panduan Digital (Flipbook)"
          icon="📖"
          badge="FlipHTML5"
          noPadding
          statusLeft="FlipHTML5 Interactive Reader"
          statusRight="online.fliphtml5.com"
        >
          <div className="viewer-flipbook-content">
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
                  <span>↗️</span> Buka Buku di Tab Baru (Layar Penuh)
                </a>
                <p className="viewer-hint">
                  Gunakan kontrol navigasi atau usap halaman untuk membaca modul panduan interaktif.
                </p>
              </div>
            </div>
          </div>
        </ViewerFrame>
      </div>
    </section>
  );
}
