import React from "react";
import "../../style/news/exchangeMeeting.css";
import Comment from "../shared/Comment/Comment";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
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

const ExchangeMeeting = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Exchange Meeting`;
  }, []);

  const shareUrl = "https://ashroyangon.org/exchange-meeting";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="exchange_meeting_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              An exchange meeting of staffs of "Out of School Children Education
              Program", Betbunia and Fatikchari unions
            </h6>
            <h2>
              An exchange meeting of staffs of "Out of School Children Education
              Program", Betbunia and Fatikchari unions
            </h2>
            <h3>January 7, 2024</h3>
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
              An exchange meeting of staffs of "Out of School Children Education
              Program", Betbunia and Fatikchari Unions was held on February 7,
              2024, at 10 am, at Betbunia No. 1 Union Parishad Hall Room. All
              teachers, union supervisors, upazila program manager atteded the
              meeting. The District Program Manager (DPM) and Manager
              Administration and Organization Development of Ashroy Angon
              Society (AAS) attended the meeting .
            </p>
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

export default ExchangeMeeting;
