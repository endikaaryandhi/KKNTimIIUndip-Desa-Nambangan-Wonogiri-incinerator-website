import { useMemo } from "react";
import "../styles/hero.css";

export default function Hero() {
  const particles = useMemo(() => {
    const colors = [
      "hsl(350, 60%, 82%)", // soft pink
      "hsl(45, 80%, 78%)", // soft yellow
      "hsl(150, 40%, 72%)", // soft green
      "hsl(200, 55%, 78%)", // soft blue
      "hsl(270, 40%, 80%)", // soft lavender
      "hsl(24, 70%, 78%)", // soft orange
    ];
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${8 + Math.random() * 8}s`,
      size: `${6 + Math.random() * 10}px`,
      color: colors[i % colors.length],
      opacity: 0.3 + Math.random() * 0.3,
    }));
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />

      <div className="hero-particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="hero-particle"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
              background: p.color,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            🌿 KKN TIM II UNDIP 2026 · Desa Nambangan
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">Incinerator Sederhana </span>
            <span className="hero-title-line gradient-text">
              Bata Ringan
            </span>
            <span className="hero-title-line">Desa Nambangan</span>
          </h1>

          <p className="hero-description">
            Sarana pembakaran sampah terkendali bersuhu tinggi berbasis bata hebel untuk
            mengurangi timbulan sampah rumah tangga, meminimalkan dampak asap pembakaran terbuka,
            serta menjaga kebersihan ekosistem dan sungai desa.
          </p>

          <div className="hero-actions">
            <button
              className="hero-btn hero-btn-primary"
              onClick={() => scrollTo("flipbook")}
            >
              📖 Buku Panduan
            </button>
            <button
              className="hero-btn hero-btn-secondary"
              onClick={() => scrollTo("poster-section")}
            >
              🖼️ Poster & Infografis
            </button>
            <button
              className="hero-btn hero-btn-secondary"
              onClick={() => scrollTo("rab")}
            >
              💰 Lihat RAB
            </button>
          </div>
        </div>

        <div className="hero-illustration">
          <img
            src="/images/hero.png"
            alt="Incinerator ramah lingkungan"
            width="340"
            height="340"
          />
        </div>
      </div>
    </section>
  );
}
