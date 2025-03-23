import React from "react";
import "../../../style/whatWeDo.css";
import orientationImage from "../../../images/school-childrens.jpg";
import additionalImage from "../../../images/women-enterpreuner.jpeg";
import womanInterpreneur from "../../../images/literacy.jpeg";

const WhatWeDo = () => {
  return (
    <div className="what_we_do_section">
      <div className="content_wrapper">
        <h2>What We Do</h2>
        <div className="container">
          <div className="inside_image_wrapper">
            <div className="single_image_wrapper">
              <a href="/school-children" target={"_blank"}>
                <img src={orientationImage} alt="" />
              </a>
              <div className="caption">
                <span>School Children Education </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <a href="/woman-enterpreneur" target={"_blank"}>
                <img src={additionalImage} alt="" />
              </a>
              <div className="caption">
                <span>Women Entrepreneurs</span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <a href="/basic-literacy" target={"_blank"}>
                <img src={womanInterpreneur} alt="" />
              </a>
              <div className="caption">
                <span>Basic Literacy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
