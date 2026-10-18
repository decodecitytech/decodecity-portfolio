import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "../data/siteData";

interface ServicesSectionProps {
  selectedServiceIdx: number;
  setSelectedServiceIdx: (idx: number) => void;
  onSelectScope: (scope: string) => void;
  styles: Record<string, string>;
}

export function ServicesSection({
  selectedServiceIdx,
  setSelectedServiceIdx,
  onSelectScope,
  styles,
}: ServicesSectionProps) {
  const currentService = SERVICES_DATA[selectedServiceIdx];

  return (
    <section id="services" className={styles.whatWeBuildSection}>
      <div className="main-canvas">
        {/* Header Row */}
        <div className={styles.buildHeaderRow}>
          <div className={styles.buildHeaderLeft}>
            <div className={styles.buildEyebrow}>
              <span className={styles.eyebrowNum}>01 //</span> WHAT WE BUILD
            </div>
            <h2 className={styles.buildMainTitle}>
              Engineered for profit. <br />
              <span className={styles.buildTitleOrange}>Built for scale.</span>
            </h2>
          </div>

          <div className={styles.buildHeaderRight}>
            <p className={styles.buildHeaderSubtext}>
              No off-the-shelf templates or bloated code. We design and ship custom digital platforms, sales CRMs, and autonomous pipelines that solve operational bottlenecks.
            </p>
          </div>
        </div>

        {/* 2-Column Main Content Grid */}
        <div className={styles.buildContentGrid}>
          {/* Left Column: Interactive 5 Services List */}
          <div className={styles.serviceListWrap}>
            {SERVICES_DATA.map((srv, idx) => {
              const isActive = selectedServiceIdx === idx;
              return (
                <button
                  key={srv.id}
                  className={`${styles.serviceRowItem} ${isActive ? styles.activeServiceRow : ""}`}
                  onClick={() => setSelectedServiceIdx(idx)}
                  onMouseEnter={() => setSelectedServiceIdx(idx)}
                >
                  {isActive && <span className={styles.activeServiceIndicator} />}
                  <div className={styles.serviceRowContent}>
                    <span className={styles.serviceRowNum}>{srv.num}</span>
                    <div className={styles.serviceRowText}>
                      <h3 className={styles.serviceRowTitle}>{srv.title}</h3>
                      <p className={styles.serviceRowDesc}>{srv.desc}</p>
                    </div>
                  </div>
                  <ArrowRight size={18} className={styles.serviceRowArrow} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Browser + Phone Mockup Showcase */}
          <div className={styles.previewStageWrap}>
            <div className={styles.previewCardFrame}>
              <Image
                src={currentService.mockupImage}
                alt={currentService.title}
                width={960}
                height={680}
                priority
                className={styles.previewMockupImage}
              />
            </div>

            <div className={styles.previewCaptionRow}>
              <span className={styles.previewCategoryText}>
                {currentService.category}
              </span>
              <button
                className={styles.previewActionLink}
                onClick={() => onSelectScope(currentService.scope)}
              >
                <span>{currentService.linkText}</span>
                <ArrowUpRight size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Help Bar */}
        <div className={styles.bottomHelpBar}>
          <div className={styles.bottomHelpText}>
            <span className={styles.helpStrong}>Not sure which architecture fits?</span>
            <span className={styles.helpDivider}>|</span>
            <span className={styles.helpSub}>We map your data schemas and sprint milestones in a 20-minute discussion.</span>
          </div>

          <button
            className={styles.helpCtaBtn}
            onClick={() => onSelectScope("General Consultation & System Roadmap")}
          >
            <span>Schedule Architecture Discovery</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
