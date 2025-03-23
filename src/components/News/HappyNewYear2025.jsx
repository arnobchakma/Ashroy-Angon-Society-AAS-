import React from "react";
import "../../style/news/happyNewYear2025.css";
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

const HappyNewYear2025 = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Happy New Year`;
  }, []);

  const shareUrl = "https://ashroyangon.org/happy-new-year-2025";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="happy_new_year_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              Happy New Year 2025: A Message of Gratitude and Hope
            </h6>
            <h2>
              Happy New Year 2025: A Message of Gratitude and Hope
            </h2>
            <h3>January 1, 2025</h3>
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
              As we enter another New Year, we at ASHROY ANGON SOCIETY extend our heartfelt wishes for a joyful and prosperous 2025 to all our dedicated staff, volunteers, supporters and well wishers. This is a moment to celebrate our achievements that reflect on our journey, and renew our commitment to the meaningful work that defines the vision of our organization.
            </p>
            <p className="my-4">
              <h3 className="font-bold">A Note of Appreciation</h3>
              I, on behalf of the leadership of ASHROY ANGON SOCIETY, thank you for your tireless efforts and commitment. Your passion inspires us every moment. We regard you as the soul of this organization, and we are deeply grateful for everything you do.
            </p>
            <p>
              Let us welcome 2025 with renewed energy and a shared vision for a better tomorrow. May this new year bring you happiness, good health, and success in all your endeavors.
            </p>
            <p className="mt-4">
              <b>Happy New Year 2025</b>
              <br /> <br />
              <b> Warm regards,</b>
              <br />
              <b>Amiya Sagar Chakma</b>
              <br />
              <b>Executive Director</b>
              <br />
              <b>ASHROY ANGON SOCIETY</b>
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

export default HappyNewYear2025;
