import React from "react";
import { useTranslation } from "react-i18next";
import styles from './style.module.css';
import NewHeroCommon from './../../common/new-hero/index';

const ProductMoreHero = ({filterProduct}) => {
  const { t } = useTranslation();
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  return (
    <>
      <NewHeroCommon
       className={styles.bg}
       heroTitle={
        filterProduct.map(product => (
          LangVal() == "ru"
            ? product.title_ru
            : LangVal() == "uz"
              ? product.title_uz
              : LangVal() == "en"
                ? product.title_en
                : product.title_ru
        ))
      }
      />
    </>
  );
};

export default ProductMoreHero;
