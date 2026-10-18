import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { BuildingId } from "../data/types";
import { BUILDINGS } from "../data/siteData";

interface HeroSectionProps {
  hoveredBuilding: BuildingId | null;
  setHoveredBuilding: (b: BuildingId | null) => void;
  onStartProject: (scope?: string) => void;
  styles: Record<string, string>;
}

export function HeroSection({
  hoveredBuilding,
  setHoveredBuilding,
  onStartProject,
  styles,
}: HeroSectionProps) {
  const activeBuilding = BUILDINGS.find((b) => b.id === hoveredBuilding);

  return (
    <main className={styles.heroSection}>
      <div className="main-canvas">
        <div className={styles.heroContentGrid}>
          {/* Left Content Column */}
          <div className={styles.heroLeft}>
            <div className={styles.eyebrowStudio}>
              <span className={styles.pulseActiveDot} />
              <span>INDEPENDENT TECHNOLOGY STUDIO</span>
            </div>

            <h1 className={styles.heroHeadline}>
              We engineer <br />
              software <br />
              that powers <br />
              <span className={styles.heroOrangeText}>real business.</span>
            </h1>

            <p className={styles.heroSubtext}>
              From high-converting web applications and headless storefronts to custom CRMs and automated workflow engines—we engineer fast, rock-solid software that scales your bottom line.
            </p>

            <div className={styles.heroActions}>
              <button
                onClick={() => onStartProject()}
                className={styles.btnStartProject}
                id="hero-start-project-btn"
              >
                <span>Start a project</span>
                <ArrowUpRight size={17} />
              </button>

              <button
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={styles.btnExploreServices}
                id="hero-explore-services-btn"
              >
                <span>Explore services</span>
                <ArrowDown size={16} />
              </button>
            </div>

            {/* Trust Metric Strip */}
            <div className={styles.heroTrustStrip}>
              <div className={styles.trustItem}>
                <div className={styles.trustValRow}>
                  <span className={styles.trustDot} />
                  <span className={styles.trustVal}>14-Day</span>
                </div>
                <span className={styles.trustLbl}>MVP Delivery</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <div className={styles.trustValRow}>
                  <span className={styles.trustDot} />
                  <span className={styles.trustVal}>99.9%</span>
                </div>
                <span className={styles.trustLbl}>Uptime SLA</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <div className={styles.trustValRow}>
                  <span className={styles.trustDot} />
                  <span className={styles.trustVal}>Zero</span>
                </div>
                <span className={styles.trustLbl}>Tech Debt</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column — Interactive Seamless 3D Metropolis Stage */}
          <div className={styles.heroRightContainer}>
            <div className={styles.heroArtStage}>
              {/* 0. Ambient Depth Glow behind 3D visual */}
              <div className={styles.heroBackdropGlow} />

              {/* 1. Base Unbroken Master Image */}
              <Image
                src="/hero_right.png"
                alt="DecodeCity Interconnected Systems Architecture"
                fill
                priority
                className={`${styles.cityBaseLayer} ${hoveredBuilding ? styles.blurredBase : ""}`}
              />

              {/* 2. Precision Interactive HUD, Focus Lens & Sector Beacon */}
              {activeBuilding && (
                <>
                  {/* Ambient Under-Glow Floor Halo */}
                  <div
                    className={styles.sectorAmbientGlow}
                    style={{
                      background: `radial-gradient(circle 280px at ${activeBuilding.centerX} ${activeBuilding.centerY}, ${activeBuilding.accentColor}25 0%, ${activeBuilding.accentColor}08 45%, transparent 75%)`,
                    }}
                  />

                  {/* Razor-Sharp Optical Focus Layer */}
                  <div
                    className={styles.focusLayer}
                    style={{
                      WebkitMaskImage: `radial-gradient(ellipse 40% 42% at ${activeBuilding.centerX} ${activeBuilding.centerY}, black 35%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.2) 85%, transparent 100%)`,
                      maskImage: `radial-gradient(ellipse 40% 42% at ${activeBuilding.centerX} ${activeBuilding.centerY}, black 35%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.2) 85%, transparent 100%)`,
                    }}
                  >
                    <Image
                      src="/hero_right.png"
                      alt={activeBuilding.name}
                      fill
                      priority
                      className={styles.focusImage}
                    />
                  </div>

                  {/* Interactive Radar Beacon directly at sector hub */}
                  <div
                    className={styles.targetReticle}
                    style={{
                      left: activeBuilding.centerX,
                      top: activeBuilding.centerY,
                    }}
                  >
                    <span
                      className={styles.reticlePulse}
                      style={{ borderColor: activeBuilding.accentColor }}
                    />
                    <span
                      className={styles.reticleDot}
                      style={{
                        backgroundColor: activeBuilding.accentColor,
                        boxShadow: `0 0 16px ${activeBuilding.accentColor}`,
                      }}
                    />
                  </div>

                  {/* Floating Apple-Grade Micro-HUD Badge */}
                  <div
                    className={styles.interactiveHudBadge}
                    style={{
                      left: activeBuilding.hudLeft,
                      top: activeBuilding.hudTop,
                    }}
                  >
                    <div
                      className={styles.hudBadgeDot}
                      style={{
                        background: activeBuilding.accentColor,
                        boxShadow: `0 0 12px ${activeBuilding.accentColor}`,
                      }}
                    />
                    <div className={styles.hudBadgeContent}>
                      <span className={styles.hudBadgeCode}>{activeBuilding.code}</span>
                      <span className={styles.hudBadgeTitle}>{activeBuilding.title}</span>
                      <span className={styles.hudBadgeMetric}>{activeBuilding.metric}</span>
                    </div>
                  </div>
                </>
              )}

              {/* 3. SVG Precision Hotspots Overlay */}
              <svg
                viewBox="0 0 1536 1024"
                className={styles.hotspotsSvg}
                aria-label="Interactive City Hotspots"
              >
                {BUILDINGS.map((b) => (
                  <polygon
                    key={b.id}
                    points={b.points}
                    className={styles.hotspotPolygon}
                    onMouseEnter={() => setHoveredBuilding(b.id)}
                    onMouseLeave={() => setHoveredBuilding(null)}
                    onClick={() => onStartProject(b.scopeText)}
                  >
                    <title>{b.name}</title>
                  </polygon>
                ))}
              </svg>
            </div>

            <div className={styles.heroArtCaption}>
              <span>Connected systems. Clearer possibilities.</span>
            </div>
          </div>
        </div>

        {/* Discipline Strip Interactively Linked to 3D Buildings */}
        <div className={styles.disciplineStrip}>
          <div
            className={`${styles.disciplineCol} ${hoveredBuilding === "web" ? styles.activeCol : ""}`}
            onMouseEnter={() => setHoveredBuilding("web")}
            onMouseLeave={() => setHoveredBuilding(null)}
            onClick={() => onStartProject("Web & Product Platform")}
          >
            <span className={styles.disciplineNum}>01</span>
            <span className={styles.disciplineName}>Web &amp; product</span>
          </div>

          <div
            className={`${styles.disciplineCol} ${hoveredBuilding === "crm" ? styles.activeCol : ""}`}
            onMouseEnter={() => setHoveredBuilding("crm")}
            onMouseLeave={() => setHoveredBuilding(null)}
            onClick={() => onStartProject("CRM & Systems Architecture")}
          >
            <span className={styles.disciplineNum}>02</span>
            <span className={styles.disciplineName}>CRM &amp; systems</span>
          </div>

          <div
            className={`${styles.disciplineCol} ${hoveredBuilding === "automation" ? styles.activeCol : ""}`}
            onMouseEnter={() => setHoveredBuilding("automation")}
            onMouseLeave={() => setHoveredBuilding(null)}
            onClick={() => onStartProject("Autonomous Workflows & Automation")}
          >
            <span className={styles.disciplineNum}>03</span>
            <span className={styles.disciplineName}>Automation</span>
          </div>

          <div
            className={`${styles.disciplineCol} ${hoveredBuilding === "cloud" ? styles.activeCol : ""}`}
            onMouseEnter={() => setHoveredBuilding("cloud")}
            onMouseLeave={() => setHoveredBuilding(null)}
            onClick={() => onStartProject("Cloud Fabric & Infrastructure")}
          >
            <span className={styles.disciplineNum}>04</span>
            <span className={styles.disciplineName}>Cloud &amp; data</span>
          </div>

          <div
            className={`${styles.disciplineCol} ${hoveredBuilding === "analytics" ? styles.activeCol : ""}`}
            onMouseEnter={() => setHoveredBuilding("analytics")}
            onMouseLeave={() => setHoveredBuilding(null)}
            onClick={() => onStartProject("Telemetry & Executive Dashboards")}
          >
            <span className={styles.disciplineNum}>05</span>
            <span className={styles.disciplineName}>Telemetry &amp; BI</span>
          </div>
        </div>
      </div>
    </main>
  );
}
