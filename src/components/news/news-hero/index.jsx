import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../common/button-common/index"
import HeroCommon from "../../common/hero-common";

const NewsHero = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroCommon
        heroTitle={t("Home.6")}
        isBtn={true}
        heroBtn={<Button>{t("ProductMore.2")}</Button>}
        id={"form"}
      />
    </>
  );
};

export default NewsHero;
