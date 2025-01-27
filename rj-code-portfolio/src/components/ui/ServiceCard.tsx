'use client';

import React, { useState } from 'react';
import Button from './Button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  caption: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  benefits,
  caption,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-500 max-w-lg mx-auto min-h-[300px] backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8 h-full relative">
        <div 
          className={`
            transition-all duration-500 ease-in-out absolute inset-0 flex items-center justify-center
            ${isHovered 
              ? 'opacity-0 transform -translate-y-full pointer-events-none' 
              : 'opacity-100 transform translate-y-0'
            }
          `}
        >
          <Button 
            variant="ghost" 
            size="lg"
            className="transform transition-transform duration-500 hover:scale-110"
          >
            {caption}
          </Button>
        </div>
        <div 
          className={`
            transition-all duration-500 ease-in-out
            ${isHovered 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-full pointer-events-none'
            }
          `}
        >
          <div 
            className="text-4xl mb-6 text-primary transform transition-transform duration-500"
            style={{
              transform: isHovered ? 'translateX(0) scale(1)' : 'translateX(-100%) scale(0.8)',
              opacity: isHovered ? 1 : 0,
              transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
            }}
          >
            {icon}
          </div>
          <h3 
            className="text-2xl font-bold mb-4 text-gray-900 dark:text-white transform transition-transform duration-500"
            style={{
              transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
              opacity: isHovered ? 1 : 0,
              transition: 'transform 0.5s ease-out 0.1s, opacity 0.5s ease-out 0.1s'
            }}
          >
            {title}
          </h3>
          <p 
            className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            style={{
              transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
              opacity: isHovered ? 1 : 0,
              transition: 'transform 0.5s ease-out 0.2s, opacity 0.5s ease-out 0.2s'
            }}
          >
            {description}
          </p>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center text-gray-700 dark:text-gray-300"
                style={{
                  transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
                  opacity: isHovered ? 1 : 0,
                  transition: `transform 0.5s ease-out ${0.3 + index * 0.1}s, opacity 0.5s ease-out ${0.3 + index * 0.1}s`
                }}
              >
                <span className="mr-3 text-primary">•</span>
                <span className="leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
