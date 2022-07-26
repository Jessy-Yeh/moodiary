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
        <li className={styles.menu}>Mood History</li>
        <li className={styles.menu}>Create Mood</li>
      </ul>
    </nav>
  );
}
