import styles from "./blog-card.module.css";

export const BlogCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.videobox}>
        <img style={{aspectRatio:"16/9",width:"100%"}}
          src={props.link}
        ></img>
      </div>
      <div className={styles.blog_content}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
