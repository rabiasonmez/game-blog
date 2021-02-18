import React from 'react';
import { Link } from 'react-router-dom';

const PostWrapper = (props) => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'
    return (
        <div className="single-post-list-wrap">
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

    );
}
export default PostWrapper;