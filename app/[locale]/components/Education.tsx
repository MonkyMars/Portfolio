"use server";

import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { DyeFirstFewLettersBlue } from "@/lib/tsxUtils";

interface EducationItem {
	title: string;
	description: string;
	dateFrom: Date;
	dateTo: Date;
	icon: string;
}

const formatDate = (date: Date) =>
	`${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;

const Education = async ({ locale }: { locale: string }) => {
	const t = await getTranslations({ locale, namespace: "education" });

	const educationItems: EducationItem[] = [
		{
			title: t("cld.title"),
			description: t("cld.desc"),
			dateFrom: new Date(t("cld.dateFrom")),
			dateTo: new Date(t("cld.dateTo")),
			icon: "/icons/cld.jpeg",
		},
		{
			title: t("hbo.title"),
			description: t("hbo.desc"),
			dateFrom: new Date(t("hbo.dateFrom")),
			dateTo: new Date(t("hbo.dateTo")),
			icon: "/icons/hbo.jpg",
		},
	];

	return (
		<section
			className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6"
			id="education"
			aria-labelledby="education-heading"
			itemScope
			itemType="https://schema.org/ItemList"
		>
			<div className="flex items-center gap-4 mb-6">
				<div className="flex items-center gap-1">
					<h2
						id="education-heading"
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
				{educationItems.map((item, index) => (
					<div
						key={index}
						className="group relative pl-8 pb-6 last:pb-0"
						role="listitem"
						itemScope
						itemType="https://schema.org/EducationalOccupationalCredential"
					>
						{/* Timeline line */}
						{index !== educationItems.length - 1 && (
							<div className="absolute left-2 top-8 w-px h-full bg-gray-200 dark:bg-gray-700"></div>
						)}

						{/* Timeline dot */}
						<div className="absolute left-0 top-2 w-4 h-4 bg-primary-500 dark:bg-primary-400 rounded-full border-2 border-white dark:border-slate-900"></div>

						<div className="min-h-[60px] p-2 lg:p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
							<div className="flex items-start gap-4 mb-2">
								{/* Icon */}
								<div className="w-20 h-20 flex-shrink-0 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 flex items-center justify-center">
									<Image
										src={item.icon}
										alt={item.title}
										width={128}
										height={128}
										className="object-contain rounded"
									/>
								</div>
								<div className="flex-1 flex flex-col justify-center">
									<div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
										<div itemProp="name" className="text-lg font-semibold text-gray-900 dark:text-gray-100 font-doto">
											<DyeFirstFewLettersBlue title={item.title} />
										</div>
										<time
											className="text-sm text-primary-600 dark:text-primary-400 font-doto font-bold sm:ml-auto tracking-wide"
											itemProp="dateIssued"
										>
											{formatDate(item.dateFrom)} – {formatDate(item.dateTo)}
										</time>
									</div>
									<p
										className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-1"
										itemProp="description"
									>
										{item.description.trim()}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Education;
