import { _Translator } from "next-intl";
import { projects as ProjectType, TimelineItem } from "./TimelineItem";

type TitleType = TimelineItem["title"];

export const getProjects = (t: _Translator): ProjectType[] => [
  // {
  //   title: "CarList",
  //   description: `CarList is a Next.js project I made on my own, It hasn't got its own database but rather uses multiple API's to fetch the data, such as model names, specs and images. Use the feature CarFinder to find the specs of the entered car. CarList uses 100% TypeScript and Scss.`,
  //   date: new Date(2024, 9, 26), // October 26, 2024
  //   image: "/carlist.png",
  //   type: "Web",
  //   href: "https://www.github.com/MonkyMars/CarList",
  //   details: {
  //     techStack: ["Next.js", "TypeScript", "Scss"],
  //     features: [
  //       "CarFinder",
  //       "CarList",
  //       "CarDetails",
  //       "CarImages",
  //       "CarSpecs",
  //     ],
  //     notes: [
  //       {
  //         title: "Problem",
  //         description:
  //           "There was not a clear problem that I was trying to solve with this project. It was more something I made out of passion for cars. I looked at tools to look up cars and thought to myself, I can make this better. A better design and features that were not available on other websites.",
  //         date: new Date(2024, 9, 12), // October 12, 2024
  //         image: "/carlist/carfinder.png",
  //       },
  //       {
  //         title: "Complications",
  //         description:
  //           "There weren't many complications with this project. The only thing that was a bit hard was the API's. I had to use multiple API's to get the data I needed. The API's were not always clear on what they returned and how to use them. Documentation was vague or completely missing.",
  //         date: new Date(2024, 9, 17), // October 17, 2024
  //         image: "/carlist/apininjas.png",
  //       },
  //       {
  //         title: "Conclussion",
  //         description:
  //           "In the end, this was a very fun project to make. I learned a lot about TypeScript and Next.js. I also learned how to use multiple API's in one project and combine the data given.",
  //         date: new Date(2024, 9, 26), // October 26, 2024
  //         image: "/carlist.png",
  //       },
  //     ],
  //   },
  // },
  // {
  //   title: "Something",
  //   description: `Something is a webstore I designed in JavaScript and TypeScript combined with Next.js. The webapp features logging in with jwt and next-auth as well as saving user preferences. The backend is in TypeScript and SupaBase is used for hosting the data, such as accounts and real time cart. For the design and mainly the fonts I took inspiration from Nothing.tech©.`,
  //   date: new Date(2024, 8, 16), // September 16, 2024
  //   image: "/something-keyboards.png",
  //   type: "E-commerce",
  //   href: "https://github.com/MonkyMars/Something-Keyboards",
  //   details: {
  //     techStack: ["Next.js", "JavaScript", "TypeScript", "SupaBase"],
  //     features: [
  //       "UserAuth",
  //       "UserPreferences",
  //       "Cart",
  //       "RealTimeCart",
  //       "UserSettings",
  //     ],
  //     notes: [
  //       {
  //         title: "Problem",
  //         description:
  //           "This project was purely experimental, I wanted to refine my design language and learn more about TypeScript. I also wanted to learn how to use SupaBase as a backend service. The thing that made me make this project was the website from Nothing.tech©. I loved their design and wanted to make something similar.",
  //         date: new Date(2024, 8, 2), // September 2, 2024
  //         image: "/something/nothingtech.png",
  //       },
  //       {
  //         title: "Complications",
  //         description:
  //           "The biggest complication I had was the backend, especially the real time cart. I had never worked with real time data before and it was a bit hard to understand how it worked. The documentation from SupaBase was very clear and helped me a lot.",
  //         date: new Date(2024, 8, 13), // September 13, 2024
  //         image: "/something/supabase.png",
  //       },
  //       {
  //         title: "Conclussion",
  //         description:
  //           "This project was a great learning experience for me. I learned a lot about TypeScript and SupaBase. I also refined my design language and learned how to use real time data in a webapp.",
  //         date: new Date(2024, 8, 16), // September 16, 2024
  //         image: "/something-keyboards.png",
  //       },
  //     ],
  //   },
  // },
  // {
  //   title: "SchoolTool",
  //   description:
  //     "SchoolTool is an ELO (electronic learn environment). You can use SchoolTool to take notes in class, check your homework and assignments as well as plan your entire day using the build in calendar. This project is in JavaScript, Next.js since I did not know TypeScript at the time.",
  //   date: new Date(2024, 8, 1), // September 1, 2024
  //   image: "/schooltool.png",
  //   type: "Web",
  //   href: "https://github.com/MonkyMars/SchoolTool",
  //   details: {
  //     techStack: ["Next.js", "JavaScript", "Scss", "PostgreSQL"],
  //     features: ["Notes", "Homework", "Assignments", "Calendar", "Planner"],
  //     notes: [
  //       {
  //         title: "Problem",
  //         description:
  //           "I made this project for school. It was a take at the ELO my school was using at that time. I wanted to make something with my own design and my own needs.",
  //         date: new Date(2024, 7, 20), // August 20, 2024
  //         image: "/schooltool/somtoday.png",
  //       },
  //       {
  //         title: "Complications",
  //         description:
  //           "The biggest complication I had was the calendar. I had never made a calendar before and it was a bit hard to understand how it worked. I had to use multiple libraries to get the calendar working.",
  //         date: new Date(2024, 7, 25), // August 25, 2024
  //       },
  //       {
  //         title: "Conclussion",
  //         description:
  //           "In the end, this project was a great success. I used it for the entire school year and it helped me a lot. I learned a lot about JavaScript and Next.js. I also learned how to make a calendar with css grids, and make it responsive",
  //         date: new Date(2024, 8, 1), // September 1, 2024
  //         image: "/schooltool.png",
  //       },
  //     ],
  //   },
  // },
  // {
  //   title: "Amber Gallery",
  //   description:
  //     "A personal gallery for my girlfriend where she can save her artwork with selected categories and locations. This project is made in TypeScript and Scss, with Supabase being used for backend services. Such as storing artworks, analytics and securely storing account details.",
  //   date: new Date(2024, 9, 16), // October 16, 2024
  //   image: "/amber-gallery.png",
  //   type: ["Web", "Mobile"],
  //   link: "https://github.com/MonkyMars/amber-gallery/",
  //   details: {
  //     techStack: ["Next.js", "TypeScript", "Scss", "PostgreSQL"],
  //     features: ["Artwork", "Categories", "Locations", "Analytics", "Account"],
  //     notes: [
  //       {
  //         title: "Problem",
  //         description:
  //           "I made this project for my girlfriend. She wanted a place to store her artwork and show it to the world. I wanted to make something that was easy to use and looked good.",
  //         date: new Date(2024, 9, 1), // October 1, 2024
  //         image: "/amber-gallery/artwork.jpg",
  //       },
  //       {
  //         title: "Complications",
  //         description:
  //           "Image hosting was a new for me, I had never used TypeScript to host images on the cloud. I used Vercel's free PostgreSQL so I didn't have access to feature like SupaBase buckets. In the end I used the image hosting from Cloudinary, and made it an Android APK using capacitor.js for my girlfriend to use.",
  //         date: new Date(2024, 9, 10), // October 10, 2024
  //         image: "/amber-gallery/cloudinary.png",
  //       },
  //       {
  //         title: "Conclussion",
  //         description:
  //           "In the end, this project was a great success overall. My girlfriend loves it and still uses it to this day to upload her artworks with the neccesary information. And I learned about image hosting and how to make an Android APK.",
  //         date: new Date(2024, 9, 16), // October 16, 2024
  //         image: "/amber-gallery/amber-gallery.png",
  //       },
  //     ],
  //   },
  // },
  {
    title: t("items.framethebeat.title"),
    description: t("items.framethebeat.description"),
    date: new Date(2024, 11, 7), // December 7, 2024
    image: "/frame-the-beat.png",
    type: "Web",
    link: "https://github.com/MonkyMars/framethebeat/",
    details: {
      techStack: ["Next.js", "TypeScript", "Scss", "TailwindCSS", "SupaBase"],
      features: ["AlbumCovers", "Save", "Share", "Like", "Comment"],
      notes: [
        {
          title: t("items.framethebeat.notes.problem.title") as TitleType,
          description: t("items.framethebeat.notes.problem.description"),
          date: new Date(2024, 10, 20), // November 20, 2024
          image: "/frame-the-beat/moralpanic.jpg",
        },
        {
          title: t("items.framethebeat.notes.complications.title") as TitleType,
          description: t("items.framethebeat.notes.complications.description"),
          date: new Date(2024, 11, 1), // December 1, 2024
          image: "/frame-the-beat/supabase.png",
        },
        {
          title: t("items.framethebeat.notes.conclusion.title") as TitleType,
          description: t("items.framethebeat.notes.conclusion.description"),
          date: new Date(2024, 11, 7), // December 7, 2024
          image: "/frame-the-beat.png",
        },
      ],
    },
  },
  // {
  //   title: "BlueQuill",
  //   description:
  //     "BlueQuill was my first shot at an actual application, intended for succes and usage. Bluequill is made in Next.js using Typescript and TailwindCSS. The backend is written in Typescript, and is built on SupaBase as database provider.",
  //   date: new Date(2025, 0, 4), // January 4, 2025
  //   image: "/bluequill.png",
  //   type: "Web",
  //   link: "https://github.com/MonkyMars/bluequill",
  //   details: {
  //     techStack: ["Next.js", "TypeScript", "TailwindCSS", "SupaBase"],
  //     features: ["Notes", "Homework", "Assignments", "Calendar", "Planner"],
  //     notes: [
  //       {
  //         title: "Problem",
  //         description:
  //           "My teacher told me at school that if I could make a webapp with AI integrated, the succes rate of it taking off would be higher. I looked at the things I used on a daily basis and how I could improve that. I came up with BlueQuill, a Google Docs alternative with an AI writing assistant.",
  //         date: new Date(2024, 7, 20), // August 20, 2024
  //       },
  //       {
  //         title: "Complications",
  //         description:
  //           "AI was the biggest issue I had, I couldn't find a decent AI without many limitations in the free tier since my budget was 0 euros. I went with Cohere AI and their newest model, since it was fast and had great writing capabilities.",
  //         date: new Date(2024, 7, 25), // August 25, 2024
  //         image: "/bluequill/cohere.webp",
  //       },
  //       {
  //         title: "Conclussion",
  //         description:
  //           "I never released BlueQuill to the public, due to the AI costs. I did however learn a lot about the proces of working with AI and using TipTap, a built-in text editor",
  //         date: new Date(2024, 8, 1), // September 1, 2024
  //         image: "/bluequill/bluequill.png",
  //       },
  //     ],
  //   },
  // },
  // {
  //   title: "VibeCast",
  //   description:
  //     "VibeCast is a playlist generator to create a playlist based on the weather or a specific genre. This project is purely made in GO and uses the zmb3 Spotify API wrapper.",
  //   date: new Date(2025, 2, 9), // March 9, 2025
  //   image: "/vibecast.png",
  //   type: "Desktop",
  //   href: "https://github.com/MonkyMars/vibecast/",
  //   details: {
  //     techStack: ["GO"],
  //     features: ["Weather", "Genre", "Playlist", "Spotify"],
  //     notes: [
  //       {
  //         title: "Problem",
  //         description:
  //           "There wasn't necessarily a problem I was trying to solve with this project. I was aiming for a simple GO application for my girlfriend to use. She loves music and I wanted to make something for her.",
  //         date: new Date(2025, 2, 7), // March 7, 2025
  //       },
  //       {
  //         title: "Complications",
  //         description:
  //           "In this project, I wanted to learn and practice GO since this was my first real project. The only problem I had was just me being a beginner in GO.",
  //         date: new Date(2025, 2, 8), // March 8, 2025
  //         image: "/vibecast/cmd.png",
  //       },
  //       {
  //         title: "Conclussion",
  //         description:
  //           "When I look back at this project, I realize that this project made me understand and love GO. It's definitely my favorite language by far currently. Definitely a big step forward to becoming a GO developer.",
  //         date: new Date(2025, 2, 9), // March 9, 2025
  //         image: "/vibecast.png",
  //       },
  //     ],
  //   },
  // },
  {
    title: t("items.greenvue.title"),
    description: t("items.greenvue.description"),
    date: new Date(2025, 3, 1), // April 1, 2025
    image: "/greenvue.webp",
    type: ["Web", "Mobile", "API"],
    link: [
      {
        url: "https://github.com/MonkyMars/GreenVue-Web",
        label: t("web"),
      },
      {
        url: "https://github.com/MonkyMars/GreenVue-Mobile",
        label: t("mobile"),
      },
      {
        url: "https://github.com/MonkyMars/GreenVue-API",
        label: t("api"),
      },
    ],
    details: {
      techStack: [
        "Next.js",
        "React Native",
        "GO",
        "PostgreSQL",
        "TypeScript",
        "SupaBase",
        "Docker",
        "Railway",
      ],
      features: [
        "Marketplace",
        "Sustainable",
        "Eco-Friendly",
        "Independent Sellers",
        "European Union",
      ],
      notes: [
        {
          title: t("items.greenvue.notes.problem.title") as TitleType,
          description: t("items.greenvue.notes.problem.description"),
          date: new Date(2025, 2, 20), // March 20, 2025
        },
        {
          title: t("items.greenvue.notes.complications.title") as TitleType,
          description: t("items.greenvue.notes.complications.description"),
          date: new Date(2025, 3, 1), // April 1, 2025
        },
        {
          title: t("items.greenvue.notes.conclusion.title") as TitleType,
          description: t("items.greenvue.notes.conclusion.description"),
          date: new Date(2025, 3, 1), // April 1, 2025
          image: "/greenvue.webp",
        },
      ],
    },
  },
  {
    title: t("items.ccheck.title"),
    description: t("items.ccheck.description"),
    date: new Date(2025, 8, 8), // September, 4, 2025
    image: "/ccheck.png",
    type: "CLI",
    link: "https://github.com/MonkyMars/ccheck",
    details: {
      techStack: ["GO"],
      features: ["content checker", "keywords", "patterns", "regex"],
      notes: [
        {
          title: t("items.ccheck.notes.problem.title") as TitleType,
          description: t("items.ccheck.notes.problem.description"),
          date: new Date(2025, 8, 1),
        },
        {
          title: t("items.ccheck.notes.complications.title") as TitleType,
          description: t("items.ccheck.notes.complications.description"),
          date: new Date(2025, 8, 3),
        },
        {
          title: t("items.ccheck.notes.conclusion.title") as TitleType,
          description: t("items.ccheck.notes.conclusion.description"),
          date: new Date(2025, 8, 8),
        },
      ],
    },
  },
  {
    title: t("items.roosvansharon.title"),
    description: t("items.roosvansharon.description"),
    date: new Date(2025, 12, 18), // December 18, 2025
    image: "/roosvansharon.png",
    type: "Fullstack",
    link: [
      {
        url: "https://github.com/mamabloemetjes/frontend",
        label: t("web"),
      },
      {
        url: "https://github.com/mamabloemetjes/backend",
        label: t("api"),
      },
    ],
    details: {
      techStack: ["Go", "Next.js", "TypeScript", "PostgreSQL", "SupaBase"],
      features: [
        "Flower Shop",
        "E-commerce",
        "Payment Integration",
        "Admin Panel",
        "Inventory Management",
      ],
      notes: [
        {
          title: t("items.roosvansharon.notes.problem.title") as TitleType,
          description: t("items.roosvansharon.notes.problem.description"),
          date: new Date(2025, 12, 1), // December 1, 2025
        },
        {
          title: t(
            "items.roosvansharon.notes.complications.title",
          ) as TitleType,
          description: t("items.roosvansharon.notes.complications.description"),
          date: new Date(2025, 12, 15), // December 15, 2025
        },
        {
          title: t("items.roosvansharon.notes.conclusion.title") as TitleType,
          description: t("items.roosvansharon.notes.conclusion.description"),
          date: new Date(2025, 12, 18), // December 18, 2025
          image: "/roosvansharon.png",
        },
      ],
    },
  },
];
