"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};

const linkVariants = {
  initial: { y: -20, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.05,
    y: -2,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

function Navbar() {
  const { t } = useTranslation("navbar");

  const [show, setShow] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navLinks = useMemo(
    () => [
      { href: "#about", text: t("about") },
      { href: "#projects", text: t("projects") },
      { href: "#services", text: t("services") },
      { href: "#reviews", text: t("reviews") },
      { href: "#howWeWork", text: t("howWeWork") },
      { href: "#contact", text: t("contact") },
      { href: "#faq", text: t("faq") },
    ],
    [t]
  );

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });

        window.history.pushState({}, "", `#${targetId}`);
      }
    },
    []
  );

  useEffect(() => {
    let lastScrollY = window.scrollY;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currY = window.scrollY;

          // Hide/show navbar
          if (currY > lastScrollY) setShow(false);
          else setShow(true);

          lastScrollY = currY;

          // Active section detection
          const sections = document.querySelectorAll("section[id]");
          const scrollPoint = window.scrollY + window.innerHeight / 3;

          let newActive = "";
          sections.forEach((s) => {
            const el = s as HTMLElement;
            const top = el.offsetTop;
            const height = el.clientHeight;
            if (scrollPoint >= top && scrollPoint < top + height) {
              newActive = el.id;
            }
          });

          if (newActive !== activeSection) {
            setActiveSection(newActive);
            window.history.replaceState(
              {},
              "",
              newActive ? `#${newActive}` : window.location.pathname
            );
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    const onResize = () => {
      setIsMobile(window.innerWidth < 726);
      if (window.innerWidth >= 726) setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    onResize();
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [activeSection]);

  return (
    <AnimatePresence>
      {show && (
        <div className="flex justify-center w-full fixed top-0 z-50">
          <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="mx-auto my-4 w-fit px-8 py-4 bg-black/20 backdrop-blur-md rounded-full border border-white/5 shadow-lg"
          >
            {!isMobile ? (
              <motion.div
                className="flex gap-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    custom={i}
                    variants={linkVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-300
                      ${
                        activeSection === link.href.replace("#", "")
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }
                      ${
                        activeSection === link.href.replace("#", "")
                          ? 'after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full after:scale-x-100 after:transition-transform after:duration-300'
                          : 'after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'
                      }
                    `}
                  >
                    {link.text}
                  </motion.a>
                ))}
              </motion.div>
            ) : (
              <motion.button
                className="relative w-8 h-8 flex flex-col justify-center items-center"
                onClick={() => setIsMobileMenuOpen((p) => !p)}
              >
                <motion.span
                  className="w-6 h-0.5 bg-white absolute"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 0 : -8,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white absolute"
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-white absolute"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? 0 : 8,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            )}
          </motion.nav>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed left-0 right-0 mx-auto top-[88px] w-[400px] bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-4 flex flex-col items-center"
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleScroll(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    custom={i}
                    variants={linkVariants}
                    className={`relative inline-block py-3 text-base font-medium tracking-wide text-center transition-colors duration-300
                      ${
                        activeSection === link.href.replace("#", "")
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }
                      ${
                        activeSection === link.href.replace("#", "")
                          ? 'after:content-[""] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full after:scale-x-100'
                          : 'after:content-[""] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full after:scale-x-0 hover:after:scale-x-100'
                      }
                    `}
                  >
                    {link.text}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Navbar;
