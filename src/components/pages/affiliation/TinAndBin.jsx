import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import TinImage from "../../../images/Certificate/AAS-Tin-Certificate.jpg";
import BinImage from "../../../images/Certificate/AAS-BIN-Certification.jpg";
import "../../../style/affiliation/tinAndBin.css";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const TinAndBin = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Tin And Bin`;
  }, []);

  const shareUrl = "https://ashroyangon.org/affiliation/tin-bin";

  return (
    <div>
      <Navbar />
      <TranslateButton />

      <div className="tinBin_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>TIN And BIN Certificate</h2>
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
            <div className="tin_certificate">
              <h4>TIN Certificate</h4>
              <img src={TinImage} alt="" />
            </div>
            <div className="bin_certificate">
              <h4>BIN Certificate</h4>
              <img src={BinImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TinAndBin;
