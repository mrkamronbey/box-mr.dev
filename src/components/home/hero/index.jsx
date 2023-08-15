import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../common/button-common/index"
import HeroCommon from "../../common/hero-common";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroCommon
        heroTitle={t("Home.0")}
        isBtn={true}
        heroBtn={<Button>{t("Home.2")}</Button>}
        id={"form"}
      />
    </>
  );
};

export default Hero;
