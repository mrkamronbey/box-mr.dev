import Slider from "react-slick";
import { BigContainer } from "../../style-app";
import styles from "./partners.module.css";
import { useTranslation } from "react-i18next";
import "./style.css";
import logo1 from "../../assets/partners/img1.png";
import logo2 from "../../assets/partners/img2.png";
import logo3 from "../../assets/partners/img3.png";
import logo4 from "../../assets/partners/img4.png";
import logo5 from "../../assets/partners/img5.png";
import logo6 from "../../assets/partners/img6.png";
import logo7 from "../../assets/partners/img7.png";
import logo8 from "../../assets/partners/img8.png";
import logo9 from "../../assets/partners/img9.png";
import logo10 from "../../assets/partners/img10.png";
import logo11 from "../../assets/partners/img11.png";
import logo12 from "../../assets/partners/img12.png";

export const Partner = () => {
  const {t} =useTranslation();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 4,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      }
    ],
  };
  return (
    <div className={styles.partner_section}>
      <BigContainer>
        <div className={styles.choose_title}>
          <h2>{t("Partner.0")}</h2>
        </div>
        <div className={styles.scroll_div}>
          <Slider {...settings}>
            <div>
              <img src={logo1} alt="" />
            </div>
            <div>
              <img src={logo2} alt="" />
            </div>
            <div>
              <img src={logo3} alt="" />
            </div>
            <div>
              <img src={logo4} alt="" />
            </div>
            <div>
              <img src={logo5} alt="" />
            </div>
            <div>
              <img src={logo6} alt="" />
            </div>
            <div>
              <img src={logo7} alt="" />
            </div>
            <div>
              <img src={logo8} alt="" />
            </div>
            <div>
              <img src={logo9} alt="" />
            </div>
            <div>
              <img src={logo10} alt="" />
            </div>
            <div>
              <img src={logo11} alt="" />
            </div>
            <div>
              <img src={logo12} alt="" />
            </div>
          </Slider>
        </div>
      </BigContainer>
    </div>
  );
};
