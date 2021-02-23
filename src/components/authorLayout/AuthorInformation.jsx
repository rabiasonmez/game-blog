import React from "react";
import AuthorDetail from "./AuthorDetail";
import AuthorArticle from "./AuthorArticle";
import Column from "../themeLayout/ColumnLayout";
import Container from "../themeLayout/ContainerLayout";
import Sidebar from "../blogLayout/blogSidebar/SideBar";
const AuthorInformation = (props) => {
  return (
    <div>
      <div className="blog-page-area pd-bottom-80 go-top">
        <Container>
          <Column className="col-lg-9 pd-top-50">
            <AuthorDetail />
            <AuthorArticle />
          </Column>
          <Column className="col-lg-3 pd-top-50 go-top">
            <Sidebar />
          </Column>
        </Container>
      </div>
    </div>
  );
};

export default AuthorInformation;
