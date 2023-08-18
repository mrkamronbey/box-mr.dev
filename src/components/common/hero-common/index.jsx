import React, { useRef, useState } from "react";
import styles from "./hero.module.css";
import { BigContainer } from "../../../style-app";
import { GrClose } from "react-icons/gr";
import { Row, Col } from "react-grid-system";
import Header from "../../header";
import { Button } from "../button-common";
import { useTranslation } from "react-i18next";

const HeroCommon = ({ heroTitle, heroText, heroBtn, isBtn, id, className }) => {
  const { t } = useTranslation();
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

      <div className={`${styles.hero_section} ${className}`}>
        <Header />
        <BigContainer>
          <Row className={styles.home_hero_row}>
            <Col
              className={styles.home_hero_col}
              lg={10}
              md={8}
              sx={12}
              sm={12}
            >
              <h2>{heroTitle}</h2>
              <p>{heroText}</p>
              <div className={styles.hero_buttons}>
                {isBtn === true ? <a href={`#${id}`}>{heroBtn}</a> : null}
                <Button onClick={HandleOpen}>{t("Modal.9")}</Button>
              </div>
            </Col>
          </Row>
        </BigContainer>
      </div>
    </>
  );
};

export default HeroCommon;
