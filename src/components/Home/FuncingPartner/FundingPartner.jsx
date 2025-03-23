import React from "react";
import Marquee from "react-fast-marquee";
import BracImage from "../../../images/Logo/brack.png";
import DanidaImage from "../../../images/Logo/danida.png";
import DrinkingWaterImage from "../../../images/Logo/drinking-water-supply.png";
import GobImage from "../../../images/Logo/GOB.png";
import HelenKelenImage from "../../../images/Logo/Helen-keller-international.jpg";
import ManusherJonnoImage from "../../../images/Logo/mansuher-jonno-foundation.png";
import RangamatiImage from "../../../images/Logo/rangamati.png";
import UnitedPurposeImage from "../../../images/Logo/Undp.png";
import HysawaImage from "../../../images/Logo/hysawa.png";
import YpsaImage from "../../../images/Logo/YPSA-LOGO-PNG.jpg";
import "../../../style/fundingPartner.css";

const FundingPartner = () => {
  return (
    <div className="fundingPartner_section">
      {/* <div className="container"> */}
      <div className="funding_title">
        <div className="container">
          {/* <img src={Logo} alt="" /> */}
          <h2>Our Partners</h2>
          <p>Ashroy Angon Society (AAS)</p>
        </div>
      </div>
      <div className="partner_wrapper">
        <div className="container">
          <Marquee pauseOnClick>
            <div className="image_wrapper">
              <img src={BracImage} alt="" />
              <img src={DanidaImage} alt="" />
              <img src={DrinkingWaterImage} alt="" />
              <img src={GobImage} alt="" />
              <img src={HelenKelenImage} alt="" />
              <img src={ManusherJonnoImage} alt="" />
              <img src={RangamatiImage} alt="" />
              <img src={YpsaImage} alt="" />
              <img src={UnitedPurposeImage} alt="" />
              <img src={HysawaImage} alt="" />
            </div>
          </Marquee>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default FundingPartner;
