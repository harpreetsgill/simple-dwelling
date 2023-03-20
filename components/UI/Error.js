import styles from "./Error.module.css";

export default function Error(props) {
  const errorCode = props.code;

  return (
    <div className={`grid ${styles.error}`}>
      <h1>{errorCode} Error</h1>
      <h2>
        {errorCode === "404"
          ? "Lost in the simplicity. This page cannot be found"
          : "Whoops! Our minimalist approach may have gone too far with our server capacity."}
      </h2>
    </div>
  );
}
