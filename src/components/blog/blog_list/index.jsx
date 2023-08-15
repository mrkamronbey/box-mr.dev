import { Col, Row } from "react-grid-system";
import { BigContainer } from "../../../style-app";
import styles from "./blog-list.module.css";
import { BlogCard } from "../blog_card";

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
  return (
    <div className={styles.blog_list}>
      <BigContainer>
        <Row className={styles.blog_row}>
          {blogs.map((blog) => (
            <Col lg={4} md={6} sx={6} sm={12} className={styles.blog_col}>
              <BlogCard
                key={blog.id}
                link={blog.link}
                title={blog.title}
                text={blog.text}
              />
            </Col>
          ))}
        </Row>
      </BigContainer>
    </div>
  );
};
