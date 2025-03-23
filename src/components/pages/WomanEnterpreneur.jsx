import React, { useEffect } from "react";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import "../../style/womanEnterpreneur.css";
import TranslateButton from "../TranslateButton/TranslateButton";
import Comment from "../shared/Comment/Comment";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const WomanEnterpreneur = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Women EnterPreneur`;
  }, []);

  const shareUrl = "https://ashroyangon.org/woman-enterpreneur";

  return (
    <>
      <Navbar />
      <div className="woman_enterpreneur_section">
        <div className="header_image"></div>
        <div className="heading">
          <p className="program">Program</p>
          <h2>Ensure Benefit of E-Commerce to Women Entrepreneurs</h2>
        </div>
        <div className="container">
          <TranslateButton />
          <div className="content_wrapper">
            <p>
              Ashroy Angon Society (AAS) has been implementing project
              &quot;Ensure Benefit of E-Commerce to Women Entrepreneurs in
              Rangamati Hill Distirct&quot; with the support of Information and
              Technilogy Department under the Ministry of Posts,
              Telecommunications and Information Ministry.
            </p>
            <p>
              The main objectives of the project are to select small women
              entrepreneurs in Rangamati Sadar Upazila. To empower the women
              entrepreneurs about the upcoming business challenges and used them
              to possible abundant opportunities to E-commerce platform. To
              train the entrepreneurs on E-Commerce platform by using Facebook
              and Mobile application. Business Linkage development with other
              entrepreneurs. And to ensure women economic empowerment.
            </p>
          </div>

          {/* Social Share Section Start */}
          <div className="social_wrapper">
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
        </div>
      </div>

      {/* Comment Section */}
      <Comment />
      <Footer />
    </>
  );
};

export default WomanEnterpreneur;
