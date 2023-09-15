import { Col, Row } from "react-grid-system";
import { BigContainer } from "../../../style-app";
import styles from "./blog-list.module.css";
import { BlogCard } from "../blog_card";
import { BlogGet } from "../../../redux/blog";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Blog = () => {
  const dispatch = useDispatch()
  const bloggetState = useSelector((state) => state.blog.BlogGets?.data)

  useEffect(() => {
    dispatch(BlogGet())
  }, [])
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  return (
    <div className={styles.blog_list}>
      <BigContainer>
        <Row className={styles.blog_row}>
          {bloggetState.map((blog) => (
            <Col lg={4} md={6} sx={6} sm={12} className={styles.blog_col}>
              <NavLink to={`/blog-more/${blog.id}`}>
                <BlogCard
                  key={blog.id}
                  link={blog.link}
                  title={
                    LangVal() == "ru"
                      ? blog.title_ru
                      : LangVal() == "uz"
                        ? blog.title_uz
                        : LangVal() == "en"
                          ? blog.title_en
                          : blog.title_ru
                  }
                  text={
                    LangVal() == "ru" ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${blog.description_ru.slice(0, 60)}...`,
                        }}
                      />
                    ) : LangVal() == "uz" ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${blog.description_uz.slice(0, 60)}...`,
                        }}
                      />
                    ) : LangVal() == "en" ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${blog.description_en.slice(0, 60)}...`,
                        }}
                      />
                    ) : (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${blog.description_ru.slice(0, 60)}...`,
                        }}
                      />
                    )
                  }
                />
              </NavLink>
            </Col>
          ))}
        </Row>
      </BigContainer>
    </div>
  );
};
