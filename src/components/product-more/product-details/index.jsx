import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-grid-system";
import { WrapperContainer } from "../../../style-app";
import styles from "./style.module.css";
import { GrClose } from "react-icons/gr";
import { Button } from "../../common/button-common";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { ProductGet } from "../../../redux/products/index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Modal } from "../../common/modal";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const productGetState = useSelector(
    (state) => state.product.productGet?.data
  );
  useEffect(() => {
    dispatch(ProductGet());
  }, []);
  const productFilter = productGetState.filter((elem) => elem.id == id);

  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(null);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(0);
  const widthRef = useRef();
  const thicknessRef = useRef();
  const univRef = useRef();

  const HandleOpen = () => {
    setOpen(true);
  };

  const HandleClose = () => {
    setOpen(false);
  };

  const schetHandle = () => {
    if (
      !univRef.current.value ||
      !widthRef.current.value ||
      !thicknessRef.current.value
    ) {
      setError(t("Modal.1"));
    }
    if (select === "Длина") {
      setResult(
        (Number(univRef.current.value) * 1000000) /
          (Number(widthRef.current.value) *
            Number(thicknessRef.current.value) *
            0.92)
      );
    }
    if (select === "Вес") {
      setResult(
        (Number(univRef.current.value) *
          Number(widthRef.current.value) *
          Number(thicknessRef.current.value) *
          0.92) /
          1000000
      );
    } else {
      setError(t("Modal.0"));
    }
  };
  const resetHandle = () => {
    univRef.current.value = "";
    thicknessRef.current.value = "";
    widthRef.current.value = "";
    setResult(0);
    if (error) {
      setError(null);
    }
  };

  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };
  return (
    <>
      <div
        className={
          open
            ? `${styles.modal_curtain} ${styles.modal_curtain_active}`
            : styles.modal_curtain
        }
      >
        <div className={styles.modal}>
          <button className={styles.close_btn} onClick={HandleClose}>
            <GrClose className={styles.close_icon} />
          </button>
          <h3>{t("Modal.2")}</h3>
          <p>{t("Modal.3")}</p>
          <div className={styles.checkboxes}>
            <label>
              {t("Modal.4")} :{" "}
              <input
                id="checked"
                name="checked"
                onClick={(e) => setSelect(e.target.value)}
                type="radio"
                value="Вес"
              />
            </label>
            <label>
              {t("Modal.5")} :{" "}
              <input
                id="checked"
                name="checked"
                onClick={(e) => setSelect(e.target.value)}
                type="radio"
                value="Длина"
              />
            </label>
          </div>
          <form>
            <label>
              {t("Modal.6")} (мм) <br />
              <input ref={widthRef} type="text" required />
            </label>
            <label>
              {t("Modal.7")} (мкм) <br />
              <input ref={thicknessRef} type="text" required />
            </label>
            <label>
              {select === "Вес"
                ? `${t("Modal.5")} (м) `
                : `${t("Modal.4")}  (кг) `}{" "}
              <br />
              <input ref={univRef} type="text" required />
            </label>
          </form>
          <p>
            {select === "Вес"
              ? `${t("Modal.4")}  (кг) `
              : `${t("Modal.5")} (м) `}{" "}
            : {result}
          </p>
          <div className={styles.error_text}>{error}</div>
          <Button className={styles.schet_btn} onClick={schetHandle}>
            {t("Modal.9")}
          </Button>
          <Button onClick={resetHandle}>{t("Modal.8")}</Button>
        </div>
      </div>
      <Modal open={opened} HandleClose={handleClose}/>
      <div className={styles.product_detail_section}>
        <WrapperContainer>
          <div className={styles.product_details_row_wrapp}>
            {productFilter.map((elem) => (
              <Row className={styles.product_details_row}>
                <Col
                  className={styles.product_details_col}
                  lg={6}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <div className={styles.product_detail_content}>
                    <h4>
                      {LangVal() == "ru"
                        ? elem.title_ru
                        : LangVal() == "uz"
                        ? elem.title_uz
                        : LangVal() == "en"
                        ? elem.title_en
                        : elem.title_ru}
                    </h4>
                    {/* <p> */}
                    {LangVal() == "ru" ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: elem.description_ru,
                        }}
                      />
                    ) : LangVal() == "uz" ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: elem.description_uz,
                        }}
                      />
                    ) : LangVal() == "en" ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: elem.description_en,
                        }}
                      />
                    ) : (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: elem.description_ru,
                        }}
                      />
                    )}
                    {/* </p> */}

                    <div className={styles.product_detail_number_box}>
                      <p>{elem.number}</p>
                      <p>{t("ProductMore.6")}</p>
                    </div>
                    <div className={styles.hr}></div>
                    <div className={styles.hero_buttons}>
                      <Button onClick={handleOpen}>{t("ProductMore.5")}</Button>
                      <Button onClick={HandleOpen}>{t("Modal.9")}</Button>
                    </div>
                  </div>
                </Col>
                <Col
                  className={styles.product_details_col}
                  lg={6}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <>
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                      loop={true}
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{
                        swiper:
                          thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                      }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      <SwiperSlide>
                        <img
                          style={{ aspectRatio: 1 / 1 }}
                          src={elem.image}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          style={{ aspectRatio: 1 / 1 }}
                          src={elem.image2}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          style={{ aspectRatio: 1 / 1 }}
                          src={elem.image3}
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      loop={true}
                      spaceBetween={10}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img
                          style={{ aspectRatio: 1 / 1 }}
                          src={elem.image}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          style={{ aspectRatio: 1 / 1 }}
                          src={elem.image2}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          style={{ aspectRatio: 1 / 1 }}
                          src={elem.image3}
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>
                  </>
                </Col>
              </Row>
            ))}
          </div>
        </WrapperContainer>
      </div>
    </>
  );
};

export default ProductDetails;
