import React, { useEffect } from 'react'
import styles from './style.module.css'
import NewsImg from '../../../assets/news/news_img.png'
import { NavLink } from 'react-router-dom'
import { NewsGet } from '../../../redux/news/index'
import { useDispatch, useSelector } from 'react-redux'

const NewsMoreCard = () => {
    const dispatch = useDispatch()
    const handleTop = () => {
        window.scrollTo(0, 550)
    }

    const LangVal = () => {
        return window.localStorage.getItem("i18nextLng");
    };

    const newGetState = useSelector((state) => state.news.newsGet?.data)

    useEffect(() => {
        dispatch(NewsGet())
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
            {
                newGetState.map((elem) => (
                    <NavLink onClick={handleTop} className={styles.news_more_link} to={`/newsmore/${elem.id}`}>
                        <div className={styles.news_more_cards}>
                            <div className={styles.news_more_img_wrapp}>
                                <img style={{ aspectRatio: 16 / 9, width: '100%' }} src={elem.image} alt="" />
                            </div>
                            <div className={styles.news_more_content}>
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
                                <span>
                                    <i class='bx bx-calendar'></i>
                                    <time>{elem.createdAt.slice(11, 16)}</time>
                                    /
                                    <time>{DateFormat(elem.createdAt)}</time>
                                </span>
                            </div>
                        </div>
                    </NavLink>
                ))
            }
        </>
    )
}

export default NewsMoreCard