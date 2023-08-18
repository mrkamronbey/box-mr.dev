import React, { useEffect } from "react";
import { Col, Row } from "react-grid-system";
import { WrapperContainer } from "../../../style-app";
import styles from "./style.module.css";
import NewsImg from "../../../assets/news/news_img.png";
import { NavLink } from "react-router-dom";
import { NewsGet } from "../../../redux/news/index";
import { useDispatch, useSelector } from "react-redux";

const NewsCard = () => {
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const dispatch = useDispatch();
  const newGetState = useSelector((state) => state.news.newsGet?.data);
  console.log(newGetState);

  useEffect(() => {
    dispatch(NewsGet());
  }, []);

  const DateFormat = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join(".");
  };

  return (
    <>
      <div className={styles.news_section}>
        <WrapperContainer>
          <div className={styles.news_row_wrapp}>
            {newGetState.map((elem) => (
              <NavLink to={`/newsmore/${elem.id}`}>
                <div className={styles.new_card}>
                  <Row className={styles.news_row}>
                    <Col
                      className={styles.news_col}
                      lg={5}
                      md={12}
                      xs={12}
                      sm={12}
                    >
                      <div className={styles.news_col_img_wrapp}>
                        <img
                          style={{ aspectRatio: 16 / 9, width: "100%" }}
                          src={elem.image}
                          alt=""
                        />
                      </div>
                    </Col>
                    <Col
                      className={styles.news_col}
                      lg={7}
                      md={12}
                      xs={12}
                      sm={12}
                    >
                      <div className={styles.news_col_content_wrapp}>
                        <h4>
                          {LangVal() == "ru"
                            ? elem.title_ru
                            : LangVal() == "uz"
                            ? elem.title_uz
                            : LangVal() == "en"
                            ? elem.title_en
                            : elem.title_ru}
                        </h4>
                        <p>
                          {LangVal() == "ru"
                            ? `${elem.description_ru.slice(0, 248)}...`
                            : LangVal() == "uz"
                            ? `${elem.description_uz.slice(0, 248)}...`
                            : LangVal() == "en"
                            ? `${elem.description_en.slice(0, 248)}...`
                            : `${elem.description_ru.slice(0, 248)}...`}
                        </p>
                        <span>
                          <i class="bx bx-calendar"></i>
                          <time className={styles.time_span}>
                            {elem.createdAt.slice(11, 16)}
                          </time>
                          /
                          <time className="date_span">
                            {DateFormat(elem.createdAt)}
                          </time>
                        </span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </NavLink>
            ))}
          </div>
        </WrapperContainer>
      </div>
    </>
  );
};

export default NewsCard;
