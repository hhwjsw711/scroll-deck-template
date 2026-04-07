"use client";

import { useRef, useState, useCallback, useEffect, type ReactNode } from "react";
import styles from "./deck.module.css";

interface DeckProps {
  children: ReactNode;
}

export function Deck({ children }: DeckProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  // Count sections
  const slideCount = useRef(0);

  const handleScroll = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const scrollTop = wrapper.scrollTop;
    const scrollHeight = wrapper.scrollHeight - wrapper.clientHeight;
    if (scrollHeight <= 0) return;

    setProgress((scrollTop / scrollHeight) * 100);

    const sections = wrapper.querySelectorAll(":scope > section");
    slideCount.current = sections.length;
    let active = 0;
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      if (rect.top - wrapperRect.top < 0.5 * wrapper.clientHeight) {
        active = index;
      }
    });
    setCurrentSlide(active);
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const sections = wrapper.querySelectorAll(":scope > section");
    sections[index]?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const goNext = useCallback(() => {
    if (currentSlide < slideCount.current - 1) scrollToSlide(currentSlide + 1);
  }, [currentSlide, scrollToSlide]);

  const goPrev = useCallback(() => {
    if (currentSlide > 0) scrollToSlide(currentSlide - 1);
  }, [currentSlide, scrollToSlide]);

  // Scroll listener
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    wrapper.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => wrapper.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const total = slideCount.current || 1;

  return (
    <div className={styles.container}>
      {/* Progress bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      {/* Navigation pill */}
      <nav className={styles.nav}>
        <button
          className={`${styles.arrow} ${currentSlide === 0 ? styles.arrowDisabled : ""}`}
          onClick={goPrev}
          aria-label="上一页"
        >
          ↑
        </button>
        <div className={styles.counter}>
          {currentSlide + 1} / {total}
        </div>
        <button
          className={`${styles.arrow} ${currentSlide >= total - 1 ? styles.arrowDisabled : ""}`}
          onClick={goNext}
          aria-label="下一页"
        >
          ↓
        </button>
      </nav>

      {/* Slides wrapper */}
      <div className={styles.wrapper} ref={wrapperRef}>
        {children}
      </div>
    </div>
  );
}
