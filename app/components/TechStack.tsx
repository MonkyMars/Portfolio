'use client';

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { capitalize } from "@/lib/utils";

interface TechStackItem {
	label: string;
	iconSrc: string;
	experience: number;
	note: string;
	type: "framework" | "service" | "language" | "library" | "tool";
}

const TechStack = () => {
	const [filters, setFilters] = useState({
		search: "",
		type: "all",
		tech: "all"
	});

	const stack: TechStackItem[] = [
		{
			label: "Next.js",
			iconSrc: "nextjs",
			experience: 2023,
			note: "Next.js has been by far my favorite framework ever. It's extremely fast, amazing for SEO and easy to use, especially if you come from React; Like me.",
			type: "framework",
		},
		{
			label: "Tailwind CSS",
			iconSrc: "tailwindcss",
			experience: 2024,
			note: "At first I was skeptical about Tailwind CSS because I thought it would take away creativity, but after using it for a while I can't imagine going back to vanilla CSS.",
			type: "framework",
		},
		{
			label: "TypeScript",
			iconSrc: "typescript",
			experience: 2023,
			note: "TypeScript is a must-have for any serious project. It helps me to catch errors before they even happen. Of course JavaScript is great, but TypeScript is better.",
			type: "language",
		},
		{
			label: "Git",
			iconSrc: "git",
			experience: 2023,
			note: "Git is a must-have for me. I use it for every project I work on, even if it's just a small project.",
			type: "tool",
		},
		{
			label: "SupaBase",
			iconSrc: "supabase",
			experience: 2024,
			note: "SupaBase is a great service for hosting databases. It's easy to use and has a great documentation.",
			type: "service",
		},
		{
			label: "GO",
			iconSrc: "go",
			experience: 2025,
			note: "I've been coding in GO for quite a while now and created several applications with it. It's my favorite language by far!",
			type: "language",
		},
	];

	const stackTypes: string[] = Array.from(
		new Set(
			stack.flatMap(item =>
				Array.isArray(item.type) ? item.type : [item.type]
			)
		)
	).sort();


	const filteredStack = stack.filter(item => {
		// Search filter (title and description)
		const searchMatch = filters.search === "" ||
			item.label.toLowerCase().includes(filters.search.toLowerCase());

		// Type filter
		const typeMatch = filters.type === "" || filters.type === "all" ||
			(Array.isArray(item.type)
				? item.type.includes(filters.type)
				: item.type === filters.type);


		return searchMatch && typeMatch;
	});



	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 20
			}
		}
	};

	return (
		<section
			className="bg-white dark:bg-slate-900/95 rounded-2xl shadow-lg p-8 mb-8 border-1 border-[rgba(255,255,255, 0.1)] border border-gray-100 dark:border-gray-800"
			id="tech-stack"
		>
			<h2 className="text-2xl font-doto font-extrabold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
				Tech Stack
				<div className="h-1 w-24 bg-primary-500 rounded-full"></div>
			</h2>
			<div className="flex flex-col gap-4 mb-8 bg-primary-50/50 dark:bg-slate-800/30 p-4 rounded-xl border border-primary-100 dark:border-slate-700/50 shadow-sm">
				<div className="w-full">
					<Input
						placeholder="Search projects..."
						value={filters.search}
						onChange={(e) => setFilters({ ...filters, search: e.target.value })}
						className="h-10 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:ring-primary-500 focus-visible:border-primary-400"
					/>
				</div>

				<div className="flex flex-col sm:flex-row flex-wrap gap-3">
					{/* Filter Selects */}
					<div className="flex flex-col sm:flex-row gap-3 flex-1">
						{/* Stack Type */}
						<Select
							value={filters.type}
							onValueChange={(value) => setFilters({ ...filters, type: value })}
						>
							<SelectTrigger className="h-10 w-full sm:w-[140px] border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-gray-900 dark:text-gray-100">
								<SelectValue placeholder="Project Type" />
							</SelectTrigger>
							<SelectContent className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700">
								<SelectItem value="all" className="text-gray-900 dark:text-gray-200 hover:dark:bg-slate-900/90 hover:bg-gray-100/90">
									All Types
								</SelectItem>
								{stackTypes.map((item, index) => (
									<SelectItem
										key={index}
										value={item}
										className="text-gray-900 dark:text-gray-200 hover:dark:bg-slate-900/90 hover:bg-gray-100/90"
									>
										<div className="flex items-center gap-2">
											{capitalize(item)}
										</div>
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					{/* Clear Button */}
					{(filters.search !== "" || filters.type !== "all" || filters.tech !== "all") && (
						<button
							onClick={() => setFilters({ search: "", type: "all", tech: "all" })}
							className="px-4 h-10 text-sm font-medium transition-all rounded-lg bg-primary-100 hover:bg-primary-200 text-primary-600 dark:bg-slate-700/70 dark:hover:bg-slate-700 dark:text-gray-200 border border-primary-200 dark:border-slate-600 w-full sm:w-auto"
						>
							Clear
						</button>
					)}
				</div>
			</div>
			<motion.div
				className="grid gap-8"
				variants={container}
				initial="hidden"
				animate="show"
			>
				<AnimatePresence>
					{filteredStack
						?.sort((a, b) => Number(b.experience) - Number(a.experience))
						.map((stackItem, index) => (
							<motion.div
								key={index}
								variants={item}
								className="group hover:bg-gray-50 dark:hover:bg-slate-500/90 p-6 transform hover:translate-x-1 
                border-l-4 border-primary-500 duration-300 transition-all bg-slate-200/20 dark:bg-slate-500/20 rounded-r-lg"
							>
								<div className="flex flex-col sm:flex-row gap-6 items-start">
									<div className="w-16 h-16 relative bg-gray-100 dark:bg-gray-700 rounded-lg transition-colors group-hover:bg-white dark:group-hover:bg-slate-900/90">
										<Image
											src={`/icons/${stackItem.iconSrc.toLocaleLowerCase()}.png`}
											alt={stackItem.label}
											className="w-full h-full object-contain group-hover:scale-105 transition-all duration-100 p-2"
											fill
											draggable={false}
											sizes="100%"
										/>
									</div>
									<div className="flex-1">
										<div className="flex items-center gap-3">
											<h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
												{stackItem.label}
											</h3>
											<span className="text-sm px-3 py-1 bg-primary-100 text-primary-600 rounded-full font-medium">
												{stackItem.type.charAt(0).toUpperCase() +
													stackItem.type.slice(1).toLowerCase()}
											</span>
										</div>
										<span className="text-sm text-primary-600 font-medium block mt-2">
											Since {stackItem.experience}
										</span>
										<p className="text-gray-600 mt-2 dark:text-gray-300/90">{stackItem.note}</p>
									</div>
								</div>
							</motion.div>
						))}
				</AnimatePresence>
			</motion.div>
		</section>
	);
};

export default TechStack;
