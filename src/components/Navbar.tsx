import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, X, Menu, Mail, MapPin } from "lucide-react";
import { XIcon, LinkedInIcon } from "./Icons";

interface NavbarProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onNavClick: (item: string) => void;
  onOpenModal: () => void;
  navItems: string[];
  styles: Record<string, string>;
}

export function Navbar({
  isScrolled,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  onNavClick,
  onOpenModal,
  navItems,
  styles,
}: NavbarProps) {
  return (
    <div className={styles.dynamicIslandWrapper}>
      <nav
        className={`${styles.dynamicIsland} ${isScrolled ? styles.scrolled : ""}`}
        aria-label="Dynamic Island Navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className={styles.logoLink}
          aria-label="DecodeCity Home"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="DecodeCity Tech Innovations Logo"
            width={180}
            height={44}
            priority
            className={styles.logoImage}
          />
        </a>

        {/* Desktop Nav Items */}
        <ul className={styles.navLinksList}>
          {navItems.map((item) => (
            <li key={item}>
              <button
                className={styles.navLinkItem}
                onClick={() => onNavClick(item)}
              >
                <span>{item}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Right Actions: CTA + Mobile Hamburger Toggle */}
        <div className={styles.islandRightActions}>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenModal();
            }}
            className={styles.islandCtaBtn}
            id="dynamic-island-cta"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={15} />
          </button>

          <button
            type="button"
            className={styles.mobileMenuToggleBtn}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu with all navigation links & social icons */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuDropdown}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item}>
                <button
                  className={styles.mobileNavItemBtn}
                  onClick={() => onNavClick(item)}
                >
                  <span>{item}</span>
                  <ArrowRight size={16} />
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.mobileMenuDivider} />

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenModal();
            }}
            className={styles.mobileMenuCtaBtn}
          >
            <span>Start a Project</span>
            <ArrowUpRight size={16} />
          </button>

          {/* All Social Channels in Mobile Menu */}
          <div className={styles.mobileMenuSocials}>
            <a
              href="mailto:decodecitytech@gmail.com"
              className={styles.mobileMenuGmailBtn}
              title="Email DecodeCity"
            >
              <Mail size={15} />
              <span>decodecitytech@gmail.com</span>
            </a>

            <div className={styles.mobileSocialIconsRow}>
              <a
                href="https://www.linkedin.com/company/decodecity"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconCircle}
                aria-label="LinkedIn"
                title="DecodeCity on LinkedIn"
              >
                <LinkedInIcon size={16} />
              </a>

              <a
                href="https://x.com/decodecity"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconCircle}
                aria-label="X (Twitter)"
                title="DecodeCity on X"
              >
                <XIcon size={15} />
              </a>

              <a
                href="https://maps.app.goo.gl/XjPHrkhRnYdAUnW78"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconCircle}
                aria-label="Google Maps"
                title="Find us on Google Maps"
              >
                <MapPin size={16} />
              </a>
            </div>
          </div>

          <div className={styles.mobileMenuAddress}>
            <span>BLOCK-G, 1202, Peenya Main Rd, Platinum City, Phase -1, Yeswanthpur, Bengaluru, Karnataka 560022</span>
          </div>
        </div>
      )}
    </div>
  );
}
