import React from "react";
import styles from "./hero.module.css";
import { BigContainer } from "../../../style-app";
import { Row, Col } from "react-grid-system";
import Header from "../../header";

const HeroCommon = ({ heroTitle, heroText, heroBtn, isBtn, id,className }) => {
  return (
    <>
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
              {isBtn === true ? <a href={`#${id}`}>{heroBtn}</a> : null}
            </Col>
          </Row>
        </BigContainer>
      </div>
    </>
  );
};

export default HeroCommon;
