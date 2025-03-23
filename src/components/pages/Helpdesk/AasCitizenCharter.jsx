import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import TranslateButton from "../../TranslateButton/TranslateButton";
import "../../../style/helpdesk/citizenCharter.css";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const AasCitizenCharter = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Ashroy Angon Society Citizen Charter`;
  }, []);

  const shareUrl = "https://ashroyangon.org/helpdesk/ashroy-citizen-charter";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="citizen_charter_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Ashroy Angon Society Citizen Charter</h2>
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

        <div className="citizen_charter_wrapper">
          <div className="container">
            <h2>This page is a work in progress</h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AasCitizenCharter;
