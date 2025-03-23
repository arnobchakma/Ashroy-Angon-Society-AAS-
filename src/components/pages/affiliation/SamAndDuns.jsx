import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import "../../../style/affiliation/samAndDuns.css";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const SamAndDuns = () => {
  useEffect(() => {
    document.title = `AshroyAngon | SAM and DUNS`;
  }, []);

  const shareUrl = "https://ashroyangon.org/affiliation/sam-and-duns";

  return (
    <div>
      <Navbar />
      <TranslateButton />

      <div className="sam_and_duns_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>SAM and DUNS ID</h2>
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
            <div className="sam">
              <h4>
                SAM Unique Entity ID: <span> S3HTZRXGFDE8</span>
              </h4>
            </div>
            <div className="duns">
              <h4>
                DUNS Number: <span> 850366617</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SamAndDuns;
