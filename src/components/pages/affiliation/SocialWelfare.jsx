import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import SocialWelfareImage from "../../../images/Certificate/Social_Welfare_Certificate.jpg";
import "../../../style/affiliation/socialWelfare.css";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const SocialWelfare = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Social Welfare`;
  }, []);

  const shareUrl = "https://ashroyangon.org/affiliation/social-welfare";

  return (
    <div>
      <Navbar />
      <TranslateButton />

      <div className="social_welfare_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Social Welfare Registration</h2>
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
          <div className="content_wrapper">
            <img src={SocialWelfareImage} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SocialWelfare;
