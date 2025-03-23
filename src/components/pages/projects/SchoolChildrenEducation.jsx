import React, { useEffect } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import "../../../style/projects/schoolChildrenEducation.css";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const SchoolChildrenEducation = () => {
  useEffect(() => {
    document.title = `AshroyAngon | School Children`;
  }, []);

  const shareUrl = "https://ashroyangon.org/school-children-education";

  return (
    <div>
      <Navbar />
      <TranslateButton />

      <div className="school_children_education_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2>School Children Education</h2>
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
          <h3>Out of School Children Education Program</h3>
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
                  <td colSpan={4}>Out of School Children Education Program</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Name of Donor</td>
                  <td colSpan={4}>Bureau of Non-Formal Education</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Total Budget:</td>
                  <td colSpan={4}>16,65,00,000</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Duration</td>
                  <td>Date Started</td>
                  <td>June 2021</td>
                  <td>Date End</td>
                  <td>June 2025</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Total Beneficiary</td>
                  <td colSpan={4}>12,600 students</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Project Location</td>
                  <td colSpan={4}>
                    Rajostholi, Kaptai, Belaichari, Kawkhali, Jurachari and
                    Sadar of Rangamati Hill District
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Main Objectives</td>
                  <td colSpan={4}>
                    Selection of school children conducting base line survey
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

export default SchoolChildrenEducation;
