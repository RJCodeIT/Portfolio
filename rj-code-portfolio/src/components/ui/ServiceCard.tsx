"use client";

import React, { useState, useEffect, useMemo } from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  color: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  benefits,
  color,
}: ServiceCardProps) {
  const totalColumns = 50;
  const totalRows = 30;

  // Use state for client-side tile generation
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  const tiles = useMemo(() => {
    if (!isClient) return null; // Return null on server-side

    const colorName = color.split('-')[1];
    let hslColor;
    
    switch(colorName) {
      case 'red':
        hslColor = 'hsl(0, 100%, ';
        break;
      case 'blue':
        hslColor = 'hsl(210, 100%, ';
        break;
      case 'green':
        hslColor = 'hsl(142, 100%, ';
        break;
      case 'yellow':
        hslColor = 'hsl(48, 100%, ';
        break;
      default:
        hslColor = 'hsl(0, 100%, ';
    }
    
    return Array.from({ length: totalColumns * totalRows }).map((_, index) => {
      const lightness = Math.random() * 20 + 40;
      return (
        <div
          key={index}
          style={{
            backgroundColor: `${hslColor}${lightness}%)`,
            opacity: 0.7,
            border: '0.5px solid rgba(0, 0, 0, 0.1)',
          }}
          className="w-full h-full"
        ></div>
      );
    });
  }, [color, isClient]);

  const [showTiles, setShowTiles] = useState(false);

  const cardContent = useMemo(() => (
    <div className="relative z-10 px-6 pt-8 pb-7">
      <div className="relative flex justify-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary text-3xl shadow-lg">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-center mb-3 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 mb-7 text-center text-sm leading-relaxed">
        {description}
      </p>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-gray-700 text-sm">
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  ), [title, description, benefits, icon]);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-red-300/20 max-w-lg mx-auto min-h-[300px]"
      onMouseEnter={() => setShowTiles(true)}
      onMouseLeave={() => setShowTiles(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
        <button className="px-6 py-3 rounded-lg bg-primary text-gray-900 font-medium hover:bg-primary/90 transition-colors">
          {title}
        </button>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            showTiles ? "bg-transparent" : color
          }`}
          style={{
            clipPath: showTiles
              ? "circle(100% at center)"
              : "circle(0% at center)",
          }}
        ></div>
        <div
          className={`absolute inset-0 grid ${
            showTiles ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `linear-gradient(to bottom, ${color}33, ${color}99)`,
            display: "grid",
            gridTemplateColumns: `repeat(${totalColumns}, 1fr)`,
            gridTemplateRows: `repeat(${totalRows}, 1fr)`,
            height: "100%",
            width: "100%",
            transition: "opacity 1s ease-in-out",
          }}
        >
          {tiles}
        </div>
        {cardContent}
      </div>
    </div>
  );
}
