import React from "react";
import "../../style/news/aidDistributionForFlood.css";
import Comment from "../shared/Comment/Comment";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import One from "../../images/Blogs-photo/27.03.2024/One.jpg";
import Two from "../../images/Blogs-photo/27.03.2024/Two.jpg";
import Three from "../../images/Blogs-photo/27.03.2024/Three.jpg";
import Four from "../../images/Blogs-photo/27.03.2024/Four.jpg";
import Five from "../../images/Blogs-photo/27.03.2024/Five.jpg";
import Six from "../../images/Blogs-photo/27.03.2024/Six.jpg";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { useEffect } from "react";
import TranslateButton from "../TranslateButton/TranslateButton";

const AidDistributionForFlood = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Humanitarian Aid Distribution to the flood affected families`;
  }, []);

  const shareUrl =
    "https://ashroyangon.org/Humanitarian-Aid-Distribution-to-the-flood-affected-families";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="aid_distribution_section">
        <div className="blog_title">
          <div className="container">
            <h6>
              Humanitarian Aid Distribution to the flood affected families at Toi-Chakma Dosarpara in Naniarchar Upazila of Rangamati District
            </h6>
            <h2>
              Humanitarian Aid Distribution to the flood affected families at Toi-Chakma Dosarpara in Naniarchar Upazila of Rangamati District
            </h2>
            <h3>August 26, 2024</h3>
          </div>
        </div>
        <div className="image_part">
          <div className="header_image"></div>
          {/* Social Share Section Start */}
          <div className="social_share_wrapper">
            <div className="container">
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
          {/* Social Share Section End */}
        </div>
        <div className="content_wrapper">
          <div className="container">



            <div className="article">
              <h4>Background of the event</h4>
              <p>Due to several days of heavy rainfall and flash floods from the hills during the second half of August 2024,
                many upazila of Rangamati district particularly Baghaichhari upazila in Rangamati has been severely affected
                by floods. According to the district administration, 30 villages in 81 unions and 1 municipality have been
                submerged in floodwaters.
              </p>
              <p>Approximately 30,000 families, totaling 1,00,000 people, are now trapped in floodwaters. Additionally,
                there have been landslides on three major roads: Rangamati-Chittagong, Ghagra-Boraiyachhari-Bandarban,
                and Rangamati-Khagrachhari. Landslides have occurred at 21 locations, and the Kengalchhari area of the
                Rangamati-Khagrachhari road has been flooded, resulting in road closures. Local residents said that the
                low-lying areas of Baghaichhari upazila, including Sadar, Rupkari union, Baghaihat union, Sajek union,
                Marishya union, Baghaihat municipality, Khedarmara union, and several neighborhoods within the
                municipality such as Old Marishya, Master Para, Dhebar Para, Madhyama Para, West Muslim Block, College
                Para, Muslim Block, Madrasa Para, Haji Para, Babu Para, F Block, Kachalong Bazar, Bottali, and Lailya
                Ghonas, have been flooded.</p>
              <p>Residents of Baghaichhari, said that the water level of the Kachalong River has risen due to heavy rainfall
                in recent days, leading to flooding in Sajek, Rupkari, and parts of the Baghaichhari municipality. As a result,
                thousands of people have been trapped by the rising waters. The district administration has provided relief
                supplies, and efforts are being made to distribute dry food to those affected.</p>
              <p>Under this context, Ashroy Angon Society (AAS) has taken initiatives and extended its humanitarian
                support to save lives in the flood affected region. As part of this noble endeavor, AAS has organized the
                “Humanitarian Aid for Flood Victims” program to response immediately for the flood affected people.</p>
              <p>On 26 August 2024, Ashroy Angon Society (AAS) organized a humanitarian aid distribution event in
                Ghilachari Union, located in the Naniarchar Upazila of Rangamati district. The event aimed to provide
                much-needed relief to the flood-affected families in this region. A total of 100 flood-affected individuals
                received essential supplies through this initiative, reinforcing AAS’s commitment to supporting
                communities in times of crisis.</p>

              <h4>Event Highlights</h4>
              <p>The aid distribution took place amidst a backdrop of community resilience and unity. Representatives
                from AAS, along with local volunteers, gathered at a designated distribution point where families had
                assembled in anticipation. Each recipient was provided with a comprehensive aid package containing daily
                necessities. The packages included:</p>
              <table>
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Items</th>
                    <th>Particular</th>
                    <th>Quantity per family</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Rice</td>
                    <td>A staple food item to ensure sustenance for the
                      families during these difficult times
                    </td>
                    <td>20 kg</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Oil</td>
                    <td>Essential cooking oil to meet their dietary needs
                    </td>
                    <td>2 Lit</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Pasted Fish Spice</td>
                    <td>A key ingredient in local cuisine, ensuring that
                      families could maintain some semblance of normalcy
                      in their meals
                    </td>
                    <td>1 Kg</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Dal (Lentils) </td>
                    <td>A source of protein, crucial for maintaining nutritional balance
                    </td>
                    <td>1 Kg</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Sanitary Napkins </td>
                    <td>To ensure the health and hygiene of women in the
                      affected families
                    </td>
                    <td>5 pkt</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Clothes</td>
                    <td>To replace garments lost or damaged during the floods
                    </td>
                    <td>2 pcs (lungi, pinon)</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Soaps and Detergents</td>
                    <td>Essential for maintaining personal and household
                      hygiene
                    </td>
                    <td>5 pcs</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Primary Healthcare Medicines</td>
                    <td>To address immediate health concerns and prevent
                      the spread of waterborne diseases
                    </td>
                    <td>Paracetamol- 10 pcs, Imotil – 10 pcs, ORS – 10 pcs, Bandage – 1 pkt, Hand Sanitizer– 500 ml</td>
                  </tr>
                </tbody>
              </table>

              <p className="mt-5">The distribution was carried out with a focus on dignity and respect, ensuring that each individual received
                the aid they needed. AAS volunteers worked tirelessly to organize the aid packages and ensure an orderly
                distribution process. The beneficiaries expressed their gratitude, with many highlighting the critical nature
                of the support provided.</p>

              <h4>Testimonials</h4>
              <p>One recipient shared, "The floods took away everything we had. This aid will help us get through the next
                few weeks as we work to rebuild our lives. We are thankful to Ashroy Angon Society for standing by us
                in this time of need."</p>
              <p>Another beneficiary stated, "The sanitary napkins and medicines are a great help. These are things that
                are often overlooked in aid distributions, but they are so important for our health. My heartfelt gratitude
                to Ashroy Angon Society."</p>

              <h4>Conclusion</h4>
              <p>The event was a testament to the enduring spirit of the community and the dedication of Ashroy Angon
                Society to making a positive impact on the lives of those affected by natural disasters. As the floodwaters
                recede and the process of rebuilding begins, AAS remains committed to providing ongoing support to the
                people of Ghilachari Union and other affected areas in Rangamati district.</p>

            </div>

            <div className="extra_image">
              <img src={One} alt="" />
              <img src={Two} alt="" />
              <img src={Three} alt="" />
              <img src={Four} alt="" />
              <img src={Five} alt="" />
              <img src={Six} alt="" />
            </div>

            <button>
              <a
                href="/all-blogs"
                target={"_blank"}
                id="style-2"
                data-replace="More Blogs"
              >
                <span>More Blogs</span>
              </a>
            </button>

          </div>
        </div>
      </div>

      {/* Comment Section */}
      <Comment />
      <Footer />
    </>
  );
};

export default AidDistributionForFlood;
