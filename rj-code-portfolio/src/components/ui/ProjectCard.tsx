"use client";

import React, {
  useState,
  useRef,
  useCallback,
  memo,
  useMemo,
} from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Project } from "../../const/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCardComponent({ project }: ProjectCardProps) {
  const { t } = useTranslation("projects");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const lastMouseUpdateRef = useRef<number>(0);

  const title = useMemo(
    () => t(`projects.${project.key}.title`),
    [t, project.key]
  );

  const description = useMemo(
    () => t(`projects.${project.key}.description`),
    [t, project.key]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Tilt effect (bez pośredniego useEffect)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

      // Throttle aktualizacji stanu do ~30 FPS (orb glow)
      const now = performance.now();
      if (now - lastMouseUpdateRef.current > 33) {
        lastMouseUpdateRef.current = now;
        setMousePosition({ x, y });
      }
    },
    []
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    const card = cardRef.current;
    if (card) {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full relative group cursor-pointer min-h-[680px] sm:min-h-[660px] md:min-h-[740px]"
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Magnetic glow effect following cursor */}
      {isHovered && (
        <div
          className="absolute rounded-full pointer-events-none z-0 blur-3xl transition-opacity duration-300"
          style={{
            width: "400px",
            height: "400px",
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            background:
              "radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, rgba(138, 43, 226, 0.2) 30%, transparent 70%)",
          }}
        />
      )}

      {/* Gradient border wrapper */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary group-hover:via-secondary group-hover:to-accent p-[2px] transition-all duration-500">
        {/* Main card content */}
        <div className="h-full rounded-3xl bg-gradient-to-br from-gray-900/95 via-[#0B0F1D] to-gray-900/95 backdrop-blur-xl overflow-hidden flex flex-col">
          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-out" />
          </div>

          {/* Ambient light effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-50" />

          {/* Image container with enhanced effects */}
          <div className="h-[280px] md:h-[320px] w-full relative flex-shrink-0 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(138, 43, 226, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(138, 43, 226, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: "30px 30px",
                }}
              />
            </div>

            <Image
              src="/bg.png"
              alt="background"
              fill
              className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Glowing orbs */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl group-hover:bg-primary/50 transition-all duration-700" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/40 transition-all duration-700" />

            {/* Project image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[220px] md:h-[250px] w-full flex items-center justify-center">
                <Image
                  src={project.img}
                  alt={title}
                  width={400}
                  height={250}
                  className="drop-shadow-[0_0_30px_rgba(138,43,226,0.5)] group-hover:drop-shadow-[0_0_50px_rgba(138,43,226,0.8)] group-hover:scale-105 transition-all duration-500 w-auto object-contain"
                  style={{ maxHeight: "220px" }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content section with enhanced styling */}
          <div className="p-4 md:p-8 relative z-10 flex-1 flex flex-col justify-between">
            <h1 className="font-bold lg:text-3xl md:text-2xl text-xl text-white mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-primary-light group-hover:to-secondary transition-all duration-300 md:h-[32px] flex items-center">
              {title}
            </h1>

            <p className="lg:text-lg md:text-base text-sm text-gray-300 leading-relaxed mb-2 md:mb-3">
              {description}
            </p>

            {/* Tech stack with enhanced icons */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 md:gap-3 mt-auto">
              <div className="flex flex-wrap items-center gap-1 md:gap-2 mb-3 sm:mb-0">
                {project.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="group/icon relative"
                    style={{
                      animation: `float ${
                        3 + index * 0.5
                      }s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover/icon:border-primary/50 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:shadow-glow-primary relative overflow-hidden">
                      {/* Icon shimmer on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/icon:translate-x-full transition-transform duration-700" />
                      <Image
                        src={icon}
                        alt={`technology-${index}`}
                        width={28}
                        height={28}
                        className="p-1 w-auto h-auto md:w-[35px] md:h-[35px] relative z-10 group-hover/icon:brightness-125 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button with stunning effects */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta relative flex items-center justify-center gap-1 md:gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-gradient-to-r from-primary to-secondary overflow-hidden transition-all duration-300 hover:shadow-glow-primary hover:scale-105 w-full sm:w-auto"
              >
                {/* Button shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700" />

                <span className="relative z-10 font-semibold text-white lg:text-base text-sm whitespace-nowrap">
                  {t("checkLiveSite")}
                </span>

                <div className="relative z-10 w-5 h-5 transform group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectCardComponent);
