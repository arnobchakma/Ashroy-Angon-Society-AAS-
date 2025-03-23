import React from "react";
import "../../style/news/literacyDay.css";
import Comment from "../shared/Comment/Comment";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import One from "../../images/Blogs-photo/08.09.2024/One.jpg";
import Two from "../../images/Blogs-photo/08.09.2024/Eight.jpg";
import Three from "../../images/Blogs-photo/08.09.2024/Five.jpg";
import Four from "../../images/Blogs-photo/08.09.2024/Four.jpg";
import Five from "../../images/Blogs-photo/08.09.2024/Nine.jpg";
import Six from "../../images/Blogs-photo/08.09.2024/Seven.jpg";
import Seven from "../../images/Blogs-photo/08.09.2024/Six.jpg";
import Eight from "../../images/Blogs-photo/08.09.2024/Ten.jpg";
import Nine from "../../images/Blogs-photo/08.09.2024/Three.jpg";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { useEffect } from "react";
import TranslateButton from "../TranslateButton/TranslateButton";

const LiteracyDay = () => {
  useEffect(() => {
    document.title = `AshroyAngon | International Literacy Day 2024`;
  }, []);

  const shareUrl =
    "https://ashroyangon.org/international-literacy-day-2024";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="literacy_day_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              Colorful rally to celebrate International Literacy Day 2024
            </h6>
            <h2>
              Colorful rally to celebrate International Literacy Day 2024
            </h2>
            <h3>September 08, 2024</h3>
          </div>
        </div>
        <div className="image_part">
          <div className="header_image"></div>
          {/* Social Share Section Start */}
          <div className="social_share_wrapper">
            <div className="container">
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
          {/* Social Share Section End */}
        </div>
        <div className="content_wrapper">
          <div className="container">

            <div className="extra_image">
              <img src={Two} alt="" />
              <img src={One} alt="" />
              <img src={Three} alt="" />
              <img src={Four} alt="" />
              <img src={Five} alt="" />
              <img src={Six} alt="" />
              <img src={Seven} alt="" />
              <img src={Eight} alt="" />
              <img src={Nine} alt="" />
            </div>

            <div className="article">
              {/* Article section is here */}
            </div>

            <button>
              <a
                href="/all-blogs"
                target={"_blank"}
                id="style-2"
                data-replace="More Blogs"
              >
                <span>More Blogs</span>
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <Comment />
      <Footer />
    </>
  );
};

export default LiteracyDay;
