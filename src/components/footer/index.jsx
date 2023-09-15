import { Col, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import { BigContainer } from "../../style-app";
import { useTranslation } from "react-i18next";
import LogoFooter from "../../assets/home/logo.svg";
import styles from "./footer.module.css";
import { CategoryGet } from "../../redux/category/index";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const Footer = () => {
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const categoryGetState = useSelector(
    (state) => state.category.categoryGet?.data
  );
  useEffect(() => {
    dispatch(CategoryGet());
  }, [dispatch]);

  const handleTop = () => {
    window.scrollTo(0, 300);
  };

  return (
    <>
      <Col className={styles.footer_top}>
        <BigContainer>
          <Row className={styles.footer_top_row}>
            <Col lg={3} md={3} sx={12} sm={12} className={styles.footer_logo}>
              <Link to="/">
                <img
                  className={styles.footer_img}
                  src={LogoFooter}
                  width={150}
                  height={150}
                  alt="company logo"
                />
              </Link>
            </Col>
            <Col lg={3} md={3} sx={12} sm={12} className={styles.footer_list}>
              <Link onClick={handleTop} to="/catalog">
                {t("Footer.0")}
              </Link>
              {categoryGetState.map((elem) => (
                <Link
                  onClick={handleTop}
                  key={elem.id}
                  id={elem.id}
                  to="/catalog"
                >
                  {LangVal() === "ru"
                    ? elem.title_ru
                    : LangVal() === "uz"
                    ? elem.title_uz
                    : LangVal() === "en"
                    ? elem.title_en
                    : elem.title_ru}
                </Link>
              ))}
            </Col>
            <Col lg={3} md={3} sx={12} sm={12} className={styles.footer_list}>
              <Link to="/about">{t("Footer.7")}</Link>
              <Link to="/services">{t("Footer.8")}</Link>
              <Link to="/blog">{t("Footer.9")}</Link>
              <Link to="/news">{t("Footer.10")}</Link>
              <Link to="/contact">{t("Footer.11")}</Link>
            </Col>
          </Row>
        </BigContainer>
      </Col>
      <Col className={styles.footer_bottom}>
        <BigContainer>
          <p className={styles.copy_right}>
            ©Разработала команда
            <a href="https://supersite.uz">Supersite.uz</a>
          </p>
        </BigContainer>
      </Col>
    </>
  );
};
