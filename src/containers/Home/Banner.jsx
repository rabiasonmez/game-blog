import React from 'react';
import { Link } from 'react-router-dom';
import PostWrapper from '../../components/postLayout/PostWrapper';
import PostListWrapper from '../../components/postLayout/PostListWrapper';

const Banner = (props) => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return (
        <div className="post-area banner-post-area pt-4 pd-bottom-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <PostWrapper className="col-lg-12 col-sm-12" />
                        </div>
                        <div className={"row"}>
                            <PostWrapper className="col-lg-6 col-sm-6" />
                            <PostWrapper className="col-lg-6 col-sm-6" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="section-title style-two mb-4">
                            <h6 className="title">Latest News</h6>
                        </div>
                        <PostListWrapper />
                        <PostListWrapper />
                        <PostListWrapper />
                        <PostListWrapper />
                        <PostListWrapper />
                    </div>
                    <div className="col-lg-3 col-sm-6 widget-category">
                        <div className="section-title style-two mb-4">
                            <h6 className="title">Category</h6>
                        </div>
                        <div className="row custom-gutters-14">
                            <div className="col-sm-6">
                                <div className="single-category-inner">
                                    <img src={publicUrl + "assets/img/category/9.png"} alt="img" />
                                    <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="single-category-inner">
                                    <img src={publicUrl + "assets/img/category/10.png"} alt="img" />
                                    <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="single-category-inner">
                                    <img src={publicUrl + "assets/img/category/11.png"} alt="img" />
                                    <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="single-category-inner">
                                    <img src={publicUrl + "assets/img/category/12.png"} alt="img" />
                                    <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="single-category-inner">
                                    <img src={publicUrl + "assets/img/category/13.png"} alt="img" />
                                    <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="single-category-inner">
                                    <img src={publicUrl + "assets/img/category/14.png"} alt="img" />
                                    <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="single-category-inner">
                                    <img src={publicUrl + "assets/img/category/15.png"} alt="img" />
                                    <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="single-category-inner">
                                    <img src={publicUrl + "assets/img/category/16.png"} alt="img" />
                                    <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="add">
                                    <img className="w-100" src={publicUrl + "assets/img/add/3.png"} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banner;