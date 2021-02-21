import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
      <div className="category-sitebar">
        <div className="widget widget-category">
          <h6 className="widget-title">Category</h6>
          <div className="row custom-gutters-14">
            <div className="col-lg-6 col-sm-6">
              <div className="single-category-inner">
                <img src={publicUrl + "assets/img/category/9.png"} alt="img" />
                <Link className="tag-base tag-blue" to="/cat-page">
                  Tech
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="single-category-inner">
                <img src={publicUrl + "assets/img/category/10.png"} alt="img" />
                <Link className="tag-base tag-blue" to="/cat-page">
                  Tech
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="single-category-inner">
                <img src={publicUrl + "assets/img/category/11.png"} alt="img" />
                <Link className="tag-base tag-blue" to="/cat-page">
                  Tech
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="single-category-inner">
                <img src={publicUrl + "assets/img/category/12.png"} alt="img" />
                <Link className="tag-base tag-blue" to="/cat-page">
                  Tech
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="single-category-inner">
                <img src={publicUrl + "assets/img/category/13.png"} alt="img" />
                <Link className="tag-base tag-blue" to="/cat-page">
                  Tech
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="single-category-inner">
                <img src={publicUrl + "assets/img/category/14.png"} alt="img" />
                <Link className="tag-base tag-blue" to="/cat-page">
                  Tech
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="single-category-inner">
                <img src={publicUrl + "assets/img/category/15.png"} alt="img" />
                <Link className="tag-base tag-blue" to="/cat-page">
                  Tech
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="single-category-inner">
                <img src={publicUrl + "assets/img/category/16.png"} alt="img" />
                <Link className="tag-base tag-blue" to="/cat-page">
                  Tech
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="widget widget-add">
          <div className="add">
            <img
              className="w-100"
              src={publicUrl + "assets/img/add/3.png"}
              alt="img"
            />
          </div>
        </div>
        <div className="widget widget-social">
          <h6 className="widget-title">Join to Us</h6>
          <ul className="social-area social-area-2">
            <li>
              <a className="facebook-icon" href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a className="twitter-icon" href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a className="youtube-icon" href="#">
                <i className="fa fa-youtube-play" />
              </a>
            </li>
            <li>
              <a className="instagram-icon" href="#">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a className="google-icon" href="#">
                <i className="fa fa-google-plus" />
              </a>
            </li>
          </ul>
        </div>
        <div className="widget">
          <h6 className="widget-title">Category</h6>
          <div className="post-slider owl-carousel">
            <div className="item">
              <div className="trending-post">
                <div className="single-post-wrap style-overlay">
                  <div className="thumb">
                    <img src={publicUrl + "assets/img/post/5.png"} alt="img" />
                  </div>
                  <div className="details">
                    <div className="post-meta-single">
                      <p>
                        <i className="fa fa-clock-o" />
                        December 26, 2018
                      </p>
                    </div>
                    <h6 className="title">
                      <Link to="/blog-details">The FAA will test drone </Link>
                    </h6>
                  </div>
                </div>
                <div className="single-post-wrap style-overlay">
                  <div className="thumb">
                    <img src={publicUrl + "assets/img/post/6.png"} alt="img" />
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
                        Flight schedule and quarantine
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="single-post-wrap style-overlay mb-0">
                  <div className="thumb">
                    <img src={publicUrl + "assets/img/post/7.png"} alt="img" />
                  </div>
                  <div className="details">
                    <div className="post-meta-single">
                      <p>
                        <i className="fa fa-clock-o" />
                        December 26, 2018
                      </p>
                    </div>
                    <h6 className="title">
                      <Link to="/blog-details">Indore bags cleanest city</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="trending-post">
                <div className="single-post-wrap style-overlay">
                  <div className="thumb">
                    <img src={publicUrl + "assets/img/post/5.png"} alt="img" />
                  </div>
                  <div className="details">
                    <div className="post-meta-single">
                      <p>
                        <i className="fa fa-clock-o" />
                        December 26, 2018
                      </p>
                    </div>
                    <h6 className="title">
                      <Link to="/blog-details">The FAA will test drone </Link>
                    </h6>
                  </div>
                </div>
                <div className="single-post-wrap style-overlay">
                  <div className="thumb">
                    <img src={publicUrl + "assets/img/post/6.png"} alt="img" />
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
                        Flight schedule and quarantine
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="single-post-wrap style-overlay mb-0">
                  <div className="thumb">
                    <img src={publicUrl + "assets/img/post/7.png"} alt="img" />
                  </div>
                  <div className="details">
                    <div className="post-meta-single">
                      <p>
                        <i className="fa fa-clock-o" />
                        December 26, 2018
                      </p>
                    </div>
                    <h6 className="title">
                      <Link to="/blog-details">Indore bags cleanest city</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget">
          <div className="nxp-tab-inner nxp-tab-post-two mb-4">
            <ul className="nav nav-tabs" id="nx1" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="nx1-tab-1"
                  data-toggle="pill"
                  href="#nx1-tabs-1"
                  role="tab"
                  aria-selected="true"
                >
                  Recent
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="nx1-tab-2"
                  data-toggle="pill"
                  href="#nx1-tabs-2"
                  role="tab"
                  aria-selected="false"
                >
                  Populer
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="nx1-tab-3"
                  data-toggle="pill"
                  href="#nx1-tabs-3"
                  role="tab"
                  aria-selected="false"
                >
                  Comment
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="nx1-content">
            <div
              className="tab-pane fade show active"
              id="nx1-tabs-1"
              role="tabpanel"
            >
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
              <div className="single-post-list-wrap mb-0">
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
            </div>
            <div className="tab-pane fade" id="nx1-tabs-2" role="tabpanel">
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
              <div className="single-post-list-wrap mb-0">
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
            </div>
            <div className="tab-pane fade" id="nx1-tabs-3" role="tabpanel">
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
              <div className="single-post-list-wrap mb-0">
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
            </div>
          </div>
        </div>
        <div className="widget">
        </div>
      </div>
  );
};

export default SideBar;
