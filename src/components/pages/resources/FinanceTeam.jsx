import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import TranslateButton from "../../TranslateButton/TranslateButton";
import "../../../style/resource/financeTeam.css";
import BhubonBijoyChakma from "../../../images/Photos/Bhubon-bijoy-chakma.jpg";
import EmonChakma from "../../../images/Photos/Emon Chakma.jpg";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const FinanceTeam = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Finance Team`;
  }, []);

  const shareUrl = "https://ashroyangon.org/resources/finance-team";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="finance_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Finance Team</h2>
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

        <div className="finance_wrapper">
          <div className="container">
            <h2>Finance Members</h2>
            <div className="content_wrapper">
              <div className="single_wrapper">
                <div className="image">
                  <img src={BhubonBijoyChakma} alt="" />
                </div>
                <div className="title_wrapper">
                  <h4>Mr. Bhuban Bijoy Chakma, MBA</h4>
                  <p>Accounts Officer</p>
                </div>
              </div>

              {/* <div className="single_wrapper">
                <div className="image">
                  <img src={EmonChakma} alt="" />
                </div>
                <div className="title_wrapper">
                  <h4>Mr. Emon Chakma, BBA</h4>
                  <p>Office Assistant</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FinanceTeam;
