import { BigContainer } from "../../style-app";
import styles from "./details.module.css";
import detailsImg1 from "../../assets/details/1.png";
import detailsImg2 from "../../assets/details/2.png";
import detailsImg3 from "../../assets/details/3.png";
import video from "../../assets/details/video.mp4";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";

export const Details = (props) => {
  const { t } = useTranslation();
  return (
    <div className={styles.details}>
      <BigContainer>
        <h2 className={styles.details_title}>{t("Details.1")}</h2>

        <Row className={styles.details_top_row}>
          <Col lg={6} md={6} sx={12} sm={12} className={styles.details_content}>
            <h3>Ravshan Yodik Production</h3>
            <p>{t("Details.0")}</p>
          </Col>
          <Col lg={6} md={6} sx={12} sm={12} className={styles.details_imgdiv}>
            <video width="405" height="240" controls autoPlay muted>
              <source src={video} type="video/mp4" />
            </video>
          </Col>
        </Row>

        <Row
          className={
            props.isNone === true
              ? styles.details_bottom_none
              : styles.details_bottom_row
          }
        >
          <Col className={styles.details_bottom} lg={4} md={4} sx={12} sm={12}>
            <img src={detailsImg1} alt="" />
          </Col>
          <Col className={styles.details_bottom} lg={4} md={4} sx={12} sm={12}>
            <img src={detailsImg2} alt="" />
          </Col>
          <Col className={styles.details_bottom} lg={4} md={4} sx={12} sm={12}>
            <img src={detailsImg3} alt="" />
          </Col>
        </Row>
      </BigContainer>
    </div>
  );
};
