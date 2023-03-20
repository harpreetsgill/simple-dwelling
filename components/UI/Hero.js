import styles from "./Hero.module.css";

export default function Hero(props) {
  return (
    <div className={styles.hero}>
      <h1>{props.children}</h1>
    </div>
  );
}
