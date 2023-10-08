import React from "react";
import "./Footer.css";
import ScrollToTop from "./ScrollToTop";

function Footer() {
  return (
    <div className="footer">
      <div>
        <ScrollToTop />
      </div>
      <div className="footer-container">
        <div className="left">
          <div className="footer-contents">
            <div>
              <h4> Get to Know Us </h4>
              <p> Careers </p>
              <p> Blog </p>
              <p> About Amazon </p>
              <p> Investor Relations </p>
              <p> Amazon Devices </p>
              <p> Amazon Science </p>
            </div>
          </div>
        </div>

        <div className="center-left">
          <div className="footer-contents">
            <div>
              <h4> Make Money with Us </h4>
              <p> Sell products on Amazon </p>
              <p> Sell on Amazon Business </p>
              <p> Sell apps on Amazon </p>
              <p> Become an Affiliate </p>
              <p> Advertise Your Products </p>
              <p> Self-Publish with Us </p>
              <p> Host an Amazon Hub </p>
              <p> See More Make Money with Us </p>
            </div>
          </div>
        </div>

        <div className="center-right">
          <div className="footer-contents">
            <div>
              <h4> Amazon Payment Products </h4>

              <p> Amazon Business Card </p>
              <p> Shop with Points </p>
              <p> Reload Your Balance </p>
              <p> Amazon Currency Converter </p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="footer-contents">
            <div>
              <h4> Let Us Help You </h4>

              <p> Amazon and COVID-19 </p>
              <p> Your Account </p>
              <p>Your Orders</p>
              <p> Shipping Rates & Policies </p>
              <p> Returns & Replacements </p>
              <p> Manage Your Content and Devices </p>
              <p> Amazon Assistant </p>
              <p> Help </p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div>
        <img
          className="footer__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </div>
    </div>
  );
}

export default Footer;
