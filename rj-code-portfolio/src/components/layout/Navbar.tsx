"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const linkVariants = {
  initial: { y: -20, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: { 
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 80; // approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Update URL without triggering a scroll
      if (targetId) {
        window.history.pushState({}, '', `#${targetId}`);
      }
    }
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleSectionVisibility = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.id;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          if (activeSection !== sectionId) {
            setActiveSection(sectionId);
            // Update URL without triggering a scroll
            if (sectionId) {
              window.history.replaceState({}, '', `#${sectionId}`);
            } else {
              window.history.replaceState({}, '', window.location.pathname);
            }
          }
        }
      });

      // Check if we're at the top of the page
      if (window.scrollY === 0) {
        setActiveSection('');
        window.history.replaceState({}, '', window.location.pathname);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('scroll', handleSectionVisibility);

    // Initial check for visible sections
    handleSectionVisibility();

    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('scroll', handleSectionVisibility);
    };
  }, [lastScrollY, activeSection]);

  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#services", text: "Services" },
    { href: "#testimonials", text: "Testimonials" },
    { href: "#howWeWork", text: "How we work" },
    { href: "#contact", text: "Contact" },
    { href: "#faq", text: "FAQ" }
  ];

  return (
    <AnimatePresence>
      {show && (
        <div className="flex justify-center w-full fixed top-0 z-50">
          <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="mx-4 my-2 px-6 py-3 flex bg-[#0D0D0D]/95 backdrop-blur-sm rounded-full"
          >
            <motion.div 
              className="flex gap-6"
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
                  className={`text-white hover:text-blue-500 transition-colors cursor-pointer ${
                    activeSection === link.href.replace('#', '') ? 'text-blue-500' : ''
                  }`}
                >
                  {link.text}
                </motion.a>
              ))}
            </motion.div>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
