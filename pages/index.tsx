import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link'
import { getAllPaths } from "../lib/config";

const Home: NextPage = () => {
  const paths = getAllPaths()
  const hrefs = paths.map(path => `./${path.params.id}`)
  const title = "Pace and Speed"
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Pace and Speed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{title}</h1>

        <p>
          Convert freely between pace per kilometer or mile and speed in kilometers per hour or miles per hour. You
          can also find pace and speed for the time used on any given distance or lap. 
        </p>
        {hrefs.map(href => <div key={href}><Link href={href}><a>{href}</a></Link></div>)}
        
      </main>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  );
};

export default Home;
