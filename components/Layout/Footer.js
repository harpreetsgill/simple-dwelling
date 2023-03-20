import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`grid ${styles.footer}`}>
      <p className={styles["land-acknowledgement"]}>
        Simple Dwelling acknowledges the traditional custodians of the land and
        waters of Australia.
      </p>
      <p className={styles["former-name"]}>
        Formerly known as The Design Emotive.
      </p>
      <div className={styles["social-media"]}>
        <a href="https://www.instagram.com/simple_dwelling" target="_blank">
          Instagram
        </a>
        <a href="https://www.youtube.com/simpledwelling" target="_blank">
          YouTube
        </a>
      </div>
    </footer>
  );
}
