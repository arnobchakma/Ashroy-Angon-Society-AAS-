import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import BiplobChakma from "../../../images/Photos/Biplob-chakma.jpg";
import AmiyaChakma from "../../../images/Photos/amiya-sagor-chakma.jpg";
import blankImage from "../../../images/Photos/blank_photo.jpg";
import "../../../style/about/advisoryBoard.css";
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

const AdvisoryBoard = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Advisory Board`;
  }, []);

  const shareUrl = "https://ashroyangon.org/about/advisory-board";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="advisory_board_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Advisory Board</h2>
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
          <div className="title_header">
            <p>
            Ashroy Angon Society (AAS) has Advisory council consisting of 3 members where 1 women member is compulsory. This AC provides necessary advices/counseling to the executive council in regards of management, project implementation and fund-raising etc.
            </p>
          </div>
          <div className="content_wrapper">
            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={BiplobChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Biplob Chakma</h4>
                  <p>Advisor</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={AmiyaChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Amiya Sagar Chakma</h4>
                  <p>Executive Director</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={blankImage} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Dinonath Tangchangya</h4>
                  <p>Advisor</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={blankImage} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Coxy Talukdar</h4>
                  <p>Advisor</p>
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

export default AdvisoryBoard;
