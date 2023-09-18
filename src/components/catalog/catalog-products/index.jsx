import { BigContainer } from "../../../style-app";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styles from "./catalog-products.module.css";
import "./style.css";
import { useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import { Card } from "../../common/card-common";
import { CategoryGet } from "../../../redux/category";
import { ProductGet } from "../../../redux/products";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const CatalogProducts = () => {
 
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };



  const dispatch = useDispatch()
  const categoryGetState = useSelector((state) => state.category.categoryGet?.data);

  // const productGetState = useSelector((state) => state.product.productGet?.data);
  // const [productS, setProductS] = useState(productGetState);
  useEffect(() => {
    dispatch(CategoryGet())
  }, [])

  // useEffect(() => {
  //   dispatch(ProductGet())
  // }, [])

  const {id}=useParams();
  const category=categoryGetState.filter(category=>category.id===+id)[0]

  return (
    <div className={styles.catalog_roducts}>
      <div className={styles.catalog_bottom}>
        <BigContainer>
          <Row className={styles.catalog_row}>
            {
              category?.products?.map(product => (
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
                        ? `${product.title_ru.slice(0, 30)}...`
                        : LangVal() == "uz"
                        ? `${product.title_uz.slice(0, 30)}...`
                        : LangVal() == "en"
                        ? `${product.title_en.slice(0, 30)}...`
                        : `${product.title_ru.slice(0, 30)}...`
                    }
                    text={
                      LangVal() == "ru"
                        ? `${product.description_ru.slice(0,50)}...`
                        : LangVal() == "uz"
                          ? `${product.description_uz.slice(0,50)}...`
                          : LangVal() == "en"
                            ? `${product.description_en.slice(0,50)}...`
                            : `${product.description_ru.slice(0,50)}...`
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
