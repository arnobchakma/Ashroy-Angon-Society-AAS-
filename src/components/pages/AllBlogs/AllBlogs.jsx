import React from "react";
import "../../../style/allBlogs/allBlogs.css";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import TranslateButton from "../../TranslateButton/TranslateButton";
import fifteenAugustImage from "../../../images/15th-august.JPG";
import Victoryday from "../../../images/sixteen-december.JPG";
import augustImage from "../../../images/happy-new-year.jpg";
import CoordinationMeeting from "../../../images/Blogs-photo/03-01-2024/IMG_9167.JPG";
import ExchangeMeeting from "../../../images/Blogs-photo/07.02.2024/exchange-meeting.jpeg";
import MotherLanguageDay from "../../../images/Blogs-photo/21.02.2024/21st-february.JPG";
import MonthlyCoordinationMeeting from "../../../images/Blogs-photo/22.02.2024/1.jpeg";
import VisitMostafaJaber from "../../../images/Blogs-photo/11.03.2024/Cover-image.JPG";
import BongobondhuBirthday from "../../../images/Blogs-photo/17.03.2024/IMG_9430.JPG";
import TwentySixthMarch from "../../../images/Blogs-photo/26.03.2024/3.JPG";
import RecentFlashFlood from "../../../images/Blogs-photo/22.08.2024/10.jpeg";
import AidDistributionForFlood from "../../../images/Blogs-photo/27.03.2024/Cover-Photo.jpg";
import InternationalLiteracyDay from "../../../images/Blogs-photo/08.09.2024/Five.jpg";
import ProjectInception from "../../../images/Blogs-photo/26.11.2024/Photo-1.JPG";
import InceptionOfLearningCenters from "../../../images/Blogs-photo/19.12.2024/For-tumbnail.JPG";
import HappyNewYear2025 from "../../../images/Happy-New-Year-2025.jpg";

