import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faMobileRetro,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import "../../../style/contact/contact.css";
import TranslateButton from "../../TranslateButton/TranslateButton";
import OfficeImage from "../../../images/office-image.jpg";

const Contact = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Contact`;
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const shareUrl = "https://ashroyangon.org/contact";

  return (
    <div>
      <Navbar />
      <TranslateButton />

      <div className="contact_section">
        <div>
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2316.7473786459063!2d92.16929452835026!3d22.659058310024978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752b5631a04238f%3A0x4b0415b527c9fb51!2sAshroy%20Angon%20Society!5e0!3m2!1sen!2sbd!4v1700545963869!5m2!1sen!2sbd"
            width="100%"
            height="625"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container">
          <h2>Ashroy Angon Society</h2>
          {/* Social Share Section Start */}
          <div className="social_share_wrapper">
            <p>Share this page</p>
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
          {/* Social Share Section End */}

          <div className="content_wrapper">
            <div className="office_details">
              <h3>Contact Us</h3>
              <div className="head_office">
                <h4>Head Office</h4>
                <div className="home_address">
                  <FontAwesomeIcon
                    className="home_icons"
                    icon={faLocationDot}
                  />

                  <div>
                    <h1>Address</h1>
                    <p>
                      North Kalindipur, Rangamati Hill District, Rangamati
                      Sadar-4500
                    </p>
                  </div>
                </div>
                <div className="email my-3">
                  <FontAwesomeIcon className="email_icons" icon={faEnvelope} />
                  <div>
                    <h1>Email</h1>
                    <p>ashroy.angon@gmail.com</p>
                  </div>
                </div>
                <div className="phone">
                  <FontAwesomeIcon
                    className="phone_icons"
                    icon={faMobileRetro}
                  />
                  <div>
                    <h1>Phone</h1>
                    <p>+88 0185-4884-113</p>
                  </div>
                </div>

                <div className="phone">
                  <FontAwesomeIcon className="phone_icons" icon={faPhone} />
                  <div>
                    <h1>T&T</h1>
                    <p>02 333304605</p>
                  </div>
                </div>

                {/* <div className="connect mt-3 ml-7">
                  <div></div>
                  <div>
                    <h1 className="mb-3">Connect</h1>
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
                  </div>
                </div> */}
              </div>

              <div className="others_office">
                <h4> Other Offices </h4>
                <div className="others_office_wrapper">
                  <div className="liaison_office">
                    <h4>Dhaka Office</h4>
                    <div className="home_address">
                      <FontAwesomeIcon
                        className="home_icons"
                        icon={faLocationDot}
                      />

                      <div>
                        <h1>Address</h1>
                        <p>
                          House No-838 (3rd floor), Road No-03, Baitul Aman
                          Housing Society, Adabar, Mohammodpur, Dhaka-1207
                        </p>
                      </div>
                    </div>
                    <div className="email my-3">
                      <FontAwesomeIcon
                        className="email_icons"
                        icon={faEnvelope}
                      />
                      <div>
                        <h1>Email</h1>
                        <p>ashroy.angon@gmail.com</p>
                      </div>
                    </div>
                    <div className="phone">
                      <FontAwesomeIcon
                        className="phone_icons"
                        icon={faMobileRetro}
                      />
                      <div>
                        <h1>Phone</h1>
                        <p> +88 0173-1968-420 </p>
                      </div>
                    </div>

                    <div className="phone">
                      <FontAwesomeIcon className="phone_icons" icon={faPhone} />
                      <div>
                        <h1>T&T</h1>
                        <p>02 223329198</p>
                      </div>
                    </div>
                  </div>

                  <h4>Rangamati Sadar Upazila Office</h4>
                  <div className="home_address">
                    <FontAwesomeIcon
                      className="home_icons"
                      icon={faLocationDot}
                    />

                    <div>
                      <h1>Address</h1>
                      <p>
                        Bijon Sarani Road, Rangamati, Rangamati Hill District
                      </p>
                    </div>
                  </div>

                  <h4>Kawkhali Upazila Project Office</h4>
                  <div className="home_address">
                    <FontAwesomeIcon
                      className="home_icons"
                      icon={faLocationDot}
                    />

                    <div>
                      <h1>Address</h1>
                      <p>
                        Kochukhali Karbari Para, Kawkhali, Rangamati Hill
                        District
                      </p>
                    </div>
                  </div>

                  <h4>Kaptai Upazila Project Office</h4>
                  <div className="home_address">
                    <FontAwesomeIcon
                      className="home_icons"
                      icon={faLocationDot}
                    />

                    <div>
                      <h1>Address</h1>
                      <p>
                        Chandraghona Union, Marma Para, Kaptai, Rangamati Hill
                        District
                      </p>
                    </div>
                  </div>

                  <h4>Jurachari Upazila Project Office</h4>
                  <div className="home_address">
                    <FontAwesomeIcon
                      className="home_icons"
                      icon={faLocationDot}
                    />

                    <div>
                      <h1>Address</h1>
                      <p>
                        Jokkha Bazar, Upazila Sadar, Jurachari, Rangamati Hill
                        District
                      </p>
                    </div>
                  </div>

                  <h4>Rajasthali Upazila Project Office</h4>
                  <div className="home_address">
                    <FontAwesomeIcon
                      className="home_icons"
                      icon={faLocationDot}
                    />

                    <div>
                      <h1>Address</h1>
                      <p>
                        In front of Upazila Health Complex, Rajasthali,
                        Rangamati Hill District
                      </p>
                    </div>
                  </div>

                  <h4>Belaichari Upazila Project Office</h4>
                  <div className="home_address">
                    <FontAwesomeIcon
                      className="home_icons"
                      icon={faLocationDot}
                    />

                    <div>
                      <h1>Address</h1>
                      <p>
                        Sadasya Kaloni, Upazila Sadar, Belaichari, Rangamati
                        Hill District
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="email_wrapper">
              <h3>Head Office</h3>
              <img src={OfficeImage} alt="" />
              <form onSubmit={sendEmail}>
                <h3 className="mt-20">Email Us</h3>
                <div class="mx-auto">
                  <div className="first_last_name text-gray-700">
                    <div className="input-form">
                      <input
                        type="text"
                        className="w-full h-12 p-3 border-none border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1"
                        placeholder="First name"
                        name="first-name"
                        required
                      />
                    </div>
                    <div className="input-form">
                      <input
                        type="text"
                        className="w-full h-12 p-3 border-none border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1"
                        placeholder="Last name"
                        name="last-name"
                        required
                      />
                    </div>
                  </div>

                  <div className="input-form text-gray-700 my-6">
                    <input
                      type="text"
                      className="w-full h-12 p-3 border-none border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1"
                      placeholder="Subject"
                      name="subject"
                      required
                    />
                  </div>

                  <div className="text-area text-gray-700">
                    <textarea
                      className="w-full p-3 h14 border-none border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1"
                      rows="7"
                      placeholder="Message"
                      name="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <button type="submit" className="button">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
