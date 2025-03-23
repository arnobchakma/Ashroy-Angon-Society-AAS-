import React, { useEffect } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import "../../../style/about/ashroyAngonBackground.css";
import Fade from "react-reveal/Fade";
import TranslateButton from "../../TranslateButton/TranslateButton";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const AshroyAngonBackground = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Ashory Angon Background`;
  }, []);

  const shareUrl = "https://ashroyangon.org/about/ashroy-angon-background";

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="background_section">
        <div className="header_image"></div>
        <div className="container">
          {/* Social Share Section Start */}
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
          {/* Social Share Section End */}

          <h2>History Of Ashroy Angon Society (AAS)</h2>

          <div className="content_wrapper">
            <div className="content">
              <Fade bottom duration={2000}>
                <p>
                ASHROY ANGON SOCIETY (AAS), a leading non- governmental development voluntary organization at the Chittagong Hill Tracts (CHT), emerged in 1997 against the backdrop of the CHT’s intricate challenges, striving to empower and uplift the ethnic communities grappling with poverty, unemployment, land disputes, natural disaster and social instability. Initially rooted in the CHT, AAS embarked on a transformative journey, evolving into a pivotal force for change, culminating in its expansion and set its position as a key development player of Dhaka-based nationwide Development Organization in 2022 and diversify its activities to more specialized sectors and services to the suffering humanity with some limited philanthropic activities. AAS is legally registered with several registration authorities including government’s NGO Affairs Bureau of Bangladesh.
                </p>
              </Fade>

              <Fade bottom duration={2000}>
                <p className="for_margin">
                With an unwavering commitment to fostering sustainable development, AAS has expanded its horizons beyond its origins, envisioning a national scope. While retaining its core ethos, the organization has set its sights on extending its reach to communities across Bangladesh. The organization engages in research, analysis, and policy advocacy across various domains; play a crucial role in shaping public policy, fostering innovation, and providing expertise to government, businesses, and the public. AAS endeavors to elevate and upgrade its interventions, broadening its focus to encompass a wider array of regions and populations within the nation.
                </p>
              </Fade>

              <Fade bottom duration={2000}>
                <p>
                Building on its foundational principles, AAS is dedicated to pioneering initiatives that address the multifaceted challenges faced by marginalized populations. Its repositioning as a national Development Organization signifies a strategic shift towards a more expansive and inclusive approach, amplifying efforts in climate-adaptive livelihood, education, health, gender equality, governance, technology and sanitation across diverse landscapes and communities throughout Bangladesh. It has evolved over time, reflecting the changing needs of societies and the complex challenges faced by the people. AAS serves as platform for experts to conduct research, generate ideas, and communicate policy recommendations.
                </p>
              </Fade>

              <Fade bottom duration={2000}>
                <p className="for_margin">
                As it steps into this new phase, AAS remains steadfast in its mission to advance the sustainable development goals on a national scale. Through collaborative partnerships, innovative strategies, and a deep-rooted commitment to empowering communities, AAS endeavors to be at the forefront of transformative change, fostering resilience and prosperity among the most vulnerable populations across Bangladesh. Since the beginning it concentrated mainly on training, appraisal, evaluation and monitoring of development programmes targeting poverty alleviation and socio economic empowerment of the disadvantaged people. In recent years, it has implemented several projects on income generation, income and livelihood, health, education, agriculture, fisheries, child nutrition and human rights. It plans to provide consultancy and monitoring supports to International Organisations, Donor Agencies, NGOs, and Development Agencies in Bangladesh. Such services will be sponsored to help the Development Agencies in identifying their own strength and weaknesses and bring qualitative changes in the Programmes.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AshroyAngonBackground;
