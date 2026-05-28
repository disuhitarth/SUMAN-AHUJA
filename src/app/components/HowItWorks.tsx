"use client";

import ScrollReveal from "./ScrollReveal";
import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    number: 1,
    title: "Book a Call",
    desc: "Reach us at 905-507-4100 or submit your intake form. We respond within one business hour.",
  },
  {
    number: 2,
    title: "We Handle Everything",
    desc: "From title searches to mortgage documentation, we manage every detail of your transaction.",
  },
  {
    number: 3,
    title: "Close with Confidence",
    desc: "Sign your documents knowing every detail has been reviewed. Flat fee, no surprises.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Simple Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-desc">
            From first call to signed closing — three straightforward steps.
          </p>
        </div>

        {/* Steps */}
        <ScrollReveal>
          <div className={styles.steps}>
            {STEPS.map((step) => (
              <div
                key={step.number}
                id={`step-${step.number}`}
                className={styles.step}
              >
                <div className={styles.circle} aria-hidden="true">
                  {step.number}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
