import React from "react";
import "../../../style/header.css";
import SubornoJoyonti from "../../../images/Header-Image/Suborno Joyonti OoSC.jpg";
import HeaderOne from "../../../images/Header-Image/Awareness Session on Hygiene.jpg";
import HeaderTwo from "../../../images/Header-Image/Basic Literacy Project.jpg";
import HeaderThree from "../../../images/Header-Image/Community Awareness Program on Importance of Education.jpg";
import HeaderFour from "../../../images/Header-Image/Community Awareness Rally on Water and Sanitation.JPG";
import HeaderFive from "../../../images/Header-Image/Community Empowerment Project_UNDP.jpg";
import HeaderSix from "../../../images/Header-Image/Covid-19 Support through District Administration.jpeg";
import HeaderSeven from "../../../images/Header-Image/Donor and Community Sharing Session.jpg";
import HeaderEight from "../../../images/Header-Image/E-commerce Training to women entreprenures.jpg";
import HeaderNine from "../../../images/Header-Image/Linkage Building Workshop with Local Government.jpg";
import HeaderTen from "../../../images/Header-Image/Menstrual Hygiene Session.jpg";
import HeaderEleven from "../../../images/Header-Image/Non-Formal Primary Education.jpg";
import HeaderTwelve from "../../../images/Header-Image/Popular Theater on Water and Sanitation.JPG";
import HeaderThirteen from "../../../images/Header-Image/Safety Materials distribution during Covid-19.jpg";
import HeaderForteen from "../../../images/Header-Image/School Watsan Program.jpg";
import HeaderFifteen from "../../../images/Header-Image/Volunteer Training on HYSWA.jpg";
import HeaderSixteen from "../../../images/Header-Image/21st-february.JPG";
import HeaderSeventeen from "../../../images/Header-Image/Forth-IVA-Meeting-picture-at-Rangamati-Sadar-Upazila.jpg";
import SeventeenMarch from "../../../images/Header-Image/Seventeen-march-2024.JPG";
import AidDistributionAtNaniarchor from "../../../images/Header-Image/Aid-distribution-at-Naniarchor.jpg";
import AinShohayotaActivity from "../../../images/Header-Image/Courtyard-of-the-ain-shohayota-activity-at-Sapchari-moddhopara.JPG";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Header = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="header_image_section">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={SubornoJoyonti} alt="" />
          <Carousel.Caption className="content">
            <p>
              Great Independence Day 26th March School Inauguration of Out of School Children Education Programme
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={AinShohayotaActivity} alt="" />
          <Carousel.Caption className="content">
            <p>
              Courtyard of the Ain Shohayota Activity at Sapchari Moddhopara
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={AidDistributionAtNaniarchor} alt="" />
          <Carousel.Caption className="content">
            <p>
              Humanitarian Aid Distribution to the flood affected families at Toi-Chakma Dosarpara in Naniarchar Upazila of Rangamati District
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={SeventeenMarch} alt="" />
          <Carousel.Caption className="content">
            <p>
              Celebrating the 104th Birthday of Jatir Jonok Bongobondhu Sheikh
              Mujibur Rahman on 17 th March, 2024
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderSixteen} alt="" />
          <Carousel.Caption className="content">
            <p>
              International Mother Language Day, 21st February, a Tribute to
              Linguistic Heritage and Cultural Identity
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderSeventeen} alt="" />
          <Carousel.Caption className="content">
            <p>
              Ashroy Angon Society presents Dairy Notebook to Mr. Md.Mostafa
              Jabed Kaychar,Upazila Nirbahi Officer,Rangamati Sadar,Rangamati
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderOne} alt="" />
          <Carousel.Caption className="content">
            <p>Awareness Session on Hygiene</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderTwo} alt="" />
          <Carousel.Caption className="content">
            <p>Basic Literacy Project</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderThree} alt="" />
          <Carousel.Caption className="content">
            <p>Community Awareness Program on Importance of Education</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderFour} alt="" />
          <Carousel.Caption className="content">
            <p>Community Awareness Rally on Water and Sanitation</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderFive} alt="" />
          <Carousel.Caption className="content">
            <p>Community Empowerment Project_UNDP</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderSix} alt="" />
          <Carousel.Caption className="content">
            <p>Covid-19 Support through District Administration</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderSeven} alt="" />
          <Carousel.Caption className="content">
            <p>Donor and Community Sharing Session</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderEight} alt="" />
          <Carousel.Caption className="content">
            <p>E-commerce Training to women entreprenures</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderNine} alt="" />
          <Carousel.Caption className="content">
            <p>Linkage Building Workshop with Local Government</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderTen} alt="" />
          <Carousel.Caption className="content">
            <p>Menstrual Hygiene Session</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderEleven} alt="" />
          <Carousel.Caption className="content">
            <p>Non-Formal Primary Education</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderTwelve} alt="" />
          <Carousel.Caption className="content">
            <p>Popular Theater on Water and Sanitation</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderThirteen} alt="" />
          <Carousel.Caption className="content">
            <p>Safety Materials distribution during Covid-19</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderForteen} alt="" />
          <Carousel.Caption className="content">
            <p>School Watsan Program</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={HeaderFifteen} alt="" />
          <Carousel.Caption className="content">
            <p>Volunteer Training on HYSWA</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
