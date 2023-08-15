import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../button-common";
import styles from "./card-common.module.css";

export const Card = (props) => {
  const { t } = useTranslation();
  
  return (
    <div className={`${styles.card} ${props.className}`}>
      <div className={styles.imgbox}>
        <img src={props.image} width="100%" height="auto" style={{aspectRatio: 1 / 1}} alt="" />
      </div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <Link to={`/productmore/${props.id}`}>
        <Button onClick={props.handle}>{t("Products.0")}</Button>
      </Link>
    </div>
  );
};
