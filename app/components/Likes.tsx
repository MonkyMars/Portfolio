import Image from "next/image";

const Likes = () => {
	return (
		<section
			className="bg-white dark:bg-slate-900/95 rounded-2xl shadow-lg p-8 mb-8 border-1 border-[rgba(255,255,255, 0.1)] border border-gray-100 dark:border-gray-800"
			id="likes"
		>
			<h2 className="text-2xl font-doto font-extrabold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
				Things I like
				<div className="h-1 w-24 bg-primary-500 rounded-full"></div>
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
				<LikesCard
					label="Golang"
					iconSrc="go"
					note="I love coding in Go. It's currently my favorite language due to the simplicity and speed."
				/>
				<LikesCard
					label="Music"
					iconSrc="spotify"
					note="I love listening to music while coding."
				/>
			</div>
		</section>
	)
};

interface LikesCardProps {
	label: string;
	iconSrc: string;
	note: string;
};

const invertedIcons: string[] = [
	"spotify"
]

const LikesCard = ({
	label,
	iconSrc,
	note,
}: LikesCardProps) => {

	const isInverted = invertedIcons.includes(iconSrc);
	const imageClass = "object-contain transition-transform duration-300";
	const iconClass = isInverted ? `${imageClass} dark:invert` : imageClass;

	return (
		<div className="flex flex-col items-center justify-center text-center bg-white dark:bg-slate-900/90 rounded-lg shadow-lg p-6 border-1 border-[rgba(255,255,255, 0.1)] border border-gray-100 dark:border-gray-800 h-full">
			<div className="relative w-16 h-16 mb-4 flex items-center justify-center">
					<Image
						src={`/icons/${iconSrc}.png`}
						alt={label}
						width={48}
						height={48}
						className={iconClass}
						priority
					/>
			</div>
			<h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">{label}</h3>
			<p className="text-gray-600 dark:text-gray-400 text-sm">{note}</p>
		</div>
	);
};

export default Likes;