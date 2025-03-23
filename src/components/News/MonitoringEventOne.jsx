import React from "react";
import "../../style/news/monitoringEventOne.css";
import Comment from "../shared/Comment/Comment";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import One from "../../images/Blogs-photo/11.03.2024/1.JPG";
import Two from "../../images/Blogs-photo/11.03.2024/2.JPG";
import Three from "../../images/Blogs-photo/11.03.2024/3.JPG";
import Four from "../../images/Blogs-photo/11.03.2024/4.JPG";
import Five from "../../images/Blogs-photo/11.03.2024/5.JPG";
import Six from "../../images/Blogs-photo/11.03.2024/6.JPG";
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

const MonitoringEventOne = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Visit Shikon Kendros of Ashroy Angon Society`;
  }, []);

  const shareUrl =
    "https://ashroyangon.org/visit-shikon-kendros-of-ashroy-angon-society";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="monitoring_event_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              Upazila Nirbahi Officer, Rangamati Sadar Mr. Mostafa Jabed
              Kaychar's Visit to Sikhon Kendras of Ashroy Angon Society
            </h6>
            <h2>
              Upazila Nirbahi Officer, Rangamati Sadar Mr. Mostafa Jabed
              Kaychar's Visit to Sikhon Kendras of Ashroy Angon Society
            </h2>
            <h3>March 11, 2024</h3>
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
                On the 11th of March 2024, the Upazila Nirbahi Officer of
                Rangamati Sadar, Mr. Mostafa Jabed Kaychar, graced two Sikhon
                Kendras, namely Poschim Muslim Para Upanusthanik Sikhon Kendra
                and Hatchery Elaka Upanusthanik Sikhon Kendra, with his
                presence. The purpose of his visit was to ensure the adequacy of
                educational resources and to interact with the students.
              </p>

              <p>
                During his visit, Mr. Kaychar meticulously inspected the
                facilities available to the students. He ensured that every
                student had access to essential learning materials such as
                books, blackboards, Sikhon charts, and other necessary registers
                including attendance, CMC registration, and equipment registers.
                His keen attention to detail reflected his commitment to
                providing a conducive learning environment for all students.
              </p>

              <p>
                Moreover, Mr. Kaychar actively engaged with the students during
                his visit. He verified their attendance and encouraged them to
                participate in various educational activities. Notably, he urged
                the students to recite poetry, which they did with enthusiasm.
                The recitation of &#39;Mujib&#39; poetry by the students
                resonated with Mr. Kaychar, who appreciated their efforts.
              </p>

              <p>
                In his interaction with the students, Mr. Kaychar offered words
                of encouragement and wisdom. He emphasized the importance of
                diligent study and urged the students to strive for excellence
                in their academic pursuits. His inspiring words served as a
                reminder to the students that with dedication and hard work,
                they can achieve remarkable success in life.
              </p>
              <p>
                Overall, Mr. Mostafa Jabed Kaychar&#39;s visit to the Sikhon
                Kendras was instrumental in ensuring the provision of quality
                education and motivating the students to pursue their academic
                goals with determination.
              </p>
            </div>

            <div className="extra_image">
              <img src={One} alt="" />
              <img src={Two} alt="" />
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

export default MonitoringEventOne;
