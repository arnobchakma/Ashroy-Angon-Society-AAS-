import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import constitutionImage from "../../../images/Constitution/AAS_Constitution-1.jpg";
import constitutionImage2 from "../../../images/Constitution/AAS_Constitution-2.jpg";
import constitutionImage3 from "../../../images/Constitution/AAS_Constitution-3.jpg";
import constitutionImage4 from "../../../images/Constitution/AAS_Constitution-4.jpg";
import constitutionImage5 from "../../../images/Constitution/AAS_Constitution-5.jpg";
import constitutionImage6 from "../../../images/Constitution/AAS_Constitution-6.jpg";
import constitutionImage7 from "../../../images/Constitution/AAS_Constitution-7.jpg";
import constitutionImage8 from "../../../images/Constitution/AAS_Constitution-8.jpg";
import constitutionImage9 from "../../../images/Constitution/AAS_Constitution-9.jpg";
import constitutionImage10 from "../../../images/Constitution/AAS_Constitution-10.jpg";
import "../../../style/about/constitution.css";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Constitution = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Constitution`;
  }, []);

  const shareUrl = "https://ashroyangon.org/about/constitution";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="constitution_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2> Constitution </h2>
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
          <div className="image_wrapper">
            <img src={constitutionImage} alt="" />
            <img src={constitutionImage2} alt="" />
            <img src={constitutionImage3} alt="" />
            <img src={constitutionImage4} alt="" />
            <img src={constitutionImage5} alt="" />
            <img src={constitutionImage6} alt="" />
            <img src={constitutionImage7} alt="" />
            <img src={constitutionImage8} alt="" />
            <img src={constitutionImage9} alt="" />
            <img src={constitutionImage10} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Constitution;
