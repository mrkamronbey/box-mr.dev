import { lazy } from "react";

const Home = lazy(() => import("../pages/home/index"));
const Employee = lazy(() => import("../pages/employee/index"));
const About = lazy(() => import("../pages/about/index"));
const Vacancy = lazy(() => import("../pages/vacancy/index"));
const Catalog = lazy(() => import("../pages/catalog/index"));
const ProductMore = lazy(() => import("../pages/product-more/index"));
const News = lazy(() => import("../pages/news/index"));
const NewsMore = lazy(() => import("../pages/news-more/index"));
const Contact = lazy(() => import("../pages/contact/index"));
const Blog = lazy(() => import("../pages/blog/index"));
const Services = lazy(() => import("../pages/services/index"));
const ErrorPage = lazy(() => import("../pages/Error/index"));
const BlogMore = lazy(() => import("../pages/blogmore/index"));

export const RouterData = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "/about",
    component: <About />,
  },
  {
    id: 3,
    path: "/catalog/:id",
    component: <Catalog />,
  },
  {
    id: 4,
    path: "/productmore/:id",
    component: <ProductMore />,
  },
  {
    id: 5,
    path: "/news",
    component: <News />,
  },
  {
    id: 6,
    path: "/newsmore/:id",
    component: <NewsMore />,
  },
  {
    id: 7,
    path: "/contact",
    component: <Contact />,
  },
  {
    id: 8,
    path: "/blog",
    component: <Blog />,
  },
  {
    id: 9,
    path: "/services",
    component: <Services />,
  },
  {
    id: 10,
    path: "/employee",
    component: <Employee />,
  },
  {
    id: 11,
    path: "/vacancy",
    component: <Vacancy />,
  },
  {
    id: 12,
    path: "/*",
    component: <ErrorPage />,
  },
  {
    id: 13,
    path: "/blog-more/:id",
    component: <BlogMore />,
  },
];
