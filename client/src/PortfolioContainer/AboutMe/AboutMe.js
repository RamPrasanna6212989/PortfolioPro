/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import ScreenHeading from "../../utilites/ScreenHeading/ScreenHeading";
import "./AboutMe.css";
import ScrollService from "../../utilites/ScrollService";
import Animations from "../../utilites/Animations";
export default function AboutMe(props) {
  let fadeInScreenHalder = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHalder);
    const SCREEN_CONSTRAINS = {
        description: "Hare Krishna, I am Ram and I am a software developer at Hare Krishna Movement Hyderabad. I have been creating websites for THE HARE KRISHNA GOLDEN TEMPLE HYDERABAD. I had developed 4 websites with Python Django Framework and I had converted them to Android and IOS apps. I have also Used the Python Kivy Framework to develope A music App for HKM.The App has more than 1000 subscribers on the Playstore.",
        highlights: {
            bullets: [
                "Full Stack web and mobile development",
                "Managing databases",
                "React.js",
                "Python",
                "Java Script",
                "Node.js",
                "Express.js",
                'Server Management'
            ],
            heading: "Here are Few Highlights",
        }
    }
    const renderHighlight = ()=>{
        return(
            SCREEN_CONSTRAINS.highlights.bullets.map((value, i)=>(
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
            <div className='about-me-profile'></div>
            <div className="about-me-details">
                <span className='about-me-description'>{SCREEN_CONSTRAINS.description}</span>
                <div className="about-me-highlights">
                    <div className="highlight-heading">
                        <span>{SCREEN_CONSTRAINS.highlights.heading}</span>
                    </div>
                    {renderHighlight()}
                </div>
                <div className="about-me-options">
                    <button className="btn primary-btn" onClick={()=>ScrollService.scrollHandler.scrollToHireMe()}>Hire Me</button>
                    <a href="RAMCV.pdf" download="RAMCV.pdf">
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
