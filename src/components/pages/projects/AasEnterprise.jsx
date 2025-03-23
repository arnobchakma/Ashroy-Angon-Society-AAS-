import React, { useEffect } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import "../../../style/projects/aasEnterprise.css";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const AasEnterprise = () => {
  useEffect(() => {
    document.title = `AshroyAngon | AAS Enterprise `;
  }, []);

  const shareUrl = "https://ashroyangon.org/aas-enterprise";

  return (
    <div>
      <Navbar />
      <TranslateButton />

      <div className="aas_enterprise_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>AAS Enterprise (IGA)</h2>
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
          <h3>AAS Enterprise (IGA)</h3>
          <div className="content_wrapper">
            <p>TIN: 234757481304</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AasEnterprise;
