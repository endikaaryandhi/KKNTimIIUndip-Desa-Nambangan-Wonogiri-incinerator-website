import { useState, useEffect, useRef } from "react";
import {
  rabCategories,
  formatRupiah,
  calculateCategoryTotal,
} from "../data/rabData";
import ViewerFrame from "./ViewerFrame";
import "../styles/rab.css";

export default function RABSection() {
  const [multiplier, setMultiplier] = useState(1);
  const [openCategories, setOpenCategories] = useState<Set<number>>(
    new Set([0, 1])
  );
  const [animatedTotals, setAnimatedTotals] = useState<Map<string, number>>(
    new Map()
  );
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  const categoryTotals = rabCategories.map(
    (cat) => calculateCategoryTotal(cat) * multiplier
  );
  const grandTotal = categoryTotals.reduce((sum, t) => sum + t, 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateCounters = () => {
    const duration = 1200;
    const steps = 40;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);

      const newTotals = new Map<string, number>();
      rabCategories.forEach((cat) => {
        const target = calculateCategoryTotal(cat) * multiplier;
        newTotals.set(cat.nama, Math.round(target * eased));
      });
      newTotals.set("grand", Math.round(grandTotal * eased));
      setAnimatedTotals(newTotals);

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);
  };

  useEffect(() => {
    if (hasAnimated.current) {
      animateCounters();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [multiplier]);

  const toggleCategory = (index: number) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const getDisplayTotal = (key: string, actual: number): string => {
    return formatRupiah(animatedTotals.get(key) ?? actual);
  };

  return (
    <section className="rab-section section" id="rab" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">💰 RAB</span>
          <h2 className="section-title">Rencana Anggaran Biaya</h2>
          <p className="section-subtitle">
            Rincian anggaran biaya pembuatan incinerator sederhana bata ringan Desa Nambangan.
          </p>
        </div>

        <ViewerFrame
          title="RAB_Incinerator_Sederhana.xlsx"
          icon="📊"
          badge="Spreadsheet"
          statusLeft={`${rabCategories.length} kategori · ${rabCategories.reduce((s, c) => s + c.items.length, 0)} item`}
          statusRight={`${multiplier} unit`}
        >
          {/* Multiplier */}
          <div className="viewer-rab-multiplier">
            <span className="viewer-rab-multiplier-label">Jumlah Unit:</span>
            <div className="viewer-rab-multiplier-controls">
              <button
                className="viewer-rab-multiplier-btn"
                onClick={() => setMultiplier(Math.max(1, multiplier - 1))}
              >
                −
              </button>
              <span className="viewer-rab-multiplier-value">{multiplier}</span>
              <button
                className="viewer-rab-multiplier-btn"
                onClick={() => setMultiplier(Math.min(10, multiplier + 1))}
              >
                +
              </button>
            </div>
            <span className="viewer-rab-multiplier-unit">unit</span>
          </div>

          {/* Summary */}
          <div className="viewer-rab-summary">
            {rabCategories.map((cat, i) => (
              <div className="viewer-rab-summary-item" key={cat.nama}>
                <div className="viewer-rab-summary-item-icon">{cat.icon}</div>
                <div className="viewer-rab-summary-item-label">{cat.nama}</div>
                <div className="viewer-rab-summary-item-value">
                  {getDisplayTotal(cat.nama, categoryTotals[i])}
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="viewer-rab-total">
            <span className="viewer-rab-total-label">
              📊 Total Estimasi ({multiplier} unit)
            </span>
            <span className="viewer-rab-total-value">
              {getDisplayTotal("grand", grandTotal)}
            </span>
          </div>

          {/* Categories */}
          {rabCategories.map((cat, catIndex) => (
            <div className="viewer-rab-category" key={cat.nama}>
              <div
                className="viewer-rab-category-header"
                onClick={() => toggleCategory(catIndex)}
              >
                <span className="viewer-rab-category-left">
                  <span>{cat.icon}</span>
                  <span>{cat.nama}</span>
                </span>
                <span className="viewer-rab-category-right">
                  <span className="viewer-rab-category-total">
                    {formatRupiah(categoryTotals[catIndex])}
                  </span>
                  <span
                    className={`viewer-rab-category-chevron ${openCategories.has(catIndex) ? "open" : ""}`}
                  >
                    ▼
                  </span>
                </span>
              </div>

              <div
                className={`viewer-rab-table-wrap ${openCategories.has(catIndex) ? "open" : ""}`}
              >
                <table className="viewer-rab-table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Uraian Penggunaan Dana</th>
                      <th className="text-right">Jumlah</th>
                      <th className="text-right">Harga Satuan</th>
                      <th>Satuan</th>
                      <th className="text-right">Total</th>
                      <th>Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.items.map((item, idx) => (
                      <tr key={item.id}>
                        <td>{idx + 1}</td>
                        <td>{item.item}</td>
                        <td className="text-right">
                          {(item.volume * multiplier).toLocaleString("id-ID")}
                        </td>
                        <td className="text-right">
                          {formatRupiah(item.hargaSatuan)}
                        </td>
                        <td>{item.satuan}</td>
                        <td className="text-right subtotal">
                          {formatRupiah(
                            item.volume * item.hargaSatuan * multiplier
                          )}
                        </td>
                        <td className="text-muted">{item.keterangan || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </ViewerFrame>
      </div>
    </section>
  );
}
