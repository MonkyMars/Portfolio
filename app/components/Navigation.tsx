import { Send, IdCard, Trophy, Folder, Package } from "lucide-react";
import Link from "next/link";

interface navIcons {
  label: string;
  href: string;
  src: React.ComponentType<{ size?: string | number; className?: string; strokeWidth?: number }>;
}

const nav_icons: navIcons[] = [
  { label: "Contact", href: "#aside", src: Send },
  { label: "Me", href: "#about", src: IdCard },
  { label: "Experience", href: "#experience", src: Trophy },
  { label: "Projects", href: "#projects", src: Folder },
  { label: "Tech Stack", href: "#tech-stack", src: Package },
];

const Navigation = () => (
  <nav className="fixed bottom-8 sm:top-6 sm:bottom-auto left-1/2 -translate-x-1/2 flex bg-white/90 dark:bg-slate-900/95 rounded-full px-6 py-3 backdrop-blur-md shadow-xl border border-slate-200/50 dark:border-slate-700/50 justify-center items-center z-50 transition-all duration-300">
    <ul className="flex gap-6 sm:gap-10">
      {nav_icons.map((icon, index) => (
        <li key={index}>
          <Link 
            href={icon.href}
            className="flex flex-col items-center transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 group relative"
            aria-label={icon.label}
          >
            <div className="relative">
              <icon.src 
                size={26} 
                className="transition-transform duration-200 group-hover:scale-110" 
                strokeWidth={2}
              />
              <span className="absolute -bottom-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-200 w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            </div>
            <span className="text-[.85em] mt-2 font-medium tracking-wider opacity-90 group-hover:opacity-100">
              {icon.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;