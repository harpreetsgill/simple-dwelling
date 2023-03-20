import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <header className={`grid ${styles.header}`}>
      <Link href="/" className={styles.logo}>
        Simple Dwelling
      </Link>
      <div className={styles.nav + " " + styles["episodes-submission"]}>
        <Link href="/episodes" className={styles.episodes}>
          Episodes
        </Link>
        <Link
          href="/submissions"
          className={styles.nav + " " + styles.submission}
        >
          Submission
        </Link>
      </div>
      <div className={styles.nav + " " + styles.about}>
        <Link
          href="/about"
          className={router.asPath === "/about" ? styles.active : ""}
        >
          About
        </Link>
      </div>
      <div className={styles.nav + " " + styles["advertise-contact"]}>
        <Link
          href="/advertise"
          className={
            router.asPath === "/advertise"
              ? styles.active + " " + styles.advertise
              : styles.advertise
          }
        >
          Advertise
        </Link>
        <Link href="/contact" className={styles.nav + " " + styles.contact}>
          Contact
        </Link>
      </div>
    </header>
  );
}
