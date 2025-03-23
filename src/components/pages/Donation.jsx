import React, { useEffect } from "react";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import "../../style/donation.css";
import TranslateButton from "../TranslateButton/TranslateButton";

const Donation = () => {
  useEffect(() => {
    document.title = `AshroyAngon | Donation`;
  }, []);

  return (
    <>
      <Navbar />
      <TranslateButton />

      <div className="donation_section">
        <div className="container">
          <h2>Donation</h2>
          <div className="content_wrapper">
            <div className="bank_information">
              <h4>Bank Information</h4>
              <p>
                <b>Bank Name :</b> Rupali Bank Limited
              </p>
              <p>
                <b>Account Name :</b> Ashroy Angon Society
              </p>
              <p>
                <b>Account No :</b> 1784024000217
              </p>
              <p>
                <b>Branch Code :</b> 1784
              </p>
              <p>
                <b>Routing No :</b> 185840077
              </p>
            </div>
            <div className="bKash_information">
              <h4>bKash Information</h4>
              <p>
                <b>bKash Personal :</b> 01854884113
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donation;
