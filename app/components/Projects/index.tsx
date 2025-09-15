"use client";
import { useState } from "react";
import { type projects as ProjectType } from "./TimelineItem";
import ProjectComponent from "./ProjectComponent";
import {
  ArrowDown,
  ArrowUp,
  Globe,
  Server,
  SquareTerminalIcon,
  TabletSmartphoneIcon,
} from "lucide-react";
import { projects } from "./projects";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null,
  );
  const [maxLength, setMaxLength] = useState<number>(5);
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    tech: "all",
  });

  // Get unique project types
  const projectTypes = Array.from(
    new Set(
      projects.flatMap((project) =>
        Array.isArray(project.type) ? project.type : [project.type],
      ),
    ),
  ).sort();

  // Get unique tech stack items
  const techStacks = Array.from(
    new Set(projects.flatMap((project) => project.details?.techStack || [])),
  ).sort();

  // Filter projects based on selected filters
  const filteredProjects = projects.filter((project) => {
    const searchMatch =
      filters.search === "" ||
      project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      project.description.toLowerCase().includes(filters.search.toLowerCase());

    const typeMatch =
      filters.type === "" ||
      filters.type === "all" ||
      (Array.isArray(project.type)
        ? project.type.includes(filters.type)
        : project.type === filters.type);

    const techMatch =
      filters.tech === "" ||
      filters.tech === "all" ||
      project.details?.techStack?.includes(filters.tech);

    return searchMatch && typeMatch && techMatch;
  });

  return (
    <section
      className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6"
      id="projects"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 font-doto">
            Pro
          </h2>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-doto">
            jects
          </h2>
        </div>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex-1">
          <Input
            placeholder="Search projects..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="h-10 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:w-auto">
          {/* Project Type */}
          <Select
            value={filters.type}
            onValueChange={(value) => setFilters({ ...filters, type: value })}
          >
            <SelectTrigger className="h-10 w-full sm:w-[140px] border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100">
              <SelectValue placeholder="Project Type" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700">
              <SelectItem
                value="all"
                className="text-gray-900 dark:text-gray-200"
              >
                All Types
              </SelectItem>
              {projectTypes.map((type) => (
                <SelectItem
                  key={type}
                  value={type}
                  className="text-gray-900 dark:text-gray-200"
                >
                  <div className="flex items-center gap-2">
                    {type === "Mobile" && <TabletSmartphoneIcon size={16} />}
                    {type === "API" && <Server size={16} />}
                    {type === "CLI" && <SquareTerminalIcon size={16} />}
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
            <SelectTrigger className="h-10 w-full sm:w-[160px] border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100">
              <SelectValue placeholder="Technology" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700">
              <SelectItem
                value="all"
                className="text-gray-900 dark:text-gray-200"
              >
                All Technologies
              </SelectItem>
              {techStacks.map((tech) => (
                <SelectItem
                  key={tech}
                  value={tech}
                  className="text-gray-900 dark:text-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={`/icons/${tech.replaceAll(".", "").toLowerCase()}.png`}
                      alt={tech}
                      width={16}
                      height={16}
                      className={`${tech.toLowerCase() === "railway" ? "invert dark:filter-none" : ""}`}
                    />
                    {tech}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Clear Button */}
          {(filters.search !== "" ||
            filters.type !== "all" ||
            filters.tech !== "all") && (
            <button
              onClick={() =>
                setFilters({ search: "", type: "all", tech: "all" })
              }
              className="px-4 h-10 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-white dark:hover:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors duration-200"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-4">
        {filteredProjects
          ?.sort((a, b) => Number(b.date) - Number(a.date))
          .slice(0, maxLength)
          .map((project) => (
            <ProjectComponent
              key={project.title}
              project={project}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
          ))}

        {filteredProjects.length >= 5 && (
          <div className="flex justify-center pt-4">
            {maxLength < filteredProjects.length ? (
              <button
                onClick={() => setMaxLength(filteredProjects.length)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Show More Projects
                <ArrowDown size={16} strokeWidth={1.5} />
              </button>
            ) : (
              <button
                onClick={() => setMaxLength(5)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Show Less
                <ArrowUp size={16} strokeWidth={1.5} />
              </button>
            )}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
