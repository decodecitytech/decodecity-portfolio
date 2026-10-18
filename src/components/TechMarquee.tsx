import React from "react";
import { TECH_STACKS } from "../data/siteData";
import { TechLogo } from "./Icons";

interface TechMarqueeProps {
  styles: Record<string, string>;
}

export function TechMarquee({ styles }: TechMarqueeProps) {
  return (
    <section className={styles.techMarqueeSection} aria-label="Production Tech Stack">
      <div className={styles.marqueeHeaderRow}>
        <span className={styles.marqueeHeaderLine} />
        <div className={styles.marqueeHeaderBadge}>
          <span className={styles.marqueeOrangeDot} />
          <span>MODERN PRODUCTION STACK</span>
        </div>
        <span className={styles.marqueeHeaderLine} />
      </div>

      <div className={styles.marqueeTrackWrapper}>
        <div className={styles.marqueeTrack}>
          {[...TECH_STACKS, ...TECH_STACKS].map((tech, idx) => (
            <div key={idx} className={styles.techChipItem}>
              <div className={styles.techLogoWrap}>
                <TechLogo name={tech.name} />
              </div>
              <span className={styles.techChipName}>{tech.name}</span>
              <span className={styles.techChipRole}>{tech.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
