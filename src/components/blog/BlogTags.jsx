import React from "react";
import { Link } from "react-router-dom";

const BlogTags = (props) => {
    const { data, className } = props;
    return (
        <div className={className}>
            <div className="tags">
                <span>Tags:</span>
                {data.category.map(item => (
                    <Link to={item.slug}>{item.name}</Link>
                ))}
            </div>
        </div>

    );
}
export default BlogTags;