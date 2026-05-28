"use client";

import { Key, FileSignature, FileText, Check } from "lucide-react";
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
    id: "service-notary",
    icon: FileSignature,
    title: "Notary & Commissioner",
    desc: "Fast, affordable document authentication and commissioning. No appointment needed — walk in during business hours.",
    features: [
      "Walk-in welcome",
      "Certified true copies",
      "Volume discounts",
    ],
    pricing: "From $25 / first document",
  },
  {
    id: "service-wills",
    icon: FileText,
    title: "Wills & Estate Planning",
    desc: "Protect your family and assets with professionally drafted estate documents tailored to your unique circumstances.",
    features: [
      "Personalized wills",
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

        {/* Card Grid */}
        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 100}>
              <div id={service.id} className={styles.card}>
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
