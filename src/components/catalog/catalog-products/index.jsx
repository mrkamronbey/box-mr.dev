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
import { ProductGet } from "../../../redux/products";
import { useSelector, useDispatch } from "react-redux";

export const CatalogProducts = () => {
 
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };



  const dispatch = useDispatch()
  const categoryGetState = useSelector((state) => state.category.categoryGet?.data);

  const productGetState = useSelector((state) => state.product.productGet?.data);
  const [productS, setProductS] = useState(productGetState);
  console.log(productS)
  useEffect(() => {
    dispatch(CategoryGet())
  }, [])

  useEffect(() => {
    dispatch(ProductGet())
  }, [])




  const HandleFilter = (e) => {
    e.preventDefault();
    let filtered = productGetState.filter(
      (product) => product.id === +e.target.id
    );
    setProductS(filtered);
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
              productS?.map(product => (
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
                        ? `${product.description_ru}`
                        : LangVal() == "uz"
                          ? `${product.description_uz}`
                          : LangVal() == "en"
                            ? `${product.description_en}`
                            : `${product.description_ru}`
                    }
                    image={product.image}
                    id={product.id}
                  />
                </Col>
              ))
            }

            {/* {
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
                          ? `${product.description_ru}`
                          : LangVal() == "uz"
                            ? `${product.description_uz}`
                            : LangVal() == "en"
                              ? `${product.description_en}`
                              : `${product.description_ru}`
                      }
                      image={product.image}
                      id={product.id}
                    />
                  </Col>
                ))
              ))
            } */}
          </Row>
        </BigContainer>
      </div>
    </div>
  );
};
