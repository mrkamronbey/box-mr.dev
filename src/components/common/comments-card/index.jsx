import { BsFillStarFill } from "react-icons/bs";
import styles from "./card-comments.module.css";

export const CardComments = (props) => {
  return (
    <div className={styles.card_comment}>
      <h3>{props.title}</h3>
      <div className={styles.card_line}></div>
      <div className={styles.card_stars}>
        <BsFillStarFill className={styles.card_icon} />
        <BsFillStarFill className={styles.card_icon} />
        <BsFillStarFill className={styles.card_icon} />
        <BsFillStarFill className={styles.card_icon} />
        <BsFillStarFill className={styles.card_icon} />
      </div>
      <p>{props.text}</p>
    </div>
  );
};
