import React from 'react'
import styles from './style.module.css'
import NewsImg from '../../../assets/news/news_img.png'
import { NavLink } from 'react-router-dom'

const NewsMoreCard = () => {
    const arr = [1, 2, 3]
    const handleTop = () => {
        window.scrollTo(0, 550)
    }
    return (
        <>
            {
                arr.map(() => (
                    <NavLink onClick={handleTop} className={styles.news_more_link} to={`/newsmore/${1}`}>
                        <div className={styles.news_more_cards}>
                            <div className={styles.news_more_img_wrapp}>
                                <img style={{ aspectRatio: 16 / 9, width: '100%' }} src={NewsImg} alt="" />
                            </div>
                            <div className={styles.news_more_content}>
                                <h4>Шавкат Мирзиёев строго предупредил хокимов всех уровней
                                </h4>
                                <span>
                                    <time>
                                        11:31 / 15.05.2020
                                    </time>
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