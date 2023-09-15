import React, { useState } from "react";
import styles from "./hero.module.css";
import { BigContainer } from "../../../style-app";
import { Row, Col } from "react-grid-system";
import Header from "../../header";
import { Modal } from "../modal";

const HeroCommon = ({
  heroTitle,
  heroText,
  heroBtn,
  isBtn,
  id,
  className,
}) => {
  const [open, setOpen] = useState(false);

  const HandleOpen = () => {
    setOpen(true);
  };

  const HandleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Modal open={open} HandleClose={HandleClose}/>
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
              <div className={styles.hero_buttons}>
                {isBtn === true ? <a onClick={HandleOpen}>{heroBtn}</a> : null}
              </div>
            </Col>
          </Row>
        </BigContainer>
      </div>
    </>
  );
};

export default HeroCommon;
