'use client'
import { IdCard, Trophy, Folder, Package, Contact, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface navIcons {
  label: string;
  href: string;
  src: React.ComponentType<{
    size?: string | number;
    className?: string;
    strokeWidth?: number;
  }>;
}

const nav_icons: navIcons[] = [
  { label: "Contact", href: "#aside", src: Contact },
  { label: "Me", href: "#about", src: IdCard },
  { label: "Experience", href: "#experience", src: Trophy },
  { label: "Projects", href: "#projects", src: Folder },
  { label: "Tech Stack", href: "#tech-stack", src: Package },
];

const Navigation = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("#aside");

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    
    if (!savedTheme) {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = systemPrefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      
      if (initialTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
      localStorage.setItem('theme', initialTheme);
    } else {
      setTheme(savedTheme as 'light' | 'dark');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Track scroll position to highlight active nav item
  useEffect(() => {
    const handleScroll = () => {
      const sections = nav_icons.map(icon => icon.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };
  
  if (!mounted) return null;

  return (<>
    {/* Desktop navigation (visible only on lg and up) */}
    <nav className="fixed flex-col top-6 left-1/2 -translate-x-1/2 lg:flex hidden bg-white/90 dark:bg-slate-900/95 rounded-full px-8 py-3 backdrop-blur-md shadow-xl border border-slate-200/50 dark:border-slate-700/50 justify-center items-center z-50 transition-all duration-300">
      <ul className="flex gap-6 sm:gap-10 items-center">
        {nav_icons.map((icon, index) => (
          <li key={index}>
            <Link
              href={icon.href}
              className={`flex flex-col items-center transition-all duration-200 hover:text-primary-600 dark:hover:text-primary-400 group relative
                ${activeItem === icon.href 
                  ? "text-primary-600 dark:text-primary-400" 
                  : "text-gray-700/80 dark:text-gray-300/90"}`}
              aria-label={icon.label}
              onClick={() => setActiveItem(icon.href)}
            >
              <div className="relative">
                <icon.src
                  size={26}
                  className="transition-transform duration-200 group-hover:scale-110"
                  strokeWidth={2}
                />
                <span className={`absolute -bottom-1 -right-1 transition-all duration-200 w-2.5 h-2.5 rounded-full bg-primary-500 dark:bg-primary-400
                  ${activeItem === icon.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></span>
              </div>
              <span className="text-[.85em] mt-2 font-medium tracking-wider opacity-90 group-hover:opacity-100">
                {icon.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      
      {/* Theme toggle outside the navbar */}
      <div className="absolute right-[-60px] flex items-center">
        <motion.button 
          type="button"
          className="rounded-full p-2 bg-slate-200 text-primary-600 dark:bg-slate-800 transition-colors duration-200 hover:bg-slate-300 dark:hover:bg-slate-700"
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>
    </nav>

    {/* Mobile navigation (visible only below lg breakpoint) */}
    <nav className="flex lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md shadow-[0_-4px_10px_rgba(0,0,0,0.1)] border-t border-slate-200/50 dark:border-slate-700/50 py-2">
      <ul className="flex w-full justify-evenly items-center max-w-screen-md mx-auto">
        {nav_icons.map((icon, index) => (
          <li key={index} className="flex-1 flex justify-center">
            <Link
              href={icon.href}
              className={`flex flex-col items-center justify-center transition-all duration-200 hover:text-primary-600 group relative
                ${activeItem === icon.href 
                  ? "text-primary-600 dark:text-primary-400" 
                  : "text-gray-700/80 dark:text-gray-300/90 dark:hover:text-primary-400"}`}
              aria-label={icon.label}
              onClick={() => setActiveItem(icon.href)}
            >
              <div className="relative">
                <icon.src
                  className="transition-transform duration-200 group-hover:scale-110 w-[18px] h-[18px] xs:w-[20px] xs:h-[20px] sm:w-[24px] sm:h-[24px]"
                  strokeWidth={2}
                />
                <span className={`absolute -bottom-1 -right-1 transition-all duration-200 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary-600 dark:bg-primary-500
                  ${activeItem === icon.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></span>
              </div>
              {/* Show text only on larger screens */}
              <span className="text-[.6em] xs:text-[.65em] sm:text-[.7em] mt-1 font-medium tracking-wider opacity-90 group-hover:opacity-100 hidden sm:block">
                {icon.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      
      {/* Fixed floating theme toggle for mobile */}
      <motion.button 
        type="button"
        className="fixed right-4 bottom-20 rounded-full p-3 bg-white/90 dark:bg-slate-900/95 text-primary-600 dark:text-primary-400 shadow-lg border border-slate-200/50 dark:border-slate-700/50 z-50 backdrop-blur-md"
        aria-label="Toggle dark mode"
        onClick={toggleTheme}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </nav>
  </>
);
}

export default Navigation;
