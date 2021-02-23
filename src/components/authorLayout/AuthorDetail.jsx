import React from "react";
import { Link } from "react-router-dom";
const AuthorDetail = (props) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="author-area style-two">
      <div className="media">
        <img src={publicUrl + "assets/img/author/4.png"} alt="img" />
        <div className="media-body align-self-center mt-4 mt-md-0">
          <h4 className="mb-0">Nadia M. Case</h4>
          <strong className="mb-3 d-block">www.website.com</strong>
          <p>
            No one rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that aextremely painful. Nor again
            is there anyone who loves
          </p>
          <ul className="social-area social-area-2 mt-4">
            <li>
              <Link className="facebook-icon" href="">
                <i className="fa fa-facebook" />
              </Link>
            </li>
            <li>
              <Link className="twitter-icon">
                <i className="fa fa-twitter" />
              </Link>
            </li>
            <li>
              <Link className="youtube-icon">
                <i className="fa fa-youtube-play" />
              </Link>
            </li>
            <li>
              <Link className="instagram-icon">
                <i className="fa fa-instagram" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetail;
