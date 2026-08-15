import "../styles/footer.css";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">🔥</span>
              <span>Pijar</span>
            </div>
            <p className="footer-brand-desc">
              Solusi pengelolaan sampah modern dengan teknologi incinerator yang
              aman, efisien, dan ramah lingkungan.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Navigasi</h4>
            <button className="footer-col-link" onClick={() => scrollTo("hero")}>
              Beranda
            </button>
            <button
              className="footer-col-link"
              onClick={() => scrollTo("flipbook")}
            >
              Panduan
            </button>
            <button
              className="footer-col-link"
              onClick={() => scrollTo("poster-section")}
            >
              Poster & Infografis
            </button>
            <button className="footer-col-link" onClick={() => scrollTo("rab")}>
              RAB
            </button>
            <button
              className="footer-col-link"
              onClick={() => scrollTo("waste-info")}
            >
              Info Sampah
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2026 IncinPro. Hak cipta dilindungi undang-undang.
          </span>
        </div>
      </div>
    </footer>
  );
}
