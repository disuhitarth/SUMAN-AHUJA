"use client";

import { useEffect, useState } from "react";
import { Phone, FileText } from "lucide-react";
import styles from "./StickyMobileCTA.module.css";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.bar} ${visible ? styles.visible : ""} no-print`}
      id="sticky-mobile-cta"
    >
      <a
        href="tel:905-507-4100"
        className={styles.callBtn}
        id="mobile-cta-call"
      >
        <Phone size={16} />
        Call Now
      </a>
      <a
        href="#contact"
        className={styles.quoteBtn}
        id="mobile-cta-quote"
      >
        <FileText size={16} />
        Free Quote
      </a>
    </div>
  );
}
