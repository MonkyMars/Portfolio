import type { NextPage } from "next";
import Aside from "./components/Aside";
import Navigation from "./components/Navigation";
import Experiences from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import TechStack from "./components/TechStack";
import Likes from "./components/Likes";

const Home: NextPage = () => {
	return (
		<>
			<main className="min-h-screen pt-16 dark:bg-slate-950 bg-[#e3e3e350] pb-0 sm:pb-8">
				<Navigation />

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
					{/* Hero Section with Profile and About */}
					<section className="py-6 sm:py-8 lg:py-12">
						<div className="grid md:grid-cols-12 gap-6 lg:gap-8">
							{/* Profile Card */}
							<div className="md:col-span-4 lg:col-span-3">
								<div className="sticky top-20">
									<Aside />
								</div>
							</div>

							{/* About Section */}
							<div className="md:col-span-8 lg:col-span-9">
								<About />
							</div>
						</div>
					</section>

					{/* Main Content Sections */}
					<div className="space-y-6 sm:space-y-8 lg:space-y-10">
						{/* Experience Section */}
						<Experiences />

						{/* Projects Section */}
						<Projects />

						{/* Tech Stack Section */}
						<TechStack />

						{/* Likes Section */}
						<Likes />
					</div>
				</div>

				<Footer />
			</main>
		</>
	);
};

export default Home;