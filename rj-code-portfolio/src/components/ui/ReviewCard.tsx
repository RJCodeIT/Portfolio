"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Review } from "@/const/reviews";

interface ReviewCardProps extends Review {
  index: number;
  itemProp?: string;
  itemScope?: boolean;
  itemType?: string;
}

// --- Framer Motion variants OUTSIDE component (performance) ---
const shimmerTransition = {
  duration: 1.5,
  repeat: Infinity,
  repeatDelay: 2,
};

const starInitial = { opacity: 0, y: 10, rotate: -30 };
const starAnimate = { opacity: 1, y: 0, rotate: 0 };

function ReviewCardComponent({
  name,
  role,
  content,
  rating,
  index,
  itemProp,
  itemScope,
  itemType,
}: ReviewCardProps) {
  
  // Memoized stars
  const stars = useMemo(() => {
    if (!rating) return null;
    return [...Array(rating)].map((_, i) => (
      <motion.span
        key={i}
        className="text-sm sm:text-base"
        initial={starInitial}
        animate={starAnimate}
        transition={{
          delay: i * 0.1,
          duration: 0.5,
          type: "spring",
          stiffness: 200,
        }}
      >
        ★
      </motion.span>
    ));
  }, [rating]);

  // Memoized background rotation
  const bgRotationStyle = useMemo(
    () => ({ transform: `rotate(${index * 45}deg)` }),
    [index]
  );

  return (
    <motion.div
      className="flex flex-col items-start p-4 sm:p-5 lg:p-6 bg-black/20 backdrop-blur-sm rounded-xl w-full min-h-[180px] sm:min-h-[200px] relative overflow-hidden border border-white/10 hover:border-primary/30 group"
      whileHover={{
        scale: 1.05,
        boxShadow:
          "0 25px 35px -5px rgba(138, 43, 226, 0.4), 0 15px 15px -5px rgba(75, 0, 130, 0.3)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 1,
      }}
      itemProp={itemProp}
      itemScope={itemScope}
      itemType={itemType}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
        style={bgRotationStyle}
      />

      {/* Shimmer */}
      <motion.div
        className="absolute inset-0 bg-shimmer opacity-0 group-hover:opacity-100"
        animate={{ x: ["-100%", "100%"] }}
        transition={shimmerTransition}
      />

      {/* Stars */}
      {rating && (
        <div className="flex text-yellow-400 mb-3 sm:mb-4 space-x-1 relative z-10">
          {stars}
        </div>
      )}

      {/* Review content */}
      <motion.p
        className="text-sm sm:text-base text-gray-200 font-light leading-relaxed mb-4 sm:mb-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        itemProp="reviewBody"
      >
        &quot;{content}&quot;
      </motion.p>

      {/* Author */}
      <motion.div
        className="mt-auto border-t border-gray-700/50 pt-3 sm:pt-4 w-full relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.p
          className="font-medium text-sm sm:text-base text-white"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          itemProp="author"
        >
          {name}
        </motion.p>

        <motion.p
          className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {role}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default memo(ReviewCardComponent);
