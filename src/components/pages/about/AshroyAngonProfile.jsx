import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import "../../../style/about/ashroyAngonProfile.css";
import TranslateButton from "../../TranslateButton/TranslateButton";
import One from "../../../images/Profile/1.jpg";
import Two from "../../../images/Profile/2.jpg";
import Three from "../../../images/Profile/3.jpg";
import Four from "../../../images/Profile/4.jpg";
import Five from "../../../images/Profile/5.jpg";
import Six from "../../../images/Profile/6.jpg";
import Seven from "../../../images/Profile/7.jpg";
import Eight from "../../../images/Profile/8.jpg";
import Nine from "../../../images/Profile/9.jpg";
import Ten from "../../../images/Profile/10.jpg";
import Eleven from "../../../images/Profile/11.jpg";
import Twelve from "../../../images/Profile/12.jpg";
import Thirteen from "../../../images/Profile/13.jpg";
import Fortheen from "../../../images/Profile/14.jpg";

const AshroyAngonProfile = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Ashroy Angon Profile`;
  }, []);

  const shareUrl = "https://ashroyangon.org/about/ashroy-angon-profile";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="profile_section">
        <div className="header_image"></div>
        <div className="container">
          {/* Social Share Section Start */}
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
          {/* Social Share Section End */}
          <div>
            <h2>Ashroy Angon Profile</h2>
          </div>

          <div className="content_wrapper">
            <img src={One} alt="" />
            <img src={Two} alt="" />
            <img src={Three} alt="" />
            <img src={Four} alt="" />
            <img src={Five} alt="" />
            <img src={Six} alt="" />
            <img src={Seven} alt="" />
            <img src={Eight} alt="" />
            <img src={Nine} alt="" />
            <img src={Ten} alt="" />
            <img src={Eleven} alt="" />
            <img src={Twelve} alt="" />
            <img src={Thirteen} alt="" />
            <img src={Fortheen} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AshroyAngonProfile;
