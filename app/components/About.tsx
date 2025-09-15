const About = () => {
  const about_me_text: string[] = [
    `I'm Levi Noppers, a ${(() => {
      const birthDate = new Date(2009, 6, 8);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    })()}-year-old software developer from The Hague, Netherlands.`,
    `My journey in software development began at age 12 with a Discord Bot project, and since then, I've been expanding my skillset with TypeScript and Go.`,
    `Personally, I enjoy coding and try to continuously improve my skills. I do this by trying to learn something at least new every week, even something small.`,
    `In my free time, I enjoy coding side projects, playing video games and listening to a lot of music.`,
  ];

  return (
    <section
      className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
      id="about"
    >
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-doto">
          About
        </h2>
        <h2 className="text-2xl font-semibold dark:text-primary-400 text-primary-600 font-doto">
          Me
        </h2>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
      </div>

      <div className="space-y-4">
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
