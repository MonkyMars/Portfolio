const About = () => {
	const about_me_text: string[] = [
		`I'm Levi Noppers, a ${(() => {
			const birthDate = new Date(2009, 6, 8);
			const today = new Date();
			today.setHours(0,0,0,0)
			let age = today.getFullYear() - birthDate.getFullYear();
			const m = today.getMonth() - birthDate.getMonth();
			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age--;
			}
			return age;
		})()}-year-old software developer from The Hague, Netherlands.`,
		`My journey in software development began at age 12 with a Discord Bot project, and since then, I've been expanding my skillset with Typescript and Go.`,
		`Personally, I enjoy coding and try to continuously improve my skills. I do this by trying to learn something new every week.`,
		`Communication is key to me, I'm fluent in Dutch and have proficiency in English. I love building in teams and collaborating with others as seen in PopQuick.`,
		`In my free time, I enjoy coding side projects, playing video games and listening to a lot of music.`,
	];
	return (
		<section
			className="bg-white dark:text-gray-100 dark:bg-slate-900/95 rounded-2xl shadow-lg p-8 mb-8 border-1 border-[rgba(255,255,255, 0.1)] border border-gray-100 dark:border-gray-800"
			id="about"
		>
			<h2 className="text-2xl font-doto font-extrabold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
				About Me
				<div className="h-1 w-24 bg-primary-500 rounded-full"></div>
			</h2>
			<div className="space-y-4">
				{about_me_text.map((text, index) => (
					<p key={index} className="text-gray-600 dark:text-gray-300/90 leading-relaxed">
						{text.trim() /* Trim whitespace */}
					</p>
				))}
			</div>
		</section>
	);
};

export default About;
