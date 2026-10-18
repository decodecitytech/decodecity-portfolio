import React from "react";
import { X } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    email: string;
    scope: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      scope: string;
    }>
  >;
  formSubmitted: boolean;
  formSubmitting?: boolean;
  formError?: string | null;
  onSubmit: (e: React.FormEvent) => void;
  styles: Record<string, string>;
}

export function ProjectModal({
  isOpen,
  onClose,
  formData,
  setFormData,
  formSubmitted,
  formSubmitting,
  formError,
  onSubmit,
  styles,
}: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className={styles.modalBackdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modalDrawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <span className={styles.modalEyebrow}>DECODECITY TECH INNOVATIONS // PLATINUM CITY, YESWANTHPUR, BENGALURU 560022</span>
            <h3 className={styles.modalTitle}>Architecture Brief &amp; Scoping</h3>
          </div>
          <button
            className={styles.modalCloseBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        <form
          onSubmit={onSubmit}
          className={styles.modalForm}
          action="https://formspree.io/f/xeaedrej"
          method="POST"
        >
          {/* Formspree Metadata */}
          <input type="hidden" name="_subject" value="New DecodeCity Modal Architecture Brief" />
          <input type="hidden" name="formType" value="Modal: Architecture Brief & Scoping" />

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Alex Henderson"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={styles.textInput}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Work Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="alex@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={styles.textInput}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>What are you looking to build?</label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tell us about your project (Web & Product, Enterprise CRM, AI Automations, Cloud Fabric, Telemetry)..."
              value={formData.scope}
              onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
              className={styles.textareaInput}
            />
          </div>

          <div className={styles.modalFooter}>
            <button
              type="submit"
              className={styles.btnStartProject}
              style={{ width: "100%", justifyContent: "center" }}
              disabled={formSubmitting}
            >
              {formSubmitting
                ? "Transmitting Brief to Architects..."
                : formSubmitted
                ? "✓ SPECIFICATION TRANSMITTED TO SENIOR ARCHITECT"
                : "Submit Architecture Brief →"}
            </button>
            {formError && (
              <span style={{ fontSize: "0.85rem", color: "#ff4d4f", textAlign: "center" }}>
                {formError}
              </span>
            )}
            <span style={{ fontSize: "0.75rem", color: "#86868B", textAlign: "center" }}>
              Direct response from our Bengaluru technology lead within 12 hours. Mutual NDA executed prior.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
