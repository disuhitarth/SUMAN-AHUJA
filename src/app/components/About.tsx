"use client";

import { Scale, BookOpen, Award, Users, Languages } from "lucide-react";
import styles from "./About.module.css";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <ScrollReveal>
          <div className={styles.aboutGrid}>
            <div className={styles.visual}>
              <div className={styles.credentialCard}>
                <div className={styles.accentLine}></div>
                <Scale size={48} className={styles.scaleIcon} />
                <h3 className={styles.cardName}>Suman Umesh Ahuja, Ph.D.</h3>
                <p className={styles.cardTitle}>
                  Barrister, Solicitor &amp; Notary Public
                </p>
                <p className={styles.cardSub}>
                  LSO Licensee called to the Ontario bar in 2004.
                </p>
                <div className={styles.languages}>
                  <span className={styles.langBadge}>
                    <Languages size={13} />
                    English
                  </span>
                  <span className={styles.langBadge}>
                    <Languages size={13} />
                    Hindi
                  </span>
                </div>
                <div className={styles.lawBadge}>
                  <span className={styles.badgeSub}>Licensed in Ontario</span>
                  <span className={styles.badgeText}>Since 2004</span>
                </div>
              </div>
            </div>

            <div className={styles.content}>
              <span className="section-tag">Credential Spotlight</span>
              <h2 className="section-title" style={{ textAlign: "left", margin: "0 0 1.5rem 0" }}>
                Decades of Professional Diligence
              </h2>
              
              <p className={styles.bio}>
                Suman Umesh Ahuja was admitted to the Ontario Bar in 2004 and has dedicated over 22 years to serving families, home-buyers, and the South Asian immigrant community in Mississauga.
              </p>
              <p className={styles.bio}>
                Before her Canadian call, she achieved exceptional professional milestones in India. Suman holds an LL.B. from the prestigious <strong>University of Delhi (1989)</strong>, a <strong>Ph.D. in Commerce (1995)</strong>, and was honored with the <strong>Most Qualified Woman Award in 1997</strong> as the first female Cost Accountant from North India.
              </p>
              <p className={styles.bio}>
                Her extensive dual qualification in accounting and law ensures unparalleled diligence when reviewing financial transactions, closing mortgages, or drafting complex estate planning files.
              </p>

              <div className={styles.credentialsList}>
                <div className={styles.credentialItem}>
                  <div className={styles.credentialIcon}><BookOpen size={18} /></div>
                  <div>
                    <h4 className={styles.credentialTitle}>University of Delhi</h4>
                    <p className={styles.credentialDesc}>LL.B. (1989) &amp; prior legal/chartered accounting instruction</p>
                  </div>
                </div>
                
                <div className={styles.credentialItem}>
                  <div className={styles.credentialIcon}><Award size={18} /></div>
                  <div>
                    <h4 className={styles.credentialTitle}>Ph.D. Commerce</h4>
                    <p className={styles.credentialDesc}>Highest academic research and corporate business credentials</p>
                  </div>
                </div>

                <div className={styles.credentialItem}>
                  <div className={styles.credentialIcon}><Scale size={18} /></div>
                  <div>
                    <h4 className={styles.credentialTitle}>Ontario Bar call</h4>
                    <p className={styles.credentialDesc}>Active licensee in outstanding standing since 2004</p>
                  </div>
                </div>

                <div className={styles.credentialItem}>
                  <div className={styles.credentialIcon}><Users size={18} /></div>
                  <div>
                    <h4 className={styles.credentialTitle}>Bilingual Support</h4>
                    <p className={styles.credentialDesc}>Fluent legal instruction in Hindi and English</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
