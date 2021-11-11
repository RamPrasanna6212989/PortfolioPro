/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typical from "react-typical"
import ScrollService from "../../../utilites/ScrollService";
import './Profile.css';

export default function Profile() {
    return (
        <div className="profile-container">
            <div class className="profile-parent">
                <div className = "profile-details">
                    <div className="colz">
                        <div className="colz-icon">   
                         <a href="#">
                             <i class="fa fa-facebook-square"></i>
                         </a>
                          <a href="#">
                             <i class="fa fa-google-plus-square"></i>
                         </a>
                         <a href="#">
                             <i class="fa fa-instagram-square"></i>
                         </a>
                         <a href="#">
                             <i class="fa fa-youtube-square"></i>
                         </a>
                         <a href="#">
                             <i class="fa fa-twitter-square"></i>
                         </a> 
                        </div>
                    </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hare Krishna, I'M <span className="highlighted-text">Ram</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            <Typical loop={Infinity} steps={[
                                "Full Stack Web Developer 💻",
                                5000,
                                "Python Programmer📱💻",
                                5000,
                                "Android App Developer 📱",
                                5000,
                            ]}/>
                        </h1>
                        <span className="profile-role-tagline">
                            Software Developer - Hare Krishna Movement
                        </span>
                    </span>
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn" onClick={()=>ScrollService.scrollHandler.scrollToHireMe()}>
                        {""}
                        Hire Me{""}
                    </button>
                    <a href="RAMCV.pdf" download="RAMCV.pdf">
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">

                </div>
            </div>
        </div>
        </div>
    )
}
