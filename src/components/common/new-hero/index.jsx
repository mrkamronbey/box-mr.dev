import React from "react";
import { BigContainer } from "../../../style-app";
import { Row, Col } from "react-grid-system";
import styles from './new-hero.module.css';
import Header from "../../header";

const NewHeroCommon = ({
  heroTitle,
  className,
}) => {
  return (
    <>
      <div className={`${styles.hero_section} ${className}`}>
        <Header />
        <BigContainer>
          <Row className={styles.home_hero_row}>
            <Col
              className={styles.home_hero_col}
              lg={12}
              md={12}
              sx={12}
              sm={12}
            >
              <h2>{heroTitle}</h2>
            </Col>
          </Row>
        </BigContainer>
      </div>
    </>
  );
};

export default NewHeroCommon;
