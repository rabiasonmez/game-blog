import React from "react";
import BlogPostCard from "./PostBlogCard";
import BlogPage from "./PostBlogPage";
import Sidebar from "../blogSidebar/SideBar";
import Column from '../../themeLayout/ColumnLayout';
import Container from '../../themeLayout/ContainerLayout';

const postBlog = () => {
  return (
    <div className="blog-page-area pd-bottom-80 go-top">
      <Container>
        <Column className="col-lg-9 pd-top-50">
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
          <BlogPage />
        </Column>
        <Column className="col-lg-3 pd-top-50 go-top">
          <Sidebar />
        </Column>
      </Container>
    </div>
  );
};

export default postBlog;
