import React from "react";
import "../../style/news/monthlyCoordinationMeeting.css";
import Comment from "../shared/Comment/Comment";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import ImageTwo from "../../images/Blogs-photo/22.02.2024/2.jpeg";
import ImageThree from "../../images/Blogs-photo/22.02.2024/3.jpeg";
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

const MonthlyCoordinationMeeting = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Monthly NGO Coordination Meeting Promotes Transparency and Collaboration`;
  }, []);

  const shareUrl = "https://ashroyangon.org/monthly-ngo-coordination-meeting";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="monthly_coordination_meeting_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              Monthly NGO Coordination Meeting Promotes Transparency and
              Collaboration
            </h6>
            <h2>
              Monthly NGO Coordination Meeting Promotes Transparency and
              Collaboration
            </h2>
            <h3>February 22, 2024</h3>
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
                In a concerted effort to foster transparency, collaboration, and
                mutual understanding among NGOs operating in the Rangamati hill
                tracts, the monthly NGO coordination meeting convened on
                February 22, 2024 at the Rangamati District Commissioner's
                office. Led by Additional District Magistrate Md. Abdullah Al
                Mahmud the gathering saw active participation from various NGO
                representatives.
              </p>

              <p>
                The primary objective of these monthly gatherings is to
                facilitate a platform for NGOs to showcase their organizational
                missions, visions, ongoing projects, and past activities. By
                providing insights into their work, these presentations aim to
                enhance understanding and cooperation among NGOs working within
                the region.
              </p>
              <p>
                During the recent meeting, Ashroy Angon Society's District
                Project Manager, Mr. Shubra Pradip Khisa, delivered an
                insightful presentation on the Out of School Children Education
                Program (OOSCE). Additionally, Mr. Sushovan Chakma, Manager
                Administration, and Manager Organization Development (in
                charge), along with Ms. Shailita Dewan, Deputy Manager,
                Monitoring, were also in attendance, representing Ashroy Angon
                Society.
              </p>
              <p>
                The interactive session included a robust question and answer
                segment, where attendees exchanged valuable insights, tips, and
                suggestions. This engagement not only promotes transparency but
                also fosters a sense of collaboration among NGOs, ultimately
                strengthening their collective impact on the community.
              </p>
              <p>
                These monthly coordination meetings serve as a vital platform
                for enhancing coordination, sharing best practices, and building
                strong partnerships to address the diverse needs of the
                Rangamati hill tracts effectively.
              </p>
            </div>

            <div className="extra_image">
              <img src={ImageTwo} alt="" />
              <img src={ImageThree} alt="" />
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

export default MonthlyCoordinationMeeting;
