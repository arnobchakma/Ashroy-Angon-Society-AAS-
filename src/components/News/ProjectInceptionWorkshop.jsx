import React from "react";
import "../../style/news/projectInceptionWorkshop.css";
import Comment from "../shared/Comment/Comment";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import One from "../../images/Blogs-photo/26.11.2024/Photo-1.JPG";
import Two from "../../images/Blogs-photo/26.11.2024/Photo-2.JPG";
import Three from "../../images/Blogs-photo/26.11.2024/Photo-3.JPG";
import Four from "../../images/Blogs-photo/26.11.2024/Photo-4.JPG";
import Five from "../../images/Blogs-photo/26.11.2024/Photo-5.JPG";
import Six from "../../images/Blogs-photo/26.11.2024/Photo-6.JPG";
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

const ProjectInceptionWorkshop = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Project Inception Workshop on Ain Shohayota Activity `;
  }, []);

  const shareUrl =
    "https://ashroyangon.org/project-inception-workshop-ain-shohayota-activity";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="project_inception_workshop_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              The USAID Ain Shahayota Activity Project Inception Workshop in Rangamati Hill Tracts
            </h6>
            <h2>
              The USAID Ain Shahayota Activity Project Inception Workshop in Rangamati Hill Tracts
            </h2>
            <h3>November 26, 2024</h3>
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
              <p>On November 26, 2024, Ashroy Angon Society (AAS), in partnership with YPSA and with
                technical support from Democracy International, organized a Project Inception Workshop at the
                Rangamati District Judge Court Hall. This initiative is part of the USAID-funded Ain Shahayota
                Activity project, being implemented in four upazilas of Rangamati Hill District. The workshop
                brought together distinguished members of the District Legal Aid Committee (DLAC), senior
                management from Democracy International, YPSA and AAS to introduce the project and its
                objectives.</p>
              <p>The project aims to ensure equitable access to justice for all, particularly
                marginalized communities in the Chittagong Hill Tracts (CHT), by strengthening the capacity of
                the DLAC. Key activities include raising awareness about the Legal Aid Services Act, 2000,
                which provides legal support to individuals unable to access justice due to financial or social
                constraints. The workshop highlighted the project&#39;s focus on fostering inclusivity and
                empowering vulnerable populations in accessing legal aid services.</p>
            </div>

            <div className="extra_image">
              <img src={Two} alt="" />
              <img src={One} alt="" />
              <img src={Three} alt="" />
              <img src={Four} alt="" />
              <img src={Five} alt="" />
              <img src={Six} alt="" />
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

export default ProjectInceptionWorkshop;
