import React from "react";
import "../../style/news/fifteenAugustNews.css";
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

const FifteenAugustNews = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Bangabondhu News`;
  }, []);

  const shareUrl = "https://ashroyangon.org/fifteen-august-news";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="fifteen_august_news_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              On the occasion of 15 August National Mourning Day Participation
              of Asharya Angon Society
            </h6>
            <h2>
              On the occasion of 15 August National Mourning Day Participation
              of Asharya Angon Society
            </h2>
            <h3>August 15, 2023</h3>
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
              August 15th holds historical significance for Bangladesh as it
              marks the National Mourning Day. On this day in 1975, a tragic
              event occurred that has had a profound impact on the country's
              history. Sheikh Mujibur Rahman, the founding leader of Bangladesh
              and the country's first Prime Minister, along with many members of
              his family, was assassinated.
            </p>
            <p className="my-4">
              The assassination was a major turning point in Bangladesh's
              history, leading to a period of political instability and military
              rule. This event has been a source of deep national sorrow and has
              left a lasting impact on the nation.
            </p>
            <p>
              To honor the memory of Sheikh Mujibur Rahman and his family,
              August 15th is observed as a day of mourning and reflection in
              Bangladesh. Various events, such as memorial services,
              discussions, and cultural programs, are organized to pay homage to
              the Father of the Nation and remember the sacrifices made for the
              country's independence.
            </p>
            <p className="mt-4">
              It is essential to note that while this date is a day of mourning
              in Bangladesh, in neighboring India, August 15th is celebrated as
              Independence Day to mark the day when India gained its
              independence from British colonial rule in 1947.
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

export default FifteenAugustNews;
