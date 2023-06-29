import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
  FaHome,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import hinh from "./logo.png";
import "./Footer.css";
import React from "react";

export default function Footer() {
  return (
    <div id="footer">
      <div class="container">
        <footer class="text-white text-center text-lg-start bg-black">
          <div class="container p-4">
            <div class="row mt-4">
              <div class="col-lg-5 col-md-12 mb-4 mb-md-0">
                <img src={hinh} alt="" />
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4 pb-1">Contact Us</h5>
                <div class="mb-3">
                  <span class="fa-li">
                    <FaHome />
                  </span>
                  <span class="ms-2">94C Cao Thang ST , TPHCM , VN</span>
                </div>
                <div class="mb-3">
                  <span class="fa-li">
                    <FaEnvelope />
                  </span>
                  <span class="ms-2">contact@example.com</span>
                </div>
                <div class="mb-3">
                  <span class="fa-li">
                    <FaPhoneAlt />
                  </span>
                  <span class="ms-2">+84 12 345 6789</span>
                </div>
                <div class="mt-4">
                  <a href="/" type="button" class="btn_icons">
                    <FaFacebookF />
                  </a>

                  <a href="/" type="button" class="btn_icons">
                    <FaInstagram />
                  </a>

                  <a href="/" type="button" class="btn_icons">
                    <FaTwitter />
                  </a>

                  <a href="/" type="button" class="btn_icons">
                    <FaGooglePlusG style={{ textAlign: "center" }} />
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4">Opening hours</h5>

                <table class="table text-center text-white">
                  <tbody class="fw-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 7pm</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>Not Working</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            class="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright: Minh Tri
          </div>
        </footer>
      </div>
    </div>
  );
}
