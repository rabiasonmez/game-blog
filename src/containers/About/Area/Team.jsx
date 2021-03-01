import React from 'react'
import { IMG_URL } from '../../../data/apiUrl'

const Team = (props) => {
    return (
        <div className={"mb-5"} >
            <h2>Team</h2>
            <div className={"row"}>
                <div className={"col-md-4"}>
                    <div class="author-area style-two  mb-5">
                        <img src={IMG_URL + "assets/img/team/rabia.jpg"} alt="img" />
                        <div class="align-self-center mt-4 mt-md-0">
                            <h4 class="mb-0 mt-4">Rabia Sönmez Sinav</h4>
                            <a class="tag-base tag-blue text-light mt-3 mb-3">Front-End Developer</a>
                            <strong class="mb-3 d-block">rabiasonmz@gmail.com</strong>
                            <p>
                                I am an engineer from Çukurova University computer engineering and I develop myself in the front end area. <br />My dream is to develop my own product protocol and offer it for sale.</p>
                            <ul class="social-area social-area-2 mt-4">
                                <li><a class="twitter-icon" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="linkedin-icon" href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a class="github-icon" href="#"><i class="fa fa-github"></i></a></li><li>
                                    <a class="youtube-icon" href="#"><i class="fa fa-youtube"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"col-md-4"}><div class="author-area style-two mb-5">
                    <img src={IMG_URL + "assets/img/team/emin.jpg"} alt="img" />
                    <div class="align-self-center mt-4 mt-md-0">
                        <h4 class="mb-0 mt-4">Emin Başbayan</h4>
                        <a class="tag-base tag-blue text-light mt-3 mb-3">Front-End Developer</a>
                        <strong class="mb-3 d-block">basbayanemin@gmail.com</strong>
                        <p>I am dealing with the Web Development area. At the same time, I produce content related to software on YouTube. My dream is to become a software instructor.</p>
                        <ul class="social-area social-area-2 mt-4">
                            <li><a class="twitter-icon" href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a class="linkedin-icon" href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a class="github-icon" href="#"><i class="fa fa-github"></i></a></li><li>
                                <a class="youtube-icon" href="#"><i class="fa fa-youtube"></i></a>
                            </li>
                        </ul>
                    </div>
                </div></div>
                <div className={"col-md-4"}>
                    <div class="author-area style-two mb-5">
                        <img src={IMG_URL + "assets/img/team/cagri.jpg"} alt="img" />
                        <div class="align-self-center mt-4 mt-md-0">
                            <h4 class="mb-0 mt-4">Hanifi Çağrı Demirtaş</h4>
                            <a class="tag-base tag-blue text-light mt-3 mb-3">Full Stack Developer</a>
                            <strong class="mb-3 d-block">cagridemirtash@gmail.com</strong>
                            <p>I am Cagri Demirtas. I am interested in frontend and backend development. I want to create huge community for create new technologies. I am also interested in create start-up.</p>
                            <ul class="social-area social-area-2 mt-4">
                                <li><a class="twitter-icon" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="linkedin-icon" href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a class="github-icon" href="#"><i class="fa fa-github"></i></a></li><li>
                                    <a class="youtube-icon" href="#"><i class="fa fa-youtube"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Team;