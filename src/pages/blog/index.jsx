import React, { useEffect } from "react";
import BlogComponet from "../../components/blog";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BlogComponet/>
    </>
  );
};

export default Blog;
