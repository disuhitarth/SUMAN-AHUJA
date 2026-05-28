"use client";

import Link from "next/link";
import { Scale, ArrowRight, Phone } from "lucide-react";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container} id="not-found-page">
      <div className={styles.iconWrapper}>
        <Scale size={32} />
      </div>

      <h1 className={styles.title}>Matter Not Found</h1>

      <p className={styles.description}>
        The page you are looking for does not exist, has been archived, or has
        been relocated. If you require immediate legal counsel or notary public
        services, please contact our Mississauga office.
      </p>

      <div className={styles.actions}>
        <Link
          href="/"
          className={`btn btn-primary btn-lg ${styles.homeBtn}`}
          id="not-found-home"
        >
          Return to Office Home
          <ArrowRight size={16} />
        </Link>
        <a
          href="tel:905-507-4100"
          className={`btn btn-outline btn-lg ${styles.callBtn}`}
          id="not-found-phone"
        >
          <Phone size={15} />
          <span>905-507-4100</span>
        </a>
      </div>

      <div className={styles.footerText}>
        Suman Umesh Ahuja Professional Corporation
      </div>
    </div>
  );
}
