import React from "react";
import BlogPostCard from "./PostBlogCard";
import BlogPage from "./PostBlogPage";
import Sidebar from "../blogSidebar/SideBar";

const postBlog = () => {
  return (
    <div className="blog-page-area pd-bottom-80 go-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 pd-top-50">
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
            <BlogPage />
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default postBlog;
