"use client";

import { useState } from "react";
import { Check, ClipboardList, Printer, MapPin, Info, HelpCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import styles from "./Checklist.module.css";

interface ChecklistItem {
  id: string;
  text: string;
  category: "id" | "doc" | "signing";
}

export default function Checklist() {
  const [items] = useState<ChecklistItem[]>([
    { id: "id_1", text: "Primary Government-issued Photo ID (e.g. Passport, Ontario Driver\u2019s License, PR Card)", category: "id" },
    { id: "id_2", text: "Secondary ID showing your full legal name (e.g. Credit Card, Health Card, Birth Certificate)", category: "id" },
    { id: "doc_1", text: "The complete unsigned document (pages must not be missing, even if they don\u2019t require signatures)", category: "doc" },
    { id: "doc_2", text: "Any supporting document instructions or cover letters sent by authorities", category: "doc" },
    { id: "sign_1", text: "Do NOT sign the document before coming \u2014 the signature must be witnessed in person by the lawyer", category: "signing" },
    { id: "sign_2", text: "All parties listed as signatories must attend in person with their respective identification", category: "signing" },
  ]);

  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const toggleCheck = (id: string) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((x) => x !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <ScrollReveal>
      <div id="notary-checklist" className="section">
        <div className="container">
          {/* Print Header */}
          <div className={styles.printHeader}>
            <h2 className={styles.printHeaderTitle}>Suman Ahuja Law Office — Notary Checklist</h2>
            <p className={styles.printHeaderSub}>25 Watline Ave, Suite GR-09, Mississauga | 905-507-4100</p>
          </div>

          <div className={styles.wrapper}>
            {/* Left: Checklist Card */}
            <div className={styles.checklistCard}>
              <h3 className={styles.title}>
                <ClipboardList size={22} /> Notary Prep Checklist
              </h3>
              <p className={styles.description}>
                To ensure a seamless, legally valid notarization and avoid repeated visits, complete these checklist items before arriving at our Mississauga office:
              </p>

              <div className={styles.list}>
                {items.map((item) => {
                  const isChecked = checkedIds.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      id={`checklist-item-${item.id}`}
                      onClick={() => toggleCheck(item.id)}
                      className={styles.item}
                    >
                      <div className={`${styles.checkbox} ${isChecked ? styles.checkboxChecked : ""}`}>
                        {isChecked && <Check size={14} />}
                      </div>
                      <span className={`${styles.itemText} ${isChecked ? styles.itemTextChecked : ""}`}>
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className={styles.actions}>
                <button
                  id="checklist-print"
                  onClick={handlePrint}
                  className="btn btn-outline"
                >
                  <Printer size={16} /> Print Checklist
                </button>
                <a
                  id="checklist-directions"
                  href="#contact"
                  className="btn btn-primary"
                >
                  <MapPin size={16} /> Get Directions
                </a>
              </div>
            </div>

            {/* Right: Info Cards */}
            <div className={styles.infoColumn}>
              <div className={styles.infoCard}>
                <h4 className={styles.infoCardTitle}>
                  <Info size={18} /> What is a Certified True Copy?
                </h4>
                <p className={styles.infoCardBody}>
                  A certified true copy is a photocopy of a primary document (like a birth certificate, degree, passport, or utility bill) that a Notary Public certifies to be a precise, unaltered copy of the original. <strong>You must bring the original physical document</strong> for us to certify it. We cannot certify photocopies without viewing the original.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h4 className={styles.infoCardTitle}>
                  <HelpCircle size={18} /> Do I Need an Appointment?
                </h4>
                <p className={styles.infoCardBody}>
                  No! For simple notarizations, commissioner signatures, and true copies, we welcome <strong>walk-ins</strong> from Monday to Friday, 9:00 AM to 6:00 PM. No prior appointment is required. For after-hours or Saturday services, please call us to schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
