/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ScreenHeading from "../../utilites/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilites/ScrollService";
import Animations from "../../utilites/Animations";
import './Resume.css'

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
  let fadeInScreenHadlder = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHadlder);
  const ResumeHeading = (props) => (
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
  );
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
  const programingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "REACT", ratingPercentage: 0 },
    { skill: "NODE", ratingPercentage: 50 },
    { skill: "EXPRESS", ratingPercentage: 70 },
    { skill: "HTML/CSS", ratingPercentage: 90 },
    { skill: "Typecript", ratingPercentage: 100 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "Dart & Flutter", ratingPercentage: 5 },
    { skill: "MYSQL", ratingPercentage: 75 },
    { skill: "SQLITE", ratingPercentage: 75 },
    { skill: "FIREBASE", ratingPercentage: 75 },
    { skill: "MONGODB", ratingPercentage: 100 },
  ];
  const projectDetails = [
    {
      title: "ISKCON Kirtans",
      duration: {
        fromDate: "2018",
        toDate: "2019",
      },
      description:
        "This App I made for Hare Krishna Movement with all Srila Prabhupada's and Vishnavas Kirtans and Bhajans.",
      subHeading: "Technologies Used: KIVY, KIVYMD, PYJINIUS",
    },
    {
      title: "HKM BOOKS",
      duration: {
        fromDate: "2021",
        toDate: "2022",
      },
      description:
        "This App I made for Hare Krishna Movement for the Book Distibuton.",
      subHeading: "Technologies Used: HTML, CSS, JS, DJANGO",
    },
    {
      title: "Hare Krishna Japa Yagna",
      duration: {
        fromDate: "2021",
        toDate: "2022",
      },
      description:
        "This App I made for Hare Krishna Movement For Japa Marathon",
      subHeading: "Technologies Used: HTML, CSS, JS, DJANGO",
    },
  ];
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Basil Woods International"}
        subHeading={"I am Studing In fourth grade in Basil Woods International."}
        fromDate={"2020"}
        toDate={"Till Date"}
      />
            <ResumeHeading
        heading={"Maharishi Vidhya Mandir"}
        subHeading={"I was Studing in Maharishi Vidhya Mandir from UKG To 2nd Grade"}
        fromDate={"2017"}
        toDate={"2020"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Hare Krishna Movement"}
        subHeading={""}
        fromDate={"2018"}
        toDate={"Till Date"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Currently I am making apps for Hare Krishna Movement
        </span>
      </div>
      <div className="experience-description">
        <span class="resume-description-text">
          - Devoleped an Japa Tracker, Ecommence, Hare Krishna Vani App
        </span>
      </div>
    </div>,
    <div
    className="resume-screen-container programming-skills-container"
    key="programming-skills"
  >
    {programingSkillDetails.map((skill, index) => (
      <div className="skill-parent" key={index}>
        <div className="heading-bullet"></div>
        <span>{skill.skill}</span>
        <div className="skill-percentage">
          <div
            style={{ width: skill.ratingPercentage + "%" }}
            className="active-percentage-bar"
          ></div>
        </div>
      </div>
    ))}
  </div>,
      <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
        <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Making Softwares"
          description="I Love to make sowftwares for Hare Krishna Movement"
        />
      </div>
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffSet = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffSetStyle(newCarousalOffSet);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return (resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
          <img className="bullet-logo" src={require (`../../assets/Resume/${bullet.logoSrc}`) }
          alt="No Internet Connection" />
          <span className="bullet-text">{bullet.label}</span>
      </div>
    )));
  };
  const getResumeScreen = ()=>{
      return(
          <div style={carousalOffSetStyle.style} className="resume-details-carousal">{resumeDetails.map((ResumeDetail)=>ResumeDetail)}</div>
      )
  }
  return (
      <div class="resume-container screen-container" id={props.id || ""}>
        <div className="resume-content">
          <ScreenHeading
            title={"Resume"}
            subHeading={"My Formal Bio Details"}
          />
          <div className="resume-card">
              <div className="resume-bullets">
                  <div className="bullet-container">
                      <div className="bullet-icons"></div>
                      <div className="bullets">{getBullets()}</div>
                  </div>
              </div>
              <div className="resume-bullet-details">{getResumeScreen()}</div>
          </div>
        </div>
      </div>
    );
}
