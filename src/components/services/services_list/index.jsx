import { BigContainer } from "../../../style-app";
import styles from "./services-list.module.css";
import services1 from "../../../assets/services/Sevices-1.png";
import services2 from "../../../assets/services/Sevices-2.png";
import services3 from "../../../assets/services/Sevices-3.png";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-grid-system";

export const ServicesList = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.services_list}>
      <div className={styles.services_list_top}>
        <BigContainer>
          <Row className={styles.row}>
            <Col className={styles.col}>
              <div className={styles.services_content}>
                <h3>{t("Services.0")}</h3>
                <p>{t("Services.1")}</p>
              </div>
              <div className={styles.services_imgdiv}>
                <img src={services1} alt="" />
              </div>
            </Col>
            <Col className={styles.col}>
              <div className={styles.services_content}>
                <h3>{t("Services.2")}</h3>
                <p>{t("Services.3")}</p>
              </div>
              <div className={styles.services_imgdiv}>
                <img src={services2} alt="" />
              </div>
            </Col>
          </Row>
        </BigContainer>
      </div>
      <div className={styles.services_list_top}>
        <BigContainer>
          <Row className={styles.row}>
            <Col className={styles.col}>
              <div className={styles.services_content}>
                <h3>{t("Services.4")}</h3>
                <p>{t("Services.5")}</p>
              </div>
              <div className={styles.services_imgdiv}>
                <img src={services3} alt="" />
              </div>
            </Col>
          </Row>
        </BigContainer>
      </div>
    </div>
  );
};