const AllBlogs = () => {
  return (
    <>
      <Navbar />
      <TranslateButton />
      <div className="allBlogs_section">
        <h2>All Blogs</h2>
        <div className="container">
          <div className="allBlogs_wrapper">

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a
                  href="/happy-new-year-2025"
                  target={"_blank"}
                >
                  <img src={HappyNewYear2025} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>January 1, 2025</p>
                <a
                  href="/happy-new-year-2025"
                  target={"_blank"}
                >
                  Happy New Year 2025: A Message of Gratitude and Hope
                </a>
              </div>
            </div>

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a
                  href="/inspection-of-learning-centers-activities-of-Out-of-School-Children-Education-Program-PEDP-4"
                  target={"_blank"}
                >
                  <img src={InceptionOfLearningCenters} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>December 19, 2024</p>
                <a
                  href="/inspection-of-learning-centers-activities-of-Out-of-School-Children-Education-Program-PEDP-4"
                  target={"_blank"}
                >
                  Inspection of Learning Centers Activities of “Out of School Children Education Program” PEDP-4
                </a>
              </div>
            </div>

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a
                  href="/project-inception-workshop-ain-shohayota-activity"
                  target={"_blank"}
                >
                  <img src={ProjectInception} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>November 26, 2024</p>
                <a
                  href="/project-inception-workshop-ain-shohayota-activity"
                  target={"_blank"}
                >
                  The USAID Ain Shahayota Activity Project Inception Workshop in Rangamati Hill Tracts
                </a>
              </div>
            </div>

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a
                  href="/international-literacy-day-2024"
                  target={"_blank"}
                >
                  <img src={InternationalLiteracyDay} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>September 08, 2024</p>
                <a
                  href="/international-literacy-day-2024"
                  target={"_blank"}
                >
                  Colorful rally to celebrate International Literacy Day 2024
                </a>
              </div>
            </div>

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a
                  href="/Humanitarian-Aid-Distribution-to-the-flood-affected-families"
                  target={"_blank"}
                >
                  <img src={AidDistributionForFlood} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>August 26, 2024</p>
                <a
                  href="/Humanitarian-Aid-Distribution-to-the-flood-affected-families"
                  target={"_blank"}
                >
                  Humanitarian Aid Distribution to the flood affected families at Toi-Chakma Dosarpara in Naniarchar Upazila of Rangamati District
                </a>
              </div>
            </div>

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a
                  href="/Flash-flood-and-landslide-in-rangamati"
                  target={"_blank"}
                >
                  <img src={RecentFlashFlood} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>August 21, 2024</p>
                <a
                  href="/Flash-flood-and-landslide-in-rangamati"
                  target={"_blank"}
                >
                  Recent Flash Flood and Landslide in Rangamati
                </a>
              </div>
            </div>

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a
                  href="/Ashroy-Angon-Society-has-celebrated-International-Independence-Day"
                  target={"_blank"}
                >
                  <img src={TwentySixthMarch} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>March 26, 2024</p>
                <a
                  href="/Ashroy-Angon-Society-has-celebrated-National-Independence-Day"
                  target={"_blank"}
                >
                  Ashroy Angon Society has celebrated National Independence Day
                  with respect in Sadar and the other six upazilas
                </a>
              </div>
            </div>

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a
                  href="/104th-birthday-of-bongobondhu-sheikh-mujibur-rahman"
                  target={"_blank"}
                >
                  <img src={BongobondhuBirthday} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>March 17, 2024</p>
                <a
                  href="/104th-birthday-of-bongobondhu-sheikh-mujibur-rahman"
                  target={"_blank"}
                >
                  Celebrating the 104th Birthday of Jatir Jonok Bongobondhu
                  Sheikh Mujibur Rahman on 17 th March, 2024
                </a>
              </div>
            </div>

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a
                  href="/visit-shikon-kendros-of-ashroy-angon-society"
                  target={"_blank"}
                >
                  <img src={VisitMostafaJaber} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>March 11, 2024</p>
                <a
                  href="/visit-shikon-kendros-of-ashroy-angon-society"
                  target={"_blank"}
                >
                  Upazila Nirbahi Officer, Rangamati Sadar Mr. Mostafa Jabed
                  Kaychar's Visit to Sikhon Kendras of Ashroy Angon Society
                </a>
              </div>
            </div>

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a href="/monthly-ngo-coordination-meeting" target={"_blank"}>
                  <img src={MonthlyCoordinationMeeting} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>February 22, 2024</p>
                <a href="/monthly-ngo-coordination-meeting" target={"_blank"}>
                  Monthly NGO Coordination Meeting Promotes Transparency and
                  Collaboration
                </a>
              </div>
            </div>

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a href="/international-mother-language-day" target={"_blank"}>
                  <img src={MotherLanguageDay} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>February 21, 2024</p>
                <a href="/exchange-meeting" target={"_blank"}>
                  Ashroy Angon Society Celebrates International Mother Language
                  Day Across Six Upazillas
                </a>
              </div>
            </div>

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a href="/exchange-meeting" target={"_blank"}>
                  <img src={ExchangeMeeting} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>February 7, 2024</p>
                <a href="/exchange-meeting" target={"_blank"}>
                  An exchange meeting of staffs of "Out of School Children
                  Education Program", Betbunia and Fatikchari unions
                </a>
              </div>
            </div>

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a
                  href="/coordination-meeting-with-upazila-project-managers"
                  target={"_blank"}
                >
                  <img src={CoordinationMeeting} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>February 3, 2024</p>
                <a
                  href="/coordination-meeting-with-upazila-project-managers"
                  target={"_blank"}
                >
                  The Out of School Children Education Program project held a
                  crucial coordination meeting at the head office
                </a>
              </div>
            </div>

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a href="/happy-new-year" target={"_blank"}>
                  <img src={augustImage} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>January 1, 2024</p>
                <a href="/happy-new-year" target={"_blank"}>
                  Embracing Joy and Hope: Welcoming the Arrival of Happy New
                  Year 2024" On behalf of Ashroy Angon Society
                </a>
              </div>
            </div>

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a href="/sixteen-december" target={"_blank"}>
                  <img src={Victoryday} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>December 16, 2023</p>
                <a href="/sixteen-december" target={"_blank"}>
                  Bangladesh Triumphs: Victory Day Celebrations Commemorate
                  Freedom and Resilience
                </a>
              </div>
            </div>

            <div className="single_wrapper">
              <div className="image_wrapper">
                <a href="/fifteen-august-news" target={"_blank"}>
                  <img src={fifteenAugustImage} alt="" />
                </a>
              </div>
              <div className="image_title">
                <p>AUGUST 15, 2023</p>
                <a href="/fifteen-august-news" target={"_blank"}>
                  15th August National Mourning Day 2023 Asharya Angan Society
                  tribute to the father of the nation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllBlogs;
