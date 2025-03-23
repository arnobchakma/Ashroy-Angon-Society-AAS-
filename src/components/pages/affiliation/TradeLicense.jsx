import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import TradeLicenseImage from "../../../images/Certificate/AAS-Trade-Licance-30-June-2024.jpg";
import "../../../style/affiliation/tradeLicense.css";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const TradeLicense = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Trade License`;
  }, []);

  const shareUrl = "https://ashroyangon.org/affiliation/trade-license";

  return (
    <div>
      <Navbar />
      <TranslateButton />

      <div className="tradeLicense_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Trade License Certificate</h2>
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
            <img src={TradeLicenseImage} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TradeLicense;
