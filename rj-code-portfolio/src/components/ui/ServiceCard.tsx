'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';

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
  const totalColumns = 100;
  const totalRows = 60;

  const totalTiles = useMemo(() => totalColumns * totalRows, []);

  const [tilesColors, setTilesColors] = useState<string[]>([]);
  const [isRevealed, setIsRevealed] = useState(false);

  const baseHslColor = useMemo(() => {
    const colorName = color.split('-')[1];
    switch (colorName) {
      case 'red': return 'hsl(0, 100%, ';
      case 'blue': return 'hsl(210, 100%, ';
      case 'green': return 'hsl(142, 100%, ';
      case 'yellow': return 'hsl(48, 100%, ';
      default: return 'hsl(0, 100%, ';
    }
  }, [color]);

  const generateInitialColors = useCallback(() => {
    return new Array(totalTiles).fill(null).map(
      () => `${baseHslColor}${40 + Math.random() * 20}%)`
    );
  }, [baseHslColor, totalTiles]);

  useEffect(() => {
    setTilesColors(generateInitialColors());
  }, [generateInitialColors]);

  useEffect(() => {
    if (!isRevealed) return;

    const interval = setInterval(() => {
      setTilesColors(prevColors => {
        const newColors = new Array(totalTiles);
        for (let i = 0; i < totalTiles; i++) {
          const lightness = parseFloat(prevColors[i].match(/\d+\.\d+|\d+/g)?.[2] || '50');
          const newLightness = Math.min(Math.max(lightness + (Math.random() * 8 - 4), 40), 60);
          newColors[i] = `${baseHslColor}${newLightness.toFixed(1)}%)`;
        }
        return newColors;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isRevealed, baseHslColor, totalTiles]);

  const gridStyle = useMemo(() => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${totalColumns}, 1fr)`,
    gridTemplateRows: `repeat(${totalRows}, 1fr)`,
    height: '100%',
    width: '100%',
    transform: `scale(${isRevealed ? 1 : 0.8})`,
    opacity: isRevealed ? 1 : 0,
    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
  }), [isRevealed, totalColumns, totalRows]);

  const tiles = useMemo(() => (
    <div style={gridStyle}>
      {tilesColors.map((tileColor, index) => (
        <div
          key={index}
          style={{
            backgroundColor: tileColor,
            opacity: 0.7,
            border: '0.5px solid rgba(0, 0, 0, 0.1)',
            willChange: 'background-color',
          }}
          className="w-full h-full"
        />
      ))}
    </div>
  ), [tilesColors, gridStyle]);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-red-300/20 max-w-lg mx-auto min-h-[300px]"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
    >
      <div
        className={`absolute inset-0 bg-transparent transition-transform duration-500 ${isRevealed ? 'bg-transparent scale-100' : color + ' scale-0'}`}
        style={{
          willChange: 'transform',
        }}
      />
      <div className="absolute inset-0">
        {tiles}
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/50 to-transparent transition-transform duration-500`}
        style={{
          transform: `translateY(${isRevealed ? '0' : '100%'})`,
          willChange: 'transform',
        }}
      />
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
    </div>
  );
}
