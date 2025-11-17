"use client";

import React, { useState, useCallback, useMemo, memo } from "react";
import Button from "./Button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  caption: string;
  itemProp?: string;
  itemScope?: boolean;
  itemType?: string;
}

function ServiceCardComponent({
  icon,
  title,
  description,
  benefits,
  caption,
  itemProp,
  itemScope,
  itemType,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleEnter = useCallback(() => setIsHovered(true), []);
  const handleLeave = useCallback(() => setIsHovered(false), []);

  // Memoized styles for the animated sliding content
  const iconStyle = useMemo(
    () => ({
      transform: isHovered
        ? "translateX(0) scale(1)"
        : "translateX(-100%) scale(0.8)",
      opacity: isHovered ? 1 : 0,
      transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
    }),
    [isHovered]
  );

  const titleStyle = useMemo(
    () => ({
      transform: isHovered ? "translateX(0)" : "translateX(-100%)",
      opacity: isHovered ? 1 : 0,
      transition: "transform 0.5s ease-out 0.1s, opacity 0.5s ease-out 0.1s",
    }),
    [isHovered]
  );

  const descStyle = useMemo(
    () => ({
      transform: isHovered ? "translateX(0)" : "translateX(-100%)",
      opacity: isHovered ? 1 : 0,
      transition: "transform 0.5s ease-out 0.2s, opacity 0.5s ease-out 0.2s",
    }),
    [isHovered]
  );

  // Memoized benefit list (heavy part)
  const memoizedBenefits = useMemo(
    () =>
      benefits.map((benefit, index) => ({
        key: index,
        text: benefit,
        style: {
          transform: isHovered ? "translateX(0)" : "translateX(-100%)",
          opacity: isHovered ? 1 : 0,
          transition: `transform 0.5s ease-out ${
            0.3 + index * 0.1
          }s, opacity 0.5s ease-out ${0.3 + index * 0.1}s`,
        },
      })),
    [benefits, isHovered]
  );

  return (
    <div
      className="rounded-2xl border border-gray-800 bg-gray-900 shadow-lg hover:shadow-card-hover hover:border-primary/30 transition-all duration-500 max-w-lg mx-auto min-h-[300px] backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50 overflow-hidden group relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      itemProp={itemProp}
      itemScope={itemScope}
      itemType={itemType}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-8 h-full relative">
        {/* CAPTION BUTTON */}
        <div
          className={`
            transition-all duration-500 ease-in-out absolute inset-0 flex items-center justify-center
            ${isHovered
              ? "opacity-0 transform -translate-y-full pointer-events-none"
              : "opacity-100 transform translate-y-0"
            }
          `}
        >
          <Button
            variant="ghost"
            size="lg"
            className="transform transition-transform duration-500 hover:scale-110 text-2xl"
          >
            {caption}
          </Button>
        </div>

        {/* HOVER CONTENT */}
        <div
          className={`
            transition-all duration-500 ease-in-out
            ${isHovered
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-full pointer-events-none"
            }
          `}
        >
          <div
            className="text-4xl mb-6 text-primary transform transition-transform duration-500"
            style={iconStyle}
          >
            {icon}
          </div>

          <h3
            className="text-2xl font-bold mb-4 text-white"
            style={titleStyle}
            itemProp="name"
          >
            {title}
          </h3>

          <p className="text-gray-400 mb-8 leading-relaxed" style={descStyle} itemProp="description">
            {description}
          </p>

          <ul className="space-y-3">
            {memoizedBenefits.map((item) => (
              <li
                key={item.key}
                className="flex items-center text-gray-300"
                style={item.style}
              >
                <span className="mr-3 text-primary">•</span>
                <span className="leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(ServiceCardComponent);
