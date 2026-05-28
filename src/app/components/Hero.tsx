"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowRight, Star } from "lucide-react";
import styles from "./Hero.module.css";

/* ── Animated Counter ──────────────────────────────────── */
function CountUp({
  target,
  duration = 1500,
  suffix = "",
  start,
}: {
  target: number;
  duration?: number;
  suffix?: string;
  start: boolean;
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      /* ease-out cubic */
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target, duration]);

  const formatted = value >= 1000 ? value.toLocaleString() : String(value);

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

/* ── Hero Component ────────────────────────────────────── */
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [counterStarted, setCounterStarted] = useState(false);
  const trustBarRef = useRef<HTMLDivElement>(null);

  /* Trigger fade-in on mount */
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  /* Trigger counters when trust bar enters viewport */
  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0]?.isIntersecting) {
        setCounterStarted(true);
      }
    },
    []
  );

  useEffect(() => {
    const el = trustBarRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setCounterStarted(true);
      return;
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [observerCallback]);

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        {/* ── Main Content ────────────────────────────── */}
        <div
          className={`${styles.content} ${mounted ? styles.contentVisible : ""}`}
        >
          <span className={styles.tag}>
            Mississauga Real Estate &amp; Notary Law
          </span>

          <h1 className={styles.heading}>
            Trusted Legal Counsel for Life&rsquo;s Biggest Decisions
          </h1>

          <p className={styles.subtitle}>
            Flat-fee residential closings, walk-in notary services, and estate
            planning. Serving Mississauga families with transparency and care
            since 2004.
          </p>

          {/* CTAs */}
          <div className={styles.ctaRow}>
            <a
              id="hero-cta-consult"
              href="#contact"
              className="btn btn-primary btn-lg"
            >
              Book a Consultation
              <ArrowRight size={16} />
            </a>
            <a
              id="hero-cta-services"
              href="#services"
              className="btn btn-outline btn-lg"
            >
              Explore Services
            </a>
          </div>

          {/* Google Reviews Badge */}
          <a
            id="hero-google-badge"
            href="https://g.page/r/CQExample/review"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.badge}
            aria-label="4.8 rating on Google Reviews"
          >
            <Star size={14} fill="currentColor" className={styles.badgeStar} />
            <span className={styles.badgeRating}>4.8 Rating</span>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>Google Reviews</span>
          </a>
        </div>

        {/* ── Trust Bar ──────────────────────────────── */}
        <div ref={trustBarRef} className={styles.trustBar}>
          <div className={styles.trustItem}>
            <span className={styles.trustNumber} aria-label="22+ years">
              <CountUp target={22} start={counterStarted} suffix="+" />
            </span>
            <span className={styles.trustLabel}>Years Ontario Practice</span>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.trustNumber} aria-label="2,500+ closings">
              <CountUp target={2500} start={counterStarted} suffix="+" />
            </span>
            <span className={styles.trustLabel}>Closings Handled</span>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>Walk-in</span>
            <span className={styles.trustLabel}>Notary Welcome</span>
          </div>
        </div>
      </div>
    </section>
  );
}
