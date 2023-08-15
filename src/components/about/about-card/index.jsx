import React from "react";
import styles from "./style.module.css";
import { WrapperContainer } from "../../../style-app";
import { Col, Row } from "react-grid-system";

import Card1 from "../../../assets/about/crd1.svg";
import Card2 from "../../../assets/about/crd2.svg";
import Card3 from "../../../assets/about/crd3.svg";
import { useTranslation } from "react-i18next";

const AboutCard = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.about_card_section}>
        <WrapperContainer>
          <div className={styles.row_wrapp}>
            <h2 className={styles.title}>{t("About.0")}</h2>
            <Row className={styles.about_card_row}>
              <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                <div className={styles.col_card_wrapp}>
                  <div className={styles.col_img_wrapp}>
                    <img src={Card1} alt="" />
                  </div>
                  <div className={styles.col_card_content}>
                    <h4 className={styles.col_card_title}>{t("About.1")}</h4>
                    <p className={styles.col_card_text}>{t("About.2")}</p>
                  </div>
                </div>
              </Col>
              <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                <div className={styles.col_card_wrapp}>
                  <div className={styles.col_img_wrapp}>
                    <img src={Card3} alt="" />
                  </div>
                  <div className={styles.col_card_content}>
                    <h4 className={styles.col_card_title}>{t("About.5")}</h4>
                    <p className={styles.col_card_text}>{t("About.6")}</p>
                  </div>
                </div>
              </Col>
              <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                <div className={styles.col_card_wrapp}>
                  <div className={styles.col_img_wrapp}>
                    <img src={Card2} alt="" />
                  </div>
                  <div className={styles.col_card_content}>
                  <h4 className={styles.col_card_title}>{t("About.3")}</h4>
                    <p className={styles.col_card_text}>{t("About.4")}</p>
                  </div>
                </div>
              </Col>
              <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                <div className={styles.col_card_wrapp}>
                  <div className={styles.col_img_wrapp}>
                    <img src={Card1} alt="" />
                  </div>
                  <div className={styles.col_card_content}>
                    <h4 className={styles.col_card_title}>{t("About.7")}</h4>
                    <p className={styles.col_card_text}>{t("About.8")}</p>
                  </div>
                </div>
              </Col>
              <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                <div className={styles.col_card_wrapp}>
                  <div className={styles.col_img_wrapp}>
                    <img src={Card3} alt="" />
                  </div>
                  <div className={styles.col_card_content}>
                    <h4 className={styles.col_card_title}>{t("About.9")}</h4>
                    <p className={styles.col_card_text}>{t("About.10")}</p>
                  </div>
                </div>
              </Col>
              <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                <div className={styles.col_card_wrapp}>
                  <div className={styles.col_img_wrapp}>
                    <img src={Card2} alt="" />
                  </div>
                  <div className={styles.col_card_content}>
                    <h4 className={styles.col_card_title}>{t("About.11")}</h4>
                    <p className={styles.col_card_text}>{t("About.12")}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </WrapperContainer>
      </div>
    </>
  );
};

export default AboutCard;
