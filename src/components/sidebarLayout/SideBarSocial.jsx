import React from 'react';
import { Link } from 'react-router-dom';


const SideBarSocial = (props) => {
  
    
    return (
    
        <div className="widget widget-social">
          <h6 className="widget-title">Join to Us</h6>
          <ul className="social-area social-area-2">
            <li>
              <a className="facebook-icon" href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a className="twitter-icon" href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a className="youtube-icon" href="#">
                <i className="fa fa-youtube-play" />
              </a>
            </li>
            <li>
              <a className="instagram-icon" href="#">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a className="google-icon" href="#">
                <i className="fa fa-google-plus" />
              </a>
            </li>
          </ul>
        </div>
     
      
    )


}












export default SideBarSocial;