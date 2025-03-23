import React from "react";
import Footer from "../shared/Footer/Footer";
import About from "./About/About";
import Header from "./Header/Header";
import LatestUpdate from "./LatestUpdate/LatestUpdate";
import Navbar from "../shared/Navbar/Navbar";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import FundingPartner from "./FuncingPartner/FundingPartner";
import TranslateButton from "../TranslateButton/TranslateButton";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <LatestUpdate />
      <WhatWeDo />
      <FundingPartner />
      <TranslateButton />
      <Footer />
    </div>
  );
};

export default Home;
