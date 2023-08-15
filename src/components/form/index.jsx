import { Col } from "react-grid-system";
import { BigContainer } from "../../style-app";
import { BsCheckCircle } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import styles from "./form.module.css";
import FormCard from "./form-card";

export  const Form = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.form} id='form'>
      <BigContainer>
        <div className={styles.form_list}>
          <Col lg={6} md={12} sx={12} sm={12} className={styles.form_left}>
            <h2 className={styles.form_left_title}>{t("Form.0")}</h2>
            <p className={styles.form_left_text}>{t("Form.1")}</p>
            <div className={styles.form_left_wrapper}>
              <div className={styles.form_left_box}>
                <BsCheckCircle className={styles.form_icon} />
                <span>{t("Form.2")}</span>
              </div>
              <div className={styles.form_left_box}>
                <BsCheckCircle className={styles.form_icon} />{" "}
                <span>{t("Form.3")}</span>
              </div>
            </div>
            <a className={styles.form_left_tel} href="tel:998933911171">
              +998 93 (391)-11-71
            </a>
          </Col>
          <Col lg={6} md={12} sx={12} sm={12}>
            <FormCard />
          </Col>
        </div>
      </BigContainer>
    </div>
  );
};
