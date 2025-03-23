import React, { useEffect } from "react";
import "../../../style/donors/pastDonor.css";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import governmentLogo from "../../../images/Logo/GOB.png";
import "../../../style/donors/currentDonorBureau.css";
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

const CurrentDonorBureau = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Current Donor Bureau`;
  }, []);

  const shareUrl = "https://ashroyangon.org/donors/current-donor-bureau";

  return (
    <div>
      <Navbar />
      <TranslateButton />

      <div className="current_donor_bureau_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Non Formal Education</h2>
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
          <h3>Bureau Of Non Formal Education</h3>
          <div className="content_wrapper">
            <Zoom duration={2000}>
              <div className="singal_wrapper">
                <img src={governmentLogo} alt="" />
                <p>Bureau Of Non Formal Education</p>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CurrentDonorBureau;
