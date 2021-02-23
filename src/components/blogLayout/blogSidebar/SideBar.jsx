import React from "react";
import { Link } from "react-router-dom";
import SideBarCategory2 from "../../sidebarLayout/SideBarCategory2";
import SideBarPopuler from "../../sidebarLayout/SideBarPopuler";
import SideBarSingleImage from "../../sidebarLayout/SideBarSingleImage";
import SideBarSocial from "../../sidebarLayout/SideBarSocial";
import SideBarCategory from "../../sidebarLayout/SiderBarCategory";

const SideBar = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
      <div className="category-sitebar">
        <div className="widget widget-category">
          <h6 className="widget-title">Category</h6>
          <div className="row custom-gutters-14">
            <SideBarCategory/>
            <SideBarCategory/>
            <SideBarCategory/>
            <SideBarCategory/>
            <SideBarCategory/>
            <SideBarCategory/>
            <SideBarCategory/>
            <SideBarCategory/>
          </div>
        </div>
    
      <SideBarSingleImage/>
      <SideBarSocial/>
      <SideBarCategory2/>
      <SideBarPopuler/>
      </div>
  );
};

export default SideBar;
