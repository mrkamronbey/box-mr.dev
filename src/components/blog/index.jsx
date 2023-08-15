import React from "react";
import Hero from "./hero";
import { Form } from "../form";
import { Blog } from "./blog_list";

const BlogComponet = () => {
  return (
    <>
      <Hero />
      <Blog/>
      <Form />
    </>
  );
};

export default BlogComponet;
