import React from "react";
import "../../style/news/recentFlashFlood.css";
import Comment from "../shared/Comment/Comment";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import One from "../../images/Blogs-photo/22.08.2024/4.jpeg";
import Two from "../../images/Blogs-photo/22.08.2024/5.jpeg";
import Three from "../../images/Blogs-photo/22.08.2024/6.jpeg";
import Four from "../../images/Blogs-photo/22.08.2024/7.jpeg";
import Five from "../../images/Blogs-photo/22.08.2024/8.jpeg";
import Six from "../../images/Blogs-photo/22.08.2024/9.jpeg";
import Seven from "../../images/Blogs-photo/22.08.2024/11.jpeg";
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

const RecentFlashFlood = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Recent Flash Flood and Landslide in Rangamati`;
  }, []);

  const shareUrl =
    "https://ashroyangon.org/Flash-flood-and-landslide-in-rangamati";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="Flash_Flood_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              Recent Flash Flood and Landslide in Rangamati
            </h6>
            <h2>
              Recent Flash Flood and Landslide in Rangamati
            </h2>
            <h3>August 21, 2024</h3>
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
              <img src={One} alt="" />
              <img src={Two} alt="" />
              <img src={Three} alt="" />
              <img src={Four} alt="" />
              <img src={Five} alt="" />
              <img src={Six} alt="" />
              <img src={Seven} alt="" />
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

export default RecentFlashFlood;
