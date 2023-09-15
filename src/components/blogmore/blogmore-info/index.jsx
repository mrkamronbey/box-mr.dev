import React, { useEffect } from 'react'
import { Col, Row } from 'react-grid-system'
import { WrapperContainer } from '../../../style-app'
import styles from './style.module.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BlogGet } from './../../../redux/blog/index';
import { useTranslation } from 'react-i18next'

const BlogMoreInfo = () => {
  const {t} = useTranslation()
  const { id } = useParams()
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const dispatch = useDispatch()
  const bloggetState = useSelector((state) => state.blog.BlogGets?.data)
  const filterBlog = bloggetState.filter(elem => elem.id == id)

  useEffect(() => {
    dispatch(BlogGet())
  }, [])

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
      <div className={styles.news_more_section}>
        <WrapperContainer>
          <div className={styles.blog_more_row_wrapp}>
            <Row className={styles.news_more_row}>
              <Col className={styles.news_more_col} lg={12} md={12} xs={12} sm={12}>
                {
                  filterBlog.map(elem => (
                    <div className={styles.blog_more_card}>
                      {/* <h4>
                        {
                          LangVal() == "ru"
                            ? elem.title_ru
                            : LangVal() == "uz"
                              ? elem.title_uz
                              : LangVal() == "en"
                                ? elem.title_en
                                : elem.title_ru
                        }
                      </h4> */}
                      <span>
                        <span>{t("BlogMore.0")}</span>
                        <i class='bx bx-calendar'></i>
                        <time className="date_span">{DateFormat(elem.createdAt)}</time>
                      </span>
                      <div className={styles.blog_more_img_wrapp}>
                        <img style={{ aspectRatio: 16 / 9, width: '70%', height: "400px" }} src={elem.link} alt="" />
                      </div>

                      {
                        LangVal() == "ru" ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: elem.description_ru,
                            }}
                          />
                        ) : LangVal() == "uz" ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: elem.description_uz,
                            }}
                          />
                        ) : LangVal() == "en" ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: elem.description_en,
                            }}
                          />
                        ) : (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: elem.description_ru,
                            }}
                          />
                        )
                      }
                    </div>
                  ))
                }
              </Col>
            </Row>
          </div>
        </WrapperContainer>
      </div>
    </>
  )
}

export default BlogMoreInfo