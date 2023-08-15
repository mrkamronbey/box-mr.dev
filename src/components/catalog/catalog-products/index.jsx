import { BigContainer } from "../../../style-app";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styles from "./catalog-products.module.css";
import bumagaImg from "../../../assets/products/bumaga-png.png";
import "./style.css";
import { useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import { Card } from "../../common/card-common";
import { CategoryGet } from "../../../redux/category";
import { useSelector, useDispatch } from "react-redux";

const data = [
  {
    id: "p1",
    catalog_id: 1,
    title: "БУМАГА",
    text: "Превосходное качество и надежная защита в каждой бумажной упаковке.",
    image: bumagaImg,
  },
  {
    id: "p2",
    catalog_id: 2,
    title: "Фанера",
    text: "Превосходное качество и надежная защита в каждой бумажной упаковке.",
    image: bumagaImg,
  },
  {
    id: "p3",
    catalog_id: 3,
    title: "БУМАГА",
    text: "Превосходное качество и надежная защита в каждой бумажной упаковке.",
    image: bumagaImg,
  },
  {
    id: "p4",
    catalog_id: 4,
    title: "СТРЕЙЧ ПЛЕНКА",
    text: "Превосходное качество и надежная защита в каждой бумажной упаковке.",
    image: bumagaImg,
  },
  {
    id: "p5",
    catalog_id: 5,
    title: "БУМАГА",
    text: "Превосходное качество и надежная защита в каждой бумажной упаковке.",
    image: bumagaImg,
  },
  {
    id: "p6",
    catalog_id: 1,
    title: "ГОФРОПРОДУКЦИЯ",
    text: "Превосходное качество и надежная защита в каждой бумажной упаковке.",
    image: bumagaImg,
  },
];




export const CatalogProducts = () => {
  const catalog = [
    {
      id: 1,
      catalog: "БУМАГА",
    },
    {
      id: 2,
      catalog: "Фанера",
    },
    {
      id: 3,
      catalog: "СТРЕЙЧ ПЛЕНКА",
    },
    {
      id: 4,
      catalog: "ГОФРОПРОДУКЦИЯ",
    },
    {
      id: 5,
      catalog: "ТЕРМОУСАДОЧНАЯ ПЛЕНКА",
    },
  ];
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const [products, setProducts] = useState(data);
  const dispatch = useDispatch()
  const categoryGetState = useSelector((state) => state.category.categoryGet?.data);
  console.log(categoryGetState)
  useEffect(() => {
    dispatch(CategoryGet())
  }, [])



  const HandleFilter = (e) => {
    e.preventDefault();
    // let filtered = data.filter(
    //   (product) => product.catalog_id === +e.target.id
    // );

    let filtered = categoryGetState.map(elem => elem.products.filter((product) => product.id === +e.target.id))
    setProducts(filtered);
  };

  return (
    <div className={styles.catalog_roducts}>
      <div className={styles.catalog_top}>
        <BigContainer>
          <ButtonGroup
            className={styles.catalog_list}
            variant="outlined"
            aria-label="outlined button group"
          >
            {categoryGetState.map((item) => (
              <Button
                key={item.id}
                id={item.id}
                onClick={(e) => HandleFilter(e)}
              >
                {
                  LangVal() == "ru"
                    ? item.title_ru
                    : LangVal() == "uz"
                      ? item.title_uz
                      : LangVal() == "en"
                        ? item.title_en
                        : item.title_ru
                }
              </Button>
            ))}
          </ButtonGroup>
        </BigContainer>
      </div>
      <div className={styles.catalog_bottom}>
        <BigContainer>
          <Row className={styles.catalog_row}>
            {
              categoryGetState.map(elem => (
                elem.products.map(product => (
                  <Col
                    className={styles.catalog_col}
                    lg={4}
                    md={6}
                    sx={6}
                    sm={12}
                    key={product.id}
                  >
                    <Card
                      title={
                        LangVal() == "ru"
                          ? product.title_ru
                          : LangVal() == "uz"
                            ? product.title_uz
                            : LangVal() == "en"
                              ? product.title_en
                              : product.title_ru
                      }
                      text={
                        LangVal() == "ru"
                          ? `${product.description_ru.slice(0, 50)}...`
                          : LangVal() == "uz"
                            ? `${product.description_uz.slice(0, 50)}...`
                            : LangVal() == "en"
                              ? `${product.description_en.slice(0, 50)}...`
                              : `${product.description_ru.slice(0, 50)}...`
                      }
                      image={product.image}
                      id={product.id}
                    />
                  </Col>
                ))
              ))
            }
          </Row>
        </BigContainer>
      </div>
    </div>
  );
};
