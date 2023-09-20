import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import { Accordion, Panel } from "baseui/accordion";
import "./Experience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";

function Experience(props) {
  const theme = props.theme;
  const sections = experience["sections"];
  return (
    <div className="experience-main">
      <Header theme={theme} />
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <img
                src={require(`../../assests/images/${experience["header_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {experience["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {experience["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="experience-accord">
        <Accordion>
          {sections.map((section) => {
            return (
              <Panel
                // clas = "accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                      border: `1px solid`,
                      borderRadius: `5px`,
                      borderColor: `${theme.headerColor}`,
                      marginBottom: `3px`,
                      fontFamily: "Google Sans Regular",
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard
                      experience={experience}
                      theme={theme}
                      key={experience.title}
                    />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Experience;
