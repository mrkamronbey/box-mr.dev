import { Col, Row } from "react-grid-system";
import { BigContainer } from "../../../style-app";
import styles from "./blog-list.module.css";
import { BlogCard } from "../blog_card";
import { BlogGet } from "../../../redux/blog";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const blogs = [
  {
    id: "p1",
    link: "https://www.youtube.com/embed/dufPA_v48YM",
    title: "Выставка «Металлообработка- 2019. Оборудование, приборы ..",
    text: "Более чем полувековые, традиции создания, изготовления и внедрения прецизионных ..",
  },
  {
    id: "p2",
    link: "https://www.youtube.com/embed/dufPA_v48YM",
    title: "Выставка «Металлообработка- 2019. Оборудование, приборы ..",
    text: "Более чем полувековые, традиции создания, изготовления и внедрения прецизионных ..",
  },
  {
    id: "p3",
    link: "https://www.youtube.com/embed/dufPA_v48YM",
    title: "Выставка «Металлообработка- 2019. Оборудование, приборы ..",
    text: "Более чем полувековые, традиции создания, изготовления и внедрения прецизионных ..",
  },
  {
    id: "p4",
    link: "https://www.youtube.com/embed/dufPA_v48YM",
    title: "Выставка «Металлообработка- 2019. Оборудование, приборы ..",
    text: "Более чем полувековые, традиции создания, изготовления и внедрения прецизионных ..",
  },
  {
    id: "p5",
    link: "https://www.youtube.com/embed/dufPA_v48YM",
    title: "Выставка «Металлообработка- 2019. Оборудование, приборы ..",
    text: "Более чем полувековые, традиции создания, изготовления и внедрения прецизионных ..",
  },
  {
    id: "p6",
    link: "https://www.youtube.com/embed/dufPA_v48YM",
    title: "Выставка «Металлообработка- 2019. Оборудование, приборы ..",
    text: "Более чем полувековые, традиции создания, изготовления и внедрения прецизионных ..",
  },
];

export const Blog = () => {
  const dispatch = useDispatch()
  const bloggetState = useSelector((state) => state.blog.BlogGets?.data)
  console.log(bloggetState)

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
                  LangVal() == "ru"
                    ? blog.description_ru
                    : LangVal() == "uz"
                      ? blog.description_uz
                      : LangVal() == "en"
                        ? blog.description_en
                        : blog.description_ru
                }
              />
            </Col>
          ))}
        </Row>
      </BigContainer>
    </div>
  );
};
