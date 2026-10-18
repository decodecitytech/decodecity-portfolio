import React from "react";
import {
  MapPin,
  ExternalLink,
  Mail,
  Check,
  Copy,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { XIcon, LinkedInIcon } from "./Icons";
import { CITY_DISTRICTS } from "../data/siteData";

interface ContactSectionProps {
  emailCopied: boolean;
  onCopyEmail: () => void;
  contactFormData: {
    name: string;
    email: string;
    phone: string;
    category: string;
    budget: string;
    details: string;
  };
  setContactFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      phone: string;
      category: string;
      budget: string;
      details: string;
    }>
  >;
  contactFormSubmitted: boolean;
  selectedCityDistrict: number;
  setSelectedCityDistrict: (idx: number) => void;
  onSubmitContact: (e: React.FormEvent) => void;
  onOpenModal: () => void;
  styles: Record<string, string>;
}

export function ContactSection({
  emailCopied,
  onCopyEmail,
  contactFormData,
  setContactFormData,
  contactFormSubmitted,
  selectedCityDistrict,
  setSelectedCityDistrict,
  onSubmitContact,
  onOpenModal,
  styles,
}: ContactSectionProps) {
  return (
    <section id="contact" className={styles.appleContactSection}>
      <div className="main-canvas">
        {/* Header */}
        <div className={styles.appleSectionHeader}>
          <div className={styles.appleEyebrow}>
            <span>STUDIO &amp; PROJECT CONFIGURATOR // BENGALURU NODE</span>
          </div>
          <h2 className={styles.appleSectionTitle}>
            Let&apos;s build something extraordinary.
          </h2>
          <p className={styles.appleSectionSubtitle}>
            Direct technical collaboration with our senior architects in Bengaluru [Platinum City, Yeswanthpur]. Mutual NDA executed prior to architectural scoping.
          </p>
        </div>

        {/* Apple 2-Column Studio Hub & Configurator */}
        <div className={styles.appleConfiguratorGrid}>
          {/* Left Column: DecodeCity Studio & Location Card */}
          <div className={styles.appleStudioCard}>
            <div className={styles.appleStudioHeader}>
              <div className={styles.appleStudioStatusPill}>
                <span className={styles.appleStudioDotGreen} />
                <span>STUDIO ACTIVE · BENGALURU NODE</span>
              </div>
              <h3 className={styles.appleStudioName}>DecodeCity Tech Innovations</h3>
              <p className={styles.appleStudioGeo}>BLOCK-G, 1202, Peenya Main Rd, Platinum City, Phase -1, Yeswanthpur, Bengaluru, Karnataka 560022</p>
            </div>

            {/* Interactive Google Map Embed */}
            <div className={styles.studioMapWrapper}>
              <iframe
                className={styles.studioMapIframe}
                src="https://maps.google.com/maps?q=13.0354694,77.5331074&hl=en&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DecodeCity Tech Innovations Google Maps Location"
                allowFullScreen
              />
              <div className={styles.studioMapActionBar}>
                <div className={styles.studioMapAddressText}>
                  <span className={styles.studioMapAddressTitle}>DecodeCity Tech Innovations</span>
                  <span className={styles.studioMapAddressCoords}>Platinum City, Phase -1, Yeswanthpur, Bengaluru 560022</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/XjPHrkhRnYdAUnW78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.studioMapLinkBtn}
                >
                  <MapPin size={13} />
                  <span>Open in Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Official Email Card with 1-Click Copy */}
            <div className={styles.studioEmailCard}>
              <div className={styles.studioEmailLeft}>
                <div className={styles.studioEmailIconWrap}>
                  <Mail size={18} />
                </div>
                <div className={styles.studioEmailMeta}>
                  <span className={styles.studioEmailLabel}>Official Direct Email</span>
                  <a
                    href="mailto:decodecitytech@gmail.com"
                    className={styles.studioEmailAddress}
                  >
                    decodecitytech@gmail.com
                  </a>
                </div>
              </div>
              <button
                type="button"
                className={styles.studioEmailCopyBtn}
                onClick={onCopyEmail}
                title="Copy email to clipboard"
              >
                {emailCopied ? (
                  <>
                    <Check size={13} color="#16A34A" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels: Only Gmail shows text, others are icon-only */}
            <div className={styles.studioSocialsRow}>
              <a
                href="mailto:decodecitytech@gmail.com"
                className={styles.studioGmailPill}
                title="Official Email"
              >
                <Mail size={15} />
                <span>decodecitytech@gmail.com</span>
              </a>
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
                title="DecodeCity on Google Maps"
              >
                <MapPin size={16} />
              </a>
            </div>

            {/* Studio Commitments */}
            <div className={styles.appleStudioCommitments}>
              <div className={styles.appleCommitmentItem}>
                <ShieldCheck size={14} className={styles.appleCheckOrange} />
                <span>100% IP &amp; Code Ownership Transferred</span>
              </div>
              <div className={styles.appleCommitmentItem}>
                <CheckCircle2 size={14} className={styles.appleCheckOrange} />
                <span>Fixed Milestone Escrow</span>
              </div>
              <div className={styles.appleCommitmentItem}>
                <Lock size={14} className={styles.appleCheckOrange} />
                <span>Mutual NDA Signed Prior</span>
              </div>
            </div>

            {/* Mobile Project Brief Launch Button */}
            <div className={styles.mobileContactCtaWrapper}>
              <button
                type="button"
                className={styles.mobileContactLaunchBtn}
                onClick={onOpenModal}
              >
                <span>Start a Project Brief</span>
                <ArrowUpRight size={16} />
              </button>
              <span className={styles.mobileContactCtaSub}>
                Direct response from our Bengaluru architects within 12h
              </span>
            </div>
          </div>

          {/* Right Column: Apple Project Configurator Form */}
          <div className={styles.appleFormCard}>
            <div className={styles.appleFormHeader}>
              <h3 className={styles.appleFormTitle}>Configure your build.</h3>
              <p className={styles.appleFormSub}>
                Select your project parameters. Our engineering leads will review your specification within 2 hours.
              </p>
            </div>

            <form onSubmit={onSubmitContact} className={styles.appleForm}>
              {/* Step 1: Target Capability */}
              <div className={styles.appleFormField}>
                <label className={styles.appleFormLabel}>01. SELECT CAPABILITY SECTOR *</label>
                <div className={styles.appleSectorChips}>
                  {CITY_DISTRICTS.map((d, idx) => (
                    <button
                      key={d.scope}
                      type="button"
                      className={`${styles.appleSectorBtn} ${
                        contactFormData.category === d.scope ? styles.activeAppleSectorBtn : ""
                      }`}
                      onClick={() => {
                        setContactFormData({ ...contactFormData, category: d.scope });
                        setSelectedCityDistrict(idx);
                      }}
                    >
                      <span className={styles.appleSectorNum}>{d.num}</span>
                      <span>{d.scope.replace(/^\d+\s*/, "")}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Client Identity */}
              <div className={styles.appleFormRow}>
                <div className={styles.appleFormField}>
                  <label className={styles.appleFormLabel}>02. FULL NAME &amp; ROLE *</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Henderson, Founder / CTO"
                    value={contactFormData.name}
                    onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                    className={styles.appleInput}
                  />
                </div>
                <div className={styles.appleFormField}>
                  <label className={styles.appleFormLabel}>03. WORK EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={contactFormData.email}
                    onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                    className={styles.appleInput}
                  />
                </div>
              </div>

              <div className={styles.appleFormField}>
                <label className={styles.appleFormLabel}>04. PHONE / WHATSAPP (OPTIONAL)</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210 / +1 (415)..."
                  value={contactFormData.phone}
                  onChange={(e) => setContactFormData({ ...contactFormData, phone: e.target.value })}
                  className={styles.appleInput}
                />
              </div>

              {/* Step 3: Target Investment Tier */}
              <div className={styles.appleFormField}>
                <label className={styles.appleFormLabel}>05. TARGET INVESTMENT TIER (INR / USD)</label>
                <div className={styles.appleBudgetChips}>
                  {[
                    "₹49,000 — ₹95,000 / MVP Sprint",
                    "₹95,000 — ₹1,65,000 / Full Platform",
                    "₹1,65,000+ / Custom Hub & OS"
                  ].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      className={`${styles.appleBudgetBtn} ${
                        contactFormData.budget === tier ? styles.activeAppleBudgetBtn : ""
                      }`}
                      onClick={() => setContactFormData({ ...contactFormData, budget: tier })}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Architectural Scope & Goals */}
              <div className={styles.appleFormField}>
                <label className={styles.appleFormLabel}>06. PROJECT GOALS &amp; DESIRED TIMELINE *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline what you are building, target user flows, required tech stack integrations, and desired launch deadline..."
                  value={contactFormData.details}
                  onChange={(e) => setContactFormData({ ...contactFormData, details: e.target.value })}
                  className={styles.appleTextarea}
                />
              </div>

              {/* Apple Signature Pill Submit Button */}
              <button type="submit" className={styles.appleSubmitBtn}>
                <span>
                  {contactFormSubmitted
                    ? "✓ SPECIFICATION TRANSMITTED TO BENGALURU ARCHITECTS"
                    : "Request Private Architecture Briefing"}
                </span>
                <ArrowRight size={17} />
              </button>

              {/* Confirmation Card */}
              {contactFormSubmitted && (
                <div className={styles.appleConfirmationCard}>
                  <div className={styles.appleConfirmTop}>
                    <CheckCircle2 size={18} className={styles.appleGreenIcon} />
                    <strong>SPECIFICATION DISPATCH CONFIRMED</strong>
                  </div>
                  <p>
                    Assigned Lead Architect: <strong>{CITY_DISTRICTS[selectedCityDistrict].leadArchitect}</strong>
                  </p>
                  <span className={styles.appleReceiptPill}>
                    Receipt: SPEC-LATIUM-{(Date.now() % 100000).toString(16).toUpperCase()} · Direct IST Review &lt; 2h
                  </span>
                </div>
              )}

              <span className={styles.appleDisclaimer}>
                🔒 Confidential review in Latium City, Bengaluru. Mutual NDA signed before architectural scoping.
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
