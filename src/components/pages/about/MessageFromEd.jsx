import React from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import "../../../style/about/messageFromEd.css";
import edImage from "../../../images/Photos/amiya-sagor-chakma.jpg";
import { useEffect } from "react";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const MessageFromEd = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Message from ED`;
  }, []);

  const shareUrl = "https://ashroyangon.org/about/message-from-ed";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="message_from_ed_section">
        {/* Header Background Part Start */}
        <div className="header_background">
          <div className="container wrapper">
            <div>
              <p>Message From</p>
              <h2>Executive Director</h2>
            </div>
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
          <div className="content_wrapper">
            <div className="left_content">
              <img src={edImage} alt="" />
              <div className="content">
                <h3>Amiya Sagar Chakma</h3>
                <p>Executive Director</p>
                <p> Ashroy Angon Society</p>
              </div>
            </div>
          </div>

          <div className="ed_article">
            <p>
              It gives me great pleasure to share with you the remarkable
              journey of Ashroy Angon Society (AAS) from its humble beginning to
              current position as a leading force for positive change in
              Bangladesh. Since our inception in 1997, we have been dedicated to
              empowering and uplifting the ethnic communities in the Chittagong
              Hill Tracts (CHT) who have long grappled with poverty,
              unemployment, and social instability.
            </p>

            <p className="top_margin">
              Over the journey of advancing 27 years, AAS has evolved into a
              pivotal player in the development landscape of Bangladesh. Through
              unwavering commitment and tireless effort, we have expanded our
              horizons beyond the CHT, envisioning a national scope to address
              the multifaceted challenges faced by marginalized populations
              across the country. Our journey has been one of the
              transformations, as we have expanded our span countrywide as the
              capital- based national NGO in 2022, diversifying our activities
              to specialized sectors such as institutional health services,
              higher education, skill development, social business, environment,
              women rights and empowerment, Good governance and ICT services.
            </p>

            <p>
              At AAS, we are driven by a vision of creating an inclusive and
              empowered society where all individuals have equal opportunities
              to live in peace and dignity. Our mission is clear: to improve the
              quality of life for our beneficiaries, promote sustainable
              development practices, and enhance access to livelihood
              opportunities, particularly for the marginalized and less
              privileged.
            </p>

            <p className="top_margin">
              As we move forward, we remain committed to our core values of
              integrity, innovation, collaboration, and empowerment. We believe
              in fostering resilience and prosperity among the most vulnerable
              populations, and in contributing to the creation of a &quot;Smart
              Bangladesh&quot; where poverty is reduced, gender equity is
              ensured, and access to social protection is increased.
            </p>

            <p>
              Through collaborative partnerships, innovative strategies, and a
              deep-rooted commitment to empowering communities, AAS is poised to
              lead transformative change in Bangladesh. We are dedicated to
              advancing the Sustainable Development Goals on a national scale,
              and to addressing environmental issues for climate resilience.
            </p>

            <p className="top_margin">
              I invite you to join us on this journey of hope and
              transformation. Together, we can build a brighter future for all.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MessageFromEd;
