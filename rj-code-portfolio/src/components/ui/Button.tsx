"use client";

import { ButtonHTMLAttributes, forwardRef, memo, useMemo } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  className?: string;
}

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "primary", size = "md", isLoading = false, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none backdrop-blur-sm relative overflow-hidden group";

    // memoized classes (avoid recomputing objects)
    const variantClasses = useMemo(
      () => ({
        primary:
          "bg-gradient-to-r from-primary via-secondary to-accent text-white hover:shadow-glow-primary focus:ring-primary/50 border border-white/10 hover:border-primary/50 bg-[length:200%_100%] hover:bg-right-bottom",
        secondary:
          "bg-white/5 text-white hover:bg-white/10 hover:shadow-card-hover focus:ring-white/50 border border-white/10 hover:border-white/20",
        outline:
          "border-2 border-white/20 text-white hover:bg-white/5 hover:border-primary/50 hover:shadow-glow-accent focus:ring-white/50",
        ghost:
          "hover:bg-white/5 text-white border-transparent focus:ring-white/50 hover:text-primary",
      }),
      []
    );

    const sizeClasses = useMemo(
      () => ({
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg font-semibold",
      }),
      []
    );

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantClasses[variant],
          sizeClasses[size],
          "transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {/* Shimmer (CSS powered, no inline JS needed) */}
        {variant === "primary" && (
          <span className="absolute inset-0 bg-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-animation" />
        )}

        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Loading...</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

ButtonComponent.displayName = "Button";

export default memo(ButtonComponent);
