import React from "react";
import "../../style/news/coordinationMeeting.css";
import Comment from "../shared/Comment/Comment";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import GroupImage from "../../images/Blogs-photo/03-01-2024/IMG_9171.JPG";
import GroupImageTwo from "../../images/Blogs-photo/03-01-2024/IMG_9175.JPG";
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

const CoordinationMeeting = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Coordination Meeting with Upazila Project Managers`;
  }, []);

  const shareUrl =
    "https://ashroyangon.org/coordination-meeting-with-upazila-project-managers";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="coordination_meeting_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              The Upazila Project Managers (UPM) of the Out of School Education
              Program project gather at the Ashroy Angon Society (AAS) head
              office for a pivotal coordination meeting
            </h6>
            <h2>
              The Upazila Project Managers (UPM) of the Out of School Education
              Program project gather at the Ashroy Angon Society (AAS) head
              office for a pivotal coordination meeting
            </h2>
            <h3>February 3, 2024</h3>
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
            <p className="margin_top">
              Dynamic collaboration at its core! The Upazila Project Managers
              (UPM) of the Out of School Children Education Program project
              gather at the Ashroy Angon Society (AAS) head office for a pivotal
              coordination meeting on February 3rd, 2024. Led by Mr. Amiya Sagar
              Chakma, Executive Director, and guided by Mr. Shubra Pradip Khisa,
              District Program Manager, the event, enriched by Mr. Sushovan
              Chakma's facilitation, fosters strategic discussions and synergy
              among UPMs and senior staff from six upazilas. Together, they pave
              the way for transformative education initiatives! # Education For
              All # Teamwork # Empowerment
            </p>

            <div className="extra_image">
              <img src={GroupImage} alt="" />
              <img src={GroupImageTwo} alt="" />
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

export default CoordinationMeeting;
