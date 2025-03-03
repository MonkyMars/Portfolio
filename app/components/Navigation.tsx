import { IdCard, Trophy, Folder, Package, Contact } from "lucide-react";
import Link from "next/link";

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
  return (<>
    {/* Desktop navigation (visible only on lg and up) */}
    <nav className="fixed top-6 left-1/2  -translate-x-1/2 lg:flex hidden bg-white/90 dark:bg-slate-900/95 rounded-full px-6 py-3 backdrop-blur-md shadow-xl border border-slate-200/50 dark:border-slate-700/50 justify-center items-center z-50 transition-all duration-300">
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

    {/* Mobile navigation (visible only on sm and smaller) */}
    <nav className="flex lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md shadow-[0_-4px_10px_rgba(0,0,0,0.1)] border-t border-slate-200/50 dark:border-slate-700/50 px-2 py-2">
      <ul className="flex w-full justify-around items-center">
        {nav_icons.map((icon, index) => (
          <li key={index}>
            <Link
              href={icon.href}
              className="flex flex-col items-center transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 group relative py-1"
              aria-label={icon.label}
            >
              <div className="relative">
                <icon.src
                  className="transition-transform duration-200 group-hover:scale-110 sm:size-[24px] md:size-[28px] lg:size-[32px]"
                  strokeWidth={2}
                />
                <span className={`absolute -bottom-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-200 w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400`}></span>
              </div>
              <span className="text-[.65em] mt-1 font-medium tracking-wider opacity-90 group-hover:opacity-100">
                {icon.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </>
);
}

export default Navigation;
