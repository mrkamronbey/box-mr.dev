import React from "react";
import { useTranslation } from "react-i18next";
import {Button} from "../../common/button-common/index"
import HeroCommon from "../../common/hero-common";
import styles from './style.module.css'

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroCommon
      className={styles.bg}
        heroTitle={t("Home.7")}
        isBtn={true}
        heroBtn={<Button>{t("Home.2")}</Button>}
      />
    </>
  );
};

export default Hero;
