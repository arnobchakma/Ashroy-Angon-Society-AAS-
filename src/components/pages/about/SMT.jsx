import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import amiyaChakmaImage from "../../../images/Photos/amiya-sagor-chakma.jpg";
import MonirulHasan from "../../../images/Photos/Monirul-hasan.jpg";
import SushovanChakma from "../../../images/Photos/Sushovan-chakma.jpg";
import koalKhisa from "../../../images/Photos/koal-khisa.jpg";
import BiplobBanerjee from "../../../images/Photos/biplob-banerjee.jpg";
import BhubonChakma from "../../../images/Photos/Bhubon-bijoy-chakma.jpg";
import KikipruMarma from "../../../images/Photos/Kikipru Marma.jpeg";
// import bikochakmaImage from "../../../images/Photos/biko-chakma.jpg";
// import RupeshChakma from "../../../images/Photos/Rupesh-chakma.jpg";
// import ResleeChakma from "../../../images/Photos/Reslee-chakma.jpg";
// import MuiThuiAungMarma from "../../../images/Photos/Mue-thue-marma.jpg";
// import UchimongMarma from "../../../images/Photos/Uchimong-marma.jpg";
// import PravatTanchangya from "../../../images/Photos/Pravat-Tanchangya.jpg";
import SaikatBarua from "../../../images/Photos/Saikat-barua.jpg";
import ArnobChakma from "../../../images/Photos/Arnob-chakma.jpg";
import UdvasanChakma from "../../../images/Photos/UDAVASAN Chakma.jpg";
import SharanikaChakma from "../../../images/Photos/Sharanika Chakma.jpg";
import ArijitKumarRoy from "../../../images/Photos/Arijit Kumar Roy.jpg";
import NoorEJannat from "../../../images/Photos/Noor-e-jannat.jpg";
import "../../../style/about/smt.css";
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

