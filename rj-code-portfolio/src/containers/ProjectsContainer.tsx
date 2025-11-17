"use client";

import { useTranslation } from "react-i18next";
import { useCallback, memo } from "react";
import { projects } from "../const/projects";
import ProjectCard from "../components/ui/ProjectCard";

function ProjectsContainerComponent() {
  const { t } = useTranslation("projects");

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section id="projects" className="relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-1/4 -top-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-secondary/15 to-transparent rounded-full blur-3xl animate-float-slow" />
        <div className="absolute -left-1/4 top-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-secondary/15 via-accent/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute right-1/3 bottom-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent/10 via-primary/10 to-transparent rounded-full blur-3xl animate-float-fast" />

        {/* Particle grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(138, 43, 226, 0.8) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="relative py-32 container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-24 relative">
          <div className="mb-6">
            <h2 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary animate-gradient bg-[length:200%_auto]">
              {t("title")}
            </h2>
          </div>

          <p className="text-gray-300 text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
            {t("description")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto mb-24">
          {projects.map((item, index) => (
            <div
              key={item.id}
              className="animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "both",
              }}
            >
              <ProjectCard project={item} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center relative mt-32">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="w-96 h-96 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <p className="text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-8 font-light">
              {t("callToAction")}
            </p>

            <div className="flex justify-center">
              <button
                onClick={scrollToContact}
                className="group relative px-10 py-5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow-primary"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent blur-sm" />
                </div>

                <span className="relative z-10 flex items-center gap-3">
                  {t("contactUs")}
                  <svg
                    className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ProjectsContainerComponent);
