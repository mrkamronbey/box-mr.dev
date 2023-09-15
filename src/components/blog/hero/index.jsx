import React from "react";
import { useTranslation } from "react-i18next";
import styles from './style.module.css';
import NewHeroCommon from "../../common/new-hero";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <NewHeroCommon className={styles.bg}
        heroTitle={t("Home.5")}
      />
    </>
  );
};

export default Hero;
