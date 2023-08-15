import React, { useEffect } from "react";
import styles from "./style.module.css";
import { WrapperContainer } from "../../../style-app";
import { useTranslation } from "react-i18next";
import { Card } from '../../common/card-common/index'
import Slider from "react-slick";
import './style.css'
import bumagaImg from "../../../assets/products/bumaga-png.png";
import { useDispatch, useSelector } from 'react-redux'
import { ProductGet } from '../../../redux/products/index'



const ProductFactory = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
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
  const productGetState = useSelector((state) => state.product.productGet?.data);
  useEffect(() => {
    dispatch(ProductGet())
  }, [])
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: true
        }
      }
    ]
  };

  const handleTop = () => {
    window.scrollTo(0, 550)
  }

  return (
    <>
      <div className={styles.product_factory_section}>
        <WrapperContainer>
          <div className={styles.product_factory_content}>
            <h4 className={styles.product_factory_title}>{t("ProductMore.3")}</h4>
            <p className={styles.product_factory_text}>{t("ProductMore.4")}</p>
          </div>
          <div className='product_factory_slider_wrapp'>
            <Slider {...settings}>
              {
                productGetState.map((product) => (
                  <div className='slider_card_box'>
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
                          ? `${product.description_ru.slice(0, 30)}...`
                          : LangVal() == "uz"
                            ? `${product.description_uz.slice(0, 30)}...`
                            : LangVal() == "en"
                              ? `${product.description_en.slice(0, 30)}...`
                              : `${product.description_ru.slice(0, 30)}...`
                      }
                      image={product.image}
                      id={product.id}
                      className={styles.card_white}
                      handle={handleTop}
                    />
                  </div>
                ))
              }
            </Slider>
          </div>
        </WrapperContainer>
      </div>
    </>
  );
};

export default ProductFactory;
