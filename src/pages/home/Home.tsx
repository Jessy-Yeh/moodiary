import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "./Home.module.css";
import Nav from "../../common/components/Nav/Nav";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Head>
        <title>MooDirary</title>
        <meta name="description" content="Keep your mood in MooDiary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>MooDiary</h1>
        <p className={styles.description}>
          <code className={styles.code}>What is your mood today?</code>
        </p>
        <Link href="/create">
          <a className={styles.emoji}>😀 🙁 🤪 🥰 😋 😢</a>
        </Link>
      </main>

      <footer className={styles.footer}>Powered by JESSY YEH</footer>
    </div>
  );
};

export default Home;
