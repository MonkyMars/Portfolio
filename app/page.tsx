import type { NextPage } from "next";
import Aside from "./components/Aside";
import Navigation from "./components/Navigation";
import Experiences from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import TechStack from "./components/TechStack";

const Home: NextPage = () => {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section with Aside */}
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 md:py-16">
          <div className="grid md:grid-cols-12 gap-4 sm:gap-8">
            {/* Profile Card */}
            <div className="w-full md:col-span-4 lg:col-span-3 overflow-x-hidden">
              <Aside />
            </div>

            {/* Main Content */}
            <div className="w-full md:col-span-8 lg:col-span-9">
              {/* Navigation */}
              <div className="max-w-[95vw] sm:max-w-full mx-auto">
                <Navigation />
              </div>

              {/* About Section */}
              <div className="max-w-[95vw] sm:max-w-full mx-auto">
                <About />
              </div>

              {/* Experience Section */}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="">
              <Experiences />
            </div>

            {/* Projects Section */}
            <div className="max-w-[95vw] sm:max-w-full mx-auto">
              <Projects />
            </div>

            <TechStack />
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Home;
