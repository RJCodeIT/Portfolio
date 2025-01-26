'use client';

import { useState } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

export default function ServiceCard({ icon, title, description, benefits }: ServiceCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div 
      className={`group relative overflow-hidden bg-white/5 dark:bg-slate-800/5 rounded-2xl px-6 pt-8 pb-7
                  transition-all duration-500
                  border border-red-300/20 dark:hover:border-gray-700/50
                  ${isRevealed 
                    ? 'bg-white dark:bg-slate-800/50 border-gray-100 dark:border-gray-700/50 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]' 
                    : 'backdrop-blur-md hover:backdrop-blur-0 hover:bg-white hover:dark:bg-slate-800/50'}`}
      onMouseEnter={() => !isRevealed && setIsRevealed(true)}
    >
      {/* Blur overlay */}
      <div className={`absolute inset-0 bg-red-300/10 backdrop-blur-md
                      transition-all duration-500
                      ${isRevealed ? 'opacity-0 pointer-events-none' : 'group-hover:backdrop-blur-0 group-hover:bg-transparent'}`} />
      
      {/* Content wrapper with opacity transition */}
      <div className={`relative transition-opacity duration-500
                      ${isRevealed ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>
        {/* Icon Container */}
        <div className="relative flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-xl
                        bg-gradient-to-br from-primary/10 to-primary/5 
                        dark:from-primary/20 dark:to-primary/10
                        text-primary text-3xl
                        transform transition-transform duration-300 group-hover:scale-110
                        shadow-lg shadow-primary/5">
            {icon}
          </div>
        </div>

        {/* Title Section */}
        <h3 className="relative text-xl font-bold text-center mb-3
                      bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white
                      bg-clip-text text-transparent">
          {title}
        </h3>

        {/* Description Section */}
        <p className="relative text-gray-600 dark:text-gray-300 mb-7 text-center text-sm leading-relaxed">
          {description}
        </p>

        {/* Benefits Section */}
        <div className="relative space-y-3 px-1">
          {benefits.map((benefit, index) => (
            <div key={index} 
                className="flex items-start gap-3 group/item hover:bg-gray-50/80 dark:hover:bg-gray-800/50 
                            p-2 -mx-3 rounded-lg transition-all duration-200">
              <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-primary/10 dark:bg-primary/20
                            flex items-center justify-center group-hover/item:bg-primary/20 dark:group-hover/item:bg-primary/30
                            transition-colors duration-200">
                <span className="w-1 h-1 rounded-full bg-primary/70 group-hover/item:bg-primary
                              transition-colors duration-200" />
              </span>
              <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed pt-1">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}