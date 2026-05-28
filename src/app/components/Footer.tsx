"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand column */}
          <div>
            <p className={styles.brandName}>SUMAN AHUJA</p>
            <span className={styles.brandSub}>Law Office</span>
            <p className={styles.brandDesc}>
              Trusted legal counsel for real estate closings, notary services,
              and estate planning across Mississauga and the GTA since 2004.
            </p>
          </div>

          {/* Services column */}
          <div>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.links}>
              <li>
                <a href="#services" className={styles.link}>
                  Real Estate Law
                </a>
              </li>
              <li>
                <a href="#services" className={styles.link}>
                  Notary &amp; Oaths
                </a>
              </li>
              <li>
                <a href="#wills-configurator" className={styles.link}>
                  Wills &amp; POA
                </a>
              </li>
              <li>
                <a href="#services" className={styles.link}>
                  Independent Legal Advice
                </a>
              </li>
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.links}>
              <li>
                <a href="#calculators" className={styles.link}>
                  Pricing Calculator
                </a>
              </li>
              <li>
                <a href="#notary-checklist" className={styles.link}>
                  Notary Checklist
                </a>
              </li>
              <li>
                <a href="#wills-configurator" className={styles.link}>
                  Estate Planner
                </a>
              </li>
              <li>
                <a href="#faq" className={styles.link}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className={styles.colTitle}>Contact</h4>
            <p className={styles.contactText}>
              25 Watline Avenue, Suite GR-09
              <br />
              Mississauga, ON L4Z 2Z1
            </p>
            <span className={styles.contactPhone}>905-507-4100</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <strong>
            Law Society of Ontario (LSO) Mandatory Regulatory Disclaimers:
          </strong>
          <br />
          The legal content and information presented on this website are
          compiled for informational and promotional purposes only. Accessing,
          browsing, or utilizing intake forms on this website does NOT establish
          a lawyer-client relationship with Suman Umesh Ahuja Professional
          Corporation. A lawyer-client relationship is strictly established only
          upon formal retainer verification and mutual execution of a written
          Retainer Agreement. Past closing volume and credentials do not
          guarantee identical outcomes.
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span>
            &copy; {new Date().getFullYear()} Suman Umesh Ahuja Professional
            Corporation. All Rights Reserved. |{" "}
            <a href="/privacy" className={styles.link}>
              Privacy Policy
            </a>
          </span>
          <span>
            Suite GR-09, 25 Watline Avenue, Mississauga, ON L4Z 2Z1
          </span>
        </div>
      </div>
    </footer>
  );
}
