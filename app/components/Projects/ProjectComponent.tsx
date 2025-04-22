import { useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleAlert } from "lucide-react";
import { type projects } from "./TimelineItem";
import TimeLineView from "./TimeLine";

interface ProjectComponentProps {
  project: projects;
  index: number;
  setSelectedProject: (project: projects | null) => void;
  selectedProject: projects | null;
}

// Define a type for repository links
type RepoLink = {
  url: string;
  label: string;
};

const ProjectComponent = ({
  project,
  index,
  setSelectedProject,
  selectedProject,
}: ProjectComponentProps) => {
  // Type guard function to help with type checking
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

  // Get primary repository URL with proper type handling
  const getPrimaryRepoUrl = useCallback(() => {
    if (typeof project.href === "string") {
      return project.href;
    } else if (isRepoLinkArray(project.href)) {
      return project.href[0].url;
    }
    return "";
  }, [project.href]);

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
    <div
      key={index}
      className="group hover:bg-gray-50 dark:hover:bg-slate-800/90 p-6 transition-all rounded-lg border-2 border-primary-200/50"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-video overflow-hidden rounded-3xl">
            <Image
              src={`/demos/${project.image}`}
              alt={`${
                project.title
              } - Project by Levi Noppers showcasing ${project.details?.techStack?.join(
                ", "
              )}`}
              title={`${
                project.title
              } - Project by Levi Noppers showcasing ${project.details?.techStack?.join(
                ", "
              )}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              unoptimized
              className="object-cover rounded-xl p-2 group-hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-600 text-sm font-medium my-2">
              {project.date.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            {/* Handle both single type string and array of types */}
            {Array.isArray(project.type) ? (
              // Multiple types
              project.type.map((type, i) => (
              <span 
                key={i} 
                className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium my-2 border border-blue-200 dark:border-blue-800/30"
              >
                {type}
              </span>
              ))
            ) : (
              // Single type
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium my-2 border border-blue-200 dark:border-blue-800/30">
              {project.type}
              </span>
            )}
          </div>
          <Link href={getPrimaryRepoUrl()} prefetch target="_blank">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-2 hover:underline decoration-primary-500 cursor-pointer">
              {index + 1}. {project.title}
            </h3>
          </Link>

          <p className="text-gray-600 mt-3 dark:text-gray-300/90">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
            {/* Repository Links Section */}
            {typeof project.href === "string" ? (
              // Single string URL
              <Link href={project.href} prefetch target="_blank">
                <button className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-500 bg-primary-100 px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2">
                  Repository
                  <ArrowRight size={18} />
                </button>
              </Link>
            ) : isRepoLinkArray(project.href) ? (
              // Array of {url, label} objects
              project.href.map((item, i) => (
                <Link key={i} href={item.url} prefetch target="_blank">
                  <button className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-500 bg-primary-100 px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2">
                    {item.label}
                    <ArrowRight size={18} />
                  </button>
                </Link>
              ))
            ) : null}

            {project.details ? (
              <button
                className="mt-4 text-sm font-medium text-white bg-primary-600 px-4 py-2 rounded-full hover:bg-primary-700 transition-colors duration-300 flex items-center gap-2"
                onClick={() => setSelectedProject(project)}
              >
                See Details
                <ArrowRight size={18} />
              </button>
            ) : (
              <p className="mt-4 text-sm font-medium text-white bg-gray-600 px-4 py-2 rounded-full hover:bg-primary-700 transition-colors duration-300 flex items-center gap-2">
                No details available
                <CircleAlert size={18} className="text-gray-300" />
              </p>
            )}
          </div>
        </div>
      </div>
      {selectedProject?.title === project.title ? (
        <TimeLineView
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </div>
  );
};

export default ProjectComponent;
