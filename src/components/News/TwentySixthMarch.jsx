import React from "react";
import "../../style/news/twentySixthMarch.css";
import Comment from "../shared/Comment/Comment";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import One from "../../images/Blogs-photo/26.03.2024/4.JPG";
import Two from "../../images/Blogs-photo/26.03.2024/2.JPG";
import Three from "../../images/Blogs-photo/26.03.2024/1.JPG";
import Sadar from "../../images/Blogs-photo/26.03.2024/Sadar.jpeg";
import Kaptai from "../../images/Blogs-photo/26.03.2024//Kaptai.jpeg";
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

const TwentySixthMarch = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Ashroy Angon Society has celebrated International Independence Day`;
  }, []);

  const shareUrl =
    "https://ashroyangon.org/Ashroy-Angon-Society-has-celebrated-National-Independence-Day";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="twentySixth_march_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              Ashroy Angon Society has celebrated National Independence Day with
              respect in Sadar and the other six upazilas
            </h6>
            <h2>
              Ashroy Angon Society has celebrated National Independence Day with
              respect in Sadar and the other six upazilas
            </h2>
            <h3>March 26, 2024</h3>
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
                On the glorious morning of March 26th, 2024, the Ashroy Angon
                Society marked the International Independence Day with great
                fervor and reverence. The day commenced with the entire head
                office staff paying homage at the Bangabondhu Sheikh Mujibur
                Rahman Mural, laying wreaths to honor the sacrifices made for
                independence.
              </p>

              <p>
                Across the six upazilas where Ashroy Angon operates – Rangamati
                Sadar, Kawkhali, Bilaichori, Rajasthali, Jurachori, and Kaptai –
                similar acts of remembrance took place. Flowers were
                respectfully offered, symbolizing gratitude and respect for the
                freedom fighters.Moreover, every Shikhon Kendra affiliated with
                Ashroy Angon began the day with a patriotic spirit by hoisting
                the national flag high and singing the national anthem with
                utmost pride and unity.
              </p>

              <p>
                The spirit of celebration didn’t stop there. Students
                enthusiastically participated in various sports competitions,
                showcasing their talent and sportsmanship. Additionally,
                captivating displays were arranged, exhibiting the rich cultural
                heritage and patriotic fervor of the nation.
              </p>

              <p>
                The day resonated with a sense of unity, pride, and gratitude
                towards those who fought tirelessly for the independence we
                cherish today. Ashroy Angon Society remains committed to
                upholding the values of freedom and striving for a better
                tomorrow for all.
              </p>
            </div>

            <div className="extra_image">
              <img src={One} alt="" />
              <img src={Two} alt="" />
              <img src={Three} alt="" />
              <img src={Sadar} alt="" />
              <img src={Kaptai} alt="" />
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

export default TwentySixthMarch;
