import { ImEarth } from "react-icons/im";
import { MdVerified } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";
import "./About.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import React from "react";

export default function About() {
  return (
    <div id="about_pages">
      <Header />
      <h1 style={{marginTop:"0px",paddingTop:"70px"}}>About Us</h1>
      <div className="about_info">
        <div className="row">
          <div className="col">
            <MdVerified style={{ fontSize: "50px" }} />
            <h4>Verified</h4>
            <p>
              Every item sold goes through our proprietary multi-step
              verification process with our team of expert authenticators.
            </p>
          </div>
          <div className="col">
            <ImEarth style={{ fontSize: "50px" }} />
            <h4>Global Access</h4>
            <p>
              Whether it’s pre-release, regionally limited, or “sold out” – our
              millions of customers from over 200 countries allow you to easily
              secure those hard-to-find, coveted items.
            </p>
          </div>
          <div className="col">
            <BsFillShieldLockFill style={{ fontSize: "50px" }} />
            <h4>Secure</h4>
            <p>
              Preserving the integrity of our marketplace means staying a step
              ahead. Our security and fraud systems, powered by our world class
              partners, have your personal information covered 24/7.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <MdVerified style={{ fontSize: "50px" }} />
            <h4>Verified</h4>
            <p>
              Every item sold goes through our proprietary multi-step
              verification process with our team of expert authenticators.
            </p>
          </div>
          <div className="col">
            <ImEarth style={{ fontSize: "50px" }} />
            <h4>Global Access</h4>
            <p>
              Whether it’s pre-release, regionally limited, or “sold out” – our
              millions of customers from over 200 countries allow you to easily
              secure those hard-to-find, coveted items.
            </p>
          </div>
          <div className="col">
            <BsFillShieldLockFill style={{ fontSize: "50px" }} />
            <h4>Secure</h4>
            <p>
              Preserving the integrity of our marketplace means staying a step
              ahead. Our security and fraud systems, powered by our world class
              partners, have your personal information covered 24/7.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
