import React from "react";
import "../../style/news/outOfSchoolChildrenEducation.css";
import Comment from "../shared/Comment/Comment";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import One from "../../images/Blogs-photo/19.12.2024/Image-one.JPG";
import Two from "../../images/Blogs-photo/19.12.2024/Image-two.JPG";
import Three from "../../images/Blogs-photo/19.12.2024/Image-three.JPG";
import Four from "../../images/Blogs-photo/19.12.2024/Image-four.jpg";
import Five from "../../images/Blogs-photo/19.12.2024/Image-five.jpg";
import Six from "../../images/Blogs-photo/19.12.2024/Image-six.JPG";
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

const OutOfSchoolChildrenEducation = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Inspection of Learning Centers Activities of “Out of School Children Education Program” PEDP-4 `;
  }, []);

  const shareUrl =
    "https://ashroyangon.org/inspection-of-learning-centers-activities-of-Out-of-School-Children-Education-Program-PEDP-4";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="inception_of_learning_center_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              Inspection of Learning Centers Activities of “Out of School Children Education Program” PEDP-4
            </h6>
            <h2>
              Inspection of Learning Centers Activities of “Out of School Children Education Program” PEDP-4
            </h2>
            <h3>December 19, 2024</h3>
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
              <p>On December 19, 2024, Mr. Tabibur Rahman, Deputy Secretary (Dev-2) of the Ministry of Primary and Mass Education, accompanied by Mr. Mamun Kabir, Assistant Director of BNFE for Rangamati District, Mr. Monjur Ahmed, Assistant Director of BNFE for Bandarban District, and Mr. Amiya Sagar Chakma, Executive Director of Ashroy Angon Society (AAS), conducted an inspection of the Non-Formal Learning Centers under the "Out of School Children Education Program" in Rangamati. </p>
              <p>The centers visited included Lemuchari, Islampur, Rupnogor, Shukorchari, and Khamarpara. The team assessed the progress and activities of the centers, engaging with teachers, students, and guardians. They observed lessons, evaluated students’ reading, spelling, and general knowledge abilities, and reviewed educational materials, learning environments, and attendance records. Students were encouraged to showcase their hobbies, with some performing songs and reciting poetry. The visitors expressed satisfaction with the dedication of the teachers and the program's positive impact on the children, commending the efforts in fostering education and enthusiasm among out-of-school children.</p>
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

export default OutOfSchoolChildrenEducation;
