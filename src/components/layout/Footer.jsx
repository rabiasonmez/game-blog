import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {

    useEffect(() => {
        const $ = window.$;
        let publicUrl = process.env.PUBLIC_URL + '/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#td-search-popup');

        $(document).on('click', '#body-overlay', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '.search', function (e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });
    }, [])




    let publicUrl = process.env.PUBLIC_URL + '/'
    let imgattr = "Footer logo"

    return (
        <div className="footer-area bg-black pd-top-95">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="widget">
                            <h5 className="widget-title">ABOUT US</h5>
                            <div className="widget_about">
                                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <ul className="social-area social-area-2 mt-4">
                                    <li><a className="facebook-icon" href="https://www.facebook.com/"><i className="fa fa-facebook" /></a></li>
                                    <li><a className="twitter-icon" href="https://www.twitter.com/"><i className="fa fa-twitter" /></a></li>
                                    <li><a className="youtube-icon" href="https://www.youtube.com/"><i className="fa fa-youtube-play" /></a></li>
                                    <li><a className="instagram-icon" href="https://www.instagram.com/"><i className="fa fa-instagram" /></a></li>
                                    <li><a className="google-icon" href="https://www.google.com/"><i className="fa fa-google-plus" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="widget widget_tag_cloud">
                            <h5 className="widget-title">TAGS</h5>
                            <div className="tagcloud go-top">
                                <Link to="/cat-page">Consectetur</Link>
                                <Link to="/cat-page">Video</Link>
                                <Link to="/cat-page">App</Link>
                                <Link to="/cat-page">Food</Link>
                                <Link to="/cat-page">Game</Link>
                                <Link to="/cat-page">Internet</Link>
                                <Link to="/cat-page">Phones</Link>
                                <Link to="/cat-page">Development</Link>
                                <Link to="/cat-page">Video</Link>
                                <Link to="/cat-page">Game</Link>
                                <Link to="/cat-page">Gadgets</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="widget">
                            <h5 className="widget-title">CONTACTS</h5>
                            <ul className="contact_info_list">
                                <li><i className="fa fa-map-marker" /> 829 Cabell Avenue Arlington, VA 22202</li>
                                <li><i className="fa fa-phone" /> +088 012121240</li>
                                <li><i className="fa fa-envelope-o" /> Info@website.com <br /> Support@mail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 go-top">
                        <div className="widget widget_recent_post">
                            <h5 className="widget-title">POPULAR NEWS</h5>
                            <div className="single-post-list-wrap style-white">
                                <div className="media">
                                    <div className="media-left">
                                        <img src={publicUrl + "assets/img/post/list/1.png"} alt="img" />
                                    </div>
                                    <div className="media-body">
                                        <div className="details">
                                            <div className="post-meta-single">
                                                <ul>
                                                    <li><i className="fa fa-clock-o" />08.22.2020</li>
                                                </ul>
                                            </div>
                                            <h6 className="title"><Link to="/blog-details">Himachal Pradesh rules in order to allow tourists </Link></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-post-list-wrap style-white">
                                <div className="media">
                                    <div className="media-left">
                                        <img src={publicUrl + "assets/img/post/list/2.png"} alt="img" />
                                    </div>
                                    <div className="media-body">
                                        <div className="details">
                                            <div className="post-meta-single">
                                                <ul>
                                                    <li><i className="fa fa-clock-o" />08.22.2020</li>
                                                </ul>
                                            </div>
                                            <h6 className="title"><Link to="/blog-details">Himachal Pradesh rules in order to allow tourists </Link></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    <ul className="widget_nav_menu go-top">
                        <li><Link to="/autho">Author</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/cat-page">Tech News</Link></li>
                        <li><Link to="/cat-fashion">Fashion</Link></li>
                    </ul>
                    <p>Copyright ©2020 GameBlog</p>
                </div>
            </div>
        </div>

    )
}


export default Footer;
