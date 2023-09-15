import React, { useState } from "react";
import styles from "./header.module.css";
import { Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
import { HiPhone } from "react-icons/hi";
import { MdMail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import LogoImg from "../../../assets/home/logo.svg";
import LanguageHeader from "./header-language";
import { BigContainer } from "../../../style-app";
import { Button } from "../../common/button-common/index";

const ContactHeader = () => {
  const { t } = useTranslation();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <Row
        className={
          color ? ` ${styles.header} ${styles.header_bg}` : `${styles.header}`
        }
      >
        <BigContainer>
          <Row className={styles.header_row}>
            <Col className={styles.header_logo} lg={2} md={2} sx={6} sm={6}>
              <Link to="/">
                <img src={LogoImg} alt="company logo" />
              </Link>
            </Col>
            <Col className={click ? ` ${styles.header_list} ${styles.header_list_active}` : `${styles.header_list}`}>
              <Col className={click ? ` ${styles.header_nav} ${styles.header_nav_active}` : `${styles.header_nav}`} lg={7} md={9} sx={8} sm={8}>
                <Link to="/about">{t("Header.0")}</Link>
                <Link to="/catalog">{t("Header.1")}</Link>
                <Link to="/services">{t("Header.2")}</Link>
                <Link to="/blog">{t("Header.3")}</Link>
                <Link to="/news">{t("Header.4")}</Link>
                <Link to="/contact">{t("Header.5")}</Link>
              </Col>
              <Col
                className={click ? ` ${styles.header_socials} ${styles.header_socials_active}` : `${styles.header_socials}`}
                lg={5}
                md={3}
                sx={4}
                sm={4}
              >
                <a href="tel:+998931304144">
                  <HiPhone className={styles.icon} />
                  <span className={styles.span}>+(93) 130 -41 - 44</span>
                </a>
                <a href="mailto:m.buriev@yodik.uz">
                  <MdMail className={styles.icon} />
                  <span className={styles.span}>m.buriev@yodik.uz</span>
                </a>
                <LanguageHeader />
              </Col>
            </Col>
            <Col className={styles.hamburger} lg={0} md={0} sx={6} sm={6}>
              <Button onClick={handleClick}>
                {click ? (<CgClose className={styles.hamburger_icon} />) : (<GiHamburgerMenu className={styles.hamburger_icon} />)}
              </Button>
            </Col>
          </Row>
        </BigContainer>
      </Row>
    </>
  );
};

export default ContactHeader;
