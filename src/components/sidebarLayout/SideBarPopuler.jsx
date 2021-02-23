import React from 'react';
import { Link } from 'react-router-dom';



const SideBarPopuler = (props) =>{
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
         
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
     

    )


}










export default SideBarPopuler;