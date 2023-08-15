import { BigContainer } from "../../style-app";
import styles from "./products.module.css";
import bumagaImg from "../../assets/products/bumaga-png.png";
import { Col, Row } from "react-grid-system";
import { Card } from "../common/card-common";
import { useTranslation } from "react-i18next";

const products = [
  {
    id: "p1",
    title: "БУМАГА",
    text: "Превосходное качество и надежная защита в каждой бумажной упаковке.",
    image: bumagaImg,
  },
  {
    id: "p2",
    title: "Фанера",
    text: "Превосходное качество и надежная защита в каждой бумажной упаковке.",
    image: bumagaImg,
  },
  {
    id: "p3",
    title: "БУМАГА",
    text: "Превосходное качество и надежная защита в каждой бумажной упаковке.",
    image: bumagaImg,
  },
  {
    id: "p4",
    title: "СТРЕЙЧ ПЛЕНКА",
    text: "Превосходное качество и надежная защита в каждой бумажной упаковке.",
    image: bumagaImg,
  },
  {
    id: "p5",
    title: "БУМАГА",
    text: "Превосходное качество и надежная защита в каждой бумажной упаковке.",
    image: bumagaImg,
  },
  {
    id: "p6",
    title: "ГОФРОПРОДУКЦИЯ",
    text: "Превосходное качество и надежная защита в каждой бумажной упаковке.",
    image: bumagaImg,
  },
];

export const Products = () => {
    const {t} =useTranslation();
  return (
    <div className={styles.products}>
      <BigContainer>
        <h2 className={styles.choose_title}>{t("Products.1")}</h2>
        <Row className={styles.row}>
          {products.map((product) => (
            <Col className={styles.col} lg={4} md={6} sx={6} sm={12} key={product.id}>
              <Card
                title={product.title}
                text={product.text}
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
