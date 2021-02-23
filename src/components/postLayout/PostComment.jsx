import React from 'react';



const PostComment = (props) => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'


    return (   
        <div className="blog-comment">
        <div className="section-title">
          <h4>3 Comments</h4>
        </div>
        <div className="media">
          <a href="#">
            <img src={publicUrl+"assets/img/author/2.png"} alt="comment" />
          </a>
          <div className="media-body">
            <h5><a href="#">John F. Medina</a></h5>
            <span className="date">25 July 2020</span>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pawas born and I will give you a complete account</p>
            <a href="#">Reply <i className="la la-arrow-right" /></a>
          </div>
        </div>
      </div>
    )






}














export default PostComment; 