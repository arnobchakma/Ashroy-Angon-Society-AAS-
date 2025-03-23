import React from "react";
import "../../../style/notFound.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Notfound = () => {
  return (
    <div className="not_found_section">
      <div className="container">
        <h4>This page is not found, 404</h4>
        <h3>
          <Link to="/">
            <FontAwesomeIcon className="back_icon" icon={faArrowLeftLong} />
            Back To The Homepage
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Notfound;
