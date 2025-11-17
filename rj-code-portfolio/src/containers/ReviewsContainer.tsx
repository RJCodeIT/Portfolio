"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import ReviewCard from "../components/ui/ReviewCard";
import { motion, useSpring, useInView } from "framer-motion";
import { useReviews } from "../const/reviews";
import { useTranslation } from "react-i18next";
import { memo } from "react";

function ReviewsContainerComponent() {
  const { t } = useTranslation("reviews");
  const rawReviews = useReviews();
  
  // stable array
  const reviews = useMemo(() => rawReviews, [rawReviews]);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [colCount, setColCount] = useState(1);
  const [isMobile, setIsMobile] = useState(true);

  const lastMouse = useRef({ x: 0, y: 0 });
  const lastTime = useRef(performance.now());

  // Smooth springs
  const smoothX = useSpring(0.5, { stiffness: 60, damping: 15, mass: 0.8 });
  const smoothY = useSpring(0.5, { stiffness: 60, damping: 15, mass: 0.8 });

  const updateLayout = useCallback(() => {
    const width = window.innerWidth;
    setIsMobile(width < 640);
    setColCount(width >= 1280 ? 4 : width >= 1024 ? 3 : width >= 640 ? 2 : 1);
  }, []);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  useEffect(() => {
    if (isHovered && !isMobile) {
      smoothX.set(mousePos.x);
      smoothY.set(mousePos.y);
    } else {
      smoothX.set(0.5);
      smoothY.set(0.5);
    }
  }, [mousePos, isHovered, isMobile, smoothX, smoothY]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current || !isHovered || isMobile) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const now = performance.now();
      const delta = now - lastTime.current;

      if (delta > 0) {
        const speedX = (Math.abs(x - lastMouse.current.x) / delta) * 600;
        const speedY = (Math.abs(y - lastMouse.current.y) / delta) * 600;

        const cap = 1.2;

        setMouseSpeed({
          x: Math.min(speedX, cap),
          y: Math.min(speedY, cap),
        });
      }

      lastMouse.current = { x, y };
      lastTime.current = now;
      setMousePos({ x, y });
    },
    [isHovered, isMobile]
  );

  const handleMouseEnter = useCallback(() => {
    if (!isMobile) setIsHovered(true);
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMouseSpeed({ x: 0, y: 0 });
  }, []);

  const computeRowData = useMemo(() => {
    const totalRows = Math.ceil(reviews.length / colCount);
    return { totalRows };
  }, [reviews.length, colCount]);

  return (
    <section
      id="reviews"
      className="relative min-h-screen overflow-x-hidden py-20 sm:py-32"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
      aria-label="Opinie klientów o naszych usługach IT"
      itemScope
      itemType="https://schema.org/Review"
    >
      {/* TITLE BACKGROUND */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-[12vw] font-bold text-white/5 select-none tracking-wider" itemProp="name">
          {t("title")}
        </h1>
      </motion.div>

      {/* TITLE + SUBTITLE */}
      <div className="container mx-auto px-4 text-center mb-16 relative z-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          itemProp="headline"
        >
          {t("title")}
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          itemProp="description"
        >
          {t("subtitle")}
        </motion.p>

        <meta itemProp="keywords" content="opinie klientów, referencje, strony internetowe, aplikacje webowe, React, Next.js" />
      </div>

      {/* GRID */}
      <div className="flex items-center justify-center w-full relative z-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-[90vw]">
          {reviews.map((review, index) => {
            const col = index % colCount;
            const row = Math.floor(index / colCount);

            const distanceX = !isMobile ? smoothX.get() - (col + 0.5) / colCount : 0;
            const distanceY = !isMobile ? smoothY.get() - (row + 0.5) / computeRowData.totalRows : 0;

            const dist = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            const angle = Math.atan2(distanceY, distanceX);

            const entryDelay = col * 0.1 + row * 0.1;

            const repulsionBase = 180;
            const speedBoost = Math.max(mouseSpeed.x, mouseSpeed.y) * 100;

            const repulsion =
              !isMobile
                ? (repulsionBase + speedBoost) * Math.max(0, 1 - dist * 1.2)
                : 0;

            return (
              <motion.div
                key={review.name + index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  scale:
                    isInView && !isMobile && isHovered
                      ? 1 + Math.max(0, 0.15 - dist * 0.3)
                      : isInView
                      ? 1
                      : 0.8,
                  x: !isMobile && isHovered ? Math.cos(angle) * -repulsion : 0,
                  y:
                    isInView && !isMobile && isHovered
                      ? Math.sin(angle) * -repulsion
                      : isInView
                      ? 0
                      : 30,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                  mass: 0.8,
                  opacity: { duration: 0.5, delay: entryDelay },
                  scale: { duration: 0.5, delay: entryDelay },
                }}
              >
                <ReviewCard {...review} index={index} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(ReviewsContainerComponent);
