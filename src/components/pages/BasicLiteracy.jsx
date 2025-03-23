import React, { useEffect } from "react";
import "../../style/navbar.css";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import "../../style/basicLiteracy.css";
import TranslateButton from "../TranslateButton/TranslateButton";
import Comment from "../shared/Comment/Comment";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const BasicLiteracy = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Basic Literacy`;
  }, []);

  const shareUrl = "https://ashroyangon.org/basic-literacy";

  return (
    <>
      <Navbar />
      <div className="basic_literacy_section">
        <div className="header_image"></div>
        <div className="heading">
          <p className="program">Program</p>
          <h2>Basic Literacy</h2>
        </div>
        <div className="container">
          <TranslateButton />
          <div className="content_wrapper">
            <p>
              Basic Literacy Project (64 Districts) is a GOB financed project
              under Ministry of Primary and Mass Education with objectives to
              provide Basic Literacy and Life-Skill to adults of 15-45 age
              group. The main objectives of the programme is to provide basic
              literacy and life skill to targeted illiterate adolscents and
              adults of 15-45 age groups. To contribute in eradication of
              illiteracy from the country. To strengthen the capacity of
              agencies and institutions involved in Non-Formal Education. To
              promote GO- NGO and community collaboration in Non-Formal
              Education. To develop primers in the mother tongues of the ethnic
              group learbers in 3 Hill Districts. To ensure community
              participation and resource mobilization.
            </p>
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

export default BasicLiteracy;

// I doing work with this component. My work is showing component to another page when it click
