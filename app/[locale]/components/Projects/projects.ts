import { _Translator } from "next-intl";
import { projects as ProjectType, TimelineItem } from "./TimelineItem";

type TitleType = TimelineItem["title"];

export const getProjects = (t: _Translator): ProjectType[] => [
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
