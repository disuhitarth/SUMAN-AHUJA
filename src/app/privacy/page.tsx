import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import WhatsAppButton from "../components/WhatsAppButton";
import styles from "./privacy.module.css";

export const metadata = {
  title: "Privacy Policy | Suman Ahuja Law Office",
  description: "Privacy policy and client data intake protection compliance guidelines for Suman Umesh Ahuja Professional Corporation.",
};

export default function PrivacyPolicy() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Dynamic top announcement status bar */}
      <AnnouncementBar />

      {/* Sticky glassmorphism navigation */}
      <Navbar />

      <main className={styles.container} id="privacy-content">
        <header className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <div className={styles.lastUpdated}>Last Updated: May 28, 2026</div>
        </header>

        <section className={styles.section}>
          <p className={styles.text}>
            At Suman Umesh Ahuja Professional Corporation (operating as Suman Ahuja Law Office), we are committed to maintaining the confidentiality, security, and accuracy of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard personal information in the course of providing legal services, operating our website, and communicating with the public.
          </p>
          <p className={styles.text}>
            Our professional standards are guided by the <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and the strict regulations, rules, and guidelines set forth by the <strong>Law Society of Ontario (LSO)</strong> regarding lawyer-client confidentiality and privilege.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
          <p className={styles.text}>
            To represent you effectively in residential real estate transactions, estate planning, and notary matters, we collect personal information that you provide to us directly. This includes:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>Contact Information:</strong> Full legal name, mailing address, primary telephone number, fax number, and email address.</li>
            <li className={styles.listItem}><strong>Identification Documents:</strong> Government-issued photo identification (such as driver's licenses, passports, and permanent resident cards) to verify identity in compliance with LSO Know-Your-Client (KYC) requirements.</li>
            <li className={styles.listItem}><strong>Transaction Information:</strong> Purchase/sale agreements, title search data, mortgage numbers, financial records, bank draft details, and related transfer information.</li>
            <li className={styles.listItem}><strong>Estate Details:</strong> Information regarding assets, family relationships, designated guardians, beneficiaries, and power of attorney preferences.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
          <p className={styles.text}>
            We use the collected personal information strictly to fulfill our professional duties and offer customized legal services, including:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Determining conflict-of-interest eligibility before accepting retainers.</li>
            <li className={styles.listItem}>Drafting, processing, and submitting legal documentation to banks, lenders, municipal offices, and the Ontario Land Registry.</li>
            <li className={styles.listItem}>Verifying identities for notary public declarations and statutory oaths.</li>
            <li className={styles.listItem}>Responding to inquiries received through our Secure Legal Intake forms or direct telephone lines.</li>
            <li className={styles.listItem}>Managing and updating client accounts, billing, and trust accounts.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Secure Intake & Information Protection</h2>
          <p className={styles.text}>
            We employ physical, administrative, and technical safeguards designed to protect your personal information against unauthorized access, loss, theft, disclosure, or modification. 
          </p>
          <p className={styles.text}>
            Please note that while our online Secure Legal Intake Form is designed with transport-level encryption (HTTPS), submitting information through this website or by email does <strong>not</strong> establish a formal lawyer-client relationship. Absolute confidentiality under lawyer-client privilege is legally established only upon formal retainer verification and mutual execution of a written Retainer Agreement.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Disclosure of Personal Information</h2>
          <p className={styles.text}>
            We do not sell, rent, license, or trade client list databases or personal details. We disclose personal information to third parties only under the following limited conditions:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>When necessary to complete your real estate transaction (e.g., to title insurance companies, land transfer offices, or institutional lenders).</li>
            <li className={styles.listItem}>When authorized or instructed by you to share information with your real estate agent, mortgage broker, or family accountant.</li>
            <li className={styles.listItem}>When required or permitted by law, court orders, or regulations of the Law Society of Ontario.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Contact & Access Requests</h2>
          <p className={styles.text}>
            You have the right to access, verify, and request corrections to your personal information in our possession. If you have questions about our privacy policies, data collection, or wish to update your details, please contact Suman Umesh Ahuja:
          </p>
          <p className={styles.text}>
            <strong>Suman Umesh Ahuja Professional Corporation</strong><br />
            25 Watline Avenue, Suite GR-09<br />
            Mississauga, ON L4Z 2Z1<br />
            Phone: 905-507-4100<br />
            Email: lawyers@ahujalaw.com
          </p>
        </section>

        <div className={styles.backWrapper}>
          <Link href="/" className={`btn btn-outline ${styles.backBtn}`} id="privacy-back-home">
            <ArrowLeft size={16} />
            Back to Office Home
          </Link>
        </div>
      </main>

      {/* Branded footer with regulatory disclaimer */}
      <Footer />

      {/* Circular back-to-top scroll button */}
      <BackToTop />

      {/* WhatsApp floating button with pulse animation */}
      <WhatsAppButton />
    </div>
  );
}
