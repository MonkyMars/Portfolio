"use server";

const About = async () => {
  const about_me_text: string[] = [
    `Hey:) I'm Levi Noppers, a ${(() => {
      const birthDate = new Date(2009, 6, 8);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    })()}-year-old software developer from the best city in the Netherlands.`,
    `In my free time, I enjoy coding side projects, playing Rocket League and listening to a lot of music.`,
    `Thus far, I've worked on several projects, including websites, mobile apps and most importantly, backend systems.`,
    `After a few years of coding experience, I realised that I enjoy backend development way more than frontend development.`,
    `My go-to languages are Rust and Go, though I have far more experience with Go than with Rust.`,
    `If you're interested in my work, feel free to check out my GitHub or send an email:)`,
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
          About
        </h2>
        <h2 className="text-2xl font-semibold dark:text-primary-400 text-primary-600 font-doto">
          Me
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
