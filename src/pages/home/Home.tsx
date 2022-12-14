import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "./Home.module.css";
import Nav from "../../common/components/Nav/Nav";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Head>
        <title>MooDiary</title>
        <meta name="description" content="Keep your mood in MooDiary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>MooDiary</h1>

        <button className={styles.description}>
          <Link href="/create">
            <a className={styles.opening}>What is your mood today?</a>
          </Link>
        </button>
      </main>

      <footer className={styles.footer}>Powered by JESSY YEH</footer>
    </div>
  );
};

export default Home;
