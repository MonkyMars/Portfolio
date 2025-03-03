"use client";
import { useState } from "react";
import { type projects } from "./TimelineItem";
import ProjectComponent from "./ProjectComponent";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<projects | null>(null);

  const projects: projects[] = [
    {
      title: "CarList",
      description: `CarList is a Next.js project I made on my own, It hasn't got its own database but rather uses multiple API's to fetch the data, such as model names, specs and images. Use the feature CarFinder to find the specs of the entered car. CarList uses 100% TypeScript and Scss.`,
      date: new Date(2024, 9, 26), // October 26, 2024
      image: "/carlist.png",
      href: "https://www.github.com/MonkyMars/CarList",
      details: {
        techStack: ["Next.js", "TypeScript", "Scss"],
        features: [
          "CarFinder",
          "CarList",
          "CarDetails",
          "CarImages",
          "CarSpecs",
        ],
        notes: [
          {
            title: "Problem",
            description:
              "There was not a clear problem that I was trying to solve with this project. It was more something I made out of passion for cars. I looked at tools to look up cars and thought to myself, I can make this better. A better design and features that were not available on other websites.",
            date: new Date(2024, 9, 12), // October 12, 2024
            image: "/carlist/carfinder.png",
          },
          {
            title: "Complications",
            description:
              "There weren't many complications with this project. The only thing that was a bit hard was the API's. I had to use multiple API's to get the data I needed. The API's were not always clear on what they returned and how to use them. Documentation was vague or completely missing.",
            date: new Date(2024, 9, 17), // October 17, 2024
            image: "/carlist/apininjas.png",
          },
          {
            title: "Conclussion",
            description:
              "In the end, this was a very fun project to make. I learned a lot about TypeScript and Next.js. I also learned how to use multiple API's in one project and combine the data given.",
            date: new Date(2024, 9, 26), // October 26, 2024
            image: "/carlist.png",
          },
        ],
      },
    },
    {
      title: "Something",
      description: `Something is a webstore I designed in JavaScript and TypeScript combined with Next.js. The webapp features logging in with jwt and next-auth as well as saving user preferences. The backend is in TypeScript and SupaBase is used for hosting the data, such as accounts and real time cart. For the design and mainly the fonts I took inspiration from Nothing.tech©.`,
      date: new Date(2024, 8, 16), // September 16, 2024
      image: "/something-keyboards.png",
      href: "https://github.com/MonkyMars/Something-Keyboards",
      details: {
        techStack: ["Next.js", "JavaScript", "TypeScript", "SupaBase"],
        features: [
          "UserAuth",
          "UserPreferences",
          "Cart",
          "RealTimeCart",
          "UserSettings",
        ],
        notes: [
          {
            title: "Problem",
            description:
              "This project was purely experimental, I wanted to refine my design language and learn more about TypeScript. I also wanted to learn how to use SupaBase as a backend service. The thing that made me make this project was the website from Nothing.tech©. I loved their design and wanted to make something similar.",
            date: new Date(2024, 8, 2), // September 2, 2024
            image: "/something/nothingtech.png",
          },
          {
            title: "Complications",
            description:
              "The biggest complication I had was the backend, especially the real time cart. I had never worked with real time data before and it was a bit hard to understand how it worked. The documentation from SupaBase was very clear and helped me a lot.",
            date: new Date(2024, 8, 13), // September 13, 2024
            image: "/something/supabase.png",
          },
          {
            title: "Conclussion",
            description:
              "This project was a great learning experience for me. I learned a lot about TypeScript and SupaBase. I also refined my design language and learned how to use real time data in a webapp.",
            date: new Date(2024, 8, 16), // September 16, 2024
            image: "/something-keyboards.png",
          },
        ],
      },
    },
    {
      title: "SchoolTool",
      description:
        "SchoolTool is an ELO (electronic learn environment). You can use SchoolTool to take notes in class, check your homework and assignments as well as plan your entire day using the build in calendar. This project is in JavaScript, Next.js since I did not know TypeScript at the time.",
      date: new Date(2024, 8, 1), // September 1, 2024
      image: "/schooltool.png",
      href: "https://github.com/MonkyMars/SchoolTool",
      details: {
        techStack: ["Next.js", "JavaScript", "Scss", "PostgreSQL"],
        features: ["Notes", "Homework", "Assignments", "Calendar", "Planner"],
        notes: [
          {
            title: "Problem",
            description:
              "I made this project for school. It was a take at the ELO my school was using at that time. I wanted to make something with my own design and my own needs.",
            date: new Date(2024, 7, 20), // August 20, 2024
            image: "/schooltool/somtoday.png",
          },
          {
            title: "Complications",
            description:
              "The biggest complication I had was the calendar. I had never made a calendar before and it was a bit hard to understand how it worked. I had to use multiple libraries to get the calendar working.",
            date: new Date(2024, 7, 25), // August 25, 2024
          },
          {
            title: "Conclussion",
            description:
              "In the end, this project was a great success. I used it for the entire school year and it helped me a lot. I learned a lot about JavaScript and Next.js. I also learned how to make a calendar with css grids, and make it responsive",
            date: new Date(2024, 8, 1), // September 1, 2024
            image: "/schooltool.png",
          },
        ],
      },
    },
    // {
    //   title: "ChatNest",
    //   description: `ChatNest was my first real project. I made multiple versions and each version topped the previous one looking at complexity. The first one was in plain HTML, CSS and Js, and the last one was in Next.js. ChatNest is a social media platform including private messaging, account creation and updating, posting stories (e.g., tweets) and having full customization over your profile`,
    //   date: new Date(2024, 6, 20), // July 20, 2024
    //   image: "/chatnest.png",
    //   href: "https://github.com/MonkyMars/ChatNest/",
    // },
    {
      title: "Amber Gallery",
      description:
        "A personal gallery for my girlfriend where she can save her artwork with selected categories and locations. This project is made in TypeScript and Scss, with Supabase being used for backend services. Such as storing artworks, analytics and securely storing account details.",
      date: new Date(2024, 9, 16), // October 16, 2024
      image: "/amber-gallery.png",
      href: "https://github.com/MonkyMars/amber-gallery/",
      details: {
        techStack: ["Next.js", "TypeScript", "Scss", "PostgreSQL"],
        features: [
          "Artwork",
          "Categories",
          "Locations",
          "Analytics",
          "Account",
        ],
        notes: [
          {
            title: "Problem",
            description:
              "I made this project for my girlfriend. She wanted a place to store her artwork and show it to the world. I wanted to make something that was easy to use and looked good.",
            date: new Date(2024, 9, 1), // October 1, 2024
            image: "/amber-gallery/artwork.jpg",
          },
          {
            title: "Complications",
            description:
              "Image hosting was a new for me, I had never used TypeScript to host images on the cloud. I used Vercel's free PostgreSQL so I didn't have access to feature like SupaBase buckets. In the end I used the image hosting from Cloudinary, and made it an Android APK using capacitor.js for my girlfriend to use.",
            date: new Date(2024, 9, 10), // October 10, 2024
            image: "/amber-gallery/cloudinary.png",
          },
          {
            title: "Conclussion",
            description:
              "In the end, this project was a great success overall. My girlfriend loves it and still uses it to this day to upload her artworks with the neccesary information. And I learned about image hosting and how to make an Android APK.",
            date: new Date(2024, 9, 16), // October 16, 2024
            image: "/amber-gallery.png",
          },
        ],
      },
    },
    {
      title: "Frame The Beat",
      description:
        "Frame The Beat is a collection of albumcovers. Save and share your favorite albumcovers with your friends. Frame The Beat is made in Next.js and TypeScript, the backend is in TypeScript and uses SupaBase for hosting the data.",
      date: new Date(2024, 11, 7), // December 7, 2024
      image: "/frame-the-beat.png",
      href: "https://github.com/MonkyMars/framethebeat/",
      details: {
        techStack: ["Next.js", "TypeScript", "Scss", "TailwindCSS", "SupaBase"],
        features: ["AlbumCovers", "Save", "Share", "Like", "Comment"],
        notes: [
          {
            title: "Problem",
            description:
              "This project was made with the user mind, a place where someone can save their favorite album covers. Sort and filter by genre and release date. I wanted to make something that was easy to use and looked good.",
            date: new Date(2024, 10, 20), // November 20, 2024
            image: "/frame-the-beat/moralpanic.jpg",
          },
          {
            title: "Complications",
            description:
              "Speed was the biggest complication, when I finished coding and added a few hundred albumcovers the website was very slow. I had to optimize the images and the database queries. Instead of pulling the images from an API, I put them in a SupaBase bucket and pulled them from there which was much faster.",
            date: new Date(2024, 11, 1), // December 1, 2024
            image: "/frame-the-beat/supabase.png",
          },
          {
            title: "Conclussion",
            description:
              "This was my biggest project so far, when I made this. Including a lot of features and data. I was also very excited that I could combine my two passions; coding and listening to music. ",
            date: new Date(2024, 11, 7), // December 7, 2024
            image: "/frame-the-beat.png",
          },
        ],
      },
    },
    {
      title: "BlueQuill",
      description:
        "BlueQuill was my first shot at an actual application, intended for succes and usage. Bluequill is made in Next.js using Typescript and TailwindCSS. The backend is written in Typescript and Go, and is built on SupaBase as database provider.",
      date: new Date(2025, 0, 4), // January 4, 2025
      image: "/bluequill.png",
      href: "https://github.com/MonkyMars/bluequill/",
      details: {
        techStack: ["Next.js", "TypeScript", "TailwindCSS", "SupaBase", "Go"],
        features: ["Notes", "Homework", "Assignments", "Calendar", "Planner"],
        notes: [
          {
            title: "Problem",
            description:
              "My teacher told me at school that if I could make a webapp with AI integrated, the succes rate of it taking off would be higher. I looked at the things I used on a daily basis and how I could improve that. I came up with BlueQuill, a note taking app with AI as writing assistant.",
            date: new Date(2024, 7, 20), // August 20, 2024
          },
          {
            title: "Complications",
            description:
              "AI was the biggest issue I had, I couldn't find a decent AI without many limitations in the free tier since my budget was 0 euros. I went with Cohere AI and their newest model, since it was fast and had great writing capabilities.",
            date: new Date(2024, 7, 25), // August 25, 2024
            image: "/bluequill/cohere.webp",
          },
          {
            title: "Conclussion",
            description:
              "I never released BlueQuill to the public, due to the AI limitations. I did however learn a lot about the proces of working with AI and using TipTap, a built-in text editor",
            date: new Date(2024, 8, 1), // September 1, 2024
            image: "/bluequill.png",
          },
        ],
      },
    },
  ];

  return (
    <section
      className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-2 border-primary-100"
      id="projects"
    >
      <h2 className="text-2xl font-doto font-extrabold text-gray-800 mb-6 flex items-center gap-2">
        Projects
        <div className="h-1 w-24 bg-primary-500 rounded-full"></div>
      </h2>
      <div className="grid gap-8">
        {projects
          ?.sort((a, b) => Number(b.date) - Number(a.date))
          .map((project, index) => (
            <ProjectComponent
              key={project.title}
              project={project}
              index={index}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
          ))}
      </div>
    </section>
  );
};

export default Projects;
