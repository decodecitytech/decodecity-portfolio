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
  onSubmit: (e: React.FormEvent) => void;
  styles: Record<string, string>;
}

export function ProjectModal({
  isOpen,
  onClose,
  formData,
  setFormData,
  formSubmitted,
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

        <form onSubmit={onSubmit} className={styles.modalForm}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Your Name</label>
            <input
              type="text"
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
            >
              {formSubmitted ? "✓ SPECIFICATION TRANSMITTED TO SENIOR ARCHITECT" : "Submit Architecture Brief →"}
            </button>
            <span style={{ fontSize: "0.75rem", color: "#86868B", textAlign: "center" }}>
              Direct response from our Bengaluru technology lead within 12 hours. Mutual NDA executed prior.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
