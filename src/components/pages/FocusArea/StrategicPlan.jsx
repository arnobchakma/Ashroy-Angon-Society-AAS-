import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import TranslateButton from "../../TranslateButton/TranslateButton";
import "../../../style/focusArea/strategicPlan.css";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const StrategicPlan = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Strategic Plan`;
  }, []);

  const shareUrl = "https://ashroyangon.org/focusArea/strategic-plan";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="strategicPlan_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Strategic Plan</h2>
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

        <div className="strategicPlan_wrapper">
          <div className="container">
            <h2>This page is a work in progress</h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StrategicPlan;
