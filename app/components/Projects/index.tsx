import { projects } from "./projects";
import ProjectFilters from "./ProjectFilters";
import ProjectList from "./ProjectList";

interface ProjectsProps {
  searchParams: Promise<{
    search?: string;
    type?: string;
    tech?: string;
  }>;
}

const Projects = async ({ searchParams }: ProjectsProps) => {
  let { search, tech, type } = await searchParams;

  if (search == undefined) {
    search = "";
  }

  if (tech == undefined) {
    tech = "all";
  }

  if (type == undefined) {
    type = "all";
  }

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
      search === "" ||
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());

    const typeMatch =
      type === "" ||
      type === "all" ||
      (Array.isArray(project.type)
        ? project.type.includes(type)
        : project.type === type);

    const techMatch =
      tech === "" ||
      tech === "all" ||
      project.details?.techStack?.includes(tech);

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
      <ProjectFilters projectTypes={projectTypes} techStacks={techStacks} />

      {/* Projects Grid */}
      <ProjectList
        projects={filteredProjects.sort(
          (a, b) => Number(b.date) - Number(a.date),
        )}
      />
    </section>
  );
};

export default Projects;
