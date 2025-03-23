import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import "../../../style/about/policy.css";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarespace } from "@fortawesome/free-brands-svg-icons";

const Policy = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Core Policy`;
  }, []);

  const shareUrl = "https://ashroyangon.org/about/core-policy";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="policy_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Core Policy</h2>
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

        <div className="policy_wrapper">
          <h3>Ashroy Angon Society Core policies</h3>
          <div className="container">
            <div className="content_wrapper">
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Anti Courruption Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Anti-Money Laundering Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Anti-terrorism Policy</p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Child Protection Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Complain Respones Mechanism Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Whistle Blowing Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Compliance Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Do No Harm (DNH) Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Emergency Respones and prepared plan</p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Safe Guarding Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Final Complaint Response Mechanism Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Final Rigthts-holder Guideline </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Financial Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Fraud & Anti-Coorruption Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Gender Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>HR & Admin Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Human Resource Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Indirect Cost Sharing Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Information Disclosure Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Logistic & Procurement Policy</p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Monitoring and Evaluation Framework Part 1-merged </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>PARTNERSHIP POLICY</p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Protection Form Sexual Exploitation and Abuse (PSEA)</p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Right Holder Guideline</p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Risk Management Policy </p>
              </div>
              <div className="icon_and_text">
                <FontAwesomeIcon icon={faSquarespace} />
                <p>Vehicle Use and Management Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Policy;
