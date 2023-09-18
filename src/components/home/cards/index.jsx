import { useTranslation } from "react-i18next";
import { BigContainer } from "../../../style-app";
import styles from "./home-cards.module.css";
import { Col } from "react-grid-system";
import { AiOutlineLineChart } from "react-icons/ai";
import { useState } from "react";
import { Modal } from "../../common/modal";
import { Button } from "../../common/button-common/index";
import card1 from "../../../assets/about/people.svg";
import card2 from "../../../assets/about/trig-icon-2.svg";
import card3 from "../../../assets/about/trig-icon-3.svg";
import card4 from "../../../assets/about/uzbekistan-icon.svg";
import card5 from "../../../assets/about/trig-export.svg";

export const HomeCards = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const HandleOpen = () => {
    setOpen(true);
  };

  const HandleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} HandleClose={HandleClose} />
      <div className={styles.home_cards}>
        <BigContainer>
          <div className={styles.wrapper}>
            <div className={styles.choose_title}>
              <h2>{t("Work.0")}</h2>
            </div>
            <div className={styles.home_cards_row}>
              <Col className={styles.home_cards_col}>
                <h3>{t("Work.1")}</h3>
                <p>{t("Work.2")}</p>
                <Button onClick={HandleOpen}>{t("Work.3")}</Button>
              </Col>
              <div className={styles.home_right}>
                <div className={styles.home_card}>
                  <img src={card1} alt="" />
                  <h5>{t("Work.4")}</h5>
                </div>
                <div className={styles.home_card}>
                  <img src={card2} alt="" />
                  <h5>{t("Work.5")}</h5>
                </div>
                <div className={styles.home_card}>
                  <img src={card3} alt="" />
                  <h5>{t("Work.6")}</h5>
                </div>
                <div className={styles.home_card}>
                  <img src={card4} alt="" />
                  <h5>{t("Work.7")}</h5>
                </div>
                <div className={styles.home_card}>
                  <AiOutlineLineChart size={"40%"} color="#ffffff" />
                  <h5>{t("About.7")}</h5>
                </div>
                <div className={styles.home_card}>
                  <img src={card5} alt="" />
                  <h5>{t("Work.8")}</h5>
                </div>
              </div>
            </div>
          </div>
        </BigContainer>
      </div>
    </>
  );
};
