"use server";

import { getTranslations } from "next-intl/server";
import { DyeFirstFewLettersBlue } from "@/lib/tsxUtils";

interface Experience {
  title: string;
  description: string;
  date: string;
}

const Experiences = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: "experience" });

  const experiences: Experience[] = [
    {
      title: t("items.firstSteps.title"),
      date: t("items.firstSteps.date"),
      description: t("items.firstSteps.description"),
    },
    {
      title: t("items.learningNew.title"),
      date: t("items.learningNew.date"),
      description: t("items.learningNew.description"),
    },
    {
      title: t("items.buildingReal.title"),
      date: t("items.buildingReal.date"),
      description: t("items.buildingReal.description"),
    },
    {
      title: t("items.q42.title"),
      date: t("items.q42.date"),
      description: t("items.q42.description"),
    },
    {
      title: t("items.independent.title"),
      date: `${String(new Date().getDate()).padStart(2, "0")}/${String(
        new Date().getMonth() + 1,
      ).padStart(2, "0")}/${new Date().getFullYear()}`,
      description: t("items.independent.description"),
    },
  ];

  return (
    <section
      className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6"
      id="experience"
      aria-labelledby="experience-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center">
          <h2
            id="experience-heading"
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

      <div className="space-y-4" role="list">
        {experiences?.map((experience, index) => (
          <div
            key={index}
            className="group relative pl-8 pb-6 last:pb-0"
            role="listitem"
            itemScope
            itemType="https://schema.org/Event"
          >
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-2 top-8 w-px h-full bg-gray-200 dark:bg-gray-700"></div>
            )}

            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-4 h-4 bg-primary-500 dark:bg-primary-400 rounded-full border-2 border-white dark:border-slate-900"></div>

            <div className="min-h-[60px] p-2 lg:p-4 roup border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                <div itemProp="name">
                  <DyeFirstFewLettersBlue title={experience.title} />
                </div>
                <time
                  className="text-sm text-primary-600 dark:text-primary-400 font-doto font-extrabold sm:ml-auto"
                  itemProp="startDate"
                >
                  {experience.date.trim()}
                </time>
              </div>
              <p
                className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed"
                itemProp="description"
              >
                {experience.description.trim()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
