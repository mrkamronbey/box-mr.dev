import { Col, Row } from "react-grid-system";
import { BigContainer } from "../../../style-app";
import { useTranslation } from "react-i18next";
import styles from "./factory.module.css";
import factoryImg1 from "../../../assets/factory/factory-1.png";
import factoryImg2 from "../../../assets/factory/factory-2.png";
import factoryImg3 from "../../../assets/factory/factory-3.png";

export const Factory = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.factory}>
      <BigContainer>
        <Row className={styles.row}>
          <Col className={styles.col}>
            <div className={styles.factory_content}>
              <h3>{t("Home.Factory.0")}</h3>
              <p>{t("Home.Factory.1")}</p>
            </div>
            <div className={styles.factory_imgdiv}>
              <img src={factoryImg1} alt="" />
            </div>
          </Col>
          <Col className={styles.col}>
            <div className={styles.factory_content}>
              <h3>{t("Home.Factory.2")}</h3>
              <p>{t("Home.Factory.3")}</p>
            </div>
            <div className={styles.factory_imgdiv}>
              <img src={factoryImg2} alt="" />
            </div>
          </Col>
        </Row>
      </BigContainer>
      <div className={styles.factory_bottom}>
        <BigContainer>
          <Row className={styles.row}>
            <Col className={styles.col}>
              <div className={styles.factory_content}>
                <h3>{t("Home.Factory.4")}</h3>
                <p>{t("Home.Factory.5")}</p>
              </div>
              <div className={styles.factory_imgdiv}>
                <img src={factoryImg3} alt="" />
              </div>
            </Col>
          </Row>
        </BigContainer>
      </div>
    </div>
  );
};
