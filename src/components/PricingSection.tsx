import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { NEX_PRICING_PLANS } from "../data/siteData";

interface PricingSectionProps {
  pricingCurrency: "INR" | "USD" | "EUR";
  setPricingCurrency: (curr: "INR" | "USD" | "EUR") => void;
  onSelectPlan: (scope: string) => void;
  styles: Record<string, string>;
}

export function PricingSection({
  pricingCurrency,
  setPricingCurrency,
  onSelectPlan,
  styles,
}: PricingSectionProps) {
  return (
    <section id="pricing" className={styles.pricingNexSection}>
      <div className="main-canvas">
        {/* Header Row */}
        <div className={styles.pricingHeaderRow}>
          <div className={styles.pricingTitleBlock}>
            <h2 className={styles.pricingMainHeading}>
              Fixed-Milestone Pricing. Zero Hidden Fees.
            </h2>
            {/* 3 Currencies Switcher */}
            <div className={styles.pricingCurrencySwitch}>
              {(["INR", "USD", "EUR"] as const).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  className={`${styles.pricingCurrencyBtn} ${
                    pricingCurrency === curr ? styles.activeCurrencyBtn : ""
                  }`}
                  onClick={() => setPricingCurrency(curr)}
                >
                  {curr === "INR" ? "₹ INR" : curr === "USD" ? "$ USD" : "€ EUR"}
                </button>
              ))}
            </div>
          </div>
          <p className={styles.pricingHeaderSub}>
            Every sprint is backed by locked technical deliverables, milestone escrow security, and a 30-day post-launch warranty. Built right the first time so you never pay for refactoring.
          </p>
        </div>

        {/* 3 Cards Grid with Sub-pricing */}
        <div className={styles.pricingThreeGrid}>
          {NEX_PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`${styles.nexPricingCard} ${
                  isPopular ? styles.nexPopularCard : ""
                }`}
              >
                {isPopular && (
                  <div className={styles.nexPopularFloatingPill}>
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div className={styles.nexCardBadgeRow}>
                  <span className={styles.nexPlanName}>{plan.name}</span>
                  <span
                    className={`${styles.nexPlanTagBadge} ${
                      isPopular ? styles.nexPlanTagBadgePurple : ""
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <p className={styles.nexPlanAudience}>{plan.audience}</p>

                <div className={styles.nexPriceWrap}>
                  <span className={styles.nexPriceBig}>
                    {plan.price[pricingCurrency]}
                  </span>
                  {plan.unit && (
                    <span className={styles.nexPriceUnit}>{plan.unit}</span>
                  )}
                </div>

                {/* Sub-pricing module */}
                <div className={styles.nexSubPricingBox}>
                  <span>{plan.subPricing[pricingCurrency]}</span>
                </div>

                {/* Features List */}
                <ul className={styles.nexFeaturesList}>
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className={styles.nexFeatureItem}>
                      <Check size={16} className={styles.nexCheckIcon} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`${styles.nexCardCtaBtn} ${
                    isPopular ? styles.nexPopularCtaBtn : ""
                  }`}
                  onClick={() => onSelectPlan(`${plan.name} Plan (${pricingCurrency})`)}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
