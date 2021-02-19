import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = (props) => {

  let publicUrl = process.env.PUBLIC_URL + '/'
  let imagealt = 'image'


  return (

    <div className={props.className ? props.className : "col-lg-4 col-md-6"}>
      <div className="single-post-wrap style-box">
        <div className="thumb">
          <img src={publicUrl + "assets/img/sports/1.png"} alt="img" />
        </div>
        <div className="details">
          <div className="post-meta-single mb-4 pt-1">
            <ul>
              <li><Link className="tag-base tag-light-blue" to="/cat-page">Tech</Link></li>
              <li><i className="fa fa-user" />John R.bert</li>
            </ul>
          </div>
          <h6 className="title"><Link to="/blog-details">Night-time co recording app predicts asthma.</Link></h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipi elit</p>
          <Link className="btn btn-base mt-4" to="/blog-details">Read more</Link>
        </div>
      </div>
    </div>

  )
}

export default CategoryCard;

