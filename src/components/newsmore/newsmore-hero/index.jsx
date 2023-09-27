import React from "react";
import { useTranslation } from "react-i18next";
import NewHeroCommon from './../../common/new-hero/index';
import styles from './style.module.css'

const NewsHero = () => {
  const { t } = useTranslation();
  return (
    <>
       <NewHeroCommon
        className={styles.bg}
        heroTitle={t("Home.6")}
      />
    </>
  );
};

export default NewsHero;
