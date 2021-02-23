import React from "react";
import { Link } from "react-router-dom";
const AuthorArticleDetailCard = (props) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="single-post-list-wrap style-two text-left">
      <div className="media">
        <div className="media-left">
          <img src={publicUrl + "assets/img/post/41.png"} alt="img" />
        </div>
        <div className="media-body align-self-center">
          <div className="details">
            <div className="post-meta-single">
              <ul>
                <li>
                  <Link to="/cat-page" className="tag-base tag-blue">
                    Movies
                  </Link>
                </li>
              </ul>
            </div>
            <h6 className="title mt-2">
              Here’s our take on the latest technology{" "}
            </h6>
            <div className="post-meta-single pt-2 pb-2">
              <ul>
                <li>by IJM NH </li>
                <li>june 25,2020</li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
              consectetur adipisicing elit Lorem ipsum dolor sit coLorem ipsum
              dolor sit amet, consectetur adipisicing elit eiusmod tempor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorArticleDetailCard;
