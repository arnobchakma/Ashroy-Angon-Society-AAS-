import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import "../../../style/projects/completeProject.css";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const CompleteProject = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Complete Project`;
  }, []);

  const shareUrl = "https://ashroyangon.org/complete-project";

  return (
    <div>
      <Navbar />
      <TranslateButton />

      <div className="complete_project_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <h2> Completed Projects </h2>
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
          <h3>Our Completed Projects</h3>
          <div className="table_wrapper">
            <table>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Project Name</th>
                  <th>Donor Name</th>
                  <th>Duration</th>
                  <th>Project Ares</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Basic Literacy Project</td>
                  <td>
                    Bureau of Non-Formal Education, Ministry of Primary & Mass
                    education, Bangladesh
                  </td>
                  <td>2018 to 2022</td>
                  <td>Rajasthali Upazila</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    Income Generating activities through Beautification & Sewing
                    Training Center
                  </td>
                  <td>
                    Department of Social Service, Rangamati and Ashroy Angon
                  </td>
                  <td>Since 2017 to continue</td>
                  <td>Rajasthali and Sadar Upazila</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Primary Health Care project in Remote Area (PHCPRA)</td>
                  <td>
                    Ministry of Health & Family Planning Department, Bangladesh
                    and Ashroy Angon Society Initiatives
                  </td>
                  <td>Since 2017 to continue</td>
                  <td>Rangamati Sadar and Kaptai Upazila</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    Community Managed Water Supply and Sanitation Program
                    (CMWSP) for the Rural Poor of the Chittagong Hill Tracts
                  </td>
                  <td>NGO Forum for Drinking Water Supply and Sanitation</td>
                  <td> 2005-2007</td>
                  <td> Ghilachari Union, Rajasthali Upazila, Rangamati</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    Community Managed Water Supply and Sanitation Program
                    (CMWSP) for the Rural Poor of the Chittagong Hill Tracts
                  </td>
                  <td>NGO Forum for Drinking Water Supply and Sanitation</td>
                  <td> 2009-2012</td>
                  <td> Rajasthali Upazila, Rangamati</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Community Empowerment Project</td>
                  <td>UNDP-CHTDF</td>
                  <td> 2005-2008</td>
                  <td> Rajasthali Upazila, Rangamati</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Homestead Food Production Program</td>
                  <td>Helen Keller International (HKI)</td>
                  <td> 2006-2008</td>
                  <td> Bangalhalia and Ghinda Union, Rajasthali Upazila</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Non-Formal Primary Education (1 st Phase)</td>
                  <td>BRAC</td>
                  <td> 2006-2008</td>
                  <td> Rajasthali Upazila, Rangamati</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Non-Formal Primary Education:(2 nd Phase)</td>
                  <td>BRAC</td>
                  <td> 2009-2011</td>
                  <td> Kaptai Upazila, Rangamati</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Non-Formal Primary Education ( 3rd Phase)</td>
                  <td>BRAC</td>
                  <td> 2009-2011</td>
                  <td> Kaptai Upazila, Rangamati</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>CHT-HYSAWA Fund</td>
                  <td>GOB-DANIDA</td>
                  <td> 2010-2011</td>
                  <td> Kaptai Upazila, Rangamati</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>CHT-HYSAWA Fund</td>
                  <td>GOB-DANIDA & Union Porishad</td>
                  <td> 2013-2015</td>
                  <td> Sadar and Jurachari Upazila, Rangamati</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Support to Basic Education in the CHT</td>
                  <td>UNDP-CHTDF</td>
                  <td> 2010-2013</td>
                  <td> Jurachari Upazila,Rangamati</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>
                    Integrated Support to Promote Primary Education in Remote
                    Areas in CHT
                  </td>
                  <td>Manusher Jonno Foundation</td>
                  <td> 2013- 2017</td>
                  <td> Rajasthali Upazila, Rangamati</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Leadership to Ensure Adequate Nutrition (LEAN)</td>
                  <td>United Purpose</td>
                  <td> January 2020 to December 2020</td>
                  <td> Jurachari Upazila, Rangamati</td>
                  <td>N/A</td>
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

export default CompleteProject;
