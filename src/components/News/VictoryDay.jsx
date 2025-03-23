import React from "react";
import "../../style/news/victoryDay.css";
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

const VictoryDay = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Sixteen December`;
  }, []);

  const shareUrl = "https://ashroyangon.org/sixteen-december";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="victoryDay_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              Bangladesh Triumphs: Victory Day Celebrations Commemorate Freedom
              and Resilience
            </h6>
            <h2>
              Bangladesh Triumphs: Victory Day Celebrations Commemorate Freedom
              and Resilience
            </h2>
            <h3>January 1, 2024</h3>
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
              Bangladesh Victory Day, celebrated on December 16th, holds
              profound significance in the nation's history, marking the triumph
              of the Bangladeshi people in their quest for independence. The day
              commemorates the culmination of the Bangladesh Liberation War in
              1971, which resulted in the emergence of Bangladesh as an
              independent and sovereign nation.
            </p>
            <p className="my-4">
              The roots of the conflict lie in the political and economic
              disparities between East and West Pakistan. The struggle for
              autonomy escalated into a full-scale war as the Pakistani military
              sought to suppress the demands of the Bengali population. The
              conflict, which began in March 1971, witnessed widespread
              atrocities and human rights abuses.
            </p>
            <p>
              On December 16, 1971, the Pakistani military finally surrendered
              to the joint forces of the Indian military and the Mukti Bahini
              (Liberation Army), marking the end of the war and the birth of
              Bangladesh. The Instrument of Surrender was signed in Dhaka by
              Lieutenant General A.A.K. Niazi, the commander of the Pakistani
              Eastern Command, handing over control to the joint forces led by
              Lieutenant General Jagjit Singh Aurora of India.
            </p>
            <p className="mt-4">
              Victory Day is observed with great enthusiasm throughout
              Bangladesh. The day starts with the raising of the national flag
              at the National Memorial in Savar, paying homage to the martyrs
              who sacrificed their lives for the nation's freedom. Parades,
              cultural programs, and events take place across the country,
              emphasizing the spirit of unity, resilience, and patriotism. It
              serves as a time for reflection on the sacrifices made during the
              struggle for independence and a celebration of the nation's
              hard-earned freedom. Victory Day reinforces the ideals of
              democracy, self-determination, and the collective strength of the
              Bangladeshi people in the face of adversity.
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

export default VictoryDay;
