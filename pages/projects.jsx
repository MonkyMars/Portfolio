import styles from '../styles/Projects.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {

    const Projects = [{
        1: {title: 'ChatNest', src: '/Chatnest.png', description: ''},
        2: {title: 'DailyBibleVerses', src: '/dailybibleverses.png', description: ''},
        3: {title: 'DailyCooking', src: '/dailycooking.png', description: ''},
        4: {title: 'DailyWater', src: '/dailywater.png', description: ''}
    }]

    return(
        <>
            <nav className={styles.Nav}></nav>

            <header className={styles.header}>
                <h1>Projects</h1>
                <code>Selfmade projects</code>
            </header>

            <main className={styles.mainContent}>
                {Projects.map((project, key) => {
                    return(
                      <div className={styles.project} key={key}>
                        <h2>{`${key}. ${project.title}`}</h2>
                        <Image src={project.src} width={300} height={200} alt={project.title}/>
                        <p>{project.title}</p>
                      </div>
                    )
                })}
            </main>
        </>
    )
}