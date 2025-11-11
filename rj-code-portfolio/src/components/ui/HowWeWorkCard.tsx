import React from 'react';

interface HowWeWorkCardProps {
  icon: React.ComponentType;
  title: string;
  content: string;
  stepNumber: number;
  itemProp?: string;
  itemScope?: boolean;
  itemType?: string;
}

export default function HowWeWorkCard({ icon: Icon, title, content, stepNumber, itemProp, itemScope, itemType }: HowWeWorkCardProps) {
  return (
    <div 
      className="flex flex-col items-start w-full h-[480px] sm:h-[500px] lg:h-[520px] bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-3xl shadow-lg hover:shadow-card-3d transition-all duration-500 animate-fadeIn relative group border border-white/20 hover:border-primary/40"
      itemProp={itemProp}
      itemScope={itemScope}
      itemType={itemType}
    >
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[length:32px_32px] pointer-events-none" />
      
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Step number badge with glow */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
        <span className="text-white font-bold text-lg sm:text-xl bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow-primary shadow-lg border border-white/20">
          {stepNumber}
        </span>
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 lg:mb-8 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[8deg] filter drop-shadow-lg text-white">
          <Icon />
        </div>
        <h3 
          className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 lg:mb-5 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary w-full"
          itemProp="name"
        >
          {title}
        </h3>
        <p 
          className="text-white/80 text-sm sm:text-base leading-relaxed animate-fadeInUp w-full flex-1"
          itemProp="text"
        >
          {content}
        </p>
      </div>
      
      {/* Bottom gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}