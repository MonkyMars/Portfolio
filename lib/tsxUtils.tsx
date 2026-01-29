export const DyeFirstFewLettersBlue = ({ title }: { title: string }) => {
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
			<span className="text-xl text-primary-600 dark:text-primary-400">
				{first}
			</span>{" "}
			<span className="text-[.98em] text-gray-900 dark:text-gray-100">
				{rest}
			</span>
		</h3>
	);
};