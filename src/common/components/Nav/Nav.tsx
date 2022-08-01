import Link from "next/link";

import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menuContainer}>
        <li className={styles.menu}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.menu}>
          <Link href="/history">
            <a>Mood History</a>
          </Link>
        </li>
        <li className={styles.menu}>
          <Link href="/create">
            <a>Create Mood</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
