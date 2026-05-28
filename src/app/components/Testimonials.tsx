"use client";

import ScrollReveal from "./ScrollReveal";
import styles from "./Testimonials.module.css";

interface Testimonial {
  quote: string;
  name: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Suman made our first home purchase completely stress-free. Every cost was explained upfront, and there were zero surprises at closing. Highly recommend.",
    name: "Priya & Rahul M.",
    service: "Home Purchase — Brampton",
  },
  {
    quote:
      "I needed documents notarized urgently for a visa application. Walked in without an appointment and was done in 15 minutes. Professional and efficient.",
    name: "Amir K.",
    service: "Notary Services — Mississauga",
  },
  {
    quote:
      "After putting off our wills for years, Suman made the process simple and comfortable. She explained everything in Hindi, which meant so much to my parents.",
    name: "Deepa S.",
    service: "Wills & POA — Mississauga",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Client Experiences</span>
          <h2 className="section-title">Trusted by Mississauga Families</h2>
          <p className="section-desc">
            Real experiences from our real estate and notary clients.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className={styles.card} id={`testimonial-card-${i}`}>
                <p className={styles.quote}>{t.quote}</p>
                <div className={styles.divider} />
                <p className={styles.name}>{t.name}</p>
                <p className={styles.service}>{t.service}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
