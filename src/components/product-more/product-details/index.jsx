import React, { useEffect, useRef, useState } from 'react'
import { Col, Row } from 'react-grid-system'
import { WrapperContainer } from '../../../style-app'
import styles from './style.module.css'
import { Button } from '../../common/button-common'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux'
import { ProductGet } from '../../../redux/products/index'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const productGetState = useSelector((state) => state.product.productGet?.data);
    useEffect(() => {
        dispatch(ProductGet())
    }, [])
    const productFilter = productGetState.filter(elem => elem.id == id)
    console.log(productFilter)

    const LangVal = () => {
        return window.localStorage.getItem("i18nextLng");
    };
    return (
        <>
            <div className={styles.product_detail_section}>
                <WrapperContainer>
                    <div className={styles.product_details_row_wrapp}>
                        {
                            productFilter.map(elem => (
                                <Row className={styles.product_details_row}>
                                    <Col className={styles.product_details_col} lg={6} md={12} sm={12} xs={12}>
                                        <div className={styles.product_detail_content}>
                                            <h4>
                                                {
                                                    LangVal() == "ru"
                                                        ? elem.title_ru
                                                        : LangVal() == "uz"
                                                            ? elem.title_uz
                                                            : LangVal() == "en"
                                                                ? elem.title_en
                                                                : elem.title_ru
                                                }
                                            </h4>
                                            <p>
                                                {
                                                    LangVal() == "ru"
                                                        ? elem.description_ru
                                                        : LangVal() == "uz"
                                                            ? elem.description_uz
                                                            : LangVal() == "en"
                                                                ? elem.description_en
                                                                : elem.description_ru
                                                }
                                            </p>
                                            <div className={styles.product_detail_number_box}>
                                                <p>{elem.number}</p>
                                                <p>Едениц производится в день</p>
                                            </div>
                                            <div className={styles.hr}></div>
                                            <Button>{t("ProductMore.5")}</Button>
                                        </div>
                                    </Col>
                                    <Col className={styles.product_details_col} lg={6} md={12} sm={12} xs={12}>
                                        <>
                                            <Swiper
                                                style={{
                                                    '--swiper-navigation-color': '#fff',
                                                    '--swiper-pagination-color': '#fff',
                                                }}
                                                loop={true}
                                                spaceBetween={10}
                                                navigation={true}
                                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                                modules={[FreeMode, Navigation, Thumbs]}
                                                className="mySwiper2"
                                            >
                                                <SwiperSlide>
                                                    <img style={{ aspectRatio: 1 / 1 }} src={elem.image} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img style={{ aspectRatio: 1 / 1 }} src={elem.image2} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img style={{ aspectRatio: 1 / 1 }} src={elem.image3} />
                                                </SwiperSlide>
                                            </Swiper>
                                            <Swiper
                                                onSwiper={setThumbsSwiper}
                                                loop={true}
                                                spaceBetween={10}
                                                slidesPerView={4}
                                                freeMode={true}
                                                watchSlidesProgress={true}
                                                modules={[FreeMode, Navigation, Thumbs]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img style={{ aspectRatio: 1 / 1 }} src={elem.image} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img style={{ aspectRatio: 1 / 1 }} src={elem.image2} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img style={{ aspectRatio: 1 / 1 }} src={elem.image3} />
                                                </SwiperSlide>
                                            </Swiper>
                                        </>
                                    </Col>
                                </Row>
                            ))
                        }

                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default ProductDetails