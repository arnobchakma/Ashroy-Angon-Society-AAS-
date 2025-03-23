import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import smasunImage from "../../../images/Photos/Samsun-nahar.jpg";
import nikhilMitraImage from "../../../images/Photos/nikhil-mitra-chakma.jpg";
import amiyaImage from "../../../images/Photos/amiya-sagor-chakma.jpg";
import nandaImage from "../../../images/Photos/Nandh-Dulal-Barua.jpg";
import AongcraMarma from "../../../images/Photos/aongcra-marma.jpg";
import MaliniChakma from "../../../images/Photos/Malini Chakma.jpg";
import BadhonChakma from "../../../images/Photos/Badhon Chakma.jpg";
import "../../../style/about/executiveCouncil.css";
import Zoom from "react-reveal/Zoom";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const ExecutiveCouncil = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Executive Council`;
  }, []);

  const shareUrl = "https://ashroyangon.org/about/executive-council";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="executive_council_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2> Executive Council </h2>
            <div className="social_share_button">
              <FacebookShareButton
                url={shareUrl}
                target={"_blank"}
                quote={"share facebook"}
                hashtag={"#facebook"}
              >
                <FacebookIcon size={35} round={true} />
              </FacebookShareButton>
              <TwitterShareButton
                url={shareUrl}
                target={"_blank"}
                quote={"share twitter"}
                hashtag={"#twitter"}
              >
                <TwitterIcon size={35} round={true} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={shareUrl}
                target={"_blank"}
                quote={"share linkedin"}
                hashtag={"#linkedin"}
              >
                <LinkedinIcon size={35} round={true} />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
        {/* Header Background Part End */}

        <div className="container">
          <p className="title_heading">
            The EC is elected by the general council members in an election and/or selection process in its Annual General Meeting for a period of 3 years term. The Executive Council is consisting of 7 members where 4 members are men and 3 members are women; and headed by a president. The executive Council is responsible for the overall management aspect of the organization. The Executive Council prepares annual report as regards the overall performance of the organization and report to the General Council members. The Executive council meets at least 3 times in a year. This council can meet on emergency basis at any time in the year as and when required. The problems and issues as regard the ongoing program activities are discussed in these meetings and necessary recommendations are made to solve operational of the organization and project implementation.
          </p>

          <div className="top_image">
            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={smasunImage} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Samsun Nahar Setu</h4>
                  <p>Chairperson</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>
          </div>

          <div className="content_wrapper">
            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={nikhilMitraImage} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Nikhil Mitra Chakma</h4>
                  <p>Vice-Chairperson</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={amiyaImage} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Amiya Sagar Chakma</h4>
                  <p>General Secretary</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={nandaImage} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Nanda Dulal Barua</h4>
                  <p>Treasurer</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={AongcraMarma} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Aongcra Marma</h4>
                  <p>Executive Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={BadhonChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Badhon Chakma</h4>
                  <p>Executive Member </p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={MaliniChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Malini Chakma</h4>
                  <p>Executive Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExecutiveCouncil;
