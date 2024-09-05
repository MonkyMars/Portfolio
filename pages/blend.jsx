import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React, { useEffect, useRef } from "react";
import { GradientBG } from "../components/Gradient";
import { useMediaQuery } from "react-responsive";

export default function Blend() {
  const mainRef = useRef(null);
  const headerRef = useRef(null);
  const leviRef = useRef(null);
  const isTabletorMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const triggerPoint = window.innerHeight * 0.55;
      const triggerPoint2 = window.innerHeight * 0.3;
      if (window.scrollY > triggerPoint && !isTabletorMobile) {
        headerRef.current.style.opacity = "1";
        headerRef.current.style.zIndex = "9";
        headerRef.current.style.transition = "all 1s";
        headerRef.current.style.position = "fixed";
        headerRef.current.style.top = "-25px";
        headerRef.current.style.left = "-10px";
        leviRef.current.style.position = "fixed";
        leviRef.current.style.left = "3%";
        leviRef.current.style.top = "0";
        leviRef.current.style.fontSize = "2rem";
        leviRef.current.style.zIndex = "9";
        leviRef.current.classList.add("media");
      } else if (window.scrollY < triggerPoint2 && !isTabletorMobile) {
        headerRef.current.style.position = "relative";
        headerRef.current.style.top = "0";
        headerRef.current.style.left = "0";
        leviRef.current.style.position = "relative";
        leviRef.current.style.left = "0";
        leviRef.current.style.top = "0%";
        leviRef.current.style.fontSize = "5rem";
        leviRef.current.classList.remove("media");
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
      <div ref={mainRef}>
        <nav className={styles.Nav}></nav>

        <header className={styles.header}>
          <h1 ref={leviRef}>{"Levi Noppers"}</h1>
          <code>{"Front end software developer"}</code>
          <div ref={headerRef}>
            <Link href="https://github.com/MonkyMars" target="_blank">
              <button>
                <Image src="/github.png" alt="github" width={20} height={20} />
                {"Github"}
              </button>
            </Link>
            <Link href={"/projects"}>
              <button>
                <Image src="/page.png" alt="home" width={20} height={20} />
                {"Projects"}
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
                {"Contact"}
              </button>
            </Link>
          </div>
        </header>

        <main className={styles.mainContent}>
          <div>
            <div style={{ position: "relative", zIndex: "11" }}>
              <h2>{"About me"}</h2>
            </div>
            <p>
              {
                "Hello World! I'm Levi Noppers, a 15-year-old software engineer from The Hague, the Netherlands, with a passion for developing web applications."
              }
            </p>

            <p>
              {
                "Over the past two years, I’ve dedicated myself to learn coding, I mainly focus on the front-end. My journey as a software developer began when I was 12 and wanted to create my first Discord Bot, since then I've improved a lot at coding, day in and day out spent on coding new web-apps"
              }
            </p>

            <p>
              {
                "I specialize in the front-end and a little back-end, making sure that every project I work on looks professional and works as intended. My experience includes developing multiple fully-functional websites, creating a database-API."
              }
            </p>

            <p>
              {
                "I’m open to learning and would like to improve my skills, whether it’s by exploring a new framework, or finding better solutions to my problems"
              }
            </p>

            <p>
              {"On my "}{" "}
              <Link target="_blank" href="https://github.com/MonkyMars">
                {"GitHub"}
              </Link>
              ,{" "}
              {
                "you can find a showcase of some of my projects I’ve developed. Each project I've tried to implement something new and different to expand my skillset as a developer."
              }
            </p>

            <p>
              {
                "I speak English and Dutch both fluently so in the future I look forward to meeting fellow developers from all over the planet and settling in a team!"
              }
            </p>

            <div style={{ position: "relative", zIndex: "11" }}>
              <code>
                <section>{"const"} </section>
                {"mainLanguages"} <section>{"="}</section>
                {"["}
                <section>{'"JavaScript", "html", "css"'}</section>
                {"]"}
              </code>
              <code>
                <section>{"const"}</section>
                {"frameworks"} <section>{"="}</section> {"["}
                <section>{'"Next.js", "React"'}</section>
                {"]"}
              </code>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
