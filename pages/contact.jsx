import styles from '../styles/Contact.module.css';
import { useEffect, useRef, useState } from "react";
import { GradientBG } from '../components/Gradient';
import Link from 'next/link';
import Image from 'next/image';
export default function Contact() {
  const [emailTitle, setEmailTitle] = useState('');
  const [emailDescription, setEmailDescription] = useState('');
  const email = 'levi.laptop@hotmail.com'
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(emailTitle)}&body=${encodeURIComponent(emailDescription)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
    <GradientBG/>
      <nav className={styles.Nav}>
      <div className={styles.NavBtnDiv}>
            <button>
              <Image src='/github.png' alt='github' width={20} height={20} />
              <Link href='https://github.com/MonkyMars' target="_blank">Github</Link>
            </button>
            <button>
              <Image src='/user-portfolio.png' alt='contact' width={20} height={20} />
              <Link href='/'>Home</Link>
            </button>
          </div>
      </nav>

      <header className={styles.header}>
        <h1>Contact</h1>
        <code></code>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.form}>
        <h2>Reach me via email!</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Title</label>
              <input value={emailTitle} onChange={(e) => setEmailTitle(e.target.value)} placeholder='Enter title'/>
            </div>
            <div>
              <label label>Description</label>
              <textarea value={emailDescription} onChange={(e) => setEmailDescription(e.target.value)} placeholder='Enter description'/>
            </div>
          </form>
          <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
      </main>
    </>
  );
}