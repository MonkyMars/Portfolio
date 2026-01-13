"use client";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Globe,
  Server,
  SquareTerminalIcon,
  TabletSmartphoneIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ProjectFiltersProps {
  projectTypes: string[];
  techStacks: string[];
}

const ProjectFilters = ({ projectTypes, techStacks }: ProjectFiltersProps) => {
  const t = useTranslations("projects");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange("search", e.target.value);
  };

  const clearFilters = () => {
    router.push("/");
  };

  const search = searchParams.get("search") || "";
  const type = searchParams.get("type") || "all";
  const tech = searchParams.get("tech") || "all";

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex-1">
        <Input
          placeholder={t("searchPlaceholder")}
          value={search}
          onChange={handleSearchChange}
          className="h-10 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:w-auto">
        {/* Project Type */}
        <Select
          value={type}
          onValueChange={(value) => handleFilterChange("type", value)}
        >
          <SelectTrigger className="h-10 w-full sm:w-[140px] border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100">
            <SelectValue placeholder={t("projectType")} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700">
            <SelectItem
              value="all"
              className="text-gray-900 dark:text-gray-200"
            >
              {t("allTypes")}
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
          value={tech}
          onValueChange={(value) => handleFilterChange("tech", value)}
        >
          <SelectTrigger className="h-10 w-full sm:w-[160px] border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100">
            <SelectValue placeholder={t("technology")} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700">
            <SelectItem
              value="all"
              className="text-gray-900 dark:text-gray-200"
            >
              {t("allTechnologies")}
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
                    className={`${
                      tech.toLowerCase() === "railway"
                        ? "invert dark:filter-none"
                        : ""
                    }`}
                  />
                  {tech}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Clear Button */}
        {(search !== "" || type !== "all" || tech !== "all") && (
          <button
            onClick={clearFilters}
            className="px-4 h-10 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-white dark:hover:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors duration-200"
          >
            {t("clear")}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectFilters;
