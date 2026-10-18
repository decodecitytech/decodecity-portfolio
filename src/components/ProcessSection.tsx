import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Search, Radio, Clock, Code2 } from "lucide-react";
import { NEX_PROCESS_STEPS } from "../data/siteData";

interface ProcessSectionProps {
  activeProcessStep: number;
  setActiveProcessStep: React.Dispatch<React.SetStateAction<number>>;
  onStartProject: (scope: string) => void;
  styles: Record<string, string>;
}

export function ProcessSection({
  activeProcessStep,
  setActiveProcessStep,
  onStartProject,
  styles,
}: ProcessSectionProps) {
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.45;
      let currentActiveIdx = -1;

      const processSection = document.getElementById("process");
      if (processSection) {
        const pRect = processSection.getBoundingClientRect();
        if (pRect.bottom > 80 && pRect.top < windowHeight - 80) {
          currentActiveIdx = 0;

          timelineItemRefs.current.forEach((el, idx) => {
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= triggerPoint) {
                currentActiveIdx = idx;
              }
            }
          });

          setActiveProcessStep((prev) => (prev !== currentActiveIdx ? currentActiveIdx : prev));
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveProcessStep]);

  const currentStep = NEX_PROCESS_STEPS[activeProcessStep];

  return (
    <section id="process" className={styles.processSection}>
      <div className="main-canvas">
        <div className={styles.processGrid}>
          {/* Left Column: Sticky Stage matching Screenshot 1 */}
          <div className={styles.processStickyCol}>
            <div className={styles.processStepTag}>
              <span className={styles.processStepTagDot} />
              <span>{currentStep.stepTag}</span>
            </div>
            <h2 className={styles.processMainTitle}>
              {currentStep.title}
            </h2>
            <p className={styles.processMainDesc}>
              {currentStep.longDesc}
            </p>
            <button
              type="button"
              className={styles.processStartLink}
              onClick={() => {
                onStartProject(`Inquiry: Step ${currentStep.step} - ${currentStep.title}`);
              }}
            >
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </button>

            <div className={styles.processStickyPreview}>
              {NEX_PROCESS_STEPS.map((step, idx) => (
                <Image
                  key={step.step}
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 440px"
                  priority={idx === 0}
                  className={`${styles.processPreviewImg} ${
                    activeProcessStep === idx ? styles.activePreviewImg : styles.hiddenPreviewImg
                  }`}
                />
              ))}
              <div className={styles.processPreviewOverlay} />
            </div>
          </div>

          {/* Right Column: Connected Timeline */}
          <div className={styles.processTimelineCol}>
            <div className={styles.processTimelineLine} />
            {NEX_PROCESS_STEPS.map((step, idx) => {
              const isActive = activeProcessStep === idx;
              return (
                <div
                  key={step.step}
                  ref={(el) => {
                    timelineItemRefs.current[idx] = el;
                  }}
                  className={`${styles.processTimelineItem} ${
                    isActive ? styles.activeTimelineItem : ""
                  }`}
                  onClick={() => setActiveProcessStep(idx)}
                >
                  <div
                    className={`${styles.processNodeNumber} ${
                      isActive ? styles.activeProcessNode : ""
                    }`}
                  >
                    {step.step}
                  </div>
                  {isActive && <div className={styles.processNodeConnectingLine} />}
                  <div
                    className={`${styles.processCardBox} ${
                      isActive ? styles.activeProcessCardBox : ""
                    }`}
                  >
                    <div className={styles.processCardTextSide}>
                      <h3 className={styles.processCardTitle}>{step.title}</h3>
                      <p className={styles.processCardDesc}>{step.cardDesc}</p>
                    </div>
                    <div className={styles.processCardIconWrap}>
                      {step.icon === "search" && <Search size={18} />}
                      {step.icon === "strategy" && <Radio size={18} />}
                      {step.icon === "design" && <Clock size={18} />}
                      {step.icon === "develop" && <Code2 size={18} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
