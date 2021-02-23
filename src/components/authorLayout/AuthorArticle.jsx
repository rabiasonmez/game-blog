import React from "react";
import AuthorDetailCard from "./AuthorArticleDetail/AuthorArticleDetailCard";
import BigImg from "./AuthorArticleDetail/AuthorArticleBigImg";
import ArticleCard from "./AuthorArticleDetail/AuthorArticleCard";
const AuthorArticle = (props) => {
  return (
    <div>
      <div className="section-title pd-top-80">
        <h6 className="title">Articles By This Author</h6>
      </div>
      <AuthorDetailCard />
      <AuthorDetailCard />
      <AuthorDetailCard />

      <BigImg />
      <div className="row pt-2">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>

      <AuthorDetailCard />
      <AuthorDetailCard />
      <AuthorDetailCard />
    </div>
  );
};

export default AuthorArticle;
