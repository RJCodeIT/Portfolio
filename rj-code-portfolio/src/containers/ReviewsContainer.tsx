"use client";
import { useRef, useState, useEffect } from "react";
import ReviewCard from "../components/ui/ReviewCard";
import { motion, useSpring, useInView } from "framer-motion";
import { useReviews } from "../const/reviews";
import { useTranslation } from "react-i18next";

export default function ReviewsContainer() {
  const { t } = useTranslation("reviews");
  const reviews = useReviews();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const lastMouseTime = useRef(performance.now());
  const [colCount, setColCount] = useState(1);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setColCount(width >= 1280 ? 4 : width >= 1024 ? 3 : width >= 640 ? 2 : 1);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Smooth mouse position with springs
  const smoothX = useSpring(0.5, {
    stiffness: 60,
    damping: 15,
    mass: 0.8,
  });

  const smoothY = useSpring(0.5, {
    stiffness: 60,
    damping: 15,
    mass: 0.8,
  });

  useEffect(() => {
    if (isHovered && !isMobile) {
      smoothX.set(mousePosition.x);
      smoothY.set(mousePosition.y);
    } else {
      smoothX.set(0.5);
      smoothY.set(0.5);
    }
  }, [mousePosition, isHovered, smoothX, smoothY, isMobile]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !isHovered || isMobile) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const currentTime = performance.now();
    const deltaTime = currentTime - lastMouseTime.current;

    if (deltaTime > 0) {
      const speedX = (Math.abs(x - lastMousePosition.current.x) / deltaTime) * 600;
      const speedY = (Math.abs(y - lastMousePosition.current.y) / deltaTime) * 600;

      const maxSpeed = 1.2;
      setMouseSpeed({
        x: Math.min(speedX, maxSpeed),
        y: Math.min(speedY, maxSpeed),
      });
    }

    setMousePosition({ x, y });
    lastMousePosition.current = { x, y };
    lastMouseTime.current = currentTime;
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseSpeed({ x: 0, y: 0 });
  };

  return (
    <section
      id="reviews"
      className="relative min-h-screen overflow-x-hidden py-20 sm:py-32"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-[12vw] font-bold text-white/5 select-none tracking-wider">
          {t("title")}
        </h1>
      </motion.div>

      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-[90vw]">
          {reviews.map((review, index) => {
            const distanceX = !isMobile
              ? smoothX.get() - ((index % colCount) + 0.5) / colCount
              : 0;
            const rowPosition = Math.floor(index / colCount) + 0.5;
            const totalRows = Math.ceil(reviews.length / colCount);
            const distanceY = !isMobile
              ? smoothY.get() - rowPosition / totalRows
              : 0;

            const distance = Math.sqrt(
              distanceX * distanceX + distanceY * distanceY
            );
            const angle = Math.atan2(distanceY, distanceX);

            const entryDelay =
              (index % colCount) * 0.1 + Math.floor(index / colCount) * 0.1;

            const baseRepulsion = 180;
            const speedMultiplier = Math.max(mouseSpeed.x, mouseSpeed.y) * 100;

            const horizontalForce = baseRepulsion + speedMultiplier;
            const verticalForce = (baseRepulsion + speedMultiplier) * 1.5;

            const repulsionForce = !isMobile
              ? Math.sqrt(
                  Math.pow(horizontalForce * Math.cos(angle), 2) +
                    Math.pow(verticalForce * Math.sin(angle), 2)
                ) * Math.max(0, 1 - distance * 1.2)
              : 0;

            const spacingForce = 25;
            const neighborRepulsion = !isMobile
              ? reviews.reduce((force, _, idx) => {
                  if (idx === index) return force;
                  const xDiff = ((idx % colCount) - (index % colCount)) / colCount;
                  const yDiff =
                    (Math.floor(idx / colCount) - Math.floor(index / colCount)) /
                    totalRows;
                  const cardDistance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
                  if (cardDistance < 0.5) {
                    return force + (0.5 - cardDistance) * spacingForce;
                  }
                  return force;
                }, 0)
              : 0;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 30,
                }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  scale: isInView
                    ? !isMobile && isHovered
                      ? 1 + Math.max(0, 0.15 - distance * 0.3)
                      : 1
                    : 0.8,
                  x: !isMobile && isHovered
                    ? Math.cos(angle) * -(repulsionForce + neighborRepulsion)
                    : 0,
                  y: isInView
                    ? !isMobile && isHovered
                      ? Math.sin(angle) *
                        -(repulsionForce + neighborRepulsion * 1.2)
                      : 0
                    : 30,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                  mass: 0.8,
                  restDelta: 0.001,
                  opacity: { duration: 0.5, delay: entryDelay },
                  scale: { duration: 0.5, delay: entryDelay },
                }}
                className="flex-shrink-0 perspective-1000"
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
