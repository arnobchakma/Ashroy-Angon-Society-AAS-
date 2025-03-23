import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import TranslateButton from "../../TranslateButton/TranslateButton";
import twentyFirstNotice from "../../../images/Notice/Notice Board.jpeg";
import twentySixthNotice from "../../../images/Notice/26th-notice.jpeg";
import SeventeenNotice from "../../../images/Notice/17th-March-Notice.jpg";
import NoticeForHotWeather from "../../../images/Notice/Notice-for-hot-weather.jpeg";
import NoticeForHotWeatherTwo from "../../../images/Notice/Bondho-notice.jpg";
import NoboborshoNotice from "../../../images/Notice/Noboborsho notice.jpeg";
import MayDayNotice from "../../../images/Notice/May-day-notice.jpeg";
import AuditNotice from "../../../images/Notice/Notice.jpeg";
import "../../../style/noticeBoard/officeNotice.css";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const OfficeNotice = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Office Notice`;
  }, []);

  const shareUrl = "https://ashroyangon.org/noticeBoard/office-notice";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="office_circular_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Office Notice</h2>
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

        <div className="office_circular_wrapper">
          <div className="container">
            <div className="content_wrapper">
              <h2>Office Notice</h2>
              <div className="notice">
                <p>Date: 07.07.2024</p>
                <div className="image">
                  <img src={AuditNotice} alt="" />
                </div>
              </div>
              <div className="notice">
                <p>Date: 30.04.2024</p>
                <div className="image">
                  <img src={MayDayNotice} alt="" />
                </div>
              </div>
              
              <div className="notice">
                <p>Date: 29.04.2024</p>
                <div className="image">
                  <img src={NoticeForHotWeatherTwo} alt="" />
                </div>
              </div>
              <div className="notice">
                <p>Date: 20.04.2024</p>
                <div className="image">
                  <img src={NoticeForHotWeather} alt="" />
                </div>
              </div>
              <div className="notice">
                <p>Date: 09.04.2024</p>
                <div className="image">
                  <img src={NoboborshoNotice} alt="" />
                </div>
              </div>

              <div className="notice">
                <p>Date: 14.03.2024</p>
                <div className="image">
                  <img src={SeventeenNotice} alt="" />
                </div>
              </div>
              <div className="notice">
                <p>Date: 25.02.2024</p>
                <div className="image">
                  <img src={twentySixthNotice} alt="" />
                </div>
              </div>
              <div className="notice">
                <p>Date: 20.02.2024</p>
                <div className="image">
                  <img src={twentyFirstNotice} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OfficeNotice;
