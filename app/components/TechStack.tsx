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
      note: "TypeScript is a must-have for any serious project in my opinion. It helps me to catch errors before they even happen.",
      type: "language",
    },
    {
      label: "Git",
      iconSrc: "git",
      experience: 2023,
      note: "Git is a daily driver for me. I use it to manage my projects and also collaborate with others.",
      type: "tool",
    },
    {
      label: "Supabase",
      iconSrc: "supabase",
      experience: 2024,
      note: "I really love Supabase because the DX is amazing and they provide an amazing free tier that i can use for any project.",
      type: "service",
    },
    {
      label: "Go",
      iconSrc: "go",
      experience: 2025,
      note: "I've been coding in Go for quite a while now and created several applications with it. It's my favorite language by far!",
      type: "language",
    },
  ];

  const stackTypes: string[] = Array.from(
    new Set(
      stack.flatMap((item) =>
        Array.isArray(item.type) ? item.type : [item.type],
      ),
    ),
  ).sort();

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
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-1">
          <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 font-doto">
            Tech
          </h2>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-doto">
            stack
          </h2>
        </div>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex-1">
          <Input
            placeholder="Search technologies..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="h-10 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div className="flex gap-3 sm:w-auto">
          <Select
            value={filters.type}
            onValueChange={(value) => setFilters({ ...filters, type: value })}
          >
            <SelectTrigger className="h-10 w-full sm:w-[140px] border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700">
              <SelectItem
                value="all"
                className="text-gray-900 dark:text-gray-200"
              >
                All Categories
              </SelectItem>
              {stackTypes.map((item, index) => (
                <SelectItem
                  key={index}
                  value={item}
                  className="text-gray-900 dark:text-gray-200"
                >
                  {capitalize(item)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {(filters.search !== "" || filters.type !== "all") && (
            <button
              onClick={() => setFilters({ search: "", type: "all" })}
              className="px-4 h-10 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-white dark:hover:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors duration-200"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid gap-4">
        {filteredStack
          ?.sort((a, b) => Number(b.experience) - Number(a.experience))
          .map((stackItem, index) => (
            <div
              key={index}
              className="group p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="w-16 h-16 relative bg-gray-50 dark:bg-gray-800 rounded-lg flex-shrink-0 border border-gray-200 dark:border-gray-700">
                  <Image
                    src={`/icons/${stackItem.iconSrc.toLowerCase()}.png`}
                    alt={stackItem.label}
                    className="w-full h-full object-contain p-3"
                    fill
                    draggable={false}
                    sizes="64px"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 font-doto">
                      {stackItem.label.trim()}
                    </h3>
                    <div className="flex gap-2">
                      <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full font-medium border border-gray-200 dark:border-gray-700">
                        {stackItem.type.charAt(0).toUpperCase() +
                          stackItem.type.slice(1)}
                      </span>
                      <span className="text-xs px-3 py-1 bg-blue-600 text-white rounded-full font-extrabold font-doto">
                        Since {stackItem.experience}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed">
                    {stackItem.note.trim()}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

      {filteredStack.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No technologies found matching your criteria.
          </p>
        </div>
      )}
    </section>
  );
};

export default TechStack;
