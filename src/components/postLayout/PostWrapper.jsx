import React from 'react';
import { Link } from 'react-router-dom';

const PostWrapper = (props) => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'
    return (
        <div className={props.className}>
            <div className="single-post-wrap style-overlay">
                <div className="thumb">
                    <img src={publicUrl + "assets/img/post/24.png"} alt="img" />
                    {!props.className.includes("-6") && <Link className="tag-base tag-blue" to="/cat-page">Tech</Link>}
                </div>
                <div className="details">
                    <div className="post-meta-single">
                        <p><i className="fa fa-clock-o" />December 26, 2018</p>
                    </div>
                    {(props.className.includes("-6")) ?
                        (<h6 className="title"><Link to="/blog-details">IPL bubble: BT bands to enforce distancing, others’ rooms out of bounds</Link></h6>)
                        :
                        (<h5 className="title"><Link to="/blog-details">IPL bubble: BT bands to enforce distancing, others’ rooms out of bounds</Link></h5>)
                    }</div>
            </div>
        </div>
    );
}
export default PostWrapper;