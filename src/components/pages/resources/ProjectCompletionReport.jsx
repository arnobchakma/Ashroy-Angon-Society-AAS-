import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import "../../../style/resource/projectCompletionReport.css";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const ProjectCompletionReport = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Project Completion Report`;
  }, []);

  const shareUrl = "https://ashroyangon.org/project-completion-report";

  return (
    <div>
      <Navbar />
      <TranslateButton />

      <div className="project_completion_report_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Project Completion Report</h2>
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

        <div className="project_completion_report_wrapper">
          <h3>Project Completion Report</h3>
          <div className="content_wrapper">
            <div className="container">
              <div className="report">
                <h5>
                  Project Completion Report (January 2021 - December 2021)
                </h5>
                <a
                  href="/Project-completion-Report.pdf"
                  // download={"Project-completion-Report.pdf"}
                  target={"_blank"}
                  id="style-2"
                  data-replace="Download Pdf"
                >
                  <span> Download Pdf</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectCompletionReport;
