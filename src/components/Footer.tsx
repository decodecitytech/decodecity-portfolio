import React from "react";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { XIcon, LinkedInIcon } from "./Icons";

interface FooterProps {
  onNavClick: (item: string) => void;
  styles: Record<string, string>;
}

export function Footer({ onNavClick, styles }: FooterProps) {
  return (
    <footer className={styles.appleFooter}>
      <div className="main-canvas">
        {/* Top Bar with Telemetry Badge */}
        <div className={styles.appleFooterTop}>
          <div className={styles.appleFooterBrand}>
            <a href="#" className={styles.appleFooterLogoLink} aria-label="DecodeCity Tech Innovations Home">
              <Image
                src="/logo.png"
                alt="DecodeCity Tech Innovations Logo"
                width={240}
                height={62}
                className={styles.appleFooterLogoImage}
              />
            </a>
            <p className={styles.appleFooterTagline}>
              DecodeCity Tech Innovations — Software development, cloud architecture, AI systems &amp; automation, and custom technology solutions engineered right the first time.
            </p>
          </div>

          <div className={styles.appleFooterNodePill}>
            <span className={styles.appleNodePulse} />
            <span>Bengaluru Node [13.0355° N, 77.5331° E] · Active IST (UTC+5:30)</span>
          </div>
        </div>

        {/* Links Columns */}
        <div className={styles.appleFooterColumns}>
          <div className={styles.appleFooterCol}>
            <h4 className={styles.appleFooterColTitle}>STUDIO HEADQUARTERS</h4>
            <p className={styles.appleFooterAddress}>
              DecodeCity Tech Innovations (Decode City Software) <br />
              BLOCK-G, 1202, Peenya Main Rd, Platinum City, <br />
              Phase -1, Yeswanthpur, Bengaluru (Bangalore), Karnataka 560022 <br />
              Email: <strong>decodecitytech@gmail.com</strong>
            </p>
            <a
              href="https://maps.app.goo.gl/XjPHrkhRnYdAUnW78"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8125rem",
                color: "#FF5A00",
                textDecoration: "none",
                fontWeight: 600,
                marginTop: "4px"
              }}
            >
              <MapPin size={13} />
              <span>Open in Google Maps ↗</span>
            </a>
          </div>

          <div className={styles.appleFooterCol}>
            <h4 className={styles.appleFooterColTitle}>NAVIGATION</h4>
            <ul className={styles.appleFooterLinks}>
              <li><button type="button" onClick={() => onNavClick("Services")}>What We Build</button></li>
              <li><button type="button" onClick={() => onNavClick("Work")}>Selected Work</button></li>
              <li><button type="button" onClick={() => onNavClick("Process")}>Process Timeline</button></li>
              <li><button type="button" onClick={() => onNavClick("Pricing")}>Tailored Pricing</button></li>
              <li><button type="button" onClick={() => onNavClick("Reviews")}>Client Reviews</button></li>
              <li><button type="button" onClick={() => onNavClick("Contact")}>Start a Project</button></li>
            </ul>
          </div>

          <div className={styles.appleFooterCol}>
            <h4 className={styles.appleFooterColTitle}>CONNECT &amp; SOCIALS</h4>
            <div className={styles.footerSocialsGroup}>
              <a
                href="mailto:decodecitytech@gmail.com"
                className={styles.footerGmailLink}
              >
                <Mail size={15} />
                <span>decodecitytech@gmail.com</span>
              </a>
              <div className={styles.footerSocialIconsRow}>
                <a
                  href="https://www.linkedin.com/company/decodecity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIconCircle}
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedInIcon size={16} />
                </a>
                <a
                  href="https://x.com/decodecity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIconCircle}
                  aria-label="X (Twitter)"
                  title="X (Twitter)"
                >
                  <XIcon size={15} />
                </a>
                <a
                  href="https://maps.app.goo.gl/XjPHrkhRnYdAUnW78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIconCircle}
                  aria-label="Google Maps"
                  title="Google Maps"
                >
                  <MapPin size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.appleFooterCol}>
            <h4 className={styles.appleFooterColTitle}>COMMITMENTS</h4>
            <ul className={styles.appleFooterLinks}>
              <li><span>100% IP &amp; Code Ownership</span></li>
              <li><span>Fixed-Price Milestone Contracts</span></li>
              <li><span>Mutual NDA Signed Prior</span></li>
              <li><span>30-Day Post-Launch Warranty</span></li>
              <li><span>Sub-2h Direct Response SLA</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.appleFooterBottom}>
          <span className={styles.appleCopyright}>
            &copy; 2026 DecodeCity Tech Innovations. All rights reserved.
          </span>
          <div className={styles.appleFooterLegalBadges}>
            <span>100% IP Transfer Guarantee</span>
            <span>&bull;</span>
            <span>Milestone Escrow</span>
            <span>&bull;</span>
            <span>Bengaluru Tech Node</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
