"use client";

import { X, Check, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import styles from "./PricingComparison.module.css";

const TYPICAL_ITEMS = [
  "Hourly billing ($250\u2013400/hr)",
  "Unknown final cost",
  "Extra charges for calls & emails",
  "Surprise disbursement markups",
];

const OUR_ITEMS = [
  "Fixed flat fee \u2014 quoted upfront",
  "Total cost known before you sign",
  "All consultations included",
  "Disbursements at actual cost",
];

export default function PricingComparison() {
  return (
    <section id="pricing" className="section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Why Flat Fees</span>
          <h2 className="section-title">
            Transparent Pricing vs. Hourly Billing
          </h2>
        </div>

        <ScrollReveal>
          <div className={styles.grid}>
            {/* ── Typical Law Firm ──────────────────────── */}
            <div id="pricing-typical" className={styles.cardMuted}>
              <h3 className={styles.cardTitleMuted}>Typical Law Firm</h3>
              <ul className={styles.list}>
                {TYPICAL_ITEMS.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <X size={16} className={styles.iconError} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Our Firm ─────────────────────────────── */}
            <div id="pricing-ours" className={styles.cardHighlighted}>
              <span className={styles.badge}>Recommended</span>
              <h3 className={styles.cardTitleAccent}>
                Suman Ahuja Law Office
              </h3>
              <ul className={styles.list}>
                {OUR_ITEMS.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <Check size={16} className={styles.iconSuccess} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <div className={styles.cta}>
          <a
            id="pricing-cta"
            href="#contact"
            className="btn btn-primary btn-lg"
          >
            Get Your Free Quote
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
