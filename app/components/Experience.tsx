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
				"Built and launched my first project — a Python Discord bot. This started my interest in programming.",
		},
		{
			title: "Made coding a priority",
			date: "29/12/2023",
			description:
				"Decided to take software development seriously. Started learning React and eventually TypeScript with Next.Js.",
		},
		{
			title: "Building Real Projects",
			date: "2024",
			description:
				"Created multiple projects using Next.js, TypeScript, and Tailwind. Built a webstore (Something), a personal gallery (Amber Gallery), and an album cover showcase (Frame The Beat).",
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
				"Working on my own projects daily, focusing on backend development with Go and frontend with Next.js.",
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
							{experience.date.trim()}
						</span>
						<h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-1">
							{experience.title.trim()}
						</h4>
						<p className="text-gray-600 mt-1 dark:text-gray-400/90">
							{experience.description.trim()}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Experiences;
