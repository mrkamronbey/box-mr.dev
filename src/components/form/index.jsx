import { Col, Row } from "react-grid-system";
import { BigContainer } from "../../style-app";
import { HiPhone } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { MdMail } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import styles from "./form.module.css";
import { FormMap } from "./form-card";

export const Form = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.form} id="form">
      <BigContainer>
        <div className={styles.choose_title}>
          <h2>{t("Footer.11")}</h2>
        </div>
        <Row className={styles.form_row}>
          <Col className={styles.form_left_col}>
            {/* adress list */}
            <ul className={styles.form_list}>
              <li className={styles.form_item_icon}>
                <ImLocation size={25} color="#ffffff" />
              </li>
              <li className={styles.form_item_adress}>
                <p>
                  <span>{t("Footer.13")}</span>: {t("Footer.16")}
                </p>
              </li>
            </ul>
            {/* phone list */}
            <ul className={styles.form_list}>
              <li className={styles.form_item_icon}>
                <HiPhone size={25} color="#ffffff" />
              </li>
              <li className={styles.form_item_tel}>
                <a href="+998933911171">+998 (93) 391 - 11 - 71</a>
                <a href="+998931304144">+998 93 (130) -41 - 44</a>
              </li>
            </ul>
            {/* mail list */}
            <ul className={styles.form_list}>
              <li className={styles.form_item_icon}>
                <MdMail size={25} color="#ffffff" />
              </li>
              <li className={styles.form_item_mail}>
                <p>{t("Footer.18")}</p>
                <a href="mailto:m.buriev@yodik.uz">m.buriev@yodik.uz</a>
              </li>
            </ul>
            {/* clock list */}
            <ul className={styles.form_list}>
              <li className={styles.form_item_icon}>
                <AiFillClockCircle size={25} color="#ffffff" />
              </li>
              <li className={styles.form_item_clock}>
                <p>{t("Footer.19")}</p>
              </li>
            </ul>
          </Col>
          <Col>
            <FormMap />
          </Col>
        </Row>
      </BigContainer>
    </div>
  );
};
