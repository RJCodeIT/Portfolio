import React from 'react';

interface HowWeWorkCardProps {
  icon: string;
  title: string;
  content: string;
  stepNumber: number;
}

export default function HowWeWorkCard({ icon, title, content, stepNumber }: HowWeWorkCardProps) {
  return (
    <div className="flex flex-col items-start w-full h-[340px] bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fadeIn relative overflow-hidden group border border-white/20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[length:32px_32px] pointer-events-none" />
      
      {/* Step number */}
      <div className="absolute top-6 right-6">
        <span className="text-white font-bold text-xl bg-white/10 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20 shadow-lg border border-white/20">
          {stepNumber}
        </span>
      </div>

      {/* Icon */}
      <div className="text-6xl mb-8 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[8deg] filter drop-shadow-lg">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-5 transition-transform duration-300 group-hover:scale-105 whitespace-nowrap overflow-hidden text-ellipsis w-full">
        {title}
      </h3>

      {/* Content */}
      <p className="text-white/80 text-base leading-relaxed animate-fadeInUp w-full">
        {content}
      </p>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}