const SMT = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Senior Management System`;
  }, []);

  const shareUrl = "https://ashroyangon.org/about/senior-management-team";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="senior_management_team_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Senior Management Team</h2>
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
          <div className="title_header">
            <p>
              The Senior Management Team (SMT) provides day to day leadership
              for the organization such as determining strategic, programmatic
              and operational issues and delivery against action plan and budget
              of Ashroy Angon Society's projects/programmes as implementing
              authority of EC. SMT is accountable to EC for outcomes and
              exercise of authority.
            </p>
          </div>

          <div className="Ed_image">
            <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={amiyaChakmaImage} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Amiya Sagar Chakma, MBA</h4>
                  <p>Executive Director</p>
                  {/* <button className="button">
                    <Link
                      className="link_profile"
                      to="/mr-amiya-sagor-chakma-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button> */}
                </div>
              </div>
            </Zoom>
          </div>

          <div className="content_wrapper">
            <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={SushovanChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Sushovan Chakma, MBA</h4>
                  <p>
                    Program Director
                  </p>
                  {/* <button className="button">
                    <Link
                      className="link_profile"
                      to="/mr-sushovan-chakma-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={UdvasanChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Udvasan Chakma, MA</h4>
                  <p>
                    Manager (HRAPL)
                  </p>
                  {/* <button className="button">
                    <Link
                      className="link_profile"
                      to="/mr-sushovan-chakma-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={ArijitKumarRoy} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Arijit Kumar Roy, MA(UK), MEd(DU)</h4>
                  <p>
                    Consultant (Communication & Fund Raising)
                  </p>
                  {/* <button className="button">
                    <Link
                      className="link_profile"
                      to="/mr-sushovan-chakma-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={MonirulHasan} alt="" />
                <div className="title_wrapper">
                  <h4>Md. Monirul Hasan, MBA, PGDPM</h4>
                  <p>Technical Advisor</p>
                  {/* <button className="button">
                    <Link
                      className="link_profile"
                      to="/md-monirul-hasan-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={BiplobBanerjee} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Biplob Banerjee MBA, MSc, MPH</h4>
                  <p>Technical Advisor</p>
                  {/* <button className="button">
                    <Link
                      className="link_profile"
                      to="/mr-shubra-pradip-khisa-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={BhubonChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Bhuban Bijoy Chakma, MBA</h4>
                  <p>Manager, Finance & Accounts</p>
                  {/* <button className="button">
                    <Link
                      className="link_profile"
                      to="/mr-bhuban-bijoy-chakma-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={koalKhisa} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Shubra Prodip Khisa, MA</h4>
                  <p>District Programme Manager</p>
                  <p>Out Of School Children Education Program</p>
                  {/* <button className="button">
                    <Link
                      className="link_profile"
                      to="/mr-shubra-pradip-khisa-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={SaikatBarua} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Saikat Barua, BSS</h4>
                  <p>Admin and Logistic Officer</p>
                  {/* <button className="button">
                    <Link
                      className="link_profile"
                      to="/mr-saikat-barua-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={ArnobChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Arnob Chakma, MA</h4>
                  <p>IT Officer</p>
                  {/* <button className="button">
                    <Link
                      className="link_profile"
                      to="/mr-arnob-chakma-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={KikipruMarma} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Kikipru Marma, MSS</h4>
                  <p>Associate Officer, Communication and Resource Development</p>
                  {/* <p>Out Of School Children Education Program</p> */}
                  {/* <button className="button">
                    <Link
                      className="link_profile"
                      to="/ms-shailita-dewan-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={SharanikaChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Sharanika Chakma, MA</h4>
                  <p>Officer, Documentation and Organization Development</p>
                  {/* <p>Out Of School Children Education Program</p> */}
                  {/* <button className="button">
                    <Link
                      className="link_profile"
                      to="/ms-shailita-dewan-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button> */}
                </div>
              </div>
            </Zoom>

            <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={NoorEJannat} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Noor-E-Jannat, MBA</h4>
                  <p>Assistant Officer, HRAPL & Assistant Accounts Officer</p>
                  {/* <p>Out Of School Children Education Program</p>
                  <button className="button">
                    <Link
                      className="link_profile"
                      to="/ms-shailita-dewan-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button> */}
                </div>
              </div>
            </Zoom>

            {/* <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={ResleeChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Ms. Reslee Chakma, MSc</h4>
                  <p>Upazila Program Manager</p>
                  <p>Rangamati Sadar Upazila</p>
                  <button className="button">
                    <Link
                      className="link_profile"
                      to="/ms-reslee-chakma-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button>
                </div>
              </div>
            </Zoom> */}

            {/* <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={PravatTanchangya} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Pravat Tanchangya, MSS</h4>
                  <p>Upazila Program Manager</p>
                  <p>Kaptai Upazila</p>
                  <button className="button">
                    <Link
                      className="link_profile"
                      to="/mr-pravat-tanchangya-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button>
                </div>
              </div>
            </Zoom> */}

            {/* <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={RupeshChakma} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Rupesh Chakma, MA</h4>
                  <p>Upazila Program Manager</p>
                  <p>Belaichari Upazila</p>
                  <button className="button">
                    <Link
                      className="link_profile"
                      to="/mr-rupesh-chakma-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button>
                </div>
              </div>
            </Zoom> */}

            {/* <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={UchimongMarma} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Uchi Mong Marma, MA</h4>
                  <p>Upazila Program Manager</p>
                  <p>Kawkhali Upazila</p>
                  <button className="button">
                    <Link
                      className="link_profile"
                      to="/mr-uchi-mong-marma-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button>
                </div>
              </div>
            </Zoom> */}

            {/* <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={bikochakmaImage} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Biko Chakma, MA</h4>
                  <p>Upazila Program Manager</p>
                  <p>Jurachari Upazila</p>
                  <button className="button">
                    <Link
                      className="link_profile"
                      to="/mr-biko-chakma-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button>
                </div>
              </div>
            </Zoom> */}

            {/* <Zoom duration={3000}>
              <div className="single_wrapper">
                <img src={MuiThuiAungMarma} alt="" />
                <div className="title_wrapper">
                  <h4>Mr. Mui Thui Aung Marma, MA</h4>
                  <p>Upazila Program Manager</p>
                  <p>Rajasthali Upazila</p>
                  <button className="button">
                    <Link
                      className="link_profile"
                      to="/mr-mui-thui-aung-marma-cv"
                      target={"_blank"}
                    >
                      Click Profile
                    </Link>
                  </button>
                </div>
              </div>
            </Zoom> */}


          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SMT;
