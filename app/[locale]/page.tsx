"use server";

import type { NextPage } from "next";
import Aside from "./components/Aside";
import Navigation from "./components/Navigation";
import Experiences from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import TechStack from "./components/TechStack";
import Likes from "./components/Likes";
import Education from "./components/Education";

interface HomePageProps {
	searchParams: Promise<{
		search?: string;
		type?: string;
		tech?: string;
	}>;
}

type Props = HomePageProps & {
	params: Promise<{ locale: string }>;
};

const Home: NextPage<Props> = async ({ searchParams, params }: Props) => {
	const { locale } = await params;

	return (
		<>
			<main id="main-content" className="min-h-screen">
				<Navigation />

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-6">
					{/* Hero Section */}
					<section className="py-6 lg:py-8" aria-label="Introduction">
						<div className="grid lg:grid-cols-12 gap-8">
							{/* Profile Card */}
							<div className="lg:col-span-4">
								<div className="sticky top-28">
									<Aside locale={locale} />
								</div>
							</div>

							{/* About Section */}
							<article className="lg:col-span-8">
								<About locale={locale} />
							</article>
						</div>
					</section>

					{/* Main Content Sections */}
					<div className="space-y-6 lg:space-y-8">
						{/* Education Section */}
						<Education locale={locale} />

						{/* Experience Section */}
						<Experiences locale={locale} />

						{/* Projects Section */}
						<Projects searchParams={searchParams} locale={locale} />

						{/* Tech Stack Section */}
						<TechStack />

						{/* Likes Section */}
						<Likes locale={locale} />
					</div>
				</div>
			</main>
			<Footer locale={locale} />
		</>
	);
};

export default Home;
