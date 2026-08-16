import { useState } from "react";
import {
  wasteTypes,
  processSteps,
  faqItems,
} from "../data/wasteInfoData";
import ViewerFrame from "./ViewerFrame";
import "../styles/wasteinfo.css";

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
