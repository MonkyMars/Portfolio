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

	return (
		<>
			{/* Desktop navigation */}
			<nav className="fixed top-4 left-1/2 -translate-x-1/2 lg:flex hidden bg-white/90 dark:bg-slate-900/95 rounded-2xl px-6 py-3 backdrop-blur-md shadow-lg border border-slate-200/50 dark:border-slate-700/50 z-50 transition-all duration-300">
				<ul className="flex gap-8 items-center">
					{nav_icons.map((icon, index) => (
						<li key={index}>
							<Link
								href={icon.href}
								className={`flex flex-col items-center transition-all duration-200 hover:text-primary-600 dark:hover:text-primary-400 group relative px-2 py-1
                  ${activeItem === icon.href
										? "text-primary-600 dark:text-primary-400"
										: "text-gray-600 dark:text-gray-300"}`}
								aria-label={icon.label}
								onClick={() => setActiveItem(icon.href)}
							>
								<div className="relative">
									<icon.src
										size={22}
										className="transition-transform duration-200 group-hover:scale-110"
										strokeWidth={2}
									/>
									<span className={`absolute -bottom-0.5 -right-0.5 transition-all duration-200 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400
                    ${activeItem === icon.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></span>
								</div>
								<span className="text-xs mt-1.5 font-medium tracking-wide opacity-90 group-hover:opacity-100">
									{icon.label}
								</span>
							</Link>
						</li>
					))}
				</ul>

				{/* Theme toggle integrated into navbar */}
				<div className="ml-6 pl-6 border-l border-slate-200 dark:border-slate-700 flex items-center">
					<motion.button
						type="button"
						className="rounded-xl p-2 bg-slate-100 text-primary-600 dark:bg-slate-800 dark:text-primary-400 transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-slate-700"
						aria-label="Toggle dark mode"
						onClick={toggleTheme}
						whileTap={{ scale: 0.95 }}
						whileHover={{ scale: 1.05 }}
					>
						<AnimatePresence mode="wait" initial={false}>
							<motion.div
								key={theme}
								initial={{ rotate: -30, opacity: 0 }}
								animate={{ rotate: 0, opacity: 1 }}
								exit={{ rotate: 30, opacity: 0 }}
								transition={{ duration: 0.2 }}
							>
								{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
							</motion.div>
						</AnimatePresence>
					</motion.button>
				</div>
			</nav>

			{/* Mobile navigation */}
			<nav className="flex lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-t border-slate-200/50 dark:border-slate-700/50 px-2 py-3">
				<ul className="flex w-full justify-evenly items-center">
					{nav_icons.map((icon, index) => (
						<li key={index} className="flex-1 flex justify-center">
							<Link
								href={icon.href}
								className={`flex flex-col items-center justify-center transition-all duration-200 hover:text-primary-600 group relative px-2 py-1
                  ${activeItem === icon.href
										? "text-primary-600 dark:text-primary-400"
										: "text-gray-600 dark:text-gray-300 dark:hover:text-primary-400"}`}
								aria-label={icon.label}
								onClick={() => setActiveItem(icon.href)}
							>
								<div className="relative">
									<icon.src
										size={20}
										className="transition-transform duration-200 group-hover:scale-110"
										strokeWidth={2}
									/>
									<span className={`absolute -bottom-0.5 -right-0.5 transition-all duration-200 w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-500
                    ${activeItem === icon.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></span>
								</div>
								<span className="text-[10px] mt-1 font-medium tracking-wide opacity-90 group-hover:opacity-100 hidden sm:block">
									{icon.label}
								</span>
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile theme toggle - floating button */}
				<motion.button
					type="button"
					className="fixed right-4 bottom-20 rounded-full p-3 bg-white/95 dark:bg-slate-900/95 text-primary-600 dark:text-primary-400 shadow-lg border border-slate-200/50 dark:border-slate-700/50 z-50 backdrop-blur-md"
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
							{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
						</motion.div>
					</AnimatePresence>
				</motion.button>
			</nav>
		</>
	);
}

export default Navigation;