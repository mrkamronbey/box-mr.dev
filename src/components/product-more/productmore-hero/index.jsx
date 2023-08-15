import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../common/button-common/index"
import HeroCommon from "../../common/hero-common";
import styles from './style.module.css';

const ProductMoreHero = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroCommon
       className={styles.bg}
        heroTitle={t("Home.4")}
        isBtn={true}
        heroBtn={<Button>{t("ProductMore.2")}</Button>}
        id={"form"}
      />
    </>
  );
};

export default ProductMoreHero;
