import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import TinImage from "../../../images/Certificate/Tender-notice.jpg";
import "../../../style/noticeBoard/tenderNotice.css";
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

const TenderNotice = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Tender Notice`;
  }, []);

  const shareUrl = "https://ashroyangon.org/noticeBoard/tender-notice";

  return (
    <div>
      <Navbar />
      <TranslateButton />

      <div className="tenderNotice_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Tender Notice</h2>
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
            <div className="tender_notice">
              <h4>Tender Notice</h4>
              <Zoom duration={3000}>
                <img src={TinImage} alt="" />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TenderNotice;
