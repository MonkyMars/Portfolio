import { useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Eye } from "lucide-react";
import { type projects } from "./TimelineItem";
import TimeLineView from "./TimeLine";

interface ProjectComponentProps {
  project: projects;
  setSelectedProject: (project: projects | null) => void;
  selectedProject: projects | null;
}

type RepoLink = {
  url: string;
  label: string;
};

const ProjectComponent = ({
  project,
  setSelectedProject,
  selectedProject,
}: ProjectComponentProps) => {
  const isRepoLinkArray = (href: unknown): href is RepoLink[] => {
    return (
      Array.isArray(href) &&
      href.length > 0 &&
      typeof href[0] === "object" &&
      href[0] !== null &&
      "url" in href[0] &&
      "label" in href[0]
    );
  };

  const getPrimaryRepoUrl = useCallback(() => {
    if (typeof project.link === "string") {
      return project.link;
    } else if (isRepoLinkArray(project.link)) {
      return project.link[0].url;
    }
    return "";
  }, [project.link]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: project.title,
      description: project.description,
      datePublished: project.date,
      programmingLanguage: project.details?.techStack,
      codeRepository: getPrimaryRepoUrl(),
      author: {
        "@type": "Person",
        name: "Levi Noppers",
      },
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [project, getPrimaryRepoUrl]);

  return (
    <div className="group border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200 overflow-hidden">
      <div className="p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Project Image */}
          <div className="w-full lg:w-2/5">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <Image
                src={`/demos/${project.image}`}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="w-full lg:w-3/5 flex flex-col lg:pl-2">
            {/* Header */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full font-medium border border-gray-200 dark:border-gray-700">
                {new Date(project.date).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>

              {Array.isArray(project.type) ? (
                project.type.map((type, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-blue-600 text-white rounded-full font-extrabold font-doto"
                  >
                    {type}
                  </span>
                ))
              ) : (
                <span className="text-xs px-3 py-1 bg-blue-600 text-white rounded-full font-extrabold font-doto">
                  {project.type}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2 font-doto">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            {/* Tech Stack */}
            {project.details?.techStack && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.details.techStack.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-400/30 text-blue-700 dark:text-blue-100 rounded border border-blue-200 dark:border-blue-700 font-doto font-extrabold"
                  >
                    {tech}
                  </span>
                ))}
                {project.details.techStack.length > 4 && (
                  <span className="text-xs px-2 py-1 text-blue-500 dark:text-blue-400 font-doto font-extrabold">
                    +{project.details.techStack.length - 4} more
                  </span>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              {typeof project.link === "string" ? (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-400 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-100 bg-blue-50 dark:bg-blue-300/30 border border-blue-200 dark:border-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-400/40 transition-colors duration-200 font-doto">
                    <ExternalLink size={16} strokeWidth={1.5} />
                    Repository
                  </button>
                </Link>
              ) : isRepoLinkArray(project.link) ? (
                project.link.map((item, i) => (
                  <Link
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-400 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-100 bg-blue-50 dark:bg-blue-300/30 border border-blue-200 dark:border-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-400/40 transition-colors duration-200 font-doto">
                      <ExternalLink size={16} strokeWidth={1.5} />
                      {item.label}
                    </button>
                  </Link>
                ))
              ) : null}

              {project.details && (
                <button
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-extrabold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors duration-200 font-doto"
                  onClick={() => setSelectedProject(project)}
                >
                  <Eye size={16} strokeWidth={1.5} />
                  View Details
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject?.title === project.title && (
        <TimeLineView
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectComponent;
