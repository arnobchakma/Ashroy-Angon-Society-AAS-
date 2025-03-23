import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import organogramImage from "../../../images/Organogram and Logo_AAS Update.jpg";
import "../../../style/about/organogram.css";
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

const Organogram = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Organogram`;
  }, []);

  const shareUrl = "https://ashroyangon.org/about/organogram";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="organogram_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2> Organogram </h2>
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
          <Zoom duration={3000}>
            <div className="content_wrapper">
              <img src={organogramImage} alt="" />
            </div>
          </Zoom>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Organogram;
