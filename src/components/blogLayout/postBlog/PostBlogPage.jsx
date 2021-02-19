import React from "react";

const PostBlogPage = () => {
  return (
    <nav className="mt-4">
      <ul className="pagination">
        <li className="page-item prev">
          <a className="page-link" href="#">
            <i className="fa fa-angle-left" />
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            4
          </a>
        </li>
        <li className="page-item next">
          <a className="page-link" href="#">
            <i className="fa fa-angle-right" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PostBlogPage;
