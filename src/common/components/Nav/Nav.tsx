import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Nav.module.css";

export default function Nav() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <nav className={styles.nav}>
      <ul className={styles.menuContainer}>
        <li className={styles.menu}>
          <Link href="/">
            <a
              className={
                currentRoute === "/"
                  ? `${styles.active}`
                  : `${styles["non-active"]}`
              }
            >
              Home
            </a>
          </Link>
        </li>
        <li className={styles.menu}>
          <Link href="/history">
            <a
              className={
                currentRoute === "/history"
                  ? `${styles.active}`
                  : `${styles["non-active"]}`
              }
            >
              Mood History
            </a>
          </Link>
        </li>
        <li className={styles.menu}>
          <Link href="/create">
            <a
              className={
                currentRoute === "/create"
                  ? `${styles.active}`
                  : `${styles["non-active"]}`
              }
            >
              Create Mood
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
