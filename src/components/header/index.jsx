import React, { useState } from "react";
import styles from "./header.module.css";
import { Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
import { HiPhone } from "react-icons/hi";
import { MdMail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import LogoImg from "../../assets/home/logo.svg";
import LanguageHeader from "./header-language";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { BigContainer } from "../../style-app";
import { Button } from ".././common/button-common/index";

const Header = (props) => {
  const { t } = useTranslation();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === "3") {
      setOpen(false);
    }
  };
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const items = [
    {
      label: <Link to="/about">{t("Header.0")}</Link>,
      key: "1",
    },
    {
      label: <Link to="/vacancy">{t("Header.6")}</Link>,
      key: "2",
    },
    {
      label: <Link to="/employee">{t("Header.7")}</Link>,
      key: "3",
    },
  ];

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= props.scroll) {
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
            <Col className={styles.header_logo} lg={2} md={2} sx={6} sm={4}>
              <Link to="/">
                <img src={LogoImg} alt="company logo" />
              </Link>
            </Col>

            <Col className={styles.header_list}>
              <Col className={styles.header_nav} lg={7} md={9} sx={8} sm={8}>
                <Dropdown
                  menu={{
                    items,
                    onClick: handleMenuClick,
                  }}
                  onOpenChange={handleOpenChange}
                  open={open}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                    {t("Header.0")}
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
                <Link to="/catalog">{t("Header.1")}</Link>
                <Link to="/services">{t("Header.2")}</Link>
                <Link to="/blog">{t("Header.3")}</Link>
                <Link to="/news">{t("Header.4")}</Link>
                <a href="#form">{t("Header.5")}</a>
              </Col>
              <Col
                className={styles.header_socials}
                lg={5}
                md={3}
                sx={4}
                sm={4}
              >
                <a href="tel:+998931304144">
                  <HiPhone className={styles.icon} />
                  <span className={styles.span}>+(93) 130-41-44</span>
                </a>
                <a href="mailto:m.buriev@yodik.uz">
                  <MdMail className={styles.icon} />
                  <span className={styles.span}>m.buriev@yodik.uz</span>
                </a>
                <LanguageHeader />
              </Col>
            </Col>

            {/* mobile list */}
            <Col
              className={
                click
                  ? `${styles.header_mobile_list} ${styles.header_mobile_list_active}`
                  : `${styles.header_mobile_list}`
              }
            >
              <Col
                className={styles.header_mobile_nav}
                lg={7}
                md={9}
                sx={8}
                sm={8}
              >
                <Dropdown
                  menu={{
                    items,
                    onClick: handleMenuClick,
                  }}
                  onOpenChange={handleOpenChange}
                  open={open}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                    {t("Header.0")}
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
                <Link to="/catalog">{t("Header.1")}</Link>
                <Link to="/services">{t("Header.2")}</Link>
                <Link to="/blog">{t("Header.3")}</Link>
                <Link to="/news">{t("Header.4")}</Link>
                <a href="#form">{t("Header.5")}</a>
                <LanguageHeader />
              </Col>
            </Col>
            {/* mobile socials */}
            <Col
              className={styles.header_mobile_socials}
              lg={5}
              md={3}
              sx={4}
              sm={4}
            >
              <a href="tel:+998931304144">
                <HiPhone className={styles.icon} />
                <span className={styles.span}>+(93) 130-41-44</span>
              </a>
              <a href="mailto:m.buriev@yodik.uz">
                <MdMail className={styles.icon} />
                <span className={styles.span}>m.buriev@yodik.uz</span>
              </a>
            </Col>
            {/* hamburger */}
            <Col className={styles.hamburger} lg={0} md={0} sx={6} sm={4}>
              <Button onClick={handleClick}>
                {click ? (
                  <CgClose className={styles.hamburger_icon} />
                ) : (
                  <GiHamburgerMenu className={styles.hamburger_icon} />
                )}
              </Button>
            </Col>
          </Row>
        </BigContainer>
      </Row>
    </>
  );
};

export default Header;
