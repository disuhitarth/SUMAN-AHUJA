"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import styles from "./FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do I need an appointment for Notary services?",
    answer:
      "No. Walk into our office at Suite GR-09, 25 Watline Avenue during regular hours (Mon-Fri 9-6 PM). No appointment required for standard notarizations, certified copies, and commissioner services. For Saturday or after-hours, please call to schedule.",
  },
  {
    question: "What are disbursements in a real estate transaction?",
    answer:
      "Disbursements are third-party costs paid on your behalf: Ontario land registry fees ($82.86/document), software charges, tax certificates, and Title Insurance premiums. We charge these at actual cost with no markups.",
  },
  {
    question: "Can you assist with documents in Hindi?",
    answer:
      "Yes. Suman is fluent in Hindi and routinely processes visa invitations, foreign credentials, powers of attorney for India, and travel consent documents for South Asian clients.",
  },
  {
    question: "What is Title Insurance?",
    answer:
      "Title Insurance protects against property losses from title defects, boundary disputes, or municipal work orders. While not legally mandated, virtually all Canadian lenders require it. We strongly recommend it to safeguard your investment.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-alt">
      <div className="container">
        <ScrollReveal>
          <div className={styles.wrapper}>
            <div className="section-header">
              <span className="section-tag">Common Questions</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>

            <div className={styles.list}>
              {faqData.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div key={index} className={styles.item}>
                    <button
                      id={`faq-question-${index}`}
                      className={styles.question}
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                      />
                    </button>
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className={`${styles.answerWrapper} ${isOpen ? styles.answerWrapperOpen : ""}`}
                    >
                      <div className={styles.answer}>{faq.answer}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
