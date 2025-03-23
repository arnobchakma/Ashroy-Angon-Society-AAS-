import React, { useEffect } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import "../../../style/projects/theAinShohayotaActivity.css";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const TheAinShohayotaActivity = () => {
  useEffect(() => {
    document.title = `AshroyAngon | The Ain Shohayota Activity`;
  }, []);

  const shareUrl = "https://ashroyangon.org/the-ain-shohayota-activity";

  return (
    <div>
      <Navbar />
      <TranslateButton />

      <div className="the_ain_shohayota_activity_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>The Ain Shohayota Activity</h2>
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
          <h3>The Ain Shohayota Activity Project</h3>
          <div className="content_wrapper">
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
                  <td colSpan={4}>The Ain Shohayota Activity</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Name of Donor</td>
                  <td colSpan={4}>USAID, Democracy International</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Total Budget:</td>
                  <td colSpan={4}>$150,000 - $215,000</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Duration</td>
                  <td>Date Started</td>
                  <td>2023</td>
                  <td>Date End</td>
                  <td>2026</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Total Beneficiary</td>
                  <td colSpan={4}>Marginalise and vulnerable people</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Project Location</td>
                  <td colSpan={4}>
                    Rangamati sadar upazila, Kaptai upazila, Kawkhali Upazila and Rajasthali Upazila
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Main Objectives</td>
                  <td colSpan={4}>
                    i) Increase demand for responsive justice services
                    ii) Promote pro-bono legal services
                  </td>
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

export default TheAinShohayotaActivity;
