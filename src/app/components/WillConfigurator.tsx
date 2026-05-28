"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, Printer, Mail, FileText, CheckCircle2, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import styles from "./WillConfigurator.module.css";

export default function WillConfigurator() {
  const [step, setStep] = useState<number>(1);
  const [hasWill, setHasWill] = useState<string>("no");
  const [maritalStatus, setMaritalStatus] = useState<string>("single");
  const [hasDependents, setHasDependents] = useState<string>("no");
  const [poaType, setPoaType] = useState<string>("both");

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handlePrint = () => {
    window.print();
  };

  const totalSteps = 4;
  const stepLabels = ["1", "2", "3"];

  return (
    <ScrollReveal>
      <div id="wills-configurator" className="section-alt">
        <div className={`container ${styles.narrowContainer}`}>
          <div className="section-header">
            <span className="section-tag">Wills &amp; Estate Planning</span>
            <h2 className="section-title">Estate Planning Configurator</h2>
            <p className="section-desc">
              Organize your preferences in under 2 minutes. Print or email to save consultation time.
            </p>
          </div>

          {/* Print Header */}
          <div className={styles.printHeader}>
            <h2 className={styles.printHeaderTitle}>Suman Ahuja Law Office — Estate Planning Summary</h2>
            <p className={styles.printHeaderSub}>25 Watline Ave, Suite GR-09, Mississauga | 905-507-4100</p>
          </div>

          <div className={styles.configCard}>
            {/* Step Progress */}
            <div className={styles.stepsHeader}>
              {Array.from({ length: totalSteps }).map((_, i) => {
                const stepNum = i + 1;
                const isActive = step === stepNum;
                const isCompleted = step > stepNum;

                return (
                  <div key={stepNum} className={styles.stepWrapper}>
                    {i > 0 && (
                      <div
                        className={`${styles.stepLine} ${step > i ? styles.stepLineCompleted : ""}`}
                      />
                    )}
                    <div
                      className={`${styles.stepCircle} ${isActive ? styles.stepCircleActive : ""} ${isCompleted ? styles.stepCircleCompleted : ""}`}
                    >
                      {isCompleted ? (
                        <Check size={14} />
                      ) : stepNum === 4 ? (
                        <Check size={14} />
                      ) : (
                        stepNum
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Step 1: Current Status */}
            {step === 1 && (
              <div>
                <h3 className={styles.stepTitle}>Step 1: Current Status</h3>
                <p className={styles.stepDesc}>
                  Do you currently have a Last Will and Testament in place?
                </p>
                <div className={styles.radioGroup}>
                  <div
                    id="will-option-no"
                    onClick={() => setHasWill("no")}
                    className={`${styles.radioOption} ${hasWill === "no" ? styles.radioOptionSelected : ""}`}
                  >
                    <div className={`${styles.radioDot} ${hasWill === "no" ? styles.radioDotSelected : ""}`}>
                      <div className={`${styles.radioDotInner} ${hasWill === "no" ? styles.radioDotInnerSelected : ""}`} />
                    </div>
                    <div>
                      <div className={styles.radioLabel}>No, I need a new Will</div>
                      <div className={styles.radioHint}>I want to create a standard, legally valid Will in Ontario.</div>
                    </div>
                  </div>
                  <div
                    id="will-option-outdated"
                    onClick={() => setHasWill("yes_outdated")}
                    className={`${styles.radioOption} ${hasWill === "yes_outdated" ? styles.radioOptionSelected : ""}`}
                  >
                    <div className={`${styles.radioDot} ${hasWill === "yes_outdated" ? styles.radioDotSelected : ""}`}>
                      <div className={`${styles.radioDotInner} ${hasWill === "yes_outdated" ? styles.radioDotInnerSelected : ""}`} />
                    </div>
                    <div>
                      <div className={styles.radioLabel}>Yes, but it is outdated</div>
                      <div className={styles.radioHint}>I need to update my existing Will due to changes in life (marriage, divorce, property).</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Family Setup */}
            {step === 2 && (
              <div>
                <h3 className={styles.stepTitle}>Step 2: Family Setup</h3>
                <p className={styles.stepDesc}>
                  Select your current family configuration:
                </p>
                <div className={styles.radioGroup}>
                  <div
                    id="will-marital-single"
                    onClick={() => setMaritalStatus("single")}
                    className={`${styles.radioOption} ${maritalStatus === "single" ? styles.radioOptionSelected : ""}`}
                  >
                    <div className={`${styles.radioDot} ${maritalStatus === "single" ? styles.radioDotSelected : ""}`}>
                      <div className={`${styles.radioDotInner} ${maritalStatus === "single" ? styles.radioDotInnerSelected : ""}`} />
                    </div>
                    <div>
                      <div className={styles.radioLabel}>Single / Divorced / Widowed</div>
                    </div>
                  </div>
                  <div
                    id="will-marital-married"
                    onClick={() => setMaritalStatus("married")}
                    className={`${styles.radioOption} ${maritalStatus === "married" ? styles.radioOptionSelected : ""}`}
                  >
                    <div className={`${styles.radioDot} ${maritalStatus === "married" ? styles.radioDotSelected : ""}`}>
                      <div className={`${styles.radioDotInner} ${maritalStatus === "married" ? styles.radioDotInnerSelected : ""}`} />
                    </div>
                    <div>
                      <div className={styles.radioLabel}>Married / Common-Law</div>
                    </div>
                  </div>
                </div>

                <p className={styles.subLabel}>
                  Do you have minor children or dependents?
                </p>
                <div className={styles.radioGroup}>
                  <div
                    id="will-dependents-yes"
                    onClick={() => setHasDependents("yes")}
                    className={`${styles.radioOption} ${hasDependents === "yes" ? styles.radioOptionSelected : ""}`}
                  >
                    <div className={`${styles.radioDot} ${hasDependents === "yes" ? styles.radioDotSelected : ""}`}>
                      <div className={`${styles.radioDotInner} ${hasDependents === "yes" ? styles.radioDotInnerSelected : ""}`} />
                    </div>
                    <div>
                      <div className={styles.radioLabel}>Yes, minor children/dependents</div>
                    </div>
                  </div>
                  <div
                    id="will-dependents-no"
                    onClick={() => setHasDependents("no")}
                    className={`${styles.radioOption} ${hasDependents === "no" ? styles.radioOptionSelected : ""}`}
                  >
                    <div className={`${styles.radioDot} ${hasDependents === "no" ? styles.radioDotSelected : ""}`}>
                      <div className={`${styles.radioDotInner} ${hasDependents === "no" ? styles.radioDotInnerSelected : ""}`} />
                    </div>
                    <div>
                      <div className={styles.radioLabel}>No minor dependents</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Powers of Attorney */}
            {step === 3 && (
              <div>
                <h3 className={styles.stepTitle}>Step 3: Powers of Attorney (POA)</h3>
                <p className={styles.stepDesc}>
                  In Ontario, Powers of Attorney designate trusted persons to make decisions if you become incapacitated. Which documents do you require?
                </p>
                <div className={styles.radioGroup}>
                  <div
                    id="will-poa-both"
                    onClick={() => setPoaType("both")}
                    className={`${styles.radioOption} ${poaType === "both" ? styles.radioOptionSelected : ""}`}
                  >
                    <div className={`${styles.radioDot} ${poaType === "both" ? styles.radioDotSelected : ""}`}>
                      <div className={`${styles.radioDotInner} ${poaType === "both" ? styles.radioDotInnerSelected : ""}`} />
                    </div>
                    <div>
                      <div className={styles.radioLabel}>Both POA Documents (Recommended)</div>
                      <div className={styles.radioHint}>Includes POA for Personal Care (Health) and POA for Property (Finances).</div>
                    </div>
                  </div>
                  <div
                    id="will-poa-property"
                    onClick={() => setPoaType("property")}
                    className={`${styles.radioOption} ${poaType === "property" ? styles.radioOptionSelected : ""}`}
                  >
                    <div className={`${styles.radioDot} ${poaType === "property" ? styles.radioDotSelected : ""}`}>
                      <div className={`${styles.radioDotInner} ${poaType === "property" ? styles.radioDotInnerSelected : ""}`} />
                    </div>
                    <div>
                      <div className={styles.radioLabel}>Power of Attorney for Property only</div>
                    </div>
                  </div>
                  <div
                    id="will-poa-care"
                    onClick={() => setPoaType("care")}
                    className={`${styles.radioOption} ${poaType === "care" ? styles.radioOptionSelected : ""}`}
                  >
                    <div className={`${styles.radioDot} ${poaType === "care" ? styles.radioDotSelected : ""}`}>
                      <div className={`${styles.radioDotInner} ${poaType === "care" ? styles.radioDotInnerSelected : ""}`} />
                    </div>
                    <div>
                      <div className={styles.radioLabel}>Power of Attorney for Personal Care only</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Summary */}
            {step === 4 && (
              <div className={styles.finalStep}>
                <CheckCircle2 size={54} className={styles.finalIcon} />
                <h3 className={styles.finalTitle}>
                  Configuration Complete
                </h3>
                <p className={styles.finalDesc}>
                  We have generated your personalized estate planning outline based on Ontario regulations.
                </p>

                <div className={styles.summaryCard}>
                  <h4 className={styles.summaryHeader}>
                    <FileText size={18} /> Configuration Summary
                  </h4>
                  <div className={styles.summaryList}>
                    <div><strong>Will Need:</strong> {hasWill === "no" ? "New Last Will and Testament required." : "Update of existing Will required."}</div>
                    <div><strong>Family Status:</strong> {maritalStatus === "married" ? "Married / Common-Law." : "Single / Separated."}</div>
                    <div><strong>Dependents:</strong> {hasDependents === "yes" ? "Guardianship provisions for minor children needed." : "No minor child provisions needed."}</div>
                    <div><strong>Powers of Attorney:</strong> {poaType === "both" ? "Both Care and Property POAs requested." : poaType === "property" ? "Property POA only." : "Personal Care POA only."}</div>
                  </div>
                </div>

                <div className={styles.finalActions}>
                  <button
                    id="will-print"
                    onClick={handlePrint}
                    className="btn btn-outline"
                  >
                    <Printer size={16} /> Print Summary
                  </button>
                  <a
                    id="will-email"
                    href="#contact"
                    className="btn btn-primary"
                  >
                    <Mail size={16} /> Email Summary to Office
                  </a>
                </div>
              </div>
            )}

            {/* Navigation */}
            {step < 4 && (
              <div className={styles.navRow}>
                <button
                  id="will-back"
                  onClick={prevStep}
                  className={`btn btn-outline ${step === 1 ? styles.btnDisabled : ""}`}
                  disabled={step === 1}
                >
                  <ChevronLeft size={16} /> Back
                </button>
                <button
                  id="will-next"
                  onClick={nextStep}
                  className="btn btn-primary"
                >
                  Next Step <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
