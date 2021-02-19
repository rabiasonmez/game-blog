import React from "react";
import { Link } from "react-router-dom";

const widgetCategory = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";
  return (
    <div className="col-lg-3 col-sm-6 widget-category">
      <div className="section-title style-two mb-4">
        <h6 className="title">Category</h6>
      </div>
      <div className="row custom-gutters-14">
        <div className="col-sm-6">
          <div className="single-category-inner">
            <img src={publicUrl + "assets/img/category/9.png"} alt="img" />
            <Link className="tag-base tag-blue" to="/cat-page">
              Tech
            </Link>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="single-category-inner">
            <img src={publicUrl + "assets/img/category/10.png"} alt="img" />
            <Link className="tag-base tag-blue" to="/cat-page">
              Tech
            </Link>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="single-category-inner">
            <img src={publicUrl + "assets/img/category/11.png"} alt="img" />
            <Link className="tag-base tag-blue" to="/cat-page">
              Tech
            </Link>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="single-category-inner">
            <img src={publicUrl + "assets/img/category/12.png"} alt="img" />
            <Link className="tag-base tag-blue" to="/cat-page">
              Tech
            </Link>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="single-category-inner">
            <img src={publicUrl + "assets/img/category/13.png"} alt="img" />
            <Link className="tag-base tag-blue" to="/cat-page">
              Tech
            </Link>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="single-category-inner">
            <img src={publicUrl + "assets/img/category/14.png"} alt="img" />
            <Link className="tag-base tag-blue" to="/cat-page">
              Tech
            </Link>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="single-category-inner">
            <img src={publicUrl + "assets/img/category/15.png"} alt="img" />
            <Link className="tag-base tag-blue" to="/cat-page">
              Tech
            </Link>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="single-category-inner">
            <img src={publicUrl + "assets/img/category/16.png"} alt="img" />
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
  );
};

export default widgetCategory;
