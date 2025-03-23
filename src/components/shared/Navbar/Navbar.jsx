import React, { useState } from "react";
import "../../../style/navbar.css";
import logo from "../../../images/Logo/Logo.png";
import "../../../style/about/missionAndVision.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faAngleRight,
  faHouseCrack,
  faXmark,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenAffiliation, setIsOpenAffiliation] = useState(false);
  const [isOpenFocusArea, setIsOpenFocusArea] = useState(false);
  const [isOpenProject, setIsOpenProject] = useState(false);
  const [isOpenDonor, setIsOpenDonor] = useState(false);
  const [isOpenResource, setIsOpenResource] = useState(false);
  const [isOpenNotice, setIsOpenNotice] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isOpenGovernance, setIsOpenGovernance] = useState(false);
  const [isOpenPolicies, setIsOpenPolicies] = useState(false);
  const [isOpenOngoingProject, setIsOpenOngoingProject] = useState(false);
  const [isOpenCurrentDonor, setIsOpenCurrentDonor] = useState(false);
  const [isOpenExpertTeam, setIsOpenExpertTeam] = useState(false);
  const [isOpenHelpdesk, setIsOpenHelpdesk] = useState(false);
  const [changeNavbar, setChangeNavbar] = useState(false);

  // This is for marquee stop and start (start)
  const marqueeRef = useRef(null);
  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };
  // This is for marquee stop and start (end)

  // This is for When the navbar will be fixed start
  const changeBackground = () => {
    if (window.scrollY >= 120) {
      setChangeNavbar(true);
    } else {
      setChangeNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  // This is for When the navbar will be fixed end

  return (
    <>
      {/* Topbar logo and donation box */}
      <div className="top_bar">
        <div className="container">
          <div className="button_wrapper">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="ashroy_angon_name">
              <h2>Ashroy Angon Society (AAS)</h2>
            </div>
            <div className="donation_box">
              <Link to="/donation">Donate</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar_section">
        {/* <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 99 }}> */}
        <div
          className="nav_background"
          class={
            changeNavbar
              ? "fixed scroll-smooth inset-x-0 top-0 z-50"
              : "bg-gray-700"
          }
        >
          {/* Main Navbar Part */}
          <div className="navbar_wrapper">
            <div className="navbar_container">
              <div className="menu">
                <nav className="navbar">
                  <ul>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon
                          className="homeIcons"
                          icon={faHouseCrack}
                        />
                      </a>
                    </li>
                    <li>
                      <div className="menu_and_caret_wrapper">
                        <Link>
                          About
                          <FontAwesomeIcon
                            className="caretDown"
                            icon={faCaretDown}
                          />
                        </Link>
                      </div>
                      <ul className="dropdown">
                        <li>
                          <Link
                            to="/about/message-from-ed"
                            className="sub-menu-item"
                          >
                            Messages from ED
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/ashroy-angon-background"
                            className=" sub-menu-item"
                          >
                            Ashroy Angon Society Background
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/mission-and-vision"
                            className=" sub-menu-item"
                          >
                            Mission & Vision
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/moto-and-values"
                            className=" sub-menu-item"
                          >
                            Motto & Core Values
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/ashroy-angon-profile"
                            className=" sub-menu-item"
                          >
                            Ashroy Angon Society Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/organogram"
                            className=" sub-menu-item"
                          >
                            Organogram
                          </Link>
                        </li>
                        <li>
                          <div className="sub_menu_and_caret_wrapper">
                            <Link className=" sub-menu-item">
                              Governance & Policies
                            </Link>
                            <FontAwesomeIcon
                              className="sub_dropdown_caret"
                              icon={faAngleRight}
                            />
                          </div>

                          <ul className="second_dropdown">
                            <li>
                              <Link to="/about/constitution">
                                Ashroy Angon Society Constitution
                              </Link>
                            </li>
                            <li>
                              <Link to="/about/audit-system">Audit System</Link>
                            </li>
                            <li>
                              <div className="double_sub_menu_and_caret_wrapper">
                                <Link>Policies</Link>
                                <FontAwesomeIcon
                                  className="double_sub_dropdown_caret"
                                  icon={faAngleRight}
                                />
                              </div>
                              <ul className="third_dropdown">
                                <li>
                                  <Link to="/about/core-policy">
                                    Core Policy
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link
                            to="/about/general-council"
                            className=" sub-menu-item"
                          >
                            General Council
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/executive-council"
                            className=" sub-menu-item"
                          >
                            Executive Council
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/advisory-board"
                            className=" sub-menu-item"
                          >
                            Advisory Board
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/senior-management-team"
                            className=" sub-menu-item"
                          >
                            Senior Management Team (SMT)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="menu_and_caret_wrapper">
                        <Link>
                          Affiliation
                          <FontAwesomeIcon
                            className="caretDown"
                            icon={faCaretDown}
                          />
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <Link to="/affiliation/ngoab">NGOAB</Link>
                        </li>
                        <li>
                          <Link to="/affiliation/social-welfare">
                            Social Welfare
                          </Link>
                        </li>
                        <li>
                          <Link to="/affiliation/join-stock">Joint Stock</Link>
                        </li>
                        <li>
                          <Link to="/affiliation/tin-bin">TIN and BIN</Link>
                        </li>
                        <li>
                          <Link to="/affiliation/trade-license">
                            Trade License
                          </Link>
                        </li>
                        <li>
                          <Link to="/affiliation/sam-and-duns">
                            SAM and DUNS
                          </Link>
                        </li>
                        <li>
                          <Link to="/affiliation/adb-cms-number">
                            ADB CMS Number
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="menu_and_caret_wrapper">
                        <Link>
                          Focus Area
                          <FontAwesomeIcon
                            className="caretDown"
                            icon={faCaretDown}
                          />
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <Link to="/focusArea/focus-area">Focus Area</Link>
                        </li>
                        <li>
                          <Link to="/focusArea/strategic-plan">
                            Our Strategic Plan
                          </Link>
                        </li>
                        <li>
                          <Link to="/focusArea/thematic-issue">
                            Other Thematic Issues
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="menu_and_caret_wrapper">
                        <Link>
                          Projects
                          <FontAwesomeIcon
                            className="caretDown"
                            icon={faCaretDown}
                          />
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <div className="sub_menu_and_caret_wrapper">
                            <Link className="sub-menu-item">
                              Ongoing Projects
                            </Link>
                            <FontAwesomeIcon
                              className="sub_dropdown_caret"
                              icon={faAngleRight}
                            />
                          </div>
                          <ul>
                            <li>
                              <Link to="/projects/the-ain-shohayota-activity">
                                The Ain Shohayota Activity
                              </Link>
                            </li>
                            <li>
                              <Link to="/projects/school-children-education">
                                Out of School Children Education Program
                              </Link>
                            </li>
                            <li>
                              <Link to="/projects/ensure-women-enterpreneur">
                                Ensure Benefit of E-Commerce to Women
                                Entrepreneurs
                              </Link>
                            </li>
                            {/* <li>
                              <Link to="/projects/ain-shohayota-activity">
                                The Ain Shohayota Activity
                              </Link>
                            </li> */}
                            <li>
                              <Link to="/projects/datch-bangla-mobile-banking">
                                Datch-Bangla Mobile Banking by Own Fund
                              </Link>
                            </li>
                            <li>
                              <Link to="/projects/beautification-and-sweing-training-center">
                                Beautification & Sweing Training Center (IGA)
                              </Link>
                            </li>
                            <li>
                              <Link to="/projects/aas-enterprise">
                                AAS Enterprise (IGA)
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/projects/complete-project">
                            Completed Projects
                          </Link>
                        </li>
                        <li>
                          <Link to="">Project Coverage</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="menu_and_caret_wrapper">
                        <Link>
                          Donors
                          <FontAwesomeIcon
                            className="caretDown"
                            icon={faCaretDown}
                          />
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <div className="sub_menu_and_caret_wrapper">
                            <Link>Current Donor</Link>
                            <FontAwesomeIcon
                              className="sub_dropdown_caret"
                              icon={faAngleRight}
                            />
                          </div>
                          <ul>
                            <li>
                              <Link to="/donors/current-donor-ict">
                                Information &amp; Communication Technology
                              </Link>
                            </li>
                            <li>
                              <Link to="/donors/current-donor-bureau">
                                Bureau of Non-Formal Education
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/donors/past-donors">Past Donors</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="menu_and_caret_wrapper">
                        <Link>
                          Resources
                          <FontAwesomeIcon
                            className="caretDown"
                            icon={faCaretDown}
                          />
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <div className="sub_menu_and_caret_wrapper">
                            <Link>Ashroy Angon Society Expert Team</Link>
                            <FontAwesomeIcon
                              className="sub_dropdown_caret"
                              icon={faAngleRight}
                            />
                          </div>
                          <ul>
                            <li>
                              <Link to="/resources/admin-team">Admin Team</Link>
                            </li>
                            <li>
                              <Link to="/resources/finance-team">
                                Finance Team
                              </Link>
                            </li>
                            <li>
                              <Link to="/resources/internal-monitoring-unit">
                                Internal Monitoring Unit
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/resources/professional-volunter">
                            Ashroy Angon Society Professional Volunter
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/aas-vendors-list">
                            Ashroy Angon Society Vendors List
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/photo-gallery">
                            Photo Gallery
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/annual-report">
                            Annual Report
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/audit-report">Audit Report</Link>
                        </li>
                        <li>
                          <Link to="/resources/project-completion-report">
                            Project Completion Report
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/management-report">
                            Management Report
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="menu_and_caret_wrapper">
                        <Link>
                          Notice Board
                          <FontAwesomeIcon
                            className="caretDown"
                            icon={faCaretDown}
                          />
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <Link to="/noticeBoard/upcoming-event">
                            Upcoming Events
                          </Link>
                        </li>
                        <li>
                          <Link to="/noticeBoard/office-notice">
                            Office Notice
                          </Link>
                        </li>
                        <li>
                          <Link to="/noticeBoard/tender-notice">
                            Tenders Notice
                          </Link>
                        </li>
                        <li>
                          <Link to="/noticeBoard/quotation-notice">
                            Quotation Notice
                          </Link>
                        </li>
                        <li>
                          <Link to="/noticeBoard/job-circular">
                            Job Circular
                          </Link>
                        </li>
                        <li>
                          <Link to="/noticeBoard/written-text-result">
                            Written Test Result
                          </Link>
                        </li>
                        <li>
                          <Link to="/noticeBoard/short-listed-candidates">
                            Short Listed Candidates
                          </Link>
                        </li>
                        <li>
                          <Link to="/noticeBoard/interview-and-final-result">
                            Interview and Final Result
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="menu_and_caret_wrapper">
                        <Link>
                          Helpdesk
                          <FontAwesomeIcon
                            className="caretDown"
                            icon={faCaretDown}
                          />
                        </Link>
                      </div>
                      <ul>
                        <li>
                          <Link to="/helpdesk/ashroy-angon-citizen-charter">
                            Ashroy Angon Society Citizen Charter
                          </Link>
                        </li>
                        <li>
                          <Link to="/helpdesk/emergency-call">
                            Emergency Call
                          </Link>
                        </li>
                        <li>
                          <Link to="/helpdesk/complain">Complain</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="menu_and_caret_wrapper">
                        <Link to="/contact">Contact</Link>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {/* News Update Section */}
          <div className="news_update_section">
            <div className="container">
              <div className="content_wrapper">
                <button>Update</button>
                <marquee
                  behavior="scroll"
                  direction="left"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  ref={marqueeRef}
                >
                  <a
                    href="/happy-new-year-2025"
                    target={"_blank"}
                  >
                    "Happy New Year 2025: A Message of Gratitude and Hope ***
                  </a>
                  <a
                    href="/inspection-of-learning-centers-activities-of-Out-of-School-Children-Education-Program-PEDP-4"
                    target={"_blank"}
                  >
                    "Inspection of Learning Centers Activities of “Out of School Children Education Program” PEDP-4 ***
                  </a>
                  <a
                    href="/project-inception-workshop-ain-shohayota-activity"
                    target={"_blank"}
                  >
                    "The USAID Ain Shahayota Activity Project Inception Workshop in Rangamati Hill Tracts ***
                  </a>
                  <a
                    href="/international-literacy-day-2024"
                    target={"_blank"}
                  >
                    "Colorful rally to celebrate International Literacy Day 2024 ***
                  </a>
                  <a
                    href="/Humanitarian-Aid-Distribution-to-the-flood-affected-families"
                    target={"_blank"}
                  >
                    "Humanitarian Aid Distribution to the flood affected families at Toi-Chakma Dosarpara ***
                  </a>
                  <a
                    href="/Flash-flood-and-landslide-in-rangamati"
                    target={"_blank"}
                  >
                    "Recent Flash Flood and Landslide in Rangamati ***
                  </a>
                  <a
                    href="/Ashroy-Angon-Society-has-celebrated-National-Independence-Day"
                    target={"_blank"}
                  >
                    "Ashroy Angon Society has celebrated National Independence
                    Day ***
                  </a>
                  <a
                    href="/104th-birthday-of-bongobondhu-sheikh-mujibur-rahman"
                    target={"_blank"}
                  >
                    "Celebrating the 104th Birthday of Jatir Jonok Bongobondhu
                    Sheikh Mujibur Rahman ***
                  </a>
                  <a
                    href="/visit-shikon-kendros-of-ashroy-angon-society"
                    target={"_blank"}
                  >
                    "Upazila Nirbahi Officer, Rangamati Sadar Mr. Mostafa Jabed
                    Kaychar's Visit to Sikhon Kendras of Ashroy Angon Society
                    ***
                  </a>
                  <a href="/monthly-ngo-coordination-meeting" target={"_blank"}>
                    "Monthly NGO Coordination Meeting Promotes Transparency and
                    Collaboration ***
                  </a>
                  <a
                    href="/international-mother-language-day"
                    target={"_blank"}
                  >
                    "International Mother Language Day, 21st February, a Tribute
                    to Linguistic Heritage and Cultural Identity" ***
                  </a>
                  {/* <a href="/exchange-meeting" target={"_blank"}>
                    "An exchange meeting of staffs of "Out of School Children
                    Education Program", Betbunia and Fatikchari unions" ***
                  </a> */}
                  {/* <a
                    href="/coordination-meeting-with-upazila-project-managers"
                    target={"_blank"}
                  >
                    "The Out of School Children Education Program held a crucial
                    coordination meeting at the head office" ***
                  </a> */}
                  {/* <a href="/happy-new-year" target={"_blank"}>
                    "Embracing Joy and Hope: Welcoming the Arrival of Happy New
                    Year 2024" ***
                  </a> */}
                  {/* <a href="/sixteen-december" target={"_blank"}>
                    "Bangladesh Triumphs: Victory Day Celebrations Commemorate
                    Freedom and Resilience"
                  </a>
                  <a href="/fifteen-august-news" target={"_blank"}>
                    "15th August National Mourning Day 2023 Asharya Angon
                    Society tribute to the father of the nation"
                  </a> */}
                </marquee>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Toggle Menu Icon */}
        <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 99 }}>
          <div className="mobile_icon icons">
            <div className="container">
              <button
                className="mobile_icon_bar"
                onClick={() => setIsShow(!isShow)}
              >
                {!isShow && <FontAwesomeIcon className="icon" icon={faBars} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navbar Part */}
        {isShow && (
          <div className="mobile_nav_section">
            <div className="container">
              <nav>
                <button
                  className="mobile_icon_close_bar"
                  onClick={() => setIsShow(!isShow)}
                >
                  {isShow && (
                    <FontAwesomeIcon className="close_icon" icon={faXmark} />
                  )}
                </button>
                <ul>
                  <li>
                    <div
                      onClick={() => setIsOpenAbout(!isOpenAbout)}
                      className="mobileMenu_and_caret_wrapper"
                    >
                      <Link>About</Link>
                      {isOpenAbout ? (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretUp}
                        />
                      ) : (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretDown}
                        />
                      )}
                    </div>

                    {isOpenAbout && (
                      <ul className="dropdown">
                        <li>
                          <Link
                            to="/about/message-from-ed"
                            className="sub-menu-item"
                          >
                            Messages from ED
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/ashroy-angon-background"
                            className="sub-menu-item"
                          >
                            Ashroy Angon Society Background
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/mission-and-vision"
                            className="sub-menu-item"
                          >
                            Mission & Vision
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/moto-and-values"
                            className="sub-menu-item"
                          >
                            Motto & Core Values
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/ashroy-angon-profile"
                            className=" sub-menu-item"
                          >
                            Ashroy Angon Society Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/organogram"
                            className=" sub-menu-item"
                          >
                            Organogram
                          </Link>
                        </li>
                        <li>
                          <div
                            onClick={() =>
                              setIsOpenGovernance(!isOpenGovernance)
                            }
                            className="sub_mobileMenu_and_caret_wrapper"
                          >
                            <Link className="dropdown_font_color">
                              Governance & Policies
                            </Link>
                            {isOpenGovernance ? (
                              <FontAwesomeIcon
                                className="sub_caretDown"
                                icon={faCaretUp}
                              />
                            ) : (
                              <FontAwesomeIcon
                                className="sub_caretDown"
                                icon={faCaretDown}
                              />
                            )}
                          </div>
                          {isOpenGovernance && (
                            <ul className="second_dropdown">
                              <li>
                                <Link to="/about/constitution">
                                  Ashroy Angon Society Constitution
                                </Link>
                              </li>
                              <li>
                                <Link to="/about/audit-system">
                                  Audit System
                                </Link>
                              </li>
                              <li>
                                <div
                                  onClick={() =>
                                    setIsOpenPolicies(!isOpenPolicies)
                                  }
                                  className="double_sub_mobileMenu_and_caret_wrapper"
                                >
                                  <Link className="dropdown_font_color">
                                    Policies & TOR
                                  </Link>
                                  {isOpenPolicies ? (
                                    <FontAwesomeIcon
                                      className="double_sub_caretDown"
                                      icon={faCaretUp}
                                    />
                                  ) : (
                                    <FontAwesomeIcon
                                      className="double_sub_caretDown"
                                      icon={faCaretDown}
                                    />
                                  )}
                                </div>
                                {isOpenPolicies && (
                                  <ul className="third_dropdown">
                                    <li>
                                      <Link to="/about/core-policy">
                                        Core Policy
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </li>
                            </ul>
                          )}
                        </li>
                        <li>
                          <Link
                            to="/about/general-council"
                            className=" sub-menu-item"
                          >
                            General Council
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/executive-council"
                            className=" sub-menu-item"
                          >
                            Executive Council
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/advisory-board"
                            className=" sub-menu-item"
                          >
                            Advisory Board
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/senior-management-team"
                            className=" sub-menu-item"
                          >
                            Senior Management Team (SMT)
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li onClick={() => setIsOpenAffiliation(!isOpenAffiliation)}>
                    <div className="mobileMenu_and_caret_wrapper">
                      <Link> Affiliation</Link>
                      {isOpenAffiliation ? (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretUp}
                        />
                      ) : (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretDown}
                        />
                      )}
                    </div>
                    {isOpenAffiliation && (
                      <ul className="dropdown">
                        <li>
                          <Link to="/affiliation/ngoab">NGOAB</Link>
                        </li>
                        <li>
                          <Link to="/affiliation/social-welfare">
                            Social Welfare
                          </Link>
                        </li>
                        <li>
                          <Link to="/affiliation/join-stock">Joint Stock</Link>
                        </li>
                        <li>
                          <Link to="/affiliation/tin-bin">Tin and Bin</Link>
                        </li>
                        <li>
                          <Link to="/affiliation/trade-license">
                            Trade License
                          </Link>
                        </li>
                        <li>
                          <Link to="/affiliation/sam-and-duns">
                            SAM and DUNS
                          </Link>
                        </li>
                        <li>
                          <Link to="/affiliation/adb-cms-number">
                            ADB CMS Number
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li onClick={() => setIsOpenFocusArea(!isOpenFocusArea)}>
                    <div className="mobileMenu_and_caret_wrapper">
                      <Link to="">Focus Area</Link>
                      {isOpenFocusArea ? (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretUp}
                        />
                      ) : (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretDown}
                        />
                      )}
                    </div>
                    {isOpenFocusArea && (
                      <ul>
                        <li>
                          <Link to="/focusArea/focus-area">Focus Area</Link>
                        </li>
                        <li>
                          <Link to="/focusArea/strategic-plan">
                            Our Strategic Plan
                          </Link>
                        </li>
                        <li>
                          <Link to="/focusArea/thematic-issue">
                            Other Thematic Issues
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div
                      onClick={() => setIsOpenProject(!isOpenProject)}
                      className="mobileMenu_and_caret_wrapper"
                    >
                      <Link>Projects</Link>
                      {isOpenProject ? (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretUp}
                        />
                      ) : (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretDown}
                        />
                      )}
                    </div>
                    {isOpenProject && (
                      <ul>
                        <li>
                          <div
                            onClick={() =>
                              setIsOpenOngoingProject(!isOpenOngoingProject)
                            }
                            className="sub_mobileMenu_and_caret_wrapper"
                          >
                            <Link className="dropdown_font_color">
                              Ongoing Project
                            </Link>
                            {isOpenOngoingProject ? (
                              <FontAwesomeIcon
                                className="sub_caretDown"
                                icon={faCaretUp}
                              />
                            ) : (
                              <FontAwesomeIcon
                                className="sub_caretDown"
                                icon={faCaretDown}
                              />
                            )}
                          </div>
                          {isOpenOngoingProject && (
                            <ul>
                              <li>
                                <Link to="/projects/the-ain-shohayota-activity">
                                  The Ain Shohayota Activity
                                </Link>
                              </li>
                              <li>
                                <Link to="/projects/school-children-education">
                                  Out of School Children Education Program
                                </Link>
                              </li>
                              <li>
                                <Link to="/projects/ensure-women-enterpreneur">
                                  Ensure Benefit of E-Commerce to Women
                                  Entrepreneurs
                                </Link>
                              </li>
                              <li>
                                <Link to="/projects/ain-shohayota-activity">
                                  The Ain Shohayota Activity
                                </Link>
                              </li>
                              <li>
                                <Link to="/projects/datch-bangla-mobile-banking">
                                  Datch-Bangla Mobile Banking by Own Fund
                                </Link>
                              </li>
                              <li>
                                <Link to="/projects/beautification-and-sweing-training-center">
                                  Beautification & Sweing Training Center (IGA)
                                </Link>
                              </li>
                              <li>
                                <Link to="/projects/aas-enterprise">
                                  AAS Enterprise (IGA)
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                        <li>
                          <Link to="/projects/complete-project">
                            Complete Project
                          </Link>
                        </li>
                        <li>
                          <Link to="">Project Coverage</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div
                      onClick={() => setIsOpenDonor(!isOpenDonor)}
                      className="mobileMenu_and_caret_wrapper"
                    >
                      <Link>Donors</Link>
                      {isOpenDonor ? (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretUp}
                        />
                      ) : (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretDown}
                        />
                      )}
                    </div>
                    {isOpenDonor && (
                      <ul>
                        <li>
                          <div
                            onClick={() =>
                              setIsOpenCurrentDonor(!isOpenCurrentDonor)
                            }
                            className="sub_mobileMenu_and_caret_wrapper"
                          >
                            <Link className="dropdown_font_color">
                              Current Donor
                            </Link>
                            {isOpenCurrentDonor ? (
                              <FontAwesomeIcon
                                className="sub_caretDown"
                                icon={faCaretUp}
                              />
                            ) : (
                              <FontAwesomeIcon
                                className="sub_caretDown"
                                icon={faCaretDown}
                              />
                            )}
                          </div>
                          {isOpenCurrentDonor && (
                            <ul>
                              <li>
                                <Link to="/donors/current-donor-ict">
                                  Information &amp; Communication Technology
                                </Link>
                              </li>
                              <li>
                                <Link to="/donors/current-donor-bureau">
                                  Bureau of Non-Formal Education
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                        <li>
                          <Link to="/donors/past-donors">Past Donor</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div
                      onClick={() => setIsOpenResource(!isOpenResource)}
                      className="mobileMenu_and_caret_wrapper"
                    >
                      <Link>Resources</Link>
                      {isOpenResource ? (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretUp}
                        />
                      ) : (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretDown}
                        />
                      )}
                    </div>
                    {isOpenResource && (
                      <ul>
                        <li>
                          <Link to="">Award Of Ashroy Angon Society</Link>
                        </li>
                        <li>
                          <div
                            onClick={() =>
                              setIsOpenExpertTeam(!isOpenExpertTeam)
                            }
                            className="sub_mobileMenu_and_caret_wrapper"
                          >
                            <Link className="dropdown_font_color">
                              Ashroy Anogn Expert Team
                            </Link>
                            {isOpenExpertTeam ? (
                              <FontAwesomeIcon
                                className="sub_caretDown"
                                icon={faCaretUp}
                              />
                            ) : (
                              <FontAwesomeIcon
                                className="sub_caretDown"
                                icon={faCaretDown}
                              />
                            )}
                          </div>
                          {isOpenExpertTeam && (
                            <ul>
                              <li>
                                <Link to="resources/admin-team">
                                  Admin Team
                                </Link>
                              </li>
                              <li>
                                <Link to="resources/finance-team">
                                  Finance Team
                                </Link>
                              </li>
                              <li>
                                <Link to="resources/internal-monitoring-unit">
                                  Internal Monitoring Unit
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                        <li>
                          <Link to="/resources/professional-volunter">
                            Ashroy Anogn Professional Volunter
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/aas-vendors-list">
                            Ashroy Angon Society Vendors List
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/photo-gallery">
                            Photo Gallery
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/annual-report">
                            Annual Report
                          </Link>
                        </li>
                        <li>
                          <Link to="/resources/audit-report">Audit Report</Link>
                        </li>
                        <li>
                          <Link to="/resources/management-report">
                            Management Report
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div
                      onClick={() => setIsOpenNotice(!isOpenNotice)}
                      className="mobileMenu_and_caret_wrapper"
                    >
                      <Link>Notice Board</Link>
                      {isOpenNotice ? (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretUp}
                        />
                      ) : (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretDown}
                        />
                      )}
                    </div>
                    {isOpenNotice && (
                      <ul>
                        <li>
                          <Link to="/noticeBoard/upcoming-event">
                            UpComing Events
                          </Link>
                        </li>
                        <li>
                          <Link to="/noticeBoard/office-notice">
                            Office Notice
                          </Link>
                        </li>
                        <li>
                          <Link to="/noticeBoard/tender-notice">
                            Tender Notice
                          </Link>
                        </li>
                        <li>
                          <Link to="/noticeBoard/quotation-notice">
                            Quotation Notice
                          </Link>
                        </li>
                        <li>
                          <Link to="/noticeBoard/job-circular">
                            Job Circular
                          </Link>
                        </li>
                        <li>
                          <Link to="/noticeBoard/written-text-result">
                            Written Test Result
                          </Link>
                        </li>
                        <li>
                          <Link to="/noticeBoard/short-listed-candidates">
                            Short Listed Candidates
                          </Link>
                        </li>
                        <li>
                          <Link to="/noticeBoard/interview-and-final-result">
                            Interview and Final Result
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div
                      onClick={() => setIsOpenHelpdesk(!isOpenHelpdesk)}
                      className="mobileMenu_and_caret_wrapper"
                    >
                      <Link>Helpdesk</Link>
                      {isOpenHelpdesk ? (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretUp}
                        />
                      ) : (
                        <FontAwesomeIcon
                          className="caretDown"
                          icon={faCaretDown}
                        />
                      )}
                    </div>
                    {isOpenHelpdesk && (
                      <ul>
                        <li>
                          <Link to="/helpdesk/aas-citizen-charter">
                            Ashroy Angon Society Citizen Charter
                          </Link>
                        </li>
                        <li>
                          <Link to="/helpdesk/emergency-call">
                            Emergency Call
                          </Link>
                        </li>
                        <li>
                          <Link to="/helpdesk/complain">Complain</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                    className="last_menu"
                    onClick={() => setIsOpenContact(!isOpenContact)}
                  >
                    <div className="mobileMenu_and_caret_wrapper">
                      <Link to="/contact">Contact </Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
        {/* </div> */}
      </div>
    </>
  );
};

export default Navbar;
