import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../blogLayout/blogSidebar/SideBar';
import PostCommentForm from './PostCommentForm';
import PostComment from './PostComment';
;
const PostDetail = () => {
 
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
		
     	<div className="blog-page-area pd-bottom-80 go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-9 pd-top-50">
		        <div className="blog-details-page-inner">
		          <div className="single-blog-inner m-0">
		            <div className="single-post-wrap style-overlay">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/blog/4.png" }alt="img" />
		              </div>
		              <div className="details pb-4">
		                <div className="post-meta-single mb-2">
		                  <ul>
		                    <li><a className="tag-base tag-blue" href="#">Tech</a></li>
		                    <li><p><i className="fa fa-clock-o" />08.22.2020</p></li>
		                    <li><i className="fa fa-user" />R. Lambert</li>
		                  </ul>
		                </div>
		                <h5 className="title mt-0">Uttarakhand’s Hemkund Sahib yatra to start from</h5>
		              </div>
		            </div>
		            <div className="single-blog-details">
		              <p>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut unde omnis iste natus error sit voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt Neque por quisquam est</p>
		              <blockquote className="blockquote">
		                <i className="fa fa-quote-right" />
		                <p>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo. Duis aute irure dolor in in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non </p>
		              </blockquote>
		            </div>
		            <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
		            <div className="add-area">
		              <a href="#"><img src={publicUrl+"assets/img/add/2.png"} alt="img" /></a>
		            </div>
		            <h5>Expression in New Human Rights Policy</h5>
		            <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
		            <div className="row">
		              <div className="col-sm-6">
		                <div className="thumb mb-3 mb-sm-0">
		                  <img src={publicUrl+"assets/img/blog/5.png"} alt="img" />
		                </div>
		              </div>
		              <div className="col-sm-6">
		                <img src={publicUrl+"assets/img/blog/6.png"} alt="img" />
		              </div>
		            </div>
		            <div className="video-area">
		              <h5>Expression in New Human Rights Policy</h5>
		              <div className="single-blog-inner mb-4">
		                <div className="thumb">
		                  <img src={publicUrl+"assets/img/blog/7.png"} alt="image" />
		                  <a className="video-play-btn" href="https://www.youtube.com/embed/Wimkqo8gDZ0" data-effect="mfp-zoom-in"><i className="fa fa-play" /></a>
		                </div>
		              </div>
		            </div>
		            <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>  
		            <div className="meta">
		              <div className="row">
		                <div className="col-lg-5">
		                  <div className="tags">
		                    <span>Tags:</span>
		                    <a href="#">News,</a>
		                    <a href="#">Blog,</a>
		                    <a href="#">Magazine</a>
		                  </div>
		                </div>
		                <div className="col-lg-7 text-md-right">
		                  <div className="blog-share">
		                    <span>Share:</span>
		                    <ul className="social-area social-area-2 d-inline">
		                      <li><a className="facebook-icon" href="#"><i className="fa fa-facebook" /></a></li>
		                      <li><a className="twitter-icon" href="#"><i className="fa fa-twitter" /></a></li>
		                      <li><a className="youtube-icon" href="#"><i className="fa fa-youtube-play" /></a></li>
		                      <li><a className="instagram-icon" href="#"><i className="fa fa-instagram" /></a></li>
		                      <li><a className="google-icon" href="#"><i className="fa fa-google-plus" /></a></li>
		                    </ul>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="author-area">
		              <div className="media">
		                <img src={publicUrl+"assets/img/author/1.png"} alt="img" />
		                <div className="media-body align-self-center">
		                  <h4>Nathan George</h4>
		                  <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that aextremely painful. Nor again is there anyone who loves</p>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="related-post">
		            <div className="section-title mb-0">
		              <h5 className="mb-0">Related Post</h5>
		            </div>
		            <div className="row justify-content-center">
		              <div className="col-lg-4 col-md-6">
		                <div className="single-post-wrap">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/post/19.png"} alt="img" />
		                    <Link className="tag-base tag-red" to="/cat-page">Tech</Link>
		                  </div>
		                  <div className="details">
		                    <div className="post-meta-single">
		                      <ul>
		                        <li><i className="fa fa-clock-o" />08.22.2020</li>
		                        <li><i className="fa fa-user" />08.22.2020</li>
		                      </ul>
		                    </div>
		                    <h6 className="title mt-2"><a href="#">Lifting Weights Makes Your Nervous</a></h6>
		                  </div>
		                </div>
		              </div>
		              <div className="col-lg-4 col-md-6">
		                <div className="single-post-wrap">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/post/20.png"} alt="img" />
		                    <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
		                  </div>
		                  <div className="details">
		                    <div className="post-meta-single">
		                      <ul>
		                        <li><i className="fa fa-clock-o" />08.22.2020</li>
		                        <li><i className="fa fa-user" />08.22.2020</li>
		                      </ul>
		                    </div>
		                    <h6 className="title mt-2"><a href="#">New, Remote Weight-Loss Method </a></h6>
		                  </div>
		                </div>
		              </div>
		              <div className="col-lg-4 col-md-6">
		                <div className="single-post-wrap">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/post/21.png"} alt="img" />
		                    <Link className="tag-base tag-light-green" to="/cat-page">Tech</Link>
		                  </div>
		                  <div className="details">
		                    <div className="post-meta-single">
		                      <ul>
		                        <li><i className="fa fa-clock-o" />08.22.2020</li>
		                        <li><i className="fa fa-user" />08.22.2020</li>
		                      </ul>
		                    </div>
		                    <h6 className="title mt-2"><a href="#">Social Connection Boosts Fitness App </a></h6>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
                     <PostComment/>
                     <PostCommentForm/>
                </div>
		      </div>
              <div className="col-lg-3 pd-top-50 go-top">
		     <SideBar/>
             </div>
		    </div>
		  </div>
		</div>

    )
 
}

export default PostDetail;
