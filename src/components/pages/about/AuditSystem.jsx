import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import "../../../style/about/auditSystem.css";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const AuditSystem = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Audit System`;
  }, []);

  const shareUrl = "https://ashroyangon.org/about/audit-system";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="audit_system_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Audit System</h2>
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
            <p>
              Ashroy Angon Society (AAS) maintains strong Audit System for
              ensuring transparency and accountability. Every Financial fiscal
              year end, an external auditor will audit all books of account. The
              auditor will be appointed as per the decision of the Executive
              Council of the organization in its executive Meeting for the
              approval of the Executive Council. Organizational Secretary
              directs the Project Management Team to implement the Yearly
              Financial Audit within the course of time.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuditSystem;
