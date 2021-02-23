import React from 'react';
import { Link } from 'react-router-dom';


const SideBarCategory = (props) => {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
        <div className="col-lg-6 col-sm-6">
        <div className="single-category-inner">
          <img src={publicUrl + "assets/img/category/9.png"} alt="img" />
          <Link className="tag-base tag-blue" to="/cat-page">
            Tech
          </Link>
        </div>
      </div>
      
    )


}












export default SideBarCategory;