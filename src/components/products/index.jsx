import { BigContainer } from "../../style-app";
import { useEffect } from "react";
import styles from "./products.module.css";
import bumagaImg from "../../assets/products/bumaga-png.png";
import { Col, Row } from "react-grid-system";
import { Card } from "../common/card-common";
import { useTranslation } from "react-i18next";
import { ProductGet } from "../../redux/products/index";
import { useDispatch, useSelector } from "react-redux";


export const Products = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const productGetState = useSelector(
    (state) => state.product.productGet?.data
  );
  useEffect(() => {
    dispatch(ProductGet());
  }, []);
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  return (
    <div className={styles.products}>
      <BigContainer>
        <h2 className={styles.choose_title}>{t("Products.1")}</h2>
        <Row className={styles.row}>
          {productGetState.map((product) => (
            <Col
              className={styles.col}
              lg={4}
              md={6}
              sx={6}
              sm={12}
              key={product.id}
            >
              <Card
                title={
                  LangVal() == "ru"
                    ? `${product.title_ru.slice(0, 20)}...`
                    : LangVal() == "uz"
                    ? `${product.title_uz.slice(0, 20)}...`
                    : LangVal() == "en"
                    ? `${product.title_en.slice(0, 20)}...`
                    : `${product.title_ru.slice(0, 20)}...`
                }
                text={
                  LangVal() == "ru" ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${product.description_ru.slice(0,40)}...`,
                      }}
                    />
                  ) : LangVal() == "uz" ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${product.description_uz.slice(0,40)}...`,
                      }}
                    />
                  ) : LangVal() == "en" ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${product.description_en.slice(0,40)}...`,
                      }}
                    />
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${product.description_ru.slice(0,40)}...`,
                      }}
                    />
                  )
                }
                image={product.image}
                id={product.id}
              />
            </Col>
          ))}
        </Row>
      </BigContainer>
    </div>
  );
};
