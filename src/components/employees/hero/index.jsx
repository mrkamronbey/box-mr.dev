import React from "react";
import { useTranslation } from "react-i18next";
import styles from './style.module.css';
import NewHeroCommon from "../../common/new-hero";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <NewHeroCommon className={styles.bg}
        heroTitle={t("Employees.0")}
      />
    </>
  );
};

export default Hero;
