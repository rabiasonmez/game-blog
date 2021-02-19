import React from "react";
import { Link } from "react-router-dom";
import PostWrapper from "../../components/postLayout/PostWrapper";
import PostListWrapper from "../../components/postLayout/PostListWrapper";
import CategoryWidget from "../../components/categoryLayout/widgetCategory";

const Banner = (props) => {
  return (
    <div className="post-area banner-post-area pt-4 pd-bottom-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <PostWrapper className="col-lg-12 col-sm-12" />
            </div>
            <div className={"row"}>
              <PostWrapper className="col-lg-6 col-sm-6" />
              <PostWrapper className="col-lg-6 col-sm-6" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="section-title style-two mb-4">
              <h6 className="title">Latest News</h6>
            </div>
            <PostListWrapper />
            <PostListWrapper />
            <PostListWrapper />
            <PostListWrapper />
            <PostListWrapper />
          </div>
          <CategoryWidget />
        </div>
      </div>
    </div>
  );
};

export default Banner;
