import React from "react";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../../style-app";
import styles from "./style.module.css";
// import ContactImg from "../../../assets/contact/contact-img.jpg";

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.contact_section}>
        <WrapperContainer>
          <div className={styles.contact_row_wrapp}>
            <Row className={styles.contact_row}>
              <Col
                className={styles.contact_col}
                lg={6}
                md={12}
                sx={12}
                sm={12}
              >
                <h2 className={styles.contact_title}>{t("Contact.0")}</h2>
                <div className={styles.contact_address}>
                  <h4>{t("Contact.1")}</h4>
                  <p>{t("Contact.2")}</p>
                </div>
                {/* <div className={styles.contact_img_wrapp}>
                  <img
                    style={{ aspectRatio: 1 / 1, width: "100%" }}
                    src={ContactImg}
                    alt=""
                  />
                </div> */}
              </Col>
              <Col
                className={styles.contact_col}
                lg={6}
                md={12}
                sx={12}
                sm={12}
              >
                {/* <div className={styles.contact_first_box}>
                                    <a href="tel:+7 (342) 250-08-88">
                                        +7 (342) 250-08-88
                                    </a>
                                    <a href="mailto:info@grdok.ru">
                                        info@grdok.ru
                                    </a>
                                </div> */}
                <div className={styles.contact_second_box}>
                  <h4>{t("Contact.3")}</h4>
                  <a
                    className={styles.green_link}
                    href="tel:+998 (90) 391-11-71"
                  >
                    +998 (90) 391-11-71
                  </a>
                  <a className={styles.green_link} href="+998(93) 130-41-44">
                    +998(93) 130-41-44
                  </a>
                </div>
                <div className={styles.contact_third_box}>
                  <h4>{t("Contact.4")}</h4>
                  <a className={styles.second_mail} href="mailto:m.buriev@yodik.uz">
                  m.buriev@yodik.uz
                  </a>
                  {/* <div className={styles.contact_third_item}>
                    <p>{t("Contact.5")}</p>
                    <a
                      className={styles.green_link}
                      href="tel:+7 (342) 502-16-91"
                    >
                      +7 (342) 502-16-91
                    </a>
                  </div> */}
                </div>
              </Col>
            </Row>
          </div>
        </WrapperContainer>
      </div>
    </>
  );
};

export default ContactInfo;
