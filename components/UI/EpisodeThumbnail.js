import Image from "next/image";
import styles from "./EpisodeThumbnail.module.css";

export default function EpisodeThumbnail(props) {
  const image = props.image;
  const title = props.title;
  const date = props.date;
  const desc = props.desc;
  const categorySlug = props.category.slug;
  const episodeLink = `episodes/${categorySlug}/${props.permalink}`;

  const classes = props.view
    ? `${props.className} ${styles.thumbnail}`
    : `${props.className} ${styles.icon}`;

  let displayImage = (
    <Image
      src={image}
      fill
      alt="test"
      sizes="(max-width: 768px) 60vw,
    35vw"
    />
  );

  if (!props.view) {
    displayImage = (
      <Image
        src={image}
        width="35"
        height="35"
        alt="test"
        sizes="(max-width: 768px) 60vw,
              10vw"
      />
    );
  }

  return (
    <div className={classes}>
      <div className={styles.image}>
        <a href={episodeLink}>{displayImage}</a>
      </div>
      <div className={styles.text}>
        <h2>
          <a href={episodeLink}>{title}</a>
        </h2>
        <time dateTime={date}>{date}</time>
        <p>{desc}</p>
      </div>
    </div>
  );
}
