import React from 'react';
import { Link } from 'react-router-dom';


const SideBarCategory2 = (props) => {
let publicUrl = process.env.PUBLIC_URL + "/";

    return (
    
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
    
    
    )


}












export default SideBarCategory2;