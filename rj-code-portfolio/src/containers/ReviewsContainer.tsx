"use client"
import { useRef, useState, useEffect } from "react";
import ReviewCard from "../components/ui/ReviewCard";
import { motion, useSpring, useInView } from "framer-motion";
import { reviews } from "../const/reviews";

export default function ReviewsContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const lastMouseTime = useRef(performance.now());

  // Smooth mouse position with springs
  const smoothX = useSpring(0, {
    stiffness: 60,
    damping: 15,
    mass: 0.8
  });
  
  const smoothY = useSpring(0, {
    stiffness: 60,
    damping: 15,
    mass: 0.8
  });

  useEffect(() => {
    if (isHovered) {
      smoothX.set(mousePosition.x);
      smoothY.set(mousePosition.y);
    } else {
      smoothX.set(0.5);
      smoothY.set(0.5);
    }
  }, [mousePosition, isHovered, smoothX, smoothY]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !isHovered) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    const currentTime = performance.now();
    const deltaTime = currentTime - lastMouseTime.current;
    
    if (deltaTime > 0) {
      // Calculate speed in both directions with reduced sensitivity
      const speedX = Math.abs(x - lastMousePosition.current.x) / deltaTime * 600;
      const speedY = Math.abs(y - lastMousePosition.current.y) / deltaTime * 600;
      
      // Apply smoothing and limit maximum speed
      const maxSpeed = 1.2;
      setMouseSpeed({
        x: Math.min(speedX, maxSpeed),
        y: Math.min(speedY, maxSpeed)
      });
    }
    
    setMousePosition({ x, y });
    lastMousePosition.current = { x, y };
    lastMouseTime.current = currentTime;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseSpeed({ x: 0, y: 0 });
  };

  return (
    <section 
      id="reviews" 
      className="relative h-screen overflow-hidden"
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
          y: isInView ? 0 : 20
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-[12vw] font-bold text-white/5 select-none tracking-wider">
          REVIEWS
        </h1>
      </motion.div>
      
      <div className="flex items-center justify-center h-full py-20">
        <div className="grid grid-cols-4 gap-8 px-8 mx-auto max-w-[90vw]">
          {reviews.map((review, index) => {
            const distanceX = smoothX.get() - (index % 4 + 0.5) / 4;
            const rowPosition = Math.floor(index / 4) + 0.5;
            const totalRows = Math.ceil(reviews.length / 4);
            const distanceY = smoothY.get() - rowPosition / totalRows;
            
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            const angle = Math.atan2(distanceY, distanceX);
            
            const entryDelay = (index % 4 * 0.1) + (Math.floor(index / 4) * 0.1);
            
            const baseRepulsion = 180;
            const speedMultiplier = Math.max(mouseSpeed.x, mouseSpeed.y) * 100;
            
            const horizontalForce = baseRepulsion + speedMultiplier;
            const verticalForce = (baseRepulsion + speedMultiplier) * 1.5;
            
            const repulsionForce = Math.sqrt(
              Math.pow(horizontalForce * Math.cos(angle), 2) + 
              Math.pow(verticalForce * Math.sin(angle), 2)
            ) * Math.max(0, 1 - distance * 1.2);
            
            const spacingForce = 25;
            const neighborRepulsion = reviews.reduce((force, _, idx) => {
              if (idx === index) return force;
              const xDiff = ((idx % 4) - (index % 4)) / 4;
              const yDiff = (Math.floor(idx / 4) - Math.floor(index / 4)) / totalRows;
              const cardDistance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
              if (cardDistance < 0.5) {
                return force + (0.5 - cardDistance) * spacingForce;
              }
              return force;
            }, 0);

            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0,
                  scale: 0.8,
                  y: 30
                }}
                animate={{ 
                  opacity: isInView ? 1 : 0,
                  scale: isInView ? (isHovered ? 1 + Math.max(0, 0.15 - distance * 0.3) : 1) : 0.8,
                  x: isHovered ? Math.cos(angle) * -(repulsionForce + neighborRepulsion) : 0,
                  y: isInView 
                    ? (isHovered ? Math.sin(angle) * -(repulsionForce + neighborRepulsion * 1.2) : 0)
                    : 30
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                  mass: 0.8,
                  restDelta: 0.001,
                  opacity: { duration: 0.5, delay: entryDelay },
                  scale: { duration: 0.5, delay: entryDelay }
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