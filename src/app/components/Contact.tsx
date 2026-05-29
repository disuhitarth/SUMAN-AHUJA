"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Car,
  Check,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "realestate_purchase",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "realestate_purchase",
        message: "",
      });
    }, 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <ScrollReveal>
          <div className={styles.grid}>
            {/* Left column — contact info */}
            <div>
              <span className="section-tag">Get in Touch</span>
              <h2 className="section-title">Start Your Consultation</h2>
              <p className={styles.desc}>
                Have questions about your residential transaction, notary
                requirements, or estate planning? Reach out through any channel
                below or submit the secure intake form.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoCard}>
                  <div className={styles.iconCircle}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className={styles.infoTitle}>Mississauga Location</p>
                    <p className={styles.infoValue}>
                      25 Watline Avenue, Suite GR-09
                      <br />
                      Mississauga, ON L4Z 2Z1
                    </p>
                    <p className={styles.infoNote}>
                      Ground floor suite — fully accessible
                    </p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.iconCircle}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className={styles.infoTitle}>Phone &amp; Fax</p>
                    <p className={styles.infoValue}>
                      905-507-4100
                      <br />
                      Fax: 905-507-4199
                    </p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.iconCircle}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className={styles.infoTitle}>Email</p>
                    <p className={styles.infoValue}>lawyers@ahujalaw.com</p>
                  </div>
                </div>
              </div>

              {/* Office hours */}
              <h4 className={styles.hoursTitle}>
                <Clock size={16} /> Office Hours
              </h4>
              <table className={styles.hoursTable}>
                <tbody>
                  <tr>
                    <td className={styles.hoursDay}>Mon – Fri</td>
                    <td className={styles.hoursTime}>9:00 AM – 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className={styles.hoursDay}>Sat – Sun</td>
                    <td className={styles.hoursTime}>Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Right column — form */}
            <div className={styles.formCard}>
              {formSubmitted ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>
                    <CheckCircle size={28} />
                  </div>
                  <h3 className={styles.successTitle}>Thank You!</h3>
                  <p className={styles.successText}>
                    Your inquiry has been received. We will review your details
                    and contact you within 1 business hour.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form">
                  <h3 className={styles.formTitle}>Secure Legal Intake</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="905-507-4100"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@domain.com"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-service">
                      Service Required
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="realestate_purchase">
                        Real Estate Purchase / Closing
                      </option>
                      <option value="realestate_sale">
                        Real Estate Property Sale
                      </option>
                      <option value="realestate_refinance">
                        Mortgage Refinance
                      </option>
                      <option value="notary_walkin">
                        Walk-in Notarization / Oaths
                      </option>
                      <option value="estate_planning">
                        Wills &amp; Powers of Attorney
                      </option>
                      <option value="other_drafting">
                        Travel Consents / Attestation / Contracts
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your legal needs, closing date, or number of documents..."
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    className="btn btn-accent btn-full"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Google Maps embed */}
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.756247926127!2d-79.66710492341907!3d43.62633387110363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4097eb4b23df%3A0xe5a3c89694e9f738!2s25%20Watline%20Ave%2C%20Mississauga%2C%20ON%20L4Z%202Z1!5e0!3m2!1sen!2sca!4v1717000000000!5m2!1sen!2sca"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map location of Suman Ahuja Law Office"
          />
        </div>

        {/* Info pills */}
        <div className={styles.pills}>
          <span className={styles.pill}>
            <Car size={14} /> Free Parking
          </span>
          <span className={styles.pill}>
            <Check size={14} /> Ground Floor Access
          </span>
          <span className={styles.pill}>
            <MapPin size={14} /> Transit Nearby
          </span>
        </div>
      </div>
    </section>
  );
}
