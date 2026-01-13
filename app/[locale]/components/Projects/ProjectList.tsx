"use client";
import { useState } from "react";
import { type projects as ProjectType } from "./TimelineItem";
import ProjectComponent from "./ProjectComponent";
import { useTranslations } from "next-intl";

interface ProjectListProps {
  projects: ProjectType[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  const t = useTranslations("projects");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null,
  );

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <ProjectComponent
          key={project.title}
          project={project}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      ))}
      {projects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">{t("noProjects")}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
