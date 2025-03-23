import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import TranslateButton from "../../TranslateButton/TranslateButton";
import "../../../style/helpdesk/emergencyCall.css";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const EmergencyCall = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Emergency Call`;
  }, []);

  const shareUrl = "https://ashroyangon.org/helpdesk/emergency-call";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="emergency_call_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Emergency Call</h2>
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

        <div className="emergency_call_wrapper">
          <div className="container">
            <h2>This page is a work in progress</h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EmergencyCall;
