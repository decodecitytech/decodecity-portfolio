"use client";

import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ExternalLink,
  X,
  Play,
  Check,
  Copy,
  Sparkles,
  Globe,
  Layers,
  Cpu,
  Eye,
} from "lucide-react";
import { PortfolioProject } from "../data/types";
import { PORTFOLIO_PROJECTS } from "../data/siteData";
import styles from "./WorkSection.module.css";

// Filter Category Definitions
const FILTER_TABS = [
  { id: "all", label: "All Projects" },
  { id: "commerce", label: "Commerce & Retail" },
  { id: "fashion", label: "Luxury & Fashion" },
  { id: "architecture", label: "Architecture & Estates" },
  { id: "creative", label: "Creative & Media" },
] as const;

type FilterTabId = (typeof FILTER_TABS)[number]["id"];

function getProjectFilterGroup(project: PortfolioProject): FilterTabId {
  const cat = (project.category || "").toLowerCase();
  const id = project.id.toLowerCase();

  if (
    cat.includes("commerce") ||
    cat.includes("store") ||
    cat.includes("apothecary") ||
    id.includes("air-walk") ||
    id.includes("botanical")
  ) {
    if (cat.includes("couture") || cat.includes("denim") || cat.includes("jewellery")) {
      return "fashion";
    }
    return "commerce";
  }

  if (
    cat.includes("fashion") ||
    cat.includes("couture") ||
    cat.includes("denim") ||
    cat.includes("jewellery") ||
    cat.includes("haute") ||
    id.includes("tiyara") ||
    id.includes("atelier") ||
    id.includes("icarus")
  ) {
    return "fashion";
  }

  if (
    cat.includes("infrastructure") ||
    cat.includes("construction") ||
    cat.includes("architecture") ||
    cat.includes("estate") ||
    cat.includes("residential") ||
    cat.includes("illumination") ||
    cat.includes("villas")
  ) {
    return "architecture";
  }

  return "creative";
}

interface WorkSectionProps {
  onInquiry?: (scope: string) => void;
  styles?: Record<string, string>;
}

