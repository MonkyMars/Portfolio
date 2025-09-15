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
      <main className="min-h-screen bg-gray-50 dark:bg-slate-950">
        <Navigation />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-6">
          {/* Hero Section */}
          <section className="py-6 lg:py-8">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Profile Card */}
              <div className="lg:col-span-4">
                <div className="sticky top-28">
                  <Aside />
                </div>
              </div>

              {/* About Section */}
              <div className="lg:col-span-8">
                <About />
              </div>
            </div>
          </section>

          {/* Main Content Sections */}
          <div className="space-y-6 lg:space-y-8">
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
      </main>
      <Footer />
    </>
  );
};

export default Home;
