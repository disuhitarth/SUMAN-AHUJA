"use client";

import { Key, FileSignature, FileText, Check, Briefcase, Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import styles from "./Services.module.css";

const SERVICES = [
  {
    id: "service-real-estate",
    icon: Key,
    title: "Real Estate Law",
    desc: "Comprehensive residential transaction support — from offer review through closing day. We protect your interests at every step.",
    features: [
      "Flat-fee closings",
      "Title insurance setup",
      "Free pre-signing consult",
    ],
    pricing: "From $995 + disbursements",
  },
  {
    id: "service-commercial",
    icon: Briefcase,
    title: "Business & Commercial Closings",
    desc: "Professional representation for commercial purchases, sales, lease agreements, and business assets transfer.",
    features: [
      "Commercial purchase & sale",
      "Lease agreement reviews",
      "Business assets transfer",
    ],
    pricing: "Quote upon request",
  },
  {
    id: "service-corporate",
    icon: Building2,
    title: "Corporate Law",
    desc: "Incorporation services, annual returns, minute book maintenance, amalgamations, corporate searches, and structural filings.",
    features: [
      "Federal & provincial inc.",
      "Minute book updates",
      "Corporate structural filings",
    ],
    pricing: "Custom packages",
  },
  {
    id: "service-notary",
    icon: FileSignature,
    title: "Notary & Commissioner",
    desc: "Fast, affordable document authentication and commissioning. No appointment needed — walk in during business hours.",
    features: [
      "Walk-in welcome",
      "Certified true copies",
      "Volume discounts",
    ],
    pricing: "From $30",
  },
  {
    id: "service-wills",
    icon: FileText,
    title: "Wills & Estate Planning",
    desc: "Protect your family and asset with professional drafted estate documents including secondary wills.",
    features: [
      "Primary & Secondary wills",
      "Powers of Attorney",
      "Secure vault storage",
    ],
    pricing: "Custom packages",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Practice Areas</span>
          <h2 className="section-title">Focused Legal Services</h2>
          <p className="section-desc">
            Clear pricing. Proven expertise. Every matter handled with
            diligence.
          </p>
        </div>

        {/* Card Grid Carousel - Wrapped as a single reveal unit */}
        <ScrollReveal>
          <div className={styles.grid}>
            {SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className={styles.cardWrapper}
              >
                <div className={styles.card}>
                  <div className={styles.iconWrap}>
                    <service.icon size={18} />
                  </div>

                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>

                  <ul className={styles.features}>
                    {service.features.map((feat) => (
                      <li key={feat} className={styles.featureItem}>
                        <Check size={14} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.pricing}>{service.pricing}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
