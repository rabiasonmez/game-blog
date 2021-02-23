import React from "react";

const AuthorArticleImg = (props) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="add-area mb-4">
      <a href="#">
        <img src={publicUrl + "assets/img/add/2.png"} alt="img" />
      </a>
    </div>
  );
};
export default AuthorArticleImg;
