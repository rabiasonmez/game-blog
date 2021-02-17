import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imgattr = 'logo'
    let anchor = '#'
    return (
        <div className="navbar-area navbar-area-2">
        {/* topbar end*/}
        <div className="topbar-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-7 align-self-center">
                <div className="topbar-menu text-md-left text-center">
                  <ul>
                    <li><Link to="/author">Author</Link></li>
                    <li><Link to="/cat-page">Tech News</Link></li>
                    <li><Link to="/cat-fashion">Fashion</Link></li>
                    <li><Link to="/cat-life-style">Life Style</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 text-md-right text-center">
                <div className="topbar-right">
                  <ul className="social-area">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-youtube-play" /></a></li>
                    <li><a href="#"><i className="fa fa-skype" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* topbar end*/}
        {/* navbar start */}
        <nav className="navbar navbar-expand-lg">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <div className="logo d-block mr-5">
                <Link className="main-logo" to="/"><img src={publicUrl+"assets/img/logo-2.png"} alt="img" /></Link>
              </div>
              <button className="menu toggle-btn d-block d-lg-none" data-target="#miralax_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <a className="search header-search" href="#"><i className="fa fa-search" /></a>
            </div>
            <div className="collapse navbar-collapse" id="miralax_main_menu">
              <ul className="navbar-nav menu-open">
                <li className="menu-item-has-children current-menu-item">
                  <a href="#">Home</a>
                  <ul className="sub-menu">
                     <li><Link to="/">Home 01</Link></li>
                      <li><Link to="/home-v2">Home 02</Link></li>
                      <li><Link to="/home-v3">Home 03</Link></li>
                  </ul>
                </li>
                  <li className="menu-item-has-children current-menu-item">
                      <Link to="/cat-page">Category</Link>
                      <ul className="sub-menu">
                        <li><Link to="/cat-page">Tech</Link></li>
                        <li><Link to="/cat-sports">Sports</Link></li>
                        <li><Link to="/cat-life-style">Lifestyle</Link></li>
                        <li><Link to="/cat-fashion">Fashion</Link></li>
                      </ul>
                  </li>
                <li className="menu-item-has-children current-menu-item">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li><Link to="/error">Error</Link></li>
                      <li><Link to="/author">Author</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/blog-details">Blog Details</Link></li>
                  </ul>
                </li>
                <li className="menu-item-has-children current-menu-item">
                  <Link to="/blog">Blog</Link>
                  <ul className="sub-menu">
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/blog-details">Blog Details</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <a className="search header-search" href="#"><i className="fa fa-search" /></a>
              <a className="ml-3" href="#"><i className="fa fa-list-ul" /></a>
            </div>
          </div>
        </nav>
      </div>
    )
}


export default Header