import Link from "next/link";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <span>Swing Path</span>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};
