"use client"
import { motion } from "framer-motion";
import { Review } from "@/const/reviews";

interface ReviewCardProps extends Review {
  index: number;
}

export default function ReviewCard({ name, role, content, rating, index }: ReviewCardProps) {
  return (
    <motion.div 
      className="flex flex-col items-start p-6 bg-black/20 backdrop-blur-sm rounded-xl w-full min-h-[200px] relative overflow-hidden"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 25px 35px -5px rgba(0, 0, 0, 0.3), 0 15px 15px -5px rgba(0, 0, 0, 0.2)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 25,
        mass: 1
      }}
    >
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
        style={{
          transform: `rotate(${index * 45}deg)`
        }}
      />

      {rating && (
        <div className="flex text-yellow-400 mb-4 space-x-1">
          {[...Array(rating)].map((_, i) => (
            <motion.span 
              key={i} 
              className="text-base"
              initial={{ opacity: 0, y: 10, rotate: -30 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ 
                delay: i * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
            >
              ★
            </motion.span>
          ))}
        </div>
      )}
      
      <motion.p 
        className="text-base text-gray-200 font-light leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        &quot;{content}&quot;
      </motion.p>

      <motion.div 
        className="mt-auto border-t border-gray-700/50 pt-4 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.p 
          className="font-medium text-white"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {name}
        </motion.p>
        <motion.p 
          className="text-sm text-gray-400 mt-1"
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