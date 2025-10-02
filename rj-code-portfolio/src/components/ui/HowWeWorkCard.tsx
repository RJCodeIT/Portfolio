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
      className="flex flex-col items-start w-full h-[400px] bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-card-3d transition-all duration-500 animate-fadeIn relative overflow-hidden group border border-white/20 hover:border-primary/40"
      itemProp={itemProp}
      itemScope={itemScope}
      itemType={itemType}
    >
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[length:32px_32px] pointer-events-none" />
      
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Step number badge with glow */}
      <div className="absolute top-6 right-6 z-10">
        <span className="text-white font-bold text-xl bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow-primary shadow-lg border border-white/20">
          {stepNumber}
        </span>
      </div>
      
      <div className="relative z-10">
        <div className="text-6xl mb-8 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[8deg] filter drop-shadow-lg text-white">
          <Icon />
        </div>
        <h3 
          className="text-2xl font-bold text-white mb-5 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary whitespace-nowrap overflow-hidden text-ellipsis w-full"
          itemProp="name"
        >
          {title}
        </h3>
        <p 
          className="text-white/80 text-base leading-relaxed animate-fadeInUp w-full"
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