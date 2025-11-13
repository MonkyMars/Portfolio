import { JSX } from "react";

interface Experience {
	title: string;
	description: string;
	date: string;
}

const DyeFirstFewLettersBlue = ({title}: {title: string}) => {
	const t = title.trim();
	if (!t) {
		return (
			<h3 className="text-lg font-extrabold text-gray-900 dark:text-gray-100 font-doto">
				{t}
			</h3>
		);
	}

	const splitted = t.split(" ");
	const first = splitted[0];
	const rest = splitted.slice(1).join(" ");

	return (
		<h3 className="font-extrabold font-doto">
			<span className="text-xl text-primary-600 dark:text-primary-400">{first}</span>
			{" "}
			<span className="text-[.98em] text-gray-900 dark:text-gray-100">{rest}</span>
		</h3>
	);
}


const Experiences = () => {
	const experiences: Experience[] = [
		{
			title: "First Steps",
			date: "2022",
			description:
				"Came in touch with programming for the first time",
		},
		{
			title: "Learning New Things",
			date: "2023",
			description:
				"Went up from Python to html, css and js to eventually React and Next.js:)",
		},
		{
			title: "Building Real Projects",
			date: "2024",
			description:
				"Created multiple projects using Next.js, TypeScript, and Tailwind including, but not limited to: a webstore (Something) and an album cover showcase (Frame The Beat).",
		},
		{
			title: "Q42 Internship",
			date: "06/01/2025",
			description:
				"Got an internship at Q42 for 8 weeks, a company known for its innovative projects. Had a lot of fun there and got the oppertunity to interview a full time frontend developer.",
		},
		{
			title: "Independent Full-Stack Developer",
			date: `${String(new Date().getDate()).padStart(2, "0")}/${String(
				new Date().getMonth() + 1,
			).padStart(2, "0")}/${new Date().getFullYear()}`,
			description:
				"Currently focusing on the server side of things. Learning both Go and Rust.",
		},
	];

	return (
		<section
			className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6"
			id="experience"
		>
			<div className="flex items-center gap-4 mb-6">
				<div className="flex items-center">
					<h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 font-doto">
						Exp
					</h2>
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-doto">
						erience
					</h2>
				</div>
				<div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
			</div>

			<div className="space-y-4">
				{experiences?.map((experience, index) => (
					<div key={index} className="group relative pl-8 pb-6 last:pb-0">
						{/* Timeline line */}
						{index !== experiences.length - 1 && (
							<div className="absolute left-2 top-8 w-px h-full bg-gray-200 dark:bg-gray-700"></div>
						)}

						{/* Timeline dot */}
						<div className="absolute left-0 top-2 w-4 h-4 bg-primary-500 dark:bg-primary-400 rounded-full border-2 border-white dark:border-slate-900"></div>

						<div className="min-h-[60px] p-2 lg:p-4 roup border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600">
							<div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
								<DyeFirstFewLettersBlue title={experience.title} />
								<span className="text-sm text-primary-600 dark:text-primary-400 font-doto font-extrabold sm:ml-auto">
									{experience.date.trim()}
								</span>
							</div>
							<p className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed">
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
