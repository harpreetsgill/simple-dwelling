import EpisodeThumbnail from "./EpisodeThumbnail";
import styles from "./LatestEpisodes.module.css";

export default function LatestEpisodes(props) {
  const episodes = props.data;
  const classes = props.view ? styles.thumbnail : styles.icon;
  return (
    <div className={`grid ${styles["latest-episodes"]}`}>
      {episodes.map((episode) => (
        <EpisodeThumbnail
          key={episode.id}
          className={classes}
          image={episode.image}
          title={episode.title}
          date={episode.date}
          desc={episode.desc}
          category={episode.category}
          permalink={episode.permalink}
          view={props.view}
        />
      ))}
    </div>
  );
}
