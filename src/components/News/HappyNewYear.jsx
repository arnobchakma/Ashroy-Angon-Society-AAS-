import React from "react";
import "../../style/news/happyNewYear.css";
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

const HappyNewYear = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Happy New Year`;
  }, []);

  const shareUrl = "https://ashroyangon.org/happy-new-year";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="happy_new_year_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              Embracing Joy and Hope: Welcoming the Arrival of Happy New Year
              2024
            </h6>
            <h2>
              Embracing Joy and Hope: Welcoming the Arrival of Happy New Year
              2024
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
              As the clock strikes midnight, ushering in the much-anticipated
              moment of transition, we stand at the threshold of a brand new
              year—2024. The air is filled with the promise of fresh beginnings,
              and the world collectively exhales, bidding farewell to the
              challenges and triumphs of the past.
            </p>
            <p className="my-4">
              Happy New Year 2024 symbolizes more than just a change in dates;
              it signifies a renewed sense of hope and optimism. As we embark on
              this uncharted journey, there's a palpable energy in the air, a
              collective aspiration for better days ahead. The number 2024
              itself seems to carry a certain charm—a numerical embrace of joy
              and positivity.
            </p>
            <p>
              This New Year invites us to reflect on the lessons learned, to
              cherish the moments that brought smiles to our faces, and to leave
              behind the burdens that no longer serve us. It's a time to set
              intentions for the future, to dream big, and to take confident
              strides toward personal and collective growth.
            </p>
            <p className="mt-4">
              In the tapestry of our lives, each year is a thread, and 2024
              presents an opportunity to weave vibrant colors of joy, kindness,
              and resilience. Let's celebrate the beauty of new beginnings,
              embrace the unknown with open hearts, and welcome the Happy New
              Year 2024 with a spirit of unity, gratitude, and anticipation for
              the wonderful possibilities it holds. Here's to a year filled with
              joy, laughter, and countless moments of happiness. Happy New Year
              2024!
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

export default HappyNewYear;
