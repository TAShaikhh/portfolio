"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { motion } from "framer-motion";

// Navigation items
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Volunteering", href: "#volunteering" },
  { name: "Awards", href: "#honors" },
  { name: "Contact", href: "#contact" },
];

// Throttle function
function throttle<T extends (...args: any[]) => void>(func: T, limit: number): T {
  let inThrottle = false;
  return ((...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }) as T;
}

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  // Memoize scroll handler
  const handleScroll = useCallback(throttle(() => {
    // Add scrolling class to body during scroll
    if (!isScrolling) {
      setIsScrolling(true);
      document.body.classList.add('is-scrolling');
    }

    // Clear previous timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // Remove scrolling class after scroll ends
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
      document.body.classList.remove('is-scrolling');
    }, 150);

    setIsScrolled(window.scrollY > 50);

    // Use Intersection Observer API for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    // Observe all sections
    navItems.forEach(item => {
      const section = document.getElementById(item.href.substring(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, 100), [isScrolling]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  // Handle smooth scrolling with improved performance
  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.startsWith("#") ? href.substring(1) : href;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Add scrolling class during programmatic scroll
      document.body.classList.add('is-scrolling');
      
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      
      // Remove scrolling class after animation
      setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 1000);
      
      setActiveSection(targetId);
    }
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-40 transition-transform duration-300 transform-gpu ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-glow" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 sm:h-20">
        <Link
          href="/#home"
          className="flex items-center gap-2 font-bold text-xl md:text-2xl text-[#00A6ED] hover:text-[#00A6ED]/90 transition-colors duration-300 text-glow"
          onClick={(e) => handleLinkClick(e, "home")}
        >
          Umer Shaikh
        </Link>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`group relative px-3 py-2 rounded-md text-sm transition-standard ${
                  activeSection === item.href.substring(1) ? "text-glow" : ""
                }`}
              >
                <span className={`relative z-10 ${
                  activeSection === item.href.substring(1)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}>
                  {item.name}
                </span>
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="activeNavItem"
                    className="absolute inset-0 bg-secondary rounded-md z-0 border-glow"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu" className="h-10 w-10 rounded-full button-glow">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-background border-glow">
              <SheetTitle className="text-lg font-semibold mb-4">Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleLinkClick(e, item.href);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-3 rounded-md transition-standard text-base ${
                      activeSection === item.href.substring(1)
                        ? "text-foreground bg-secondary border-glow"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
