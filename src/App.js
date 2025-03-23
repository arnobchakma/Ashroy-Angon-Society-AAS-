import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./style/app.css";
import Home from "./components/Home/Home";
import BasicLiteracy from "./components/pages/BasicLiteracy";
import SchoolChildren from "./components/pages/SchoolChildren";
import WomanEnterpreneur from "./components/pages/WomanEnterpreneur";
import MessageFromEd from "./components/pages/about/MessageFromEd";
import MissionAndVision from "./components/pages/about/MissionAndVision";
import AshroyAngonBackground from "./components/pages/about/AshroyAngonBackground";
import AshroyAngonProfile from "./components/pages/about/AshroyAngonProfile";
import GeneralCouncil from "./components/pages/about/GeneralCouncil";
import ExecutiveCouncil from "./components/pages/about/ExecutiveCouncil";
import EnsureWomenEnterpreneur from "./components/pages/projects/EnsureWomenEnterpreneur";
import SchoolChildrenEducation from "./components/pages/projects/SchoolChildrenEducation";
import MotoAndValues from "./components/pages/about/MotoAndValues";
import NgoAb from "./components/pages/affiliation/NgoAb";
import SocialWelfare from "./components/pages/affiliation/SocialWelfare";
import JoinStock from "./components/pages/affiliation/JoinStock";
import TinAndBin from "./components/pages/affiliation/TinAndBin";
import AdvisoryBoard from "./components/pages/about/AdvisoryBoard";
import SMT from "./components/pages/about/SMT";
import Constitution from "./components/pages/about/Constitution";
import AuditSystem from "./components/pages/about/AuditSystem";
import CompleteProject from "./components/pages/projects/CompleteProject";
import Notfound from "./components/shared/Notfound/Notfound";
import PastDonors from "./components/pages/Donors/PastDonors";
import CurrentDonorICT from "./components/pages/Donors/CurrentDonorICT";
import CurrentDonorBureau from "./components/pages/Donors/CurrentDonorBureau";
import Organogram from "./components/pages/about/Organogram";
import FifteenAugustNews from "./components/News/FifteenAugustNews";
import Donation from "./components/pages/Donation";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import PhotoGallery from "./components/pages/resources/PhotoGallery";
import Contact from "./components/pages/Contact/Contact";
import FocusArea from "./components/pages/FocusArea/FocusArea";
import StrategicPlan from "./components/pages/FocusArea/StrategicPlan";
import ThematicIssue from "./components/pages/FocusArea/ThematicIssue";
import ProjectCompletionReport from "./components/pages/resources/ProjectCompletionReport";
import TradeLicense from "./components/pages/affiliation/TradeLicense";
import TenderNotice from "./components/pages/NoticeBoard/TenderNotice";
import Policy from "./components/pages/about/Policy";
import HappyNewYear from "./components/News/HappyNewYear";
import AllBlogs from "./components/pages/AllBlogs/AllBlogs";
import VictoryDay from "./components/News/VictoryDay";
import AdminTeam from "./components/pages/resources/AdminTeam";
import FinanceTeam from "./components/pages/resources/FinanceTeam";
import MonitoringUnit from "./components/pages/resources/MonitoringUnit";
import ProfessionalVolunter from "./components/pages/resources/ProfessionalVolunter";
import AnnualReport from "./components/pages/resources/AnnualReport";
import AuditReport from "./components/pages/resources/AuditReport";
import ManagementReport from "./components/pages/resources/ManagementReport";
import UpcomingEvent from "./components/pages/NoticeBoard/UpcomingEvent";
import CoordinationMeeting from "./components/News/CoordinationMeeting";
import ExchangeMeeting from "./components/News/ExchangeMeeting";
import DatchBanglaBanking from "./components/pages/projects/DatchBanglaBanking";
import BeautificationAndSweing from "./components/pages/projects/BeautificationAndSweing";
import AasEnterprise from "./components/pages/projects/AasEnterprise";
import QuotationNotice from "./components/pages/NoticeBoard/QuotationNotice";
import JobCircular from "./components/pages/NoticeBoard/JobCircular";
import WritenTestResult from "./components/pages/NoticeBoard/WritenTestResult";
import ShortListed from "./components/pages/NoticeBoard/ShortListed";
import InterviewAndFinalResult from "./components/pages/NoticeBoard/InterviewAndFinalResult";
import VendorsList from "./components/pages/resources/VendorsList";
import AasCitizenCharter from "./components/pages/Helpdesk/AasCitizenCharter";
import EmergencyCall from "./components/pages/Helpdesk/EmergencyCall";
import Complain from "./components/pages/Helpdesk/Complain";
import SamAndDuns from "./components/pages/affiliation/SamAndDuns";
import InternationlMotherLanguageDay from "./components/News/InternationlMotherLanguageDay";
import MonthlyCoordinationMeeting from "./components/News/MonthlyCoordinationMeeting";
import MonitoringEventOne from "./components/News/MonitoringEventOne";
import BongobonduBirthday from "./components/News/BongobonduBirthday";
import TwentySixthMarch from "./components/News/TwentySixthMarch";
import OfficeNotice from "./components/pages/NoticeBoard/OfficeNotice";
import AdbCmsNumber from "./components/pages/affiliation/AdbCmsNumber";
import RecentFlashFlood from "./components/News/RecentFlashFlood";
import AidDistributionForFlood from "./components/News/AidDistributionForFlood";
import LiteracyDay from "./components/News/LiteracyDay";
import ProjectInceptionWorkshop from "./components/News/ProjectInceptionWorkshop";
import OutOfSchoolChildrenEducation from "./components/News/OutOfSchoolChildrenEducation";
import HappyNewYear2025 from "./components/News/HappyNewYear2025";
import TheAinShohayotaActivity from "./components/pages/projects/TheAinShohayotaActivity";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic-literacy" element={<BasicLiteracy />} />
        <Route path="/school-children" element={<SchoolChildren />} />
        <Route path="/woman-enterpreneur" element={<WomanEnterpreneur />} />
        <Route path="/donation" element={<Donation />} />

        {/* About */}
        <Route path="/about/message-from-ed" element={<MessageFromEd />} />
        <Route
          path="/about/mission-and-vision"
          element={<MissionAndVision />}
        />
        <Route
          path="/about/ashroy-angon-background"
          element={<AshroyAngonBackground />}
        />
        <Route path="/about/organogram" element={<Organogram />} />
        <Route
          path="/about/ashroy-angon-profile"
          element={<AshroyAngonProfile />}
        />
        <Route path="/about/general-council" element={<GeneralCouncil />} />
        <Route path="/about/executive-council" element={<ExecutiveCouncil />} />
        <Route path="/about/moto-and-values" element={<MotoAndValues />} />
        <Route path="/about/advisory-board" element={<AdvisoryBoard />} />
        <Route path="/about/senior-management-team" element={<SMT />} />
        <Route path="/about/constitution" element={<Constitution />} />
        <Route path="/about/audit-system" element={<AuditSystem />} />
        <Route path="/about/core-policy" element={<Policy />} />

        {/* News */}
        <Route path="/all-blogs" element={<AllBlogs />} />
        <Route path="/sixteen-december" element={<VictoryDay />} />
        <Route path="/fifteen-august-news" element={<FifteenAugustNews />} />
        <Route path="/happy-new-year" element={<HappyNewYear />} />
        <Route
          path="/coordination-meeting-with-upazila-project-managers"
          element={<CoordinationMeeting />}
        />
        <Route path="/exchange-meeting" element={<ExchangeMeeting />} />
        <Route
          path="/international-mother-language-day"
          element={<InternationlMotherLanguageDay />}
        />
        <Route
          path="/monthly-ngo-coordination-meeting"
          element={<MonthlyCoordinationMeeting />}
        />
        <Route
          path="/visit-shikon-kendros-of-ashroy-angon-society"
          element={<MonitoringEventOne />}
        />
        <Route
          path="/104th-birthday-of-bongobondhu-sheikh-mujibur-rahman"
          element={<BongobonduBirthday />}
        />
        <Route
          path="/Ashroy-Angon-Society-has-celebrated-National-Independence-Day"
          element={<TwentySixthMarch />}
        />
        <Route
          path="/Flash-flood-and-landslide-in-rangamati"
          element={<RecentFlashFlood />}
        />
        <Route
          path="/Humanitarian-Aid-Distribution-to-the-flood-affected-families"
          element={<AidDistributionForFlood />}
        />
        <Route
          path="/international-literacy-day-2024"
          element={<LiteracyDay />}
        />
        <Route
          path="/project-inception-workshop-ain-shohayota-activity"
          element={<ProjectInceptionWorkshop />}
        />
        <Route
          path="/inspection-of-learning-centers-activities-of-Out-of-School-Children-Education-Program-PEDP-4"
          element={<OutOfSchoolChildrenEducation />}
        />
        <Route path="/happy-new-year-2025" element={<HappyNewYear2025 />} />

        {/* Affiliation */}
        <Route path="/affiliation/ngoab" element={<NgoAb />} />
        <Route path="/affiliation/social-welfare" element={<SocialWelfare />} />
        <Route path="/affiliation/join-stock" element={<JoinStock />} />
        <Route path="/affiliation/tin-bin" element={<TinAndBin />} />
        <Route path="/affiliation/trade-license" element={<TradeLicense />} />
        <Route path="/affiliation/sam-and-duns" element={<SamAndDuns />} />
        <Route path="/affiliation/adb-cms-number" element={<AdbCmsNumber />} />

        {/* Focus Areas */}
        <Route path="/focusArea/focus-area" element={<FocusArea />} />
        <Route path="/focusArea/strategic-plan" element={<StrategicPlan />} />
        <Route path="/focusArea/thematic-issue" element={<ThematicIssue />} />

        {/* Projects */}
        <Route
          path="/projects/the-ain-shohayota-activity"
          element={<TheAinShohayotaActivity />}
        />
        <Route
          path="/projects/ensure-women-enterpreneur"
          element={<EnsureWomenEnterpreneur />}
        />
        <Route
          path="/projects/school-children-education"
          element={<SchoolChildrenEducation />}
        />
        <Route
          path="/projects/complete-project"
          element={<CompleteProject />}
        />
        <Route
          path="/projects/datch-bangla-mobile-banking"
          element={<DatchBanglaBanking />}
        />
        <Route
          path="/projects/beautification-and-sweing-training-center"
          element={<BeautificationAndSweing />}
        />
        <Route path="/projects/aas-enterprise" element={<AasEnterprise />} />

        {/* Donor */}
        <Route path="/donors/past-donors" element={<PastDonors />} />
        <Route path="/donors/current-donor-ict" element={<CurrentDonorICT />} />
        <Route
          path="/donors/current-donor-bureau"
          element={<CurrentDonorBureau />}
        />

        {/* Resources */}
        <Route path="/resources/admin-team" element={<AdminTeam />} />
        <Route path="/resources/finance-team" element={<FinanceTeam />} />
        <Route
          path="/resources/internal-monitoring-unit"
          element={<MonitoringUnit />}
        />
        <Route
          path="/resources/professional-volunter"
          element={<ProfessionalVolunter />}
        />
        <Route path="/resources/photo-gallery" element={<PhotoGallery />} />
        <Route path="/resources/annual-report" element={<AnnualReport />} />
        <Route path="/resources/annual-report" element={<AnnualReport />} />
        <Route path="/resources/audit-report" element={<AuditReport />} />
        <Route
          path="/resources/project-completion-report"
          element={<ProjectCompletionReport />}
        />
        <Route
          path="/resources/management-report"
          element={<ManagementReport />}
        />
        <Route path="/resources/aas-vendors-list" element={<VendorsList />} />

        {/* Notice Board */}
        <Route path="/noticeBoard/upcoming-event" element={<UpcomingEvent />} />
        <Route path="/noticeBoard/office-notice" element={<OfficeNotice />} />
        <Route path="/noticeBoard/tender-notice" element={<TenderNotice />} />
        <Route
          path="/noticeBoard/quotation-notice"
          element={<QuotationNotice />}
        />
        <Route path="/noticeBoard/job-circular" element={<JobCircular />} />
        <Route
          path="/noticeBoard/written-text-result"
          element={<WritenTestResult />}
        />
        <Route
          path="/noticeBoard/short-listed-candidates"
          element={<ShortListed />}
        />
        <Route
          path="/noticeBoard/interview-and-final-result"
          element={<InterviewAndFinalResult />}
        />

        {/* Helpdesk */}
        <Route
          path="/helpdesk/ashroy-angon-citizen-charter"
          element={<AasCitizenCharter />}
        />
        <Route path="/helpdesk/emergency-call" element={<EmergencyCall />} />
        <Route path="/helpdesk/complain" element={<Complain />} />

        {/* Others  */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
