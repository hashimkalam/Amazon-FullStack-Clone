import React from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      <p> Back to top </p>
    </div>
  );
};

export default ScrollToTop;
