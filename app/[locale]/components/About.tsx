"use server";

import { getTranslations } from "next-intl/server";

const About = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: "about" });

  const getAge = () => {
    const birthDate = new Date(2009, 6, 8);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const about_me_text: string[] = [
    t("intro", { age: getAge() }),
    t("paragraph1"),
    t("paragraph2"),
    t("paragraph3"),
    t("paragraph4"),
    t("paragraph5"),
  ];

  return (
    <section
      className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
      id="about"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <div className="flex items-center gap-4 mb-6">
        <h2
          id="about-heading"
          className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-doto"
        >
          {t("title")}
        </h2>
        <h2 className="text-2xl font-semibold dark:text-primary-400 text-primary-600 font-doto">
          {t("titleHighlight")}
        </h2>
        <div
          className="flex-1 h-px bg-gray-200 dark:bg-gray-700"
          role="separator"
        ></div>
      </div>

      <div className="space-y-4" itemProp="description">
        {about_me_text.map((text, index) => (
          <p
            key={index}
            className="text-gray-600 dark:text-gray-300 leading-relaxed text-[15px]"
          >
            {text.trim()}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
