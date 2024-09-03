import Image from "next/image";
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import { useEffect, useRef } from "react";
import { GradientBG } from '../components/Gradient';

export default function Blend() {
  const mainRef = useRef(null);
  const headerRef = useRef(null);
  const leviRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const triggerPoint = window.innerHeight * 0.7;
      const triggerPoint2 = window.innerHeight * 0.3;
      if (window.scrollY > triggerPoint) {
        headerRef.current.style.opacity = "1";
        headerRef.current.style.zIndex = "9";
        headerRef.current.style.transition = "all 1s";
        headerRef.current.style.position = "fixed";
        headerRef.current.style.top = "-3%";
        headerRef.current.style.left = "30%";
        leviRef.current.style.position = 'fixed';
        leviRef.current.style.left = '3%';
        leviRef.current.style.top = '0%';
        leviRef.current.style.fontSize = '2rem';
        leviRef.current.style.zIndex = '9';
      } else if(window.scrollY < triggerPoint2){
        headerRef.current.style.position = "relative";
        headerRef.current.style.top = "0";
        headerRef.current.style.left = "0";
        leviRef.current.style.position = 'relative';
        leviRef.current.style.left = '0';
        leviRef.current.style.top = '0%';
        leviRef.current.style.fontSize = '5rem';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <GradientBG />
      <div ref={mainRef}>
        <nav className={styles.Nav}>
        </nav>

        <header className={styles.header}>
          <h1 ref={leviRef}>Levi Noppers</h1>
          <code>Front end software developer</code>
          <div ref={headerRef}>
          <Link href='https://github.com/MonkyMars' target="_blank">
            <button>
              <Image src='/github.png' alt='github' width={20} height={20} />
              Github
            </button>
          </Link>
            <Link href='/contact'>
            <button className={styles.Contact}>
              <Image src='/user-portfolio.png' alt='contact' width={20} height={20} />
              Contact
            </button>
          </Link>
          </div>
        </header>

        <main className={styles.mainContent}>
          <div>
            <h2>About me</h2>
            <p>Hello, World! I'm Levi Noppers, a 15-year-old software engineer with a passion for developing innovative web applications.</p>

            <p>{"Over the past two years, I’ve dedicated myself to learning and mastering the art of coding, with a strong focus on building full-stack applications. My journey in the tech world began with curiosity, and it quickly evolved into a deep-seated passion for creating digital solutions."}</p>

            <p>{"I specialize in crafting both the front-end and back-end of web applications, ensuring that every project I work on is fully functional and aesthetically pleasing. My experience includes developing robust APIs, designing efficient databases, and, most importantly, creating intuitive and engaging user interfaces. The front-end is where my creativity truly shines—I love experimenting with new ideas, pushing the boundaries of design, and bringing concepts to life through code."}</p>

            <p>{"When I'm not working on a project, you'll likely find me brainstorming new ideas or diving into the latest web development trends. I’m constantly seeking to improve my skills and expand my knowledge, whether it’s by learning new programming languages, exploring different frameworks, or participating in coding communities."}</p>

            <p>{"On my "} <a target="_blank" href="https://github.com/MonkyMars">GitHub</a>, {"you can find a showcase of the projects I’ve developed. Each project represents not just a learning milestone but also a step towards mastering the craft of software development. I believe that the best way to grow as a developer is through hands-on experience, and my GitHub portfolio reflects my commitment to continuous learning and innovation."}</p>

            <p>{"Looking ahead, I’m excited to continue my journey in software engineering, exploring new technologies, and contributing to meaningful projects. Whether it’s developing the next big web app or collaborating with other passionate developers, I’m driven by the desire to create impactful digital experiences that make a difference."}</p>

            <code><section>const </section>mainLanguages <section>=</section> [<section>"JavaScript, html, css"</section>]</code>
            <code><section>const</section>frameworks <section>=</section> [<section>"Next.js, React"</section>]</code>
          </div>
        </main>
      </div>
    </>
  );
}
