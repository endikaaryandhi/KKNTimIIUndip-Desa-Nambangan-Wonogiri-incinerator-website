import { useState, useEffect, useRef } from "react";
import {
  wasteTypes,
  processSteps,
  statistics,
  faqItems,
} from "../data/wasteInfoData";
import ViewerFrame from "./ViewerFrame";
import "../styles/wasteinfo.css";

function AnimatedStat({
  value,
  suffix,
  icon,
  label,
}: {
  value: number;
  suffix: string;
  icon: string;
  label: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            const duration = 1500;
            const steps = 50;
            const interval = duration / steps;
            let step = 0;

            const timer = setInterval(() => {
              step++;
              const progress = step / steps;
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplayValue(Math.round(value * eased));

              if (step >= steps) {
                clearInterval(timer);
                setDisplayValue(value);
              }
            }, interval);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="viewer-waste-stat" ref={ref}>
      <div className="viewer-waste-stat-icon">{icon}</div>
      <div className="viewer-waste-stat-value">
        {displayValue}
        {suffix}
      </div>
      <div className="viewer-waste-stat-label">{label}</div>
    </div>
  );
}

function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <>
      <h3 className="viewer-faq-title">❓ Pertanyaan Umum (FAQ)</h3>
      <div className="viewer-faq-list">
        {faqItems.map((item) => (
          <div className="viewer-faq-item" key={item.id}>
            <button
              className="viewer-faq-q"
              onClick={() =>
                setOpenId(openId === item.id ? null : item.id)
              }
            >
              <span>{item.question}</span>
              <span
                className={`viewer-faq-chevron ${openId === item.id ? "open" : ""}`}
              >
                ▼
              </span>
            </button>
            <div
              className={`viewer-faq-a ${openId === item.id ? "open" : ""}`}
            >
              <div className="viewer-faq-a-inner">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function WasteInfo() {
  return (
    <section className="waste-section section" id="waste-info">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">♻️ Informasi</span>
          <h2 className="section-title">Pengolahan Sampah</h2>
          <p className="section-subtitle">
            Pahami proses pengolahan sampah dengan incinerator dan jenis sampah
            yang dapat diolah.
          </p>
        </div>

        <ViewerFrame
          title="Info_Pengolahan_Sampah.docx"
          icon="📝"
          badge="Dokumen"
          statusLeft={`${processSteps.length} proses · ${wasteTypes.length} jenis sampah · ${faqItems.length} FAQ`}
          statusRight="IncinPro v1.0"
        >
          {/* Stats */}
          <div className="viewer-waste-stats">
            {statistics.map((stat) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                icon={stat.icon}
                label={stat.label}
              />
            ))}
          </div>

          {/* Process */}
          <h3 className="viewer-waste-process-title">
            🔄 Alur Proses Pengolahan Sampah
          </h3>
          <div className="viewer-waste-process-steps">
            {processSteps.map((step) => (
              <div className="viewer-waste-step" key={step.id}>
                <div className="viewer-waste-step-icon">{step.icon}</div>
                <div className="viewer-waste-step-body">
                  <div className="viewer-waste-step-num">
                    Langkah {step.id}
                  </div>
                  <div className="viewer-waste-step-title">{step.title}</div>
                  <div className="viewer-waste-step-desc">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Waste Types */}
          <h3 className="viewer-waste-types-title">
            🗂️ Jenis Sampah & Kesesuaian
          </h3>
          <div className="viewer-waste-types-grid">
            {wasteTypes.map((type) => (
              <div className="viewer-waste-type" key={type.id}>
                <div className="viewer-waste-type-top">
                  <span className="viewer-waste-type-name">
                    <span>{type.icon}</span>
                    <span>{type.nama}</span>
                  </span>
                  <span
                    className={`viewer-waste-type-badge ${type.bisa ? "yes" : "no"}`}
                  >
                    {type.bisa ? "✓ Bisa" : "✗ Tidak"}
                  </span>
                </div>
                <div className="viewer-waste-type-desc">{type.deskripsi}</div>
                <div className="viewer-waste-type-tags">
                  {type.contoh.map((c) => (
                    <span className="viewer-waste-type-tag" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <FAQSection />
        </ViewerFrame>
      </div>
    </section>
  );
}
