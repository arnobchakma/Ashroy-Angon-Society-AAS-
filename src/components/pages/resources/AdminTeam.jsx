import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import TranslateButton from "../../TranslateButton/TranslateButton";
import "../../../style/resource/adminTeam.css";
import SushovanChakma from "../../../images/Photos/Sushovan-chakma.jpg";
import SaikatBarua from "../../../images/Photos/Saikat-barua.jpg";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const AdminTeam = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Admin Team`;
  }, []);

  const shareUrl = "https://ashroyangon.org/resources/admin-team";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="admin_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>Admin Team</h2>
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

        <div className="admin_wrapper">
          <div className="container">
            <h2>Admin Members</h2>
            <div className="content_wrapper">
              <div className="single_wrapper">
                <div className="image">
                  <img src={SushovanChakma} alt="" />
                </div>
                <div className="title_wrapper">
                  <h4>Mr. Sushovan Chakma, MBA</h4>
                  <p>
                    Manager Administration and Manager Organization Development
                    (In Charge)
                  </p>
                </div>
              </div>

              <div className="single_wrapper">
                <div className="image">
                  <img src={SaikatBarua} alt="" />
                </div>
                <div className="title_wrapper">
                  <h4>Mr. Saikat Barua, BSS</h4>
                  <p>Admin Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminTeam;
