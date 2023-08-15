import React from 'react'
import { Col, Row } from 'react-grid-system'
import { WrapperContainer } from '../../../style-app'
import styles from './style.module.css'
import NewsImg from '../../../assets/news/news_img.png'
import { NavLink } from 'react-router-dom'

const NewsCard = () => {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <>
            <div className={styles.news_section}>
                <WrapperContainer>
                    <div className={styles.news_row_wrapp}>
                        {
                            arr.map(() => (
                                <NavLink to={`/newsmore/${1}`}>
                                    <div className={styles.new_card}>
                                        <Row className={styles.news_row}>
                                            <Col className={styles.news_col} lg={5} md={12} xs={12} sm={12}>
                                                <div className={styles.news_col_img_wrapp}>
                                                    <img style={{ aspectRatio: 16 / 9, width: '100%' }} src={NewsImg} alt="" />
                                                </div>
                                            </Col>
                                            <Col className={styles.news_col} lg={7} md={12} xs={12} sm={12}>
                                                <div className={styles.news_col_content_wrapp}>
                                                    <h4>По факту прорыва Сардобинского водохранилища
                                                        возбуждено уголовное дело</h4>
                                                    <p>После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана.
                                                    </p>
                                                    <span>
                                                        <i class='bx bx-calendar'></i>
                                                        <time>
                                                            11:31 / 15.05.2020
                                                        </time>
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </NavLink>
                            ))
                        }

                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default NewsCard