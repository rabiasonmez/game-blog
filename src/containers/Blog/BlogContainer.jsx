import React from "react";
import BlogCrumb from "../../components/themeLayout/Breadcrumb";
import FullBlog from "../../components/blogLayout/postBlog/PostBlog";
function BlogContainer() {
  return (
    <div>
      <BlogCrumb />
      <FullBlog />
    </div>
  );
}

export default BlogContainer;
