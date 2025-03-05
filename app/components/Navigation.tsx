'use client'
import { IdCard, Trophy, Folder, Package, Contact, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

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
    <nav className="fixed flex-col top-6 left-1/2  -translate-x-1/2 lg:flex hidden bg-white/90 dark:bg-slate-900/95 rounded-full px-6 py-3 backdrop-blur-md shadow-xl border border-slate-200/50 dark:border-slate-700/50 justify-center items-center z-50 transition-all duration-300">
      <ul className="flex gap-6 sm:gap-10">
        {nav_icons.map((icon, index) => (
          <li key={index}>
            <Link
              href={icon.href}
              className="flex flex-col items-center transition-all duration-200 hover:text-primary-600 text-gray-700/80 dark:text-gray-300/90 dark:hover:text-primary-400 group relative"
              aria-label={icon.label}
            >
              <div className="relative">
                <icon.src
                  size={26}
                  className="transition-transform duration-200 group-hover:scale-110 "
                  strokeWidth={2}
                />
                <span className="absolute -bottom-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-200 w-2.5 h-2.5 rounded-full bg-primary-500 dark:bg-primary-400"></span>
              </div>
              <span className="text-[.85em] mt-2 font-medium tracking-wider opacity-90 group-hover:opacity-100">
                {icon.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute right-[-60px] flex items-center">
        <button 
          type="button"
          className="rounded-full p-2 bg-slate-200 text-primary-600  dark:bg-slate-800 transition-colors duration-200 hover:bg-slate-300 dark:hover:bg-slate-700"
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>

    {/* Mobile navigation (visible only on sm and smaller) */}
    <nav className="flex lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md shadow-[0_-4px_10px_rgba(0,0,0,0.1)] border-t border-slate-200/50 dark:border-slate-700/50 px-2 sm:px-4 md:px-6 py-2 sm:py-3">
      <ul className="flex w-full justify-around items-center max-w-screen-md mx-auto">
        {nav_icons.map((icon, index) => (
          <li key={index} className="w-full">
            <Link
              href={icon.href}
              className="flex flex-col items-center transition-all duration-200 hover:text-primary-600 text-gray-700/80 dark:text-gray-300/90 dark:hover:text-primary-400 group relative"
              aria-label={icon.label}
            >
              <div className="relative">
                <icon.src
                  className="transition-transform duration-200 group-hover:scale-110 size-[26px] sm:size-[24px] md:size-[28px]"
                  strokeWidth={2}
                />
                <span className="absolute -bottom-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-200 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary-600 dark:bg-primary-500"></span>
              </div>
              <span className="text-[.65em] sm:text-[.75em] mt-1 font-medium tracking-wider opacity-90 group-hover:opacity-100 hidden sm:block">
                {icon.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Add theme toggle to mobile nav */}
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
      <button 
          type="button"
          className="rounded-full p-2 bg-slate-200 text-primary-600  dark:bg-slate-800 transition-colors duration-200 hover:bg-slate-300 dark:hover:bg-slate-700"
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  </>
);
}

export default Navigation;
