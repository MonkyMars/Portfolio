"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { getTechStack } from "./techstack";
import { useTranslations } from "next-intl";

const TechStack = () => {
  const t = useTranslations("techStack");
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
  });

  const stack = getTechStack(t);

  const stackTypes: string[] = Array.from(
    new Set(
      stack.flatMap((item) =>
        Array.isArray(item.type) ? item.type : [item.type],
      ),
    ),
  )
    .filter(Boolean)
    .sort();

  const filteredStack = stack.filter((item) => {
    const searchMatch =
      filters.search === "" ||
      item.label.toLowerCase().includes(filters.search.toLowerCase());

    const typeMatch =
      filters.type === "" ||
      filters.type === "all" ||
      (Array.isArray(item.type)
        ? item.type.includes(filters.type)
        : item.type === filters.type);

    return searchMatch && typeMatch;
  });

  return (
    <section
      className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6"
      id="tech-stack"
      aria-labelledby="techstack-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-1">
          <h2
            id="techstack-heading"
            className="text-2xl font-semibold text-primary-600 dark:text-primary-400 font-doto"
          >
            {t("title")}
          </h2>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-doto">
            {t("titleRest")}
          </h2>
        </div>
        <div
          className="flex-1 h-px bg-gray-200 dark:bg-gray-700"
          role="separator"
        ></div>
      </div>

      {/* Filters */}
      <div
        className="flex flex-col sm:flex-row gap-4 mb-6 p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700"
        role="search"
        aria-label="Filter technologies"
      >
        <div className="flex-1">
          <Input
            placeholder={t("searchPlaceholder")}
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="h-10 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100"
            aria-label="Search technologies by name"
            type="search"
          />
        </div>

        <div className="flex gap-3 sm:w-auto">
          <Select
            value={filters.type}
            onValueChange={(value) => setFilters({ ...filters, type: value })}
          >
            <SelectTrigger
              className="h-10 w-full sm:w-[140px] border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100"
              aria-label="Filter by category"
            >
              <SelectValue placeholder={t("category")} />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700">
              <SelectItem
                value="all"
                className="text-gray-900 dark:text-gray-200"
              >
                {t("allCategories")}
              </SelectItem>
              {stackTypes.map((item, index) => (
                <SelectItem
                  key={index}
                  value={item}
                  className="text-gray-900 dark:text-gray-200"
                >
                  {t(`types.${item}`) || item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {(filters.search !== "" || filters.type !== "all") && (
            <button
              onClick={() => setFilters({ search: "", type: "all" })}
              className="px-4 h-10 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-white dark:hover:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors duration-200"
            >
              {t("clear")}
            </button>
          )}
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid gap-4" role="list" aria-label="Technologies">
        {filteredStack
          ?.sort((a, b) => Number(b.experience) - Number(a.experience))
          .map((stackItem, index) => (
            <div
              key={index}
              className="group p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200"
              role="listitem"
              itemScope
              itemType="https://schema.org/SoftwareApplication"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="w-16 h-16 relative bg-gray-50 dark:bg-gray-800 rounded-lg flex-shrink-0 border border-gray-200 dark:border-gray-700">
                  <Image
                    src={`/icons/${stackItem.iconSrc.toLowerCase()}.png`}
                    alt={stackItem.label}
                    className={`w-full h-full object-contain p-3 ${stackItem.className ? stackItem.className : ""}`}
                    fill
                    draggable={false}
                    sizes="64px"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                    <h3
                      className="text-xl font-extrabold text-gray-900 dark:text-gray-100 font-doto"
                      itemProp="name"
                    >
                      {stackItem.label.trim()}
                    </h3>
                    <div className="flex gap-2">
                      <span
                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full font-medium border border-gray-200 dark:border-gray-700"
                        itemProp="applicationCategory"
                      >
                        {Array.isArray(stackItem.type)
                          ? stackItem.type.join(", ")
                          : t(`types.${stackItem.type}`) || stackItem.type}
                      </span>
                      <span
                        className="text-xs px-3 py-1 bg-blue-600 text-white rounded-full font-extrabold font-doto"
                        aria-label={`Experience since ${stackItem.experience}`}
                      >
                        {t("since")} {stackItem.experience}
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed"
                    itemProp="description"
                  >
                    {stackItem.note.trim()}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

      {filteredStack.length === 0 && (
        <div className="text-center py-12" role="status" aria-live="polite">
          <p className="text-gray-500 dark:text-gray-400">
            {t("noTechnologies")}
          </p>
        </div>
      )}
    </section>
  );
};

export default TechStack;
