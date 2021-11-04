import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link'
import { getAllPaths } from "../lib/config";

const Home: NextPage = () => {
  const paths = getAllPaths()
  const hrefs = paths.map(path => `./conversion/${path.params.id}`)
  return (
    <div className={styles.container}>
      <Head>
        <title>Speed converter for runners</title>
        <meta name="description" content="Speed converter for runners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Speed converter for runners</h1>

        <p>
          Convert freely between kilometers per hour (kph), miles per hour
          (mph), minutes per kilometer or miles or minutes per any given
          distance.
        </p>
        {hrefs.map(href => <div key={href}><Link href={href}><a>{href}</a></Link></div>)}
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
