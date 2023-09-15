import React, { useState } from "react";
import styles from "./hero.module.css";
import { BigContainer } from "../../../style-app";
import { Row, Col } from "react-grid-system";
import Header from "../../header";
import homeImg from "../../../assets/home/home-img.png";
import { Modal } from "../modal";
import { useTranslation } from "react-i18next";

const HeroCommon = ({ heroTitle, heroText, heroBtn, isBtn, id, className }) => {
  const [open, setOpen] = useState(false);

  const HandleOpen = () => {
    setOpen(true);
  };

  const HandleClose = () => {
    setOpen(false);
  };

  const {t} = useTranslation()

  return (
    <>
      <Modal open={open} HandleClose={HandleClose} />
      <div className={`${styles.hero_section} ${className}`}>
        <Header scroll={50} />
        <BigContainer>
          <Row className={styles.home_hero_row}>
            <Col className={styles.home_hero_col} lg={8} md={8} sx={12} sm={12}>
              <h2>{heroTitle}</h2>
              <div className={styles.hero_buttons}>
                {isBtn === true ? <a onClick={HandleOpen}>{heroBtn}</a> : null}
              </div>
            </Col>
            <Col className={styles.home_right_col}>
              <div>
                <img className={styles.home_img} src={homeImg} alt="" />
                <div className={styles.content}>
                  <h4>15+</h4>
                  <div className={styles.content_box}>
                    <h4>{t("Home.8")}</h4>
                    <p>{t("Home.9")}</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </BigContainer>
      </div>
    </>
  );
};

export default HeroCommon;
