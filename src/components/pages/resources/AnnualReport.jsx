import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import TranslateButton from "../../TranslateButton/TranslateButton";
import "../../../style/resource/annualReport.css";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const AnnualReport = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Annual Report`;
  }, []);

  const shareUrl = "https://ashroyangon.org/resources/annual-report";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="annual_report_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Annual Report</h2>
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

        <div className="annual_report_wrapper">
          <div className="container">
            <h2>Annual Report</h2>
            <div className="content_wrapper">
              <span>Annual Report (2022 - 2023) Updated</span>
              <span>Annual Report (2021 - 2022) Updated</span>
              <span>Annual Report (2020 - 2021) Updated</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AnnualReport;
