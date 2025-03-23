import React from "react";
import "../../../style/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faMobileRetro,
  faClock,
  faChildReaching,
  faPersonDress,
  faUsersLine,
  faHandHoldingDollar,
  faCampground,
  faPersonDigging,
  faHandshake,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <div>
      <div className="top_footer_section">
        <div className="container">
          <Fade left duration={2000} cascade>
            <div className="content_wrapper">
              <div className="address">
                <h3>Home Address</h3>
                <div className="home_address">
                  <FontAwesomeIcon className="icons" icon={faLocationDot} />
                  <p>
                    North Kalindipur, Rangamati Sadar, Rangamati Hill
                    District-4500
                  </p>
                </div>
                <div className="email">
                  <FontAwesomeIcon className="icons" icon={faEnvelope} />
                  <p>ashroy.angon@gmail.com</p>
                </div>
                <div className="phone">
                  <FontAwesomeIcon className="icons" icon={faMobileRetro} />
                  <p>+88 01731968420</p>
                </div>
              </div>

              <div className="services">
                <h3>Our Services</h3>
                <div className="single_service_wrap">
                  <FontAwesomeIcon className="icons" icon={faChildReaching} />
                  <a href="/school-children" target={"_blank"}>
                    Children Education
                  </a>
                </div>
                <div className="single_service_wrap middle_gap">
                  <FontAwesomeIcon className="icons" icon={faPersonDress} />
                  <a href="/woman-enterpreneur" target={"_blank"}>
                    Women Enterpreneur
                  </a>
                </div>
                <div className="single_service_wrap">
                  <FontAwesomeIcon className="icons" icon={faUsersLine} />
                  <a href="/basic-literacy" target={"_blank"}>
                    Basic Literacy
                  </a>
                </div>
              </div>

              <div className="working_hour">
                <h3>Working Hours</h3>
                <div className="works">
                  <FontAwesomeIcon className="icons" icon={faClock} />
                  <p>9 am - 5 pm , Sun-Thu</p>
                </div>
              </div>

              <div className="support_work">
                <h3>Support Our Work</h3>
                <div className="single_support_work_wrap">
                  <FontAwesomeIcon
                    className="icons"
                    icon={faHandHoldingDollar}
                  />
                  <a href="/donation">
                    <p>Donate now</p>
                  </a>
                </div>
                <div className="single_support_work_wrap my-3">
                  <FontAwesomeIcon className="icons" icon={faCampground} />
                  <p>Campaign with us</p>
                </div>
                <div className="single_support_work_wrap">
                  <FontAwesomeIcon className="icons" icon={faPersonDigging} />
                  <p>Work with us</p>
                </div>
                <div className="single_support_work_wrap my-3">
                  <FontAwesomeIcon className="icons" icon={faHandshake} />
                  <p>Volunteer with us</p>
                </div>
                <div className="single_support_work_wrap">
                  <FontAwesomeIcon className="icons" icon={faGlobe} />
                  <p>Join the global movement</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="bottom_footer_section ">
        <div className="container">
          <div className="date_wrapper">
            <div className="privacy">
              <a href="/core-policy">Privacy Policy Terms of Use</a>
            </div>
            <div className="social_media_icons_wrap">
              <a
                href="https://www.youtube.com/@ashroyangon"
                target="_blank"
                className="youtube"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61556803282708"
                target="_blank"
                className="facebook"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="http://www.instagram.com"
                target="_blank"
                className="instagram"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://twitter.com/AshroyAngon"
                target="_blank"
                className="twitter"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashroy-angon-0a6288167/"
                target="_blank"
                className="linkedin"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="right_part">
              <p>
                &copy; {new Date().getFullYear()}
                <span>Ashroy Angon Society</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
