import React from "react";
import { Link } from "react-router-dom";
const PostBlogCard = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="single-blog-inner">
      <div className="thumb">
        <img src={publicUrl + "assets/img/blog/1.png"} alt="image" />
      </div>
      <div className="single-blog-details">
        <div className="meta">
          <span className="author">
            <i className="fa fa-user" />
            Nichel Jhon
          </span>
          <span className="date">
            <i className="fa fa-calendar" />
            25 Aug 2020
          </span>
          <span className="comments">
            <i className="fa fa-comments" />
            Comments (05)
          </span>
        </div>
        <h3>
          <Link to="/blog-details">
            Inspired Design Decisions With Herb Typography Can Be As Exciting As
            Illustration &amp; Photog
          </Link>
        </h3>
        <p>
          But must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itse
        </p>
        <Link className="btn btn-base" to="/blog-details">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default PostBlogCard;
