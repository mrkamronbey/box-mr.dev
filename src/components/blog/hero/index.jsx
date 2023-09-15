import React from "react";
import { useTranslation } from "react-i18next";
import {Button} from "../../common/button-common/index"
import styles from './style.module.css';
import HeroCommon from "../../common/hero-common";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroCommon className={styles.bg}
        heroTitle={t("Home.5")}
        isBtn={true}
        heroBtn={<Button>{t("Home.2")}</Button>}
      />
    </>
  );
};

export default Hero;
