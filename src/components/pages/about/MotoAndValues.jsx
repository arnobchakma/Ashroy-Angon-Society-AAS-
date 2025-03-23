import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import motoImage from "../../../images/hand-bond.jpg";
import valuesImage from "../../../images/Core-Values.png";
import "../../../style/about/motoAndValues.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import {
  faArrowDownLong,
  faArrowRight,
  faArrowRightLong,
  faHandHoldingHeart,
  faHandsHoldingCircle,
} from "@fortawesome/free-solid-svg-icons";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const MotoAndValues = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Moto and Values`;
  }, []);

  const shareUrl = "https://ashroyangon.org/about/moto-and-values";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="moto_and_values_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Motto And Core Values</h2>
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

        <div className="moto_section">
          <div className="container">
            <div className="moto">
              <Fade left duration={2000}>
                <div className="moto_left">
                  <h3>Our Motto</h3>
                  <FontAwesomeIcon
                    className="holding_hand"
                    icon={faHandHoldingHeart}
                  />
                  <p>
                    Always stand beside for the most disadvantageous communities
                  </p>
                </div>
              </Fade>

              <Zoom duration={2000}>
                <div className="middle_arrow">
                  <FontAwesomeIcon
                    className="rightArrow_for_web"
                    icon={faArrowRightLong}
                  />
                  <FontAwesomeIcon
                    className="downArrow_for_responsive"
                    icon={faArrowDownLong}
                  />
                </div>
              </Zoom>

              <Zoom duration={2000}>
                <div className="moto_right">
                  <img src={motoImage} alt="Moto_Image" />
                </div>
              </Zoom>
            </div>
          </div>
        </div>

        <div className="values_section">
          <div className="container">
            <div className="values">
              <h3>Core Values</h3>
              <div className="values_wrapper">
                <Zoom duration={2000}>
                  <div className="image">
                    <img src={valuesImage} alt="" />
                  </div>
                </Zoom>
                <Fade bottom duration={2000}>
                  <div className="values_divide">
                    <div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Justice</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Commitment</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>
                          Partnership
                        </p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Stewardship</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Creativity</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Resource efficiency</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Safety and security requiring</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Equality</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Integrity</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Accountability</p>
                      </div>
                    </div>

                    <div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Governance</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Inclusiveness cost effectiveness</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Humanity</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Values</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Reliability</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Relationship</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Solidarity</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Efficiency</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Respect</p>
                      </div>
                      <div className="single_values">
                        <FontAwesomeIcon
                          className="arrow_color"
                          icon={faHandsHoldingCircle}
                        />
                        <p>Environment friendly</p>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MotoAndValues;