export function WorkSection({ onInquiry }: WorkSectionProps) {
  const allProjects = PORTFOLIO_PROJECTS;
  const [activeFilter, setActiveFilter] = useState<FilterTabId>("all");
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalProject, setModalProject] = useState<PortfolioProject | null>(null);
  const [copiedUrl, setCopiedUrl] = useState(false);

  // Filtered project list
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return allProjects;
    return allProjects.filter((p) => getProjectFilterGroup(p) === activeFilter);
  }, [activeFilter, allProjects]);

  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update scroll bounds and active index based on scroll position
  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Compute closest card
    const cardElements = el.querySelectorAll<HTMLElement>("[data-card-index]");
    if (cardElements.length === 0) return;

    let closestIdx = 0;
    let minDistance = Infinity;
    const trackCenter = scrollLeft + clientWidth / 2;

    cardElements.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(trackCenter - cardCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = i;
      }
    });

    setActiveIdx(closestIdx);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const handleScroll = () => updateScrollState();
    el.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollState();

    return () => el.removeEventListener("scroll", handleScroll);
  }, [filteredProjects, updateScrollState]);

  // Reset scroll position on filter change
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
      setActiveIdx(0);
    }
  }, [activeFilter]);

  // Smooth Navigation Controls
  const scrollToCard = useCallback((index: number) => {
    const el = trackRef.current;
    if (!el) return;

    const cards = el.querySelectorAll<HTMLElement>("[data-card-index]");
    if (cards[index]) {
      const targetCard = cards[index];
      const targetLeft = targetCard.offsetLeft - 28;
      el.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
    }
  }, []);

  const handlePrev = () => {
    if (activeIdx > 0) {
      scrollToCard(activeIdx - 1);
    }
  };

  const handleNext = () => {
    if (activeIdx < filteredProjects.length - 1) {
      scrollToCard(activeIdx + 1);
    }
  };

  // Mouse drag-to-scroll functionality (smooth, non-intrusive)
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const el = trackRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const el = trackRef.current;
    if (el) {
      el.style.cursor = "grab";
      el.style.removeProperty("user-select");
    }
  };

  // Modal handlers
  const handleOpenModal = (project: PortfolioProject) => {
    setModalProject(project);
    setCopiedUrl(false);
  };

  const handleCloseModal = () => {
    setModalProject(null);
  };

  const handleCopyModalUrl = () => {
    if (!modalProject || typeof navigator === "undefined" || !navigator.clipboard) return;
    navigator.clipboard.writeText(modalProject.websiteUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const handleModalNext = () => {
    if (!modalProject) return;
    const currentI = allProjects.findIndex((p) => p.id === modalProject.id);
    const nextI = (currentI + 1) % allProjects.length;
    setModalProject(allProjects[nextI]);
    setCopiedUrl(false);
  };

  const handleModalPrev = () => {
    if (!modalProject) return;
    const currentI = allProjects.findIndex((p) => p.id === modalProject.id);
    const prevI = (currentI - 1 + allProjects.length) % allProjects.length;
    setModalProject(allProjects[prevI]);
    setCopiedUrl(false);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalProject) return;
      if (e.key === "Escape") handleCloseModal();
      if (e.key === "ArrowRight") handleModalNext();
      if (e.key === "ArrowLeft") handleModalPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalProject, handleModalNext, handleModalPrev]);

  // Clean domain display helper
  const getCleanDomain = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.hostname.replace("www.", "");
    } catch {
      return url;
    }
  };

  return (
    <section id="work" className={styles.workSection} aria-label="Selected Projects">
      {/* Subtle theme-matched ambient radial glow */}
      <div className={styles.ambientGlow} />

      <div className="main-canvas">
        {/* ====================================================================
            1. TOP EDITORIAL HEADER
            ==================================================================== */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <div className={styles.editorialEyebrow}>
              <span className={styles.eyebrowNum}>02 //</span>
              <span>SELECTED WORK</span>
            </div>
            <h2 className={styles.mainHeading}>
              Selected Projects. <br />
              <span className={styles.headingAccent}>Production systems & stores.</span>
            </h2>
            <p className={styles.supportingText}>
              Every platform is custom-built with sub-second page loads, headless architectures, and conversion-focused interaction design.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className={styles.headerRight}>
            <div className={styles.counterBadge}>
              <span className={styles.counterCurrent}>
                {String(activeIdx + 1).padStart(2, "0")}
              </span>
              <span className={styles.counterDivider}>/</span>
              <span className={styles.counterTotal}>
                {String(filteredProjects.length).padStart(2, "0")}
              </span>
            </div>

            <div className={styles.navButtonsGroup}>
              <button
                type="button"
                className={styles.navBtn}
                onClick={handlePrev}
                disabled={!canScrollLeft}
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className={styles.navBtn}
                onClick={handleNext}
                disabled={!canScrollRight}
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* ====================================================================
            2. CATEGORY FILTER TABS
            ==================================================================== */}
        <div className={styles.filterTabsRow}>
          {FILTER_TABS.map((tab) => {
            const count =
              tab.id === "all"
                ? allProjects.length
                : allProjects.filter((p) => getProjectFilterGroup(p) === tab.id).length;

            return (
              <button
                key={tab.id}
                type="button"
                className={`${styles.filterPill} ${activeFilter === tab.id ? styles.activeFilterPill : ""}`}
                onClick={() => setActiveFilter(tab.id)}
              >
                <span>{tab.label}</span>
                <span className={styles.filterCount}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* ====================================================================
            3. SMOOTH KINETIC PROJECT CAROUSEL TRACK
            ==================================================================== */}
        <div className={styles.carouselContainer}>
          <div
            ref={trackRef}
            className={styles.carouselTrack}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
          >
            {filteredProjects.map((project, idx) => {
              const isCenter = idx === activeIdx;
              const cleanDomain = getCleanDomain(project.websiteUrl);

              return (
                <article
                  key={project.id}
                  data-card-index={idx}
                  className={`${styles.projectCard} ${isCenter ? styles.projectCardActive : ""}`}
                >
                  {/* Browser Chrome Header */}
                  <div className={styles.cardBrowserHeader}>
                    <div className={styles.browserDots}>
                      <span className={`${styles.dot} ${styles.dotRed}`} />
                      <span className={`${styles.dot} ${styles.dotYellow}`} />
                      <span className={`${styles.dot} ${styles.dotGreen}`} />
                    </div>

                    <div className={styles.browserAddressBar} title={project.websiteUrl}>
                      <Globe size={11} className={styles.addressIcon} />
                      <span className={styles.addressText}>{cleanDomain}</span>
                    </div>

                    <div className={styles.statusPill}>
                      <span className={styles.statusPulseDot} />
                      <span>{project.isYouTube ? "VIDEO" : "LIVE"}</span>
                    </div>
                  </div>

                  {/* Project Image Frame */}
                  <div
                    className={styles.cardVisualWrap}
                    onClick={() => handleOpenModal(project)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View details of ${project.name}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleOpenModal(project);
                      }
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={640}
                      height={400}
                      priority={idx < 2}
                      className={styles.cardVisualImage}
                    />

                    {/* Gradient Overlay for visual depth */}
                    <div className={styles.cardImageOverlay} />

                    {/* Hover Inspect Pill */}
                    <div className={styles.hoverInspectPill}>
                      <Eye size={14} />
                      <span>Quick View & Specs</span>
                    </div>

                    {/* Index Pill in Corner */}
                    <div className={styles.cardIndexCorner}>
                      <span>{String(idx + 1).padStart(2, "0")}</span>
                    </div>
                  </div>

                  {/* Card Content & Meta */}
                  <div className={styles.cardBody}>
                    <div className={styles.cardMetaRow}>
                      <span className={styles.categoryBadge}>{project.category}</span>
                    </div>

                    <h3 className={styles.projectTitle}>{project.name}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>

                    {/* Tags row */}
                    <div className={styles.cardTagsRow}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.tagPill}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Bar */}
                    <div className={styles.cardActionsRow}>
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.liveLaunchBtn}
                        onClick={(e) => e.stopPropagation()}
                        id={`launch-site-${project.id}`}
                      >
                        <span>{project.isYouTube ? "Watch Showcase" : "Open Live Site"}</span>
                        {project.isYouTube ? (
                          <Play size={13} fill="currentColor" />
                        ) : (
                          <ArrowUpRight size={14} />
                        )}
                      </a>

                      <button
                        type="button"
                        className={styles.detailsModalBtn}
                        onClick={() => handleOpenModal(project)}
                        aria-label={`Detailed specifications for ${project.name}`}
                      >
                        <span>Specs & Details</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ====================================================================
            4. SCRUBBAR & QUICK JUMP TRACK
            ==================================================================== */}
        <div className={styles.trackFooter}>
          <div className={styles.trackScrubberWrap}>
            <div
              className={styles.trackScrubberFill}
              style={{
                width: `${((activeIdx + 1) / Math.max(1, filteredProjects.length)) * 100}%`,
              }}
            />
          </div>

          <div className={styles.trackQuickHint}>
            <span className={styles.quickHintText}>
              Drag smoothly or swipe trackpad to explore all {filteredProjects.length} projects
            </span>
          </div>
        </div>
      </div>

      {/* ====================================================================
          5. STUDIO PROJECT INSPECTION MODAL (DEEP DIVE SPOTLIGHT)
          ==================================================================== */}
      {modalProject && (
        <div
          className={styles.modalBackdrop}
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className={styles.modalContainer}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <div className={styles.modalCategoryRow}>
                  <span className={styles.modalIndexPill}>
                    {modalProject.index || "01"}
                  </span>
                  <span className={styles.modalCategoryTag}>
                    {modalProject.category}
                  </span>
                </div>
                <h3 id="modal-project-title" className={styles.modalTitle}>
                  {modalProject.name}
                </h3>
              </div>

              <div className={styles.modalHeaderRight}>
                <div className={styles.modalNavButtons}>
                  <button
                    type="button"
                    className={styles.modalArrowBtn}
                    onClick={handleModalPrev}
                    aria-label="Previous project in spotlight"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    className={styles.modalArrowBtn}
                    onClick={handleModalNext}
                    aria-label="Next project in spotlight"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <button
                  type="button"
                  className={styles.modalCloseBtn}
                  onClick={handleCloseModal}
                  aria-label="Close project modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className={styles.modalBody}>
              {/* Visual Showcase Box */}
              <div className={styles.modalVisualStage}>
                <div className={styles.modalBrowserBar}>
                  <div className={styles.browserDots}>
                    <span className={`${styles.dot} ${styles.dotRed}`} />
                    <span className={`${styles.dot} ${styles.dotYellow}`} />
                    <span className={`${styles.dot} ${styles.dotGreen}`} />
                  </div>
                  <div className={styles.modalAddressPill}>
                    <Globe size={12} />
                    <span>{getCleanDomain(modalProject.websiteUrl)}</span>
                  </div>
                  <button
                    type="button"
                    className={styles.copyUrlBtn}
                    onClick={handleCopyModalUrl}
                    title="Copy project URL"
                  >
                    {copiedUrl ? <Check size={12} color="#16A34A" /> : <Copy size={12} />}
                    <span>{copiedUrl ? "Copied" : "Copy URL"}</span>
                  </button>
                </div>

                <div className={styles.modalImageWrapper}>
                  <Image
                    src={modalProject.image}
                    alt={modalProject.name}
                    width={960}
                    height={540}
                    priority
                    className={styles.modalImage}
                  />
                </div>
              </div>

              {/* Specifications & Overview Grid */}
              <div className={styles.modalDetailsGrid}>
                {/* Left: Editorial Description */}
                <div className={styles.modalDescCol}>
                  <h4 className={styles.modalSectionSubhead}>Executive Overview</h4>
                  <p className={styles.modalParagraph}>{modalProject.description}</p>

                  <div className={styles.modalTagsWrap}>
                    <span className={styles.techStackLabel}>Engineered With:</span>
                    <div className={styles.tagsFlex}>
                      {modalProject.tags.map((tag) => (
                        <span key={tag} className={styles.modalTagChip}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Technical Deliverables & Quick Actions */}
                <div className={styles.modalSpecsCol}>
                  <div className={styles.specsCard}>
                    <div className={styles.specItem}>
                      <div className={styles.specIconWrap}>
                        <Layers size={16} />
                      </div>
                      <div className={styles.specContent}>
                        <span className={styles.specLabel}>Architecture</span>
                        <span className={styles.specValue}>Next.js / Headless / Edge</span>
                      </div>
                    </div>

                    <div className={styles.specItem}>
                      <div className={styles.specIconWrap}>
                        <Cpu size={16} />
                      </div>
                      <div className={styles.specContent}>
                        <span className={styles.specLabel}>Performance</span>
                        <span className={styles.specValue}>Sub-0.4s TTFB & 99+ Speed</span>
                      </div>
                    </div>

                    <div className={styles.specItem}>
                      <div className={styles.specIconWrap}>
                        <Sparkles size={16} />
                      </div>
                      <div className={styles.specContent}>
                        <span className={styles.specLabel}>Deployment</span>
                        <span className={styles.specValue}>Live Production Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Primary CTA Buttons */}
                  <div className={styles.modalCtaGroup}>
                    <a
                      href={modalProject.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.modalPrimaryLaunchBtn}
                    >
                      <span>{modalProject.isYouTube ? "Watch Full Showcase" : "Launch Live Website"}</span>
                      <ExternalLink size={15} />
                    </a>

                    {onInquiry && (
                      <button
                        type="button"
                        className={styles.modalScopeBtn}
                        onClick={() => {
                          handleCloseModal();
                          onInquiry(`Project Scope: Similar to ${modalProject.name}`);
                        }}
                      >
                        <span>Build Similar Project</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
