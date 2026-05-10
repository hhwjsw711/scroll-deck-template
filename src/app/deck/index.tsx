"use client";

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { QRCodeSVG } from "qrcode.react";
import styles from "./deck.module.css";

interface DeckProps {
  children: ReactNode;
}

function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <>
      <button
        className={`${styles.shareButton} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="分享"
      >
        🔗
      </button>
      {isOpen && (
        <div className={styles.sharePopup}>
          <div className={styles.shareLabel}>扫码或复制链接访问</div>
          <div className={styles.qrContainer}>
            <QRCodeSVG value={url} size={140} />
          </div>
          <div className={styles.urlRow}>
            <input
              className={styles.urlText}
              value={url}
              readOnly
              onClick={(e) => (e.target as HTMLInputElement).select()}
            />
            <button className={styles.copyBtn} onClick={handleCopy}>
              {copied ? "已复制" : "复制"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function Deck({ children }: DeckProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [totalSlides, setTotalSlides] = useState(1);
  const slideCountRef = useRef(0);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const touchStartTime = useRef(0);

  const handleScroll = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const scrollTop = wrapper.scrollTop;
    const scrollHeight = wrapper.scrollHeight - wrapper.clientHeight;
    if (scrollHeight <= 0) return;

    setProgress((scrollTop / scrollHeight) * 100);

    const sections = wrapper.querySelectorAll(":scope > section");
    slideCountRef.current = sections.length;
    setTotalSlides(sections.length);
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
    if (currentSlide < slideCountRef.current - 1)
      scrollToSlide(currentSlide + 1);
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

  // Touch/swipe navigation
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
      touchStartTime.current = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      const deltaX = touchStartX.current - e.changedTouches[0].clientX;
      const deltaTime = Date.now() - touchStartTime.current;
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      // Only trigger if vertical swipe is dominant and fast enough
      if (absDeltaY > absDeltaX && absDeltaY > 50 && deltaTime < 500) {
        if (deltaY > 0) {
          goNext();
        } else {
          goPrev();
        }
      }
    };

    wrapper.addEventListener("touchstart", handleTouchStart, { passive: true });
    wrapper.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      wrapper.removeEventListener("touchstart", handleTouchStart);
      wrapper.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  const total = totalSlides || 1;

  return (
    <div className={styles.container}>
      {/* Progress bar */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
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

      {/* Share button */}
      <ShareButton />

      {/* Slides wrapper */}
      <div className={styles.wrapper} ref={wrapperRef}>
        {children}
      </div>
    </div>
  );
}
