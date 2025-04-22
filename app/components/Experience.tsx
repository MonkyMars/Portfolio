interface Experiences {
  title: string;
  description: string;
  date: string;
}

const Experiences = () => {
  const experiences: Experiences[] = [
    {
      title: "First Steps in Programming",
      date: "27/11/2022",
      description:
        "Built and launched my first project — a Python Discord bot. It kicked off my interest in coding.",
    },
    {
      title: "Made coding my priority",
      date: "29/12/2023",
      description:
        "Decided to take software development seriously. Locked in a learning routine and stuck to it.",
    },
    {
      title: "Building Real Projects",
      date: "2024",
      description:
        "Created multiple projects using Next.js, TypeScript, and Tailwind. Built a webstore, a social platform, a personal gallery, and an album cover showcase.",
    },
    {
      title: "Q42 Internship",
      date: "06/01/2025",
      description:
        "Got an internship at Q42 for 8 weeks, a company known for its innovative projects.",
    },
    {
      title: "Independent Full-Stack Developer",
      date: `${String(new Date().getDate()).padStart(2, "0")}/${String(
        new Date().getMonth() + 1
      ).padStart(2, "0")}/${new Date().getFullYear()}`,
      description:
        "Building full-stack apps daily. Staying sharp, learning by doing, and leveling up with every project.",
    },
  ];
  

  return (
    <section
      className="bg-white dark:bg-slate-900/95 rounded-2xl shadow-lg p-8 mb-8 border-1 border-[rgba(255,255,255, 0.1)] border border-gray-100 dark:border-gray-800"
      id="experience"
    >
      <h2 className="text-2xl font-doto font-extrabold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
        Experience
        <div className="h-1 w-24 bg-primary-500 rounded-full"></div>
      </h2>
      <div className="grid gap-6">
        {experiences?.map((experience, index) => (
          <div
            key={index}
            className="border-l-4 border-primary-500 pl-4 py-2 bg-slate-200/20 dark:bg-slate-500/20 rounded-r-lg translate hover:translate-x-1 transition-transform duration-300"
          >
            <span className="text-sm text-primary-600 font-medium">
              {experience.date}
            </span>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-1">
              {experience.title}
            </h4>
            <p className="text-gray-600 mt-1 dark:text-gray-400/90">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
