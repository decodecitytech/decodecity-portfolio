import React from "react";
import { Star } from "lucide-react";
import { ALTURA_TESTIMONIALS } from "../data/siteData";

interface TestimonialsSectionProps {
  activeTestimonialIdx: number;
  setActiveTestimonialIdx: (idx: number) => void;
  styles: Record<string, string>;
}

export function TestimonialsSection({
  activeTestimonialIdx,
  setActiveTestimonialIdx,
  styles,
}: TestimonialsSectionProps) {
  const currentTestimonial = ALTURA_TESTIMONIALS[activeTestimonialIdx];

  return (
    <section id="testimonials" className={styles.testimonialsLuxurySection}>
      <div className="main-canvas">
        <div className={styles.testiHeaderWrap}>
          <span className={styles.testiEyebrow}>CLIENT TESTIMONIALS</span>
          <h2 className={styles.testiTitle}>
            Endorsed by Discerning Founders &amp; Enterprises
          </h2>
        </div>

        <div className={styles.testiCardBox}>
          {/* 5 Gold Stars */}
          <div className={styles.testiStars}>
            {[...Array(5)].map((_, sIdx) => (
              <Star key={sIdx} size={18} fill="#C28B52" stroke="#C28B52" />
            ))}
          </div>

          {/* Serif Italic Quote */}
          <p className={styles.testiQuote}>
            {currentTestimonial.quote}
          </p>

          {/* Author Info */}
          <div className={styles.testiAuthorInfo}>
            <div className={styles.testiAvatarCircle}>
              <span>{currentTestimonial.avatarText}</span>
            </div>
            <div className={styles.testiAuthorMeta}>
              <span className={styles.testiAuthorName}>
                {currentTestimonial.author}
              </span>
              <span className={styles.testiAuthorRole}>
                {currentTestimonial.role}
              </span>
            </div>
          </div>

          {/* Pagination Pill Dots */}
          <div className={styles.testiPagination}>
            {ALTURA_TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                aria-label={`View testimonial ${idx + 1}`}
                className={`${styles.testiDot} ${
                  activeTestimonialIdx === idx ? styles.activeTestiDot : ""
                }`}
                onClick={() => setActiveTestimonialIdx(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
