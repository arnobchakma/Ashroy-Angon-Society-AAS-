import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import missinImage from "../../../images/red-dart-arrow-hitting-target-center-dartboard_91128-1576.jpg";
import visionImage from "../../../images/Vision-mission.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
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
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const MissionAndVision = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Mission and Vision`;
  }, []);

  const shareUrl = "https://ashroyangon.org/about/mission-and-vision";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="vision_mission_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2> Mission and Vision </h2>
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
            <div className="mission">
              <Fade bottom duration={2000}>
                <div>
                  <h3>Our Mission</h3>
                  <p>
                    Bring a positive change in the reduction of poverty among the target community with special emphasis on the rights of women, children and the most disadvantaged sections of peoples including the persons with disabilities for self-reliance and sustainability through need based development programs.
                  </p>
                </div>
              </Fade>

              <Zoom duration={2000}>
                <div className="mission_right_image">
                  <img src={missinImage} alt="" />
                </div>
              </Zoom>
            </div>

            <div className="vision">
              <Zoom duration={2000}>
                <div>
                  <img src={visionImage} alt="" />
                </div>
              </Zoom>

              <Fade bottom duration={2000}>
                <div>
                  <h3>Our Vision</h3>
                  <div className="single_vision">
                    <FontAwesomeIcon className="caretDown" icon={faThumbsUp} />
                    <p>
                      Open window in a new dimension whereby the extremely poor people of Bangladesh will gradually be mainstreamed by sustainable socio-economy through ensuring the basic needs of the peoples
                    </p>
                  </div>
                  {/* <div className="single_vision">
                    <FontAwesomeIcon className="caretDown" icon={faThumbsUp} />
                    <p>
                      To enhancing of the people with particular emphasis to
                      marginalized and less privileged through improving access
                      to livelihood opportunities;
                    </p>
                  </div>
                  <div className="single_vision">
                    <FontAwesomeIcon className="caretDown" icon={faThumbsUp} />
                    <p>
                      Contribution to economic growth, envisioning the creation
                      of &quot;Smart Bangladesh&quot;;
                    </p>
                  </div>
                  <div className="single_vision">
                    <FontAwesomeIcon className="caretDown" icon={faThumbsUp} />
                    <p>
                      Reduction of poverty of extremely poor people of the
                      country, especially Chittagong Hill Tracts (CHT), ensure
                      gender equity and increase access to social protection;
                    </p>
                  </div> */}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MissionAndVision;
