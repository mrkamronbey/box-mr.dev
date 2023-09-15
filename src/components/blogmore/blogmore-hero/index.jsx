import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../common/button-common/index"
import HeroCommon from "../../common/hero-common";
import NewHeroCommon from "../../common/new-hero";
import styles from './style.module.css'

const BlogMoreHero = ({ filterBlog }) => {
  const { t } = useTranslation();
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  return (
    <>
      <NewHeroCommon className={styles.bg_blog}
        new_hero_title_class={styles.blog_hero_title}
        heroTitle={
          filterBlog.map(blog => (
            LangVal() == "ru"
              ? blog.title_ru
              : LangVal() == "uz"
                ? blog.title_uz
                : LangVal() == "en"
                  ? blog.title_en
                  : blog.title_ru
          ))
        }
      />
    </>
  );
};

export default BlogMoreHero;
