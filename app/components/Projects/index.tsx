"use client";
import { useState } from "react";
import { type projects as ProjectType } from "./TimelineItem";
import ProjectComponent from "./ProjectComponent";
import { ArrowDown, ArrowUp, Globe, Server, TabletSmartphoneIcon } from "lucide-react";
import { projects } from "./projects";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import Image from "next/image";

const Projects = () => {
	const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
	const [maxLength, setMaxLength] = useState<number>(5);
	const [filters, setFilters] = useState({
		search: "",
		type: "all",
		tech: "all"
	});

	// Get unique project types
	const projectTypes = Array.from(
		new Set(
			projects.flatMap(project =>
				Array.isArray(project.type) ? project.type : [project.type]
			)
		)
	).sort();

	// Get unique tech stack items
	const techStacks = Array.from(
		new Set(
			projects.flatMap(project => project.details?.techStack || [])
		)
	).sort();

	// Filter projects based on selected filters
	const filteredProjects = projects.filter(project => {
		// Search filter (title and description)
		const searchMatch = filters.search === "" ||
			project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
			project.description.toLowerCase().includes(filters.search.toLowerCase());

		// Type filter
		const typeMatch = filters.type === "" || filters.type === "all" ||
			(Array.isArray(project.type)
				? project.type.includes(filters.type)
				: project.type === filters.type);

		// Tech stack filter
		const techMatch = filters.tech === "" || filters.tech === "all" ||
			project.details?.techStack?.includes(filters.tech);

		return searchMatch && typeMatch && techMatch;
	});

	return (
		<section
			className="bg-white rounded-2xl shadow-lg p-8 mb-8 dark:bg-slate-900/95 border border-gray-100 dark:border-gray-800"
			id="projects"
		>
			<h2 className="text-2xl font-doto font-extrabold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
				Projects
				<div className="h-1 w-24 bg-primary-500 rounded-full"></div>
			</h2>

			{/* Filter Bar */}
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
						{/* Project Type */}
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
								{projectTypes.map((type) => (
									<SelectItem
										key={type}
										value={type}
										className="text-gray-900 dark:text-gray-200 hover:dark:bg-slate-900/90 hover:bg-gray-100/90"
									>
										<div className="flex items-center gap-2">
											{type === "Mobile" && <TabletSmartphoneIcon size={16} />}
											{type === "API" && <Server size={16} />}
											{type === "Web" && <Globe size={16} />}
											{type}
										</div>
									</SelectItem>
								))}
							</SelectContent>
						</Select>

						{/* Technology */}
						<Select
							value={filters.tech}
							onValueChange={(value) => setFilters({ ...filters, tech: value })}
						>
							<SelectTrigger className="h-10 w-full sm:w-[160px] border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-gray-900 dark:text-gray-100">
								<SelectValue placeholder="Technology" />
							</SelectTrigger>
							<SelectContent className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700">
								<SelectItem value="all" className="text-gray-900 dark:text-gray-200 hover:dark:bg-slate-900/90 hover:bg-gray-100/90">
									All Technologies
								</SelectItem>
								{techStacks.map((tech) => (
									<SelectItem
										key={tech}
										value={tech}
										className="text-gray-900 dark:text-gray-200 hover:dark:bg-slate-900/90 hover:bg-gray-100/90"
									>
										<Image
											src={`/icons/${tech.replaceAll('.', '').toLowerCase()}.png`}
											alt={tech}
											width={16}
											height={16}
											className={`inline-block mr-2 ${tech.toLowerCase() === "railway" ? "invert dark:filter-none" : ""}`}
										/>
										{tech}
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


			<div className="grid gap-8">
				{filteredProjects
					?.sort((a, b) => Number(b.date) - Number(a.date))
					.slice(0, maxLength)
					.map((project, index) => (
						<ProjectComponent
							key={project.title}
							project={project}
							index={index}
							selectedProject={selectedProject}
							setSelectedProject={setSelectedProject}
						/>
					))}
				{filteredProjects.length >= 5 && (
					<>
						{maxLength < filteredProjects.length ? (
							<button
								onClick={() => setMaxLength(filteredProjects.length)}
								className="flex items-center justify-center gap-2 px-4 py-2 mt-4 text-sm font-medium transition-all rounded-lg bg-primary-100 hover:bg-primary-200 text-primary-600 dark:bg-slate-800/70 dark:hover:bg-slate-800 dark:text-gray-200 border border-primary-200 dark:border-slate-700 w-full md:w-auto self-center"
							>
								See more <ArrowDown className="w-4 h-4" />
							</button>
						) : (
							<button
								onClick={() => setMaxLength(5)}
								className="flex items-center justify-center gap-2 px-4 py-2 mt-4 text-sm font-medium transition-all rounded-lg bg-primary-100 hover:bg-primary-200 text-primary-600 dark:bg-slate-800/70 dark:hover:bg-slate-800 dark:text-gray-200 border border-primary-200 dark:border-slate-700 w-full md:w-auto self-center"
							>
								See less <ArrowUp className="w-4 h-4" />
							</button>
						)}
					</>
				)}
			</div>
		</section>
	);
};

export default Projects;
