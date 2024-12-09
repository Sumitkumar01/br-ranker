import Head from "next/head";
import React from "react";
import PageTitle from "./PageTitle";
import BlogAreaContent from "./BlogAreaContent";
import { routeType } from "@/interFace/interFace";
import blog_data from "@/data/blog-data";

const BlogDetailsMain = ({ board }: routeType) => {

  const blog: any = blog_data.find((item) => item.name === board);

  return (
    <>
      <PageTitle blog={blog} />
      <BlogAreaContent blog={blog} />
    </>
  );
};

export default BlogDetailsMain;
