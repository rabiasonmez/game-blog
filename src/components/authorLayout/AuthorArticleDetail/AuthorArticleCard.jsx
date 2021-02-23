import React from "react";
import { Link } from "react-router-dom";
const AuthorArticleCard = (props) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-post-wrap">
        <div className="thumb">
          <img src={publicUrl + "assets/img/post/19.png"} alt="img" />
          <Link className="tag-base tag-red" to="/cat-page">
            Tech
          </Link>
        </div>
        <div className="details">
          <div className="post-meta-single">
            <ul>
              <li>
                <i className="fa fa-clock-o" />
                08.22.2020
              </li>
              <li>
                <i className="fa fa-user" />
                08.22.2020
              </li>
            </ul>
          </div>
          <h6 className="title mt-2">
            <Link to="/blog-details">Lifting Weights Makes Your Nervous</Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default AuthorArticleCard;
