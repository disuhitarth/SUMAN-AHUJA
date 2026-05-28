"use client";

import { MessageCircle } from "lucide-react";
import styles from "./WhatsAppButton.module.css";

const WHATSAPP_URL =
  "https://wa.me/19055074100?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20legal%20services.";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.btn} no-print`}
      aria-label="Chat on WhatsApp"
      id="whatsapp-button"
    >
      <MessageCircle size={20} />
    </a>
  );
}
