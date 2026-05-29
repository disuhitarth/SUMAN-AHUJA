"use client";

import { useEffect, useState } from "react";
import { X, Globe } from "lucide-react";
import styles from "./AnnouncementBar.module.css";

type OfficeStatus = "open" | "closed";

interface StatusInfo {
  status: OfficeStatus;
  label: string;
  nextOpen?: string;
}

function getOfficeStatus(): StatusInfo {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Toronto" })
  );
  const day = now.getDay(); // 0=Sun, 6=Sat
  const hour = now.getHours();
  const minute = now.getMinutes();
  const time = hour + minute / 60;

  // Monday–Friday: 9:00–18:00
  if (day >= 1 && day <= 5) {
    if (time >= 9 && time < 18) {
      return { status: "open", label: "Walk-in Notary Open Now" };
    }
    if (time < 9) {
      return { status: "closed", label: "Closed", nextOpen: "today at 9:00 AM" };
    }
    // After 18:00
    if (day === 5) {
      return { status: "closed", label: "Closed", nextOpen: "Monday 9:00 AM" };
    }
    return { status: "closed", label: "Closed", nextOpen: "tomorrow at 9:00 AM" };
  }

  // Saturday & Sunday: Closed
  return { status: "closed", label: "Closed", nextOpen: "Monday 9:00 AM" };
}

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [statusInfo, setStatusInfo] = useState<StatusInfo | null>(null);

  useEffect(() => {
    setStatusInfo(getOfficeStatus());
    const interval = setInterval(() => {
      setStatusInfo(getOfficeStatus());
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  if (dismissed || !statusInfo) return null;

  const dotClass =
    statusInfo.status === "open" ? styles.dotOpen : styles.dotClosed;

  return (
    <div className={styles.bar} id="announcement-bar">
      <div className={styles.inner}>
        <div className={styles.statusGroup}>
          <span className={`${styles.dot} ${dotClass}`} />
          <span className={styles.statusText}>
            {statusInfo.label}
            {statusInfo.nextOpen && (
              <span className={styles.nextOpen}>
                {" "}— Opens {statusInfo.nextOpen}
              </span>
            )}
          </span>
        </div>

        <div className={styles.right}>
          <span className={styles.lang}>
            <Globe size={12} />
            English &amp; Hindi
          </span>
          <button
            className={styles.dismiss}
            onClick={() => setDismissed(true)}
            aria-label="Dismiss announcement"
            id="announcement-dismiss"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
