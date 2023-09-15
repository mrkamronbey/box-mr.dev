import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../common/button-common/index"
import styles from './style.module.css';
import NewHeroCommon from "../../common/new-hero";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <NewHeroCommon className={styles.bg}
        heroTitle={t("Header.6")}
      />
    </>
  );
};

export default Hero;
