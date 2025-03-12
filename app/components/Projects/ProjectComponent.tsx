import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type projects } from "./TimelineItem";
import TimeLineView from "./TimeLine";


interface ProjectComponentProps {
    project: projects;
    index: number;
    setSelectedProject: (project: projects | null) => void;
    selectedProject: projects | null;
}

const ProjectComponent = ({ project, index, setSelectedProject, selectedProject }: ProjectComponentProps) => {
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
      codeRepository: project.href,
      author: {
        "@type": "Person",
        name: "Levi Noppers",
      },
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [project]);

  return (
    <div
      key={index}
      className="group hover:bg-gray-50 dark:hover:bg-slate-800/90 p-6 transition-all rounded-lg border-2 border-primary-200/50"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-video overflow-hidden">
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
              className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-600 text-sm font-medium my-2">
            {project.date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <Link href={project.href} prefetch target="_blank">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-2 hover:underline decoration-primary-500 cursor-pointer">
              {index+1}. {project.title}
            </h3>
          </Link>

          <p className="text-gray-600 mt-3 dark:text-gray-300/90">{project.description}</p>
          <div className="flex gap-4 mt-4 justify-center lg:justify-start">
            <Link href={project.href} prefetch target="_blank">
              <button className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-500 bg-primary-100 px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2">
                Repository
                <ArrowRight size={18} />
              </button>
            </Link>
            <button
              className="mt-4 text-sm font-medium text-white bg-primary-600 px-4 py-2 rounded-full hover:bg-primary-700 transition-colors duration-300 flex items-center gap-2"
              onClick={() => setSelectedProject(project)}
            >
              See Details
              <ArrowRight size={18} />
            </button>
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
