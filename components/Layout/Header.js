import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const router = useRouter();

  function menuHandler(event) {
    if (event.target.className !== styles.nav) {
      setisMenuOpen((prevState) => !prevState);
    } else {
      setisMenuOpen(() => false);
    }
  }

  const menuActiveClass = isMenuOpen ? styles.active : "";

  return (
    <header className={`grid ${styles.header} ${menuActiveClass}`}>
      <Link href="/" className={styles.logo}>
        Simple Dwelling
      </Link>
      <div className={styles["episodes-submission"]}>
        <Link
          onClick={menuHandler}
          href="/episodes"
          className={
            router.pathname === "/episodes" ||
            router.pathname === "/episodes/[category]" ||
            router.pathname === "/episodes/[category]/[episode]"
              ? styles.nav + " " + styles.active + " " + styles.episodes
              : styles.nav + " " + styles.episodes
          }
        >
          Episodes
        </Link>
        <Link
          onClick={menuHandler}
          href="/submissions"
          className={
            router.asPath === "/submissions"
              ? styles.nav + " " + styles.active + " " + styles.submission
              : styles.nav + " " + styles.submission
          }
        >
          Submission
        </Link>
      </div>
      <div className={styles.nav + " " + styles.about}>
        <Link
          onClick={menuHandler}
          href="/about"
          className={
            router.asPath === "/about"
              ? styles.nav + " " + styles.active
              : styles.nav
          }
        >
          About
        </Link>
      </div>
      <div className={styles["advertise-contact"]}>
        <Link
          onClick={menuHandler}
          href="/advertise"
          className={
            router.asPath === "/advertise"
              ? styles.nav + " " + styles.active + " " + styles.advertise
              : styles.nav + " " + styles.advertise
          }
        >
          Advertise
        </Link>
        <Link
          onClick={menuHandler}
          href="/contact"
          className={
            router.asPath === "/contact"
              ? styles.nav + " " + styles.active + " " + styles.contact
              : styles.nav + " " + styles.contact
          }
        >
          Contact
        </Link>
      </div>
      <button className={styles["hamburger-menu"]} onClick={menuHandler}>
        <span className={styles["menu-line-top"]}></span>
        <span className={styles["menu-line-middle"]}></span>
        <span className={styles["menu-line-bottom"]}></span>
      </button>
    </header>
  );
}
