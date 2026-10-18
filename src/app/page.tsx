"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { BuildingId } from "../data/types";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { TechMarquee } from "../components/TechMarquee";
import { WorkSection } from "../components/WorkSection";
import { ProcessSection } from "../components/ProcessSection";
import { PricingSection } from "../components/PricingSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ProjectModal } from "../components/ProjectModal";

export default function Home() {
  // Navigation & Modal State
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Modal Form State
  const [formData, setFormData] = useState({ name: "", email: "", scope: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Section Interaction States
  const [hoveredBuilding, setHoveredBuilding] = useState<BuildingId | null>(null);
  const [selectedServiceIdx, setSelectedServiceIdx] = useState(0);
  const [pricingCurrency, setPricingCurrency] = useState<"INR" | "USD" | "EUR">("INR");
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);

  // Contact Form State
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "01 Web & Products",
    budget: "₹49,000 — ₹95,000 / MVP Sprint",
    details: "",
  });
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [contactFormSubmitting, setContactFormSubmitting] = useState(false);
  const [contactFormError, setContactFormError] = useState<string | null>(null);
  const [selectedCityDistrict, setSelectedCityDistrict] = useState(0);

  // Dynamic Island Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handlers
  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("decodecitytech@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2200);
    }
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormError(null);
    try {
      const res = await fetch("https://formspree.io/f/xeaedrej", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          formType: "Modal: Architecture Brief & Scoping",
          name: formData.name,
          email: formData.email,
          message: formData.scope,
          scope: formData.scope,
        }),
      });

      if (res.ok) {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setIsModalOpen(false);
          setFormData({ name: "", email: "", scope: "" });
        }, 3000);
      } else {
        const data = await res.json().catch(() => null);
        setFormError(data?.error || "Submission error. Please try again.");
      }
    } catch {
      setFormError("Network error. Please try again or reach out via email.");
    } finally {
      setFormSubmitting(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactFormSubmitting(true);
    setContactFormError(null);
    try {
      const res = await fetch("https://formspree.io/f/xeaedrej", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          formType: "Studio & Project Configurator",
          name: contactFormData.name,
          email: contactFormData.email,
          phone: contactFormData.phone,
          category: contactFormData.category,
          budget: contactFormData.budget,
          message: contactFormData.details,
          details: contactFormData.details,
        }),
      });

      if (res.ok) {
        setContactFormSubmitted(true);
        setTimeout(() => {
          setContactFormSubmitted(false);
          setContactFormData({
            name: "",
            email: "",
            phone: "",
            category: "01 Web & Products",
            budget: "₹49,000 — ₹95,000 / MVP Sprint",
            details: "",
          });
        }, 5000);
      } else {
        const data = await res.json().catch(() => null);
        setContactFormError(data?.error || "Submission error. Please try again.");
      }
    } catch {
      setContactFormError("Network error. Please try again or reach out via email.");
    } finally {
      setContactFormSubmitting(false);
    }
  };

  const navItems = ["Services", "Work", "Process", "Pricing", "Reviews", "Contact"];

  const handleNavClick = (item: string) => {
    setIsMobileMenuOpen(false);
    const idMap: Record<string, string> = {
      Services: "services",
      Work: "work",
      Process: "process",
      Pricing: "pricing",
      Reviews: "testimonials",
      Contact: "contact",
    };
    const targetId = idMap[item];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setIsModalOpen(true);
    }
  };

  const handleOpenModalWithScope = (scope?: string) => {
    if (scope) {
      setFormData((prev) => ({ ...prev, scope }));
    }
    setIsModalOpen(true);
  };

  return (
    <div className={styles.pageContainer}>
      {/* 1. Floating Dynamic Island Navigation */}
      <Navbar
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onNavClick={handleNavClick}
        onOpenModal={() => setIsModalOpen(true)}
        navItems={navItems}
        styles={styles}
      />

      {/* 2. Hero Section with Interactive 3D Metropolis & Discipline Strip */}
      <HeroSection
        hoveredBuilding={hoveredBuilding}
        setHoveredBuilding={setHoveredBuilding}
        onStartProject={handleOpenModalWithScope}
        styles={styles}
      />

      {/* 3. What We Build / Services */}
      <ServicesSection
        selectedServiceIdx={selectedServiceIdx}
        setSelectedServiceIdx={setSelectedServiceIdx}
        onSelectScope={handleOpenModalWithScope}
        styles={styles}
      />

      {/* 4. Rotating Tech Marquee */}
      <TechMarquee styles={styles} />

      {/* 5. Selected Work & Parallax Showcase */}
      <WorkSection
        onInquiry={handleOpenModalWithScope}
        styles={styles}
      />

      {/* 6. Interactive Process Timeline */}
      <ProcessSection
        activeProcessStep={activeProcessStep}
        setActiveProcessStep={setActiveProcessStep}
        onStartProject={handleOpenModalWithScope}
        styles={styles}
      />

      {/* 7. Tailored Fixed-Milestone Pricing */}
      <PricingSection
        pricingCurrency={pricingCurrency}
        setPricingCurrency={setPricingCurrency}
        onSelectPlan={handleOpenModalWithScope}
        styles={styles}
      />

      {/* 8. Luxury Client Testimonials */}
      <TestimonialsSection
        activeTestimonialIdx={activeTestimonialIdx}
        setActiveTestimonialIdx={setActiveTestimonialIdx}
        styles={styles}
      />

      {/* 9. Apple-Grade Studio Hub & Project Configurator */}
      <ContactSection
        emailCopied={emailCopied}
        onCopyEmail={handleCopyEmail}
        contactFormData={contactFormData}
        setContactFormData={setContactFormData}
        contactFormSubmitted={contactFormSubmitted}
        contactFormSubmitting={contactFormSubmitting}
        contactFormError={contactFormError}
        selectedCityDistrict={selectedCityDistrict}
        setSelectedCityDistrict={setSelectedCityDistrict}
        onSubmitContact={handleContactSubmit}
        onOpenModal={() => setIsModalOpen(true)}
        styles={styles}
      />

      {/* 10. Minimalist Studio Footer */}
      <Footer onNavClick={handleNavClick} styles={styles} />

      {/* 11. Slide-Over Project Inquiry Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        setFormData={setFormData}
        formSubmitted={formSubmitted}
        formSubmitting={formSubmitting}
        formError={formError}
        onSubmit={handleModalSubmit}
        styles={styles}
      />
    </div>
  );
}
