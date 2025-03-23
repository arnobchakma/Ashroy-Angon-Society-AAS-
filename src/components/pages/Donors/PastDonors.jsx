import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import governmentLogo from "../../../images/Logo/GOB.png";
import drinkingWaterImage from "../../../images/Logo/drinking-water-supply.png";
import undpImage from "../../../images/Logo/Undp.png";
import helenKellerImage from "../../../images/Logo/Helen-keller-international.jpg";
import bracLogo from "../../../images/Logo/brack.png";
import danidaImage from "../../../images/Logo/danida.png";
import manusherJonnoImage from "../../../images/Logo/mansuher-jonno-foundation.png";
import unitedPurposeImage from "../../../images/Logo/United-Purpose.png";
import "../../../style/donors/pastDonor.css";
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

const PastDonors = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Past Donor`;
  }, []);

  const shareUrl = "https://ashroyangon.org/donors/past-donors";

  return (
    <div>
      <Navbar />
      <TranslateButton />

      <div className="donor_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Past Donors</h2>
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
          <h3>Our Past Donors</h3>
          <div className="content_wrapper">
            <Zoom duration={2000}>
              <div className="singal_wrapper">
                <img src={governmentLogo} alt="" />
                <p>Department of Social Service</p>
              </div>
            </Zoom>

            <Zoom duration={2000}>
              <div className="singal_wrapper">
                <img src={governmentLogo} alt="" />
                <p>Ministry of Health & Family Planning Department</p>
              </div>
            </Zoom>

            <Zoom duration={2000}>
              <div className="singal_wrapper">
                <img src={drinkingWaterImage} alt="" />
                <p>NGO Forum for Drinking Water Supply and Sanitation</p>
              </div>
            </Zoom>

            <Zoom duration={2000}>
              <div className="singal_wrapper">
                <img src={undpImage} alt="" />
                <p>UNDP-CHTDF</p>
              </div>
            </Zoom>

            <Zoom duration={2000}>
              <div className="singal_wrapper">
                <img src={helenKellerImage} alt="" />
                <p>Helen Keller International (HKI)</p>
              </div>
            </Zoom>

            <Zoom duration={2000}>
              <div className="singal_wrapper">
                <img src={bracLogo} alt="" />
                <p>BRAC</p>
              </div>
            </Zoom>

            <Zoom duration={2000}>
              <div className="singal_wrapper">
                <img src={danidaImage} alt="" />
                <p>GOB-DANIDA</p>
              </div>
            </Zoom>

            <Zoom duration={2000}>
              <div className="singal_wrapper">
                <img src={manusherJonnoImage} alt="" />
                <p>Manusher Jonno Foundation</p>
              </div>
            </Zoom>

            <Zoom duration={2000}>
              <div className="singal_wrapper">
                <img src={unitedPurposeImage} alt="" />
                <p>United Purpose</p>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PastDonors;
