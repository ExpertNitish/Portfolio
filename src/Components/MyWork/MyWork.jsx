import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="project" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Works</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div className="center">
              <a href={work.w_url} target="_blank">
                <img key={index} src={work.w_img} alt={work.w_name} />
              </a>
              <h4>{work.w_name}</h4>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore" >
        <p>More Projects Coming Soon</p>
      </div>
    </div>
  );
};

export default MyWork;
