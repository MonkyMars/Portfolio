"use client";
import {
	IdCard,
	Trophy,
	Folder,
	Package,
	Moon,
	Sun,
} from "lucide-react";
import Image from "next/image";
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
	{ label: "About", href: "#about", src: IdCard },
	{ label: "Experience", href: "#experience", src: Trophy },
	{ label: "Projects", href: "#projects", src: Folder },
	{ label: "Tech", href: "#tech-stack", src: Package },
];

const Navigation = () => {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	const [mounted, setMounted] = useState(false);
	const [activeItem, setActiveItem] = useState<string>("#aside");
	// audio player removed

	useEffect(() => {
		setMounted(true);
		const savedTheme = localStorage.getItem("theme");

		if (!savedTheme) {
			const systemPrefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			const initialTheme = systemPrefersDark ? "dark" : "light";
			setTheme(initialTheme);

			if (initialTheme === "dark") {
				document.documentElement.classList.add("dark");
			}
			localStorage.setItem("theme", initialTheme);
		} else {
			setTheme(savedTheme as "light" | "dark");
			if (savedTheme === "dark") {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		}
	}, []);

	// Track scroll position to highlight active nav item
	useEffect(() => {
		const handleScroll = () => {
			const sections = nav_icons.map((icon) => icon.href.substring(1));
			const scrollPosition = window.scrollY + 100;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = document.getElementById(sections[i]);
				if (section && section.offsetTop <= scrollPosition) {
					setActiveItem(`#${sections[i]}`);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);

		if (newTheme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("theme", newTheme);
	};




	if (!mounted) return null;

	return (
		<>
			{/* Desktop navigation */}
			<nav className="fixed top-4 left-1/2 -translate-x-1/2 lg:flex hidden bg-white/95 dark:bg-slate-900/95 rounded-xl px-6 py-3 backdrop-blur-sm shadow-sm border border-gray-200/80 dark:border-gray-700/80 z-50">
				<ul className="flex gap-4 items-center">
					{nav_icons.map((icon, index) => (
						<li key={index}>
							<Link
								href={icon.href}
								className={`flex flex-col items-center transition-colors duration-200 group px-2 py-1.5
                  ${activeItem === icon.href
										? "text-primary-600 dark:text-primary-400"
										: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
									}`}
								aria-label={icon.label}
								onClick={() => setActiveItem(icon.href)}
							>
								<icon.src size={18} className="mb-1" strokeWidth={1.5} />
								<span className="tracking-wide font-doto font-extrabold">
									{icon.label}
								</span>
								{activeItem === icon.href && (
									<div className="w-1 h-1 bg-primary-500 rounded-full mt-1.5"></div>
								)}
							</Link>
						</li>
					))}
				</ul>

				{/* Theme toggle */}
				<div className="ml-6 pl-6 border-l border-gray-200 dark:border-gray-700 flex items-center">
					<button
						type="button"
						className="rounded-lg p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
						aria-label="Toggle theme"
						onClick={toggleTheme}
					>
						{theme === "dark" ? (
							<Sun size={16} strokeWidth={1.5} />
						) : (
							<Moon size={16} strokeWidth={1.5} />
						)}
					</button>
				</div>
			</nav>






			{/* Mobile navigation */}
			<nav className="flex lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-gray-200/80 dark:border-gray-700/80 px-3 py-2">
				<ul className="flex w-full justify-evenly items-center">
					{nav_icons.map((icon, index) => (
						<li key={index} className="flex-1 flex justify-center">
							<Link
								href={icon.href}
								className={`flex flex-col items-center justify-center transition-colors duration-200 px-2 py-1.5
                  ${activeItem === icon.href
										? "text-primary-600 dark:text-primary-400"
										: "text-gray-500 dark:text-gray-400"
									}`}
								aria-label={icon.label}
								onClick={() => setActiveItem(icon.href)}
							>
								<icon.src size={18} strokeWidth={1.5} />
								<span className="text-[10px] mt-1 font-medium tracking-wide hidden sm:block font-doto">
									{icon.label}
								</span>
								{activeItem === icon.href && (
									<div className="w-1 h-1 bg-primary-500 rounded-full mt-1"></div>
								)}
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile theme toggle - floating */}
				<button
					type="button"
					className="fixed right-4 bottom-20 rounded-full p-2.5 bg-white/95 dark:bg-slate-900/95 text-gray-500 dark:text-gray-400 shadow-sm border border-gray-200/80 dark:border-gray-700/80 z-50 backdrop-blur-sm hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
					aria-label="Toggle theme"
					onClick={toggleTheme}
				>
					{theme === "dark" ? (
						<Sun size={18} strokeWidth={1.5} />
					) : (
						<Moon size={18} strokeWidth={1.5} />
					)}
				</button>
			</nav>
		</>
	);
};

export default Navigation;
