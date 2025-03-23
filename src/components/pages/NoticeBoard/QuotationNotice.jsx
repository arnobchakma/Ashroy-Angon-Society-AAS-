import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import TranslateButton from "../../TranslateButton/TranslateButton";
import "../../../style/noticeBoard/quotationNotice.css";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const QuotationNotice = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Quotation Notice`;
  }, []);

  const shareUrl = "https://ashroyangon.org/noticeBoard/quotation-notice";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="upcoming_event_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Quotation Notice</h2>
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

        <div className="quotation_notice_wrapper">
          <div className="container">
            <h2>There are no Quotation Notice at this time</h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default QuotationNotice;
