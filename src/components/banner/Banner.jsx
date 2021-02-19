import React from "react";
import { Link } from "react-router-dom";

const Banner = (props) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  return (
    <div className="post-area banner-post-area pt-4 pd-bottom-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="single-post-wrap style-overlay">
              <div className="thumb">
                <img src={publicUrl + "assets/img/post/24.png"} alt="img" />
                <Link className="tag-base tag-blue" to="/cat-page">
                  Tech
                </Link>
              </div>
              <div className="details">
                <div className="post-meta-single">
                  <p>
                    <i className="fa fa-clock-o" />
                    December 26, 2018
                  </p>
                </div>
                <h5 className="title">
                  <Link to="/blog-details">
                    IPL bubble: BT bands to enforce distancing, others’ rooms
                    out of bounds
                  </Link>
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <div className="single-post-wrap style-overlay">
                  <div className="thumb">
                    <img src={publicUrl + "assets/img/post/24.png"} alt="img" />
                  </div>
                  <div className="details">
                    <div className="post-meta-single">
                      <p>
                        <i className="fa fa-clock-o" />
                        December 26, 2018
                      </p>
                    </div>
                    <h6 className="title">
                      <Link to="/blog-details">
                        Lifting Weights Makes Your Nervous
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="single-post-wrap style-overlay">
                  <div className="thumb">
                    <img src={publicUrl + "assets/img/post/24.png"} alt="img" />
                  </div>
                  <div className="details">
                    <div className="post-meta-single">
                      <p>
                        <i className="fa fa-clock-o" />
                        December 26, 2018
                      </p>
                    </div>
                    <h6 className="title">
                      <Link to="/blog-details">
                        New, Remote Weight-Loss Method{" "}
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="section-title style-two mb-4">
              <h6 className="title">Latest News</h6>
            </div>
            <div className="single-post-list-wrap">
              <div className="media">
                <div className="media-left">
                  <img
                    src={publicUrl + "assets/img/post/list/1.png"}
                    alt="img"
                  />
                </div>
                <div className="media-body">
                  <div className="details">
                    <div className="post-meta-single">
                      <ul>
                        <li>
                          <i className="fa fa-clock-o" />
                          08.22.2020
                        </li>
                      </ul>
                    </div>
                    <h6 className="title">
                      <Link to="/blog-details">
                        Himachal Pradesh rules in order to allow tourists{" "}
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-post-list-wrap">
              <div className="media">
                <div className="media-left">
                  <img
                    src={publicUrl + "assets/img/post/list/2.png"}
                    alt="img"
                  />
                </div>
                <div className="media-body">
                  <div className="details">
                    <div className="post-meta-single">
                      <ul>
                        <li>
                          <i className="fa fa-clock-o" />
                          08.22.2020
                        </li>
                      </ul>
                    </div>
                    <h6 className="title">
                      <Link to="/blog-details">
                        Online registration, booking for Vaishno Devi{" "}
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-post-list-wrap">
              <div className="media">
                <div className="media-left">
                  <img
                    src={publicUrl + "assets/img/post/list/3.png"}
                    alt="img"
                  />
                </div>
                <div className="media-body">
                  <div className="details">
                    <div className="post-meta-single">
                      <ul>
                        <li>
                          <i className="fa fa-clock-o" />
                          08.22.2020
                        </li>
                      </ul>
                    </div>
                    <h6 className="title">
                      <Link to="/blog-details">
                        Detecting technologies in airports this year
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-post-list-wrap">
              <div className="media">
                <div className="media-left">
                  <img
                    src={publicUrl + "assets/img/post/list/4.png"}
                    alt="img"
                  />
                </div>
                <div className="media-body">
                  <div className="details">
                    <div className="post-meta-single">
                      <ul>
                        <li>
                          <i className="fa fa-clock-o" />
                          08.22.2020
                        </li>
                      </ul>
                    </div>
                    <h6 className="title">
                      <Link to="/blog-details">
                        The FAA will drone in airports this year
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-post-list-wrap">
              <div className="media">
                <div className="media-left">
                  <img
                    src={publicUrl + "assets/img/post/list/5.png"}
                    alt="img"
                  />
                </div>
                <div className="media-body">
                  <div className="details">
                    <div className="post-meta-single">
                      <ul>
                        <li>
                          <i className="fa fa-clock-o" />
                          08.22.2020
                        </li>
                      </ul>
                    </div>
                    <h6 className="title">
                      <Link to="/blog-details">
                        Thailand makes it mand-atory for tourists to stay
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-post-list-wrap">
              <div className="media">
                <div className="media-left">
                  <img
                    src={publicUrl + "assets/img/post/list/4.png"}
                    alt="img"
                  />
                </div>
                <div className="media-body">
                  <div className="details">
                    <div className="post-meta-single">
                      <ul>
                        <li>
                          <i className="fa fa-clock-o" />
                          08.22.2020
                        </li>
                      </ul>
                    </div>
                    <h6 className="title">
                      <Link to="/blog-details">
                        The FAA will drone in airports this year
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-post-list-wrap">
              <div className="media">
                <div className="media-left">
                  <img
                    src={publicUrl + "assets/img/post/list/5.png"}
                    alt="img"
                  />
                </div>
                <div className="media-body">
                  <div className="details">
                    <div className="post-meta-single">
                      <ul>
                        <li>
                          <i className="fa fa-clock-o" />
                          08.22.2020
                        </li>
                      </ul>
                    </div>
                    <h6 className="title">
                      <Link to="/blog-details">
                        Thailand makes it mand-atory for tourists to stay
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 widget-category">
            <div className="section-title style-two mb-4">
              <h6 className="title">Category</h6>
            </div>
            <div className="row custom-gutters-14">
              <div className="col-sm-6">
                <div className="single-category-inner">
                  <img
                    src={publicUrl + "assets/img/category/9.png"}
                    alt="img"
                  />
                  <Link className="tag-base tag-blue" to="/cat-page">
                    Tech
                  </Link>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-category-inner">
                  <img
                    src={publicUrl + "assets/img/category/10.png"}
                    alt="img"
                  />
                  <Link className="tag-base tag-blue" to="/cat-page">
                    Tech
                  </Link>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-category-inner">
                  <img
                    src={publicUrl + "assets/img/category/11.png"}
                    alt="img"
                  />
                  <Link className="tag-base tag-blue" to="/cat-page">
                    Tech
                  </Link>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-category-inner">
                  <img
                    src={publicUrl + "assets/img/category/12.png"}
                    alt="img"
                  />
                  <Link className="tag-base tag-blue" to="/cat-page">
                    Tech
                  </Link>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-category-inner">
                  <img
                    src={publicUrl + "assets/img/category/13.png"}
                    alt="img"
                  />
                  <Link className="tag-base tag-blue" to="/cat-page">
                    Tech
                  </Link>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-category-inner">
                  <img
                    src={publicUrl + "assets/img/category/14.png"}
                    alt="img"
                  />
                  <Link className="tag-base tag-blue" to="/cat-page">
                    Tech
                  </Link>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-category-inner">
                  <img
                    src={publicUrl + "assets/img/category/15.png"}
                    alt="img"
                  />
                  <Link className="tag-base tag-blue" to="/cat-page">
                    Tech
                  </Link>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-category-inner">
                  <img
                    src={publicUrl + "assets/img/category/16.png"}
                    alt="img"
                  />
                  <Link className="tag-base tag-blue" to="/cat-page">
                    Tech
                  </Link>
                </div>
              </div>
              <div className="col-12">
                <div className="add">
                  <img
                    className="w-100"
                    src={publicUrl + "assets/img/add/3.png"}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
