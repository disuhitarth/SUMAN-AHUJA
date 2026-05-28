"use client";

import { useState } from "react";
import { Calculator as CalcIcon, Scale, Landmark, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import styles from "./Calculator.module.css";

type CalcType = "realestate" | "notary";
type REType = "purchase_mortgage" | "purchase_cash" | "sale" | "refinance";

export default function Calculator() {
  const [calcType, setCalcType] = useState<CalcType>("realestate");

  // Real Estate States
  const [reType, setReType] = useState<REType>("purchase_mortgage");
  const [propertyValue, setPropertyValue] = useState<number>(750000);

  // Notary States
  const [documentCount, setDocumentCount] = useState<number>(1);

  // Real Estate calculations
  const calculateRealEstate = () => {
    let baseFee = 995;
    let registrationDocs = 2; // Deed + Mortgage

    if (reType === "purchase_cash") {
      baseFee = 895;
      registrationDocs = 1; // Deed only
    } else if (reType === "sale") {
      baseFee = 795;
      registrationDocs = 1; // Discharge
    } else if (reType === "refinance") {
      baseFee = 750;
      registrationDocs = 2; // Discharge old + Mortgage new
    }

    // Ontario standard title registration fees: $82.86 per document
    const regFee = registrationDocs * 82.86;

    // Title Insurance estimation (Ontario rates)
    let titleInsurance = 250;
    if (propertyValue > 1000000) {
      titleInsurance = 550;
    } else if (propertyValue > 500000) {
      titleInsurance = 350;
    }

    // Standard software transaction & search fee (average)
    const searchAndSoftware = 150;

    // Taxes apply only to base fee and software/search fees
    const tax = (baseFee + searchAndSoftware) * 0.13;
    const total = baseFee + regFee + titleInsurance + searchAndSoftware + tax;

    return {
      baseFee,
      regFee,
      titleInsurance,
      disbursements: regFee + titleInsurance + searchAndSoftware,
      tax,
      total,
    };
  };

  // Notary Calculations: Progressive discount tiering
  const calculateNotary = () => {
    const firstDocPrice = 25;
    const midTiersPrice = 10;
    const bulkTiersPrice = 8;

    let total = 0;
    if (documentCount <= 1) {
      total = documentCount * firstDocPrice;
    } else if (documentCount <= 5) {
      total = firstDocPrice + (documentCount - 1) * midTiersPrice;
    } else {
      total = firstDocPrice + 4 * midTiersPrice + (documentCount - 5) * bulkTiersPrice;
    }

    const hst = total * 0.13;
    const finalTotal = total + hst;

    return {
      subtotal: total,
      hst,
      total: finalTotal,
    };
  };

  const reResult = calculateRealEstate();
  const notaryResult = calculateNotary();

  return (
    <ScrollReveal>
      <div id="calculators" className="section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Estimate Your Costs</span>
            <h2 className="section-title">Transparent Pricing Calculator</h2>
            <p className="section-desc">
              No hidden fees. Know your costs before you commit.
            </p>
          </div>

          {/* Segmented Tab Control */}
          <div className={styles.tabContainer}>
            <button
              id="calc-tab-realestate"
              onClick={() => setCalcType("realestate")}
              className={`${styles.tabBtn} ${calcType === "realestate" ? styles.tabBtnActive : ""}`}
            >
              Real Estate Closing
            </button>
            <button
              id="calc-tab-notary"
              onClick={() => setCalcType("notary")}
              className={`${styles.tabBtn} ${calcType === "notary" ? styles.tabBtnActive : ""}`}
            >
              Notary Services
            </button>
          </div>

          {calcType === "realestate" ? (
            <div className={styles.calcLayout}>
              {/* Left: Inputs */}
              <div>
                <h3 className={styles.inputsTitle}>
                  <Landmark size={22} /> Transaction Settings
                </h3>

                <div className={`form-group ${styles.formGroupTop}`}>
                  <span className="form-label">Transaction Type</span>
                  <div className={styles.typeGrid}>
                    <button
                      id="calc-type-purchase-mortgage"
                      onClick={() => setReType("purchase_mortgage")}
                      className={`btn ${styles.typeBtn} ${reType === "purchase_mortgage" ? "btn-primary" : "btn-outline"}`}
                    >
                      Purchase w/ Mortgage
                    </button>
                    <button
                      id="calc-type-purchase-cash"
                      onClick={() => setReType("purchase_cash")}
                      className={`btn ${styles.typeBtn} ${reType === "purchase_cash" ? "btn-primary" : "btn-outline"}`}
                    >
                      Cash Purchase
                    </button>
                    <button
                      id="calc-type-sale"
                      onClick={() => setReType("sale")}
                      className={`btn ${styles.typeBtn} ${reType === "sale" ? "btn-primary" : "btn-outline"}`}
                    >
                      Property Sale
                    </button>
                    <button
                      id="calc-type-refinance"
                      onClick={() => setReType("refinance")}
                      className={`btn ${styles.typeBtn} ${reType === "refinance" ? "btn-primary" : "btn-outline"}`}
                    >
                      Refinance
                    </button>
                  </div>
                </div>

                {(reType === "purchase_mortgage" || reType === "purchase_cash") && (
                  <div className={`form-group ${styles.formGroupLarge}`}>
                    <label className="form-label" htmlFor="property-value-range">
                      Estimated Property Purchase Price
                    </label>
                    <div className={styles.sliderRow}>
                      <input
                        id="property-value-range"
                        type="range"
                        min={100000}
                        max={2000000}
                        step={25000}
                        value={propertyValue}
                        onChange={(e) => setPropertyValue(Number(e.target.value))}
                        className="slider"
                      />
                      <input
                        aria-label="Property Purchase Price in Canadian Dollars"
                        type="text"
                        readOnly
                        value={`$${propertyValue.toLocaleString()}`}
                        className={styles.valueDisplay}
                      />
                    </div>
                    <p className={styles.hint}>
                      *Property value estimates the premium for Title Insurance in Ontario.
                    </p>
                  </div>
                )}

                <div className={styles.features}>
                  <div className={styles.feature}>
                    <Scale size={16} /> Fully licensed LSO professional representation.
                  </div>
                  <div className={styles.feature}>
                    <Award size={16} /> Over 22 years of experience closing Ontario properties.
                  </div>
                </div>
              </div>

              {/* Right: Summary */}
              <div className={styles.summaryCard}>
                <h4 className={styles.summaryTitle}>Cost Breakdown</h4>
                <div className={styles.summaryRow}>
                  <span>Legal Fee (Flat)</span>
                  <strong>${reResult.baseFee.toFixed(2)}</strong>
                </div>
                <div className={styles.summaryRow}>
                  <span>Title Registration Fees</span>
                  <span>${reResult.regFee.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Estimated Title Insurance</span>
                  <span>${reResult.titleInsurance.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Search &amp; Software Fees</span>
                  <span>$150.00</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Harmonized Sales Tax (13%)</span>
                  <span>${reResult.tax.toFixed(2)}</span>
                </div>
                <hr className={styles.divider} />
                <div className={styles.totalRow}>
                  <span>Estimated Total</span>
                  <span>${reResult.total.toFixed(2)}</span>
                </div>
                <a
                  id="calc-request-quote"
                  href="#contact"
                  className={`btn btn-accent ${styles.ctaBtn}`}
                >
                  Request a Formal Quote
                </a>
                <p className={styles.disclaimer}>
                  *Prices exclude land transfer tax, bank draft fees, and dynamic search variances.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.calcLayout}>
              {/* Left: Notary Inputs */}
              <div>
                <h3 className={styles.inputsTitle}>
                  <CalcIcon size={22} /> Notarization Configurator
                </h3>

                <div className={`form-group ${styles.formGroupLarge}`}>
                  <label className="form-label" htmlFor="document-count-range">
                    Number of Documents to Notarize
                  </label>
                  <div className={styles.sliderRow}>
                    <input
                      id="document-count-range"
                      type="range"
                      min={1}
                      max={20}
                      step={1}
                      value={documentCount}
                      onChange={(e) => setDocumentCount(Number(e.target.value))}
                      className="slider"
                    />
                    <input
                      aria-label="Number of documents"
                      type="text"
                      readOnly
                      value={`${documentCount} Doc${documentCount > 1 ? "s" : ""}`}
                      className={styles.valueDisplay}
                    />
                  </div>
                  <p className={styles.pricingHint}>
                    *Mississauga competitive pricing: <strong>$25.00</strong> for the first document, subsequent items tiered down as low as <strong>$8.00</strong> for bulk filings.
                  </p>
                </div>

                <div className={styles.hoursBlock}>
                  <h4 className={styles.hoursTitle}>Walk-In Hours (No Appointment Needed)</h4>
                  <div className={styles.hoursRow}>
                    <Scale size={16} /> Monday – Friday: 9:00 AM – 6:00 PM
                  </div>
                  <div className={styles.hoursRow}>
                    <Scale size={16} /> Saturdays: 10:00 AM – 2:00 PM
                  </div>
                </div>
              </div>

              {/* Right: Notary Summary */}
              <div className={styles.summaryCard}>
                <h4 className={styles.summaryTitle}>Cost Breakdown</h4>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <strong>${notaryResult.subtotal.toFixed(2)}</strong>
                </div>
                <div className={styles.summaryRow}>
                  <span>HST (13%)</span>
                  <span>${notaryResult.hst.toFixed(2)}</span>
                </div>
                <hr className={styles.divider} />
                <div className={styles.totalRow}>
                  <span>Total Cost</span>
                  <span>${notaryResult.total.toFixed(2)}</span>
                </div>
                <a
                  id="calc-view-checklist"
                  href="#notary-checklist"
                  className={`btn btn-accent ${styles.ctaBtn}`}
                >
                  View What to Bring Checklist
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
