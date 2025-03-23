import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import "../../../style/resource/photoGallery.css";
import imageOne from "../../../images/Gallery/image.jpeg";
import imagetwo from "../../../images/Gallery/image2.jpeg";
import imageThree from "../../../images/Gallery/image3.jpeg";
import imageFour from "../../../images/Gallery/image4.jpeg";
import imageFive from "../../../images/Gallery/image5.jpeg";
import imageSix from "../../../images/Gallery/image6.jpeg";
import imageSeven from "../../../images/Gallery/image7.jpeg";
import imageEight from "../../../images/Gallery/image8.jpeg";
import imageNine from "../../../images/Gallery/image9.jpeg";
import imageTen from "../../../images/Gallery/image10.jpeg";
import imageEleven from "../../../images/Gallery/image11.jpeg";
import imageTwelve from "../../../images/Gallery/image12.jpeg";
import imageThirteen from "../../../images/Gallery/image13.jpeg";
import imageForthteen from "../../../images/Gallery/image14.jpeg";
import imageFifteen from "../../../images/Gallery/image15.jpeg";
import imageSixteen from "../../../images/Gallery/image16.jpeg";
import imageSeventeen from "../../../images/Gallery/image17.jpg";
import imageEighteen from "../../../images/Gallery/image18.jpg";
import TranslateButton from "../../TranslateButton/TranslateButton";

const PhotoGallery = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Photo Gallery`;
  }, []);

  return (
    <>
      <Navbar />
      <div className="gallery_section">
        <div className="container">
          <TranslateButton />
          <h2>Photo Gallery </h2>
          <div className="content_wrapper">

            <div className="single_image_wrapper">
              <img src={imageSeventeen} alt="" />
              <div className="caption">
                <span>
                  Humanitarian Aid Distribution to the flood affected families at Toi-Chakma Dosarpara in Naniarchar Upazila of Rangamati District
                </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageEighteen} alt="" />
              <div className="caption">
                <span>
                  Courtyard of the Ain Shohayota Activity at Sapchari Moddhopara
                </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageOne} alt="" />
              <div className="caption">
                <span>
                  A meeting held for International Literacy Day 2022 in
                  Rangamati Dristrict Office
                </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imagetwo} alt="" />
              <div className="caption">
                <span>
                  GO NGO Coordination Meeting by Ashroy Angon Society for OoSC
                </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageThree} alt="" />
              <div className="caption">
                <span>
                  Offering tribute for National Mourning Day,15th August,2022
                </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageFour} alt="" />
              <div className="caption">
                <span>Shikhon Kendra visited by ED Mr. Amiya Sagar Chakma</span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageFive} alt="" />
              <div className="caption">
                <span>
                  Upazila Information Workshop hosted by Ashroy Angon Society
                </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageSix} alt="" />
              <div className="caption">
                <span>
                  A picture showing teacher teaching the students at a Shikhon
                  kendra
                </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageSeven} alt="" />
              <div className="caption">
                <span>Joyful students after receiving new books</span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageEight} alt="" />
              <div className="caption">
                <span>
                  A regular playing activities for students outside shikhon
                  kendra
                </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageNine} alt="" />
              <div className="caption">
                <span>
                  Offering tribute for National Mourning Day, 15th August, 2023
                </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageTen} alt="" />
              <div className="caption">
                <span>
                  A day-long Workshop on creating marketplace for Local Women
                  Entrepreneurs produce
                </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageEleven} alt="" />
              <div className="caption">
                <span> A regular offical meeting </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageTwelve} alt="" />
              <div className="caption">
                <span>Staff Coordination Meeting </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageThirteen} alt="" />
              <div className="caption">
                <span>GO NGO Coordination Meeting,2023 </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageForthteen} alt="" />
              <div className="caption">
                <span>
                  Closing Ceremony of 12th day long basic workshop for OoSC
                  teachers and Supervisers
                </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageFifteen} alt="" />
              <div className="caption">
                <span>
                  Opening Ceremony of 12th day long basic workshop for OoSC
                  teachers and Supervisers
                </span>
              </div>
            </div>

            <div className="single_image_wrapper">
              <img src={imageSixteen} alt="" />
              <div className="caption">
                <span> Celebration of Sheikh Rasel Day, 2022 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhotoGallery;
