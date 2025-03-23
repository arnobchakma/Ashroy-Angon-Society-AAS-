import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import TranslateButton from "../../TranslateButton/TranslateButton";
import "../../../style/focusArea/focusArea.css";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";

const FocusArea = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Focus Area`;
  }, []);

  const shareUrl = "https://ashroyangon.org/focusArea/focus-area";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="focusArea_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Focus Area</h2>
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

        <div className="focusArea_wrapper">
          <div className="container">
            <h2>Our Focus Areas</h2>
            <div className="content_wrapper">
              <div className="single">
                <FontAwesomeIcon className="icons" icon={faThumbTack} />
                <p>Gender Equity</p>
              </div>
              <div className="single">
                <FontAwesomeIcon className="icons" icon={faThumbTack} />
                <p>Formal and Non-Formal Education Program</p>
              </div>
              <div className="single">
                <FontAwesomeIcon className="icons" icon={faThumbTack} />
                <p>
                  Conservation of Environment and Natural Resource Management
                </p>
              </div>
              <div className="single">
                <FontAwesomeIcon className="icons" icon={faThumbTack} />
                <p> Formal and Non-Formal Education Program</p>
              </div>
              <div className="single">
                <FontAwesomeIcon className="icons" icon={faThumbTack} />
                <p> Extreme Poor Community Development</p>
              </div>
              <div className="single">
                <FontAwesomeIcon className="icons" icon={faThumbTack} />
                <p> Primary Health Care Program</p>
              </div>
              <div className="single">
                <FontAwesomeIcon className="icons" icon={faThumbTack} />
                <p> Safe Water Supply and Sanitation Program</p>
              </div>
              <div className="single">
                <FontAwesomeIcon className="icons" icon={faThumbTack} />
                <p>Traditional Culture Preservation and Management</p>
              </div>
              <div className="single">
                <FontAwesomeIcon className="icons" icon={faThumbTack} />
                <p>Agriculture and Afforestation Program</p>
              </div>
              <div className="single">
                <FontAwesomeIcon className="icons" icon={faThumbTack} />
                <p> Youth Development Program</p>
              </div>
              <div className="single">
                <FontAwesomeIcon className="icons" icon={faThumbTack} />
                <p>Disaster Management (Relief & Rehabilitation) Program</p>
              </div>
              <div className="single">
                <FontAwesomeIcon className="icons" icon={faThumbTack} />
                <p> Poverty Alleviation</p>
              </div>
              <div className="single">
                <FontAwesomeIcon className="icons" icon={faThumbTack} />
                <p> Disabilities and Orphanage Program</p>
              </div>
              <div className="single">
                <FontAwesomeIcon className="icons" icon={faThumbTack} />
                <p>Technical Education Program</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FocusArea;
