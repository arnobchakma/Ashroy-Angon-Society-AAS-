import React from "react";
import "../../style/news/internationalMotherLanguageDay.css";
import Comment from "../shared/Comment/Comment";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import Group from "../../images/Blogs-photo/21.02.2024/IMG_9224.JPG";
import Sadar from "../../images/Blogs-photo/21.02.2024/Sadar.jpeg";
import RajasthaliUpazila from "../../images/Blogs-photo/21.02.2024/Rajasthali-upazila.jpg";
import RajasthaliSecond from "../../images/Blogs-photo/21.02.2024/RajasthaliSecond.jpg";
import JurachariUpazila from "../../images/Blogs-photo/21.02.2024/Jurachari-upazila.jpg";
import JurachariSecond from "../../images/Blogs-photo/21.02.2024/JurachariSecond.jpg";
import Kaptai from "../../images/Blogs-photo/21.02.2024/Kaptai.jpg";
import Kawkhali from "../../images/Blogs-photo/21.02.2024/Kawkhali.jpg";
import Gagra from "../../images/Blogs-photo/21.02.2024/Gagra.jpg";
import Belaichari from "../../images/Blogs-photo/21.02.2024/Belaichari.jpg";
import Others from "../../images/Blogs-photo/21.02.2024/twenty-first-february-photo.jpg";
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

const InternationlMotherLanguageDay = () => {
  useEffect(() => {
    document.title = `AshroyAngon | International Mother Language Day 2024`;
  }, []);

  const shareUrl = "https://ashroyangon.org/international-mother-language-day";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="mother_manguage_day_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              Ashroy Angon Society Celebrates International Mother Language Day
              Across Six Upazillas
            </h6>
            <h2>
              Ashroy Angon Society Celebrates International Mother Language Day
              Across Six Upazillas
            </h2>
            <h3>February 21, 2024</h3>
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
                On February 21, 2024, Ashroy Angon Society marked International
                Mother Language Day with vibrant celebrations across six
                Upazillas: Rangamati Sadar, Kaptai, Rajasthali, Jurachori,
                Bilaichori, and Kawakhali. Each Upazilla hosted events where
                students showcased their talents through poetry recitals,
                rhymes, and drawing competitions. Winners received awards for
                their outstanding performances.
              </p>

              <p>
                The event, organized by Hechari Upanusthanik Sikhon Kendra, in
                Rangamati Sadar witnessed the presence of Ashroy Angon Society's
                Manager in Administration Organization Development, Mr. Sushovan
                Chakma, and District Programme Manager, Mr. Shubra Prodip Khisa.
                Both dignitaries actively participated, presenting awards to the
                talented students, fostering a spirit of cultural appreciation
                and linguistic diversity.
              </p>
            </div>

            <div className="extra_image">
              <img src={Sadar} alt="" />
              <img src={Group} alt="" />
              <img src={RajasthaliUpazila} alt="" />
              <img src={RajasthaliSecond} alt="" />
              <img src={JurachariUpazila} alt="" />
              <img src={JurachariSecond} alt="" />
              <img src={Kaptai} alt="" />
              <img src={Kawkhali} alt="" />
              <img src={Gagra} alt="" />
              <img src={Belaichari} alt="" />
              <img src={Others} alt="" />
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

export default InternationlMotherLanguageDay;
