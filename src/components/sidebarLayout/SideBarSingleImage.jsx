import React from 'react';
import { Link } from 'react-router-dom';


const SideBarSingleImage = (props) => {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
               
        <div className="widget widget-add">
          <div className="add">
            <img
              className="w-100"
              src={publicUrl + "assets/img/add/3.png"}
              alt="img"
            />
          </div>
        </div>
    )


}












export default SideBarSingleImage;