import React, { useEffect } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import "../../../style/projects/ainShohayotaActivity.css";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const AinShohayotaProject = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Ain Shohayota Activity`;
  }, []);

  const shareUrl = "https://ashroyangon.org/ain-shohayota-activity";

  return (
    <div>
      <Navbar />
      <TranslateButton />

      <div className="ain_shohayota_activity_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2> Women Entrepreneurs </h2>
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
          <h3>The Ain Shohayota Activity</h3>
          <div className="table_wrapper">
            <table>
              <thead>
                <tr>
                  <th>SL No</th>
                  <th>Name of Content</th>
                  <th colSpan={4}>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Project Name</td>
                  <td colSpan={4}>
                    The Ain Shohayota Activity
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Name of Donor</td>
                  <td colSpan={4}>Young Power in Social Action (YPSA)</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Total Budget:</td>
                  <td colSpan={4}>3,00,000</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Duration</td>
                  <td>Date Started</td>
                  <td>2024 January</td>
                  <td>Date End</td>
                  <td>Still Continue</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Total Beneficiary</td>
                  <td colSpan={4}>100 Women Entrepreneurs</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Project Location</td>
                  <td colSpan={4}>Rangamati Sadar, Rangamamti Hill District</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Main Objectives</td>
                  <td colSpan={4}>
                    To select small women entrepreneurs in Rangamati Sadar
                    Upazila
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Remarks</td>
                  <td colSpan={4}>N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AinShohayotaProject;
