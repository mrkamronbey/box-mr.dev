import styles from "./blog-card.module.css";

export const BlogCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.videobox}>
        <iframe
          width="366"
          height="235"
          src={props.link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className={styles.blog_content}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
