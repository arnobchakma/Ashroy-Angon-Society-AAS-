import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import amiyaImage from "../../../images/Photos/amiya-sagor-chakma.jpg";
import mangalImage from "../../../images/Photos/Nandh-Dulal-Barua.jpg";
import amlanChakma from "../../../images/Photos/amlan-chakma.jpg";
import nikilMitraChakma from "../../../images/Photos/nikhil-mitra-chakma.jpg";
import LisaChakma from "../../../images/Photos/Lisa Chakma.jpg";
import ShaplaBarua from "../../../images/Photos/Shapla Barua.jpg";
import LovelyBarua from "../../../images/Photos/Lovely Barua.jpg";
import JuktaChakma from "../../../images/Photos/Jukta Chakma.jpg";
import PromeshChakma from "../../../images/Photos/Promesh Chakma.jpg";
import MaliniChakma from "../../../images/Photos/Malini Chakma.jpg";
import BhubonChakma from "../../../images/Photos/Bhubon-bijoy-chakma.jpg";
import PalasTanchangya from "../../../images/Photos/palas Tanchangya.jpg";
import ChampaTanchangya from "../../../images/Photos/champa-tanchangya.jpg";
import SamsunNahar from "../../../images/Photos/Samsun-nahar.jpg";
import BadhonChakma from "../../../images/Photos/Badhon Chakma.jpg";
import SubrataChakma from "../../../images/Photos/Subrata Chakma.jpg";
import AongcraMarma from "../../../images/Photos/aongcra-marma.jpg";
import NichiDebiChakma from "../../../images/Photos/Nichi Debi Lephsa.jpg";
import UjjolaChakma from "../../../images/Photos/Ujjola Chakma.jpg";
import blankImage from "../../../images/Photos/blank_photo.jpg";
import "../../../style/about/generalCouncil.css";
import Zoom from "react-reveal/Zoom";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const GeneralCouncil = () => {
  useEffect(() => {
    document.title = `AshroyAngon | General Council`;
  }, []);

  const shareUrl = "https://ashroyangon.org/about/general-council";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="general_council_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2> General Council </h2>
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
        {/* Header Background Part End */}

        <div className="container">
          <>
            <h3>Member Of General Council</h3>
            <p>
            All the general members of AAS constitutes the General Council who has right to change/make amendments, declare dysfunction or ‘moving forward’ of the organization. There are 21 enlisted and approved general members at this moment. The zeal to work for the development of the community and having the good track record of professional history are the prerequisites of an individual for becoming a member of General Council. To become a member, one must have a recommendation from one of its existing members and approval of the Executive Body, which is then solemnized in the General Meeting.
            </p>
          </>

          {/* Ed Image */}
          <div className="Ed_image">
            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={amlanChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Amlan Chakma </h4>
                  <p>Chairperson</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>
          </div>

          {/* Another Image */}
          <div className="content_wrapper">
            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={nikilMitraChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Nikhil Mitra Chakma </h4>
                  <p>Vice-Chairperson</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={amiyaImage} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Amiya Sagar Chakma</h4>
                  <p>Executive Director</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={mangalImage} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Nanda Dulal Barua</h4>
                  <p>Treasurer</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={LisaChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Lisa Chakma </h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={ShaplaBarua} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Shapla Barua </h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={LovelyBarua} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Lovely Barua </h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={JuktaChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Jukta Chakma </h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={PromeshChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Promesh Chakma </h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={MaliniChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Malini Chakma </h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={PalasTanchangya} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Palas Tanchangya </h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={BhubonChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Bubhan Bijoy Chakma </h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={ChampaTanchangya} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Champa Tanchangya </h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={SamsunNahar} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Samsun Nahar </h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={BadhonChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Badhon Chakma </h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={SubrataChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Subrata Chakma </h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={AongcraMarma} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Ancra Marma </h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={NichiDebiChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Nichi Debi Lephsa </h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={UjjolaChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Ujjola Chakma </h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_content_wrapper">
                <img src={blankImage} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Sulekha Chakma</h4>
                  <p>Member</p>
                  {/* <p>Education: MBA</p> */}
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GeneralCouncil;
