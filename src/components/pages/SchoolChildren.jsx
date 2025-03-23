import React, { useEffect } from "react";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import "../../style/schoolChildren.css";
import TranslateButton from "../TranslateButton/TranslateButton";
import { Fade } from "react-reveal";
import Comment from "../shared/Comment/Comment";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const SchoolChildren = () => {
  useEffect(() => {
    document.title = `AshroyAngon | School Children`;
  }, []);

  const shareUrl = "https://ashroyangon.org/fifteen-august-news";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="school_children_section">
        <div className="header_image"></div>
        <div className="heading">
          <p className="program">Program</p>
          <h2>Out of School Children Education (OSCE)</h2>
        </div>

        <div className="container">
          <div className="content_wrapper">
            <Fade bottom duration={2000}>
              <p>
                Out of School Children&#39; Program as Second Chance Education
                (SCE) Program under the sub- component 2.5 aims to provide
                primary education through a flexible Non-Formal Education system
                to the out of school children of 8-14 years age group. Ministry
                of Primary and Mass Education, Bangladesh with the overall
                supervision of Bureau of Non-Formal Education is implementing
                the Out of School Children Programme in the country. As part of
                that as implementing support agency Ashroy Angon Society is
                implementing this program in Rangamati Hill District.
              </p>
            </Fade>
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

export default SchoolChildren;
