"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar} id="navbar">
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#" className={styles.logo} id="navbar-logo">
          <span className={styles.logoName}>SUMAN AHUJA</span>
          <span className={styles.logoSub}>LAW OFFICE</span>
        </a>

        {/* Desktop nav links */}
        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link} id={`nav-${link.label.toLowerCase()}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className={styles.actions}>
          <ThemeToggle />
          <a
            href="tel:905-507-4100"
            className={styles.phoneBtn}
            id="navbar-phone"
          >
            <Phone size={15} />
            <span>905-507-4100</span>
          </a>
        </div>

        {/* Mobile actions */}
        <div className={styles.mobileActions}>
          <ThemeToggle />
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            id="navbar-hamburger"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className={styles.overlay} id="navbar-overlay">
          <button
            className={styles.closeBtn}
            onClick={closeMenu}
            aria-label="Close menu"
            id="navbar-close"
          >
            <X size={24} />
          </button>

          <ul className={styles.overlayLinks}>
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className={styles.overlayItem}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <a
                  href={link.href}
                  className={styles.overlayLink}
                  onClick={closeMenu}
                  id={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="tel:905-507-4100"
            className={styles.overlayPhone}
            onClick={closeMenu}
            id="mobile-nav-phone"
          >
            <Phone size={18} />
            905-507-4100
          </a>
        </div>
      )}
    </nav>
  );
}
