import React, { useEffect } from "react";
import "./translateButton.css";

const TranslateButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;
    document.body.appendChild(script);

    // Set the gtranslateSettings object
    window.gtranslateSettings = {
      default_language: "en",
      languages: [
        "bn",
        "fr",
        "en",
        "zh-CN",
        "de",
        "hi",
        "ja",
        "ru",
        "ko",
        "it",
      ],
      wrapper_selector: ".gtranslate_wrapper",
      switcher_horizontal_position: "right",
      switcher_vertical_position: "top",
    };
  }, []);

  return (
    <>
      <div className="gtranslate_wrapper"></div>
    </>
  );
};

export default TranslateButton;
