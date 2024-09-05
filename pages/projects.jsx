import styles from "../styles/Projects.module.css";
import Link from "next/link";
import Image from "next/image";
import { GradientBG } from "../components/Gradient";
import { useRef, useState, useEffect } from "react";

export default function Projects() {
  const headerRef = useRef(null);
  const leviRef = useRef(null);

  const projects = [
    {
      title: "ChatNest",
      src: "/Chatnest.png",
      description:
        "ChatNest is an app designed for ease of use and speed. Step into an amazing new chatting platform. Share and chat in ChatNest.",
      width: 400,
    },
    {
      title: "DailyBibleVerses",
      src: "/dailybibleverses.png",
      description:
        "DailyBibleVerses is an app made for people who want to read random bible verses every day. Come back daily for a new bible verse both in English and Dutch!",
      width: 600,
    },
    {
      title: "DailyCooking",
      src: "/dailycooking.png",
      description:
        "Dont know what to make and got some spare ingredients? Then DailyCooking is the app for you! Its as simple as entering your ingredients and voila!",
      width: 600,
    },
    {
      title: "DailyWater",
      src: "/dailywater.png",
      description:
        "Got trouble drinking enough water? Need to track your hydration? Use DailyWater! Get a reminder every few hours to drink something.",
      width: 600,
    },
    {
      title: "Notes",
      src: "/notes.png",
      description: 
        "Need an app for keeping all your notes? Use the app for writing all your notes and list all the things you need to remember. Set up reminders for your notes so you'll never forget!",
      width: 600,
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const triggerPoint = window.innerHeight * 0.55;
      const triggerPoint2 = window.innerHeight * 0.3;
      if (window.scrollY > triggerPoint) {
        headerRef.current.style.opacity = "1";
        headerRef.current.style.zIndex = "9";
        headerRef.current.style.transition = "all 1s";
        headerRef.current.style.position = "fixed";
        headerRef.current.style.top = "-25px";
        headerRef.current.style.left = "0%";
        leviRef.current.style.position = "fixed";
        leviRef.current.style.left = "3%";
        leviRef.current.style.top = "0%";
        leviRef.current.style.fontSize = "2rem";
        leviRef.current.style.zIndex = "9";
      } else if (window.scrollY < triggerPoint2) {
        headerRef.current.style.position = "relative";
        headerRef.current.style.top = "0";
        headerRef.current.style.left = "0";
        leviRef.current.style.position = "relative";
        leviRef.current.style.left = "0";
        leviRef.current.style.top = "0%";
        leviRef.current.style.fontSize = "5rem";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <GradientBG />
      <nav className={styles.Nav}></nav>

      <header className={styles.header}>
        <h1 ref={leviRef}>Projects</h1>
        <code>Selfmade projects</code>
        <div ref={headerRef}>
          <Link href="https://github.com/MonkyMars" target="_blank">
            <button>
              <Image src="/github.png" alt="github" width={20} height={20} />
              Github
            </button>
          </Link>
          <Link href={"/"}>
            <button>
              <Image src="/home.png" alt="home" width={20} height={20} />
              Home
            </button>
          </Link>
          <Link href="/contact">
            <button className={styles.Contact}>
              <Image
                src="/user-portfolio.png"
                alt="contact"
                width={20}
                height={20}
              />
              Contact
            </button>
          </Link>
        </div>
      </header>

      <main className={styles.mainContent}>
        {projects.map((project, index) => {
          return (
            <div className={styles.project} key={index}>
              <h2>
                <Link
                  target="_blank"
                  href={`https://github.com/monkymars/${project.title}`}
                >{`${index + 1}. ${project.title}`}</Link>
              </h2>
              <Image
                src={project.src}
                width={project.width}
                height={250}
                alt={project.title}
              />
              <p>{project.description}</p>
            </div>
          );
        })}
      </main>
    </>
  );
}
