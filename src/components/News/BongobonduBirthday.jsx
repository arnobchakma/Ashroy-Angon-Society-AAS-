import React from "react";
import "../../style/news/bongobondhuBirthday.css";
import Comment from "../shared/Comment/Comment";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import One from "../../images/Blogs-photo/17.03.2024/IMG_9415.JPG";
import Two from "../../images/Blogs-photo/17.03.2024/IMG_9423.JPG";
import Three from "../../images/Blogs-photo/17.03.2024/IMG_9434.JPG";
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

const BongobonduBirthday = () => {
  useEffect(() => {
    document.title = `AshroyAngon | 104th Birthday of Jatir Jonok Bongobondhu Sheikh Mujibur Rahman`;
  }, []);

  const shareUrl =
    "https://ashroyangon.org/104th-birthday-of-bongobondhu-sheikh-mujibur-rahman";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="bongobondu_birthday_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              Celebrating the 104th Birthday of Jatir Jonok Bongobondhu Sheikh
              Mujibur Rahman on 17 th March, 2024
            </h6>
            <h2>
              Celebrating the 104th Birthday of Jatir Jonok Bongobondhu Sheikh
              Mujibur Rahman on 17 th March, 2024
            </h2>
            <h3>March 17, 2024</h3>
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
            <div className="article">
              <p className="margin_top">
                The 104th birthday of the beloved Father of the Nation, Jatir
                Jonok Bongobondhu Sheikh Mujibur Rahman, a day that is also
                celebrated as National Child Day. This special occasion holds
                immense significance as we honour the legacy of a leader who
                dedicated his life to the betterment of our nation.
              </p>

              <p>
                The day began with a heartfelt gesture from Ashroy Angon, who
                offered flowers at the tomb of Bongobondhu, paying homage to his
                enduring spirit and vision. Subsequently, celebrations unfolded
                across six Upazilas, each brimming with enthusiasm and
                reverence. In Rangamati Sadar, Kaptai, Rajasthali, Jurachori,
                Bilaichori, and Kawakhali, students from various schools
                showcased their talents through a series of competitions
                centered around depicting Bongobondhu through art. The
                competitions witnessed remarkable creativity and skill as
                students poured their hearts into their drawings, capturing the
                essence of Bongobondhu&#39;s vision and leadership.
              </p>

              <p>
                At the culmination of the events, winners were felicitated with
                awards, recognizing their outstanding performances and
                dedication. These awards serve not only as tokens of
                appreciation but also as encouragement for the youth to continue
                embodying the values championed by Bongobondhu.
              </p>
            </div>

            <div className="extra_image">
              <img src={One} alt="" />
              <img src={Two} alt="" />
              <img src={Three} alt="" />
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

export default BongobonduBirthday;
