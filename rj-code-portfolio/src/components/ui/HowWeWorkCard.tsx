import React from 'react';

interface HowWeWorkCardProps {
  icon: string;
  title: string;
  content: string;
  stepNumber: number;
}

export default function HowWeWorkCard({ icon, title, content, stepNumber }: HowWeWorkCardProps) {
  return (
    <div className="flex flex-col items-start w-full h-[320px] bg-gradient-to-br from-red-300 to-red-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fadeIn relative overflow-hidden group">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[length:24px_24px] pointer-events-none" />
      
      {/* Step number */}
      <div className="absolute top-4 right-4">
        <span className="text-primary font-bold text-xl bg-white/90 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white shadow-sm">
          {stepNumber}
        </span>
      </div>

      {/* Icon */}
      <div className="text-5xl mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[8deg]">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-4 transition-transform duration-300 group-hover:scale-105 whitespace-nowrap overflow-hidden text-ellipsis w-full">
        {title}
      </h3>

      {/* Content */}
      <p className="text-gray-700 text-base leading-relaxed animate-fadeInUp w-full">
        {content}
      </p>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}