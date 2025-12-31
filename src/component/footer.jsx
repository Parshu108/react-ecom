import React from "react";
// import { motion} from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">HpPhone</h4>
            <p className="text-light">
              Premium headphones designed for immersive sound,
              comfort, and style.
            </p>
            <div>
              <FaFacebook className="me-3 fs-5" />
              <FaInstagramSquare className="me-3 fs-5" />
              <FaTwitter className="me-3 fs-5" />
            </div>
          </div>

          {/* Shop Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-semibold">Shop</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Wireless</a></li>
              <li><a href="#" className="footer-link">Noise Cancelling</a></li>
              <li><a href="#" className="footer-link">Gaming</a></li>
              <li><a href="#" className="footer-link">Accessories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold">Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">FAQs</a></li>
              <li><a href="#" className="footer-link">Shipping & Returns</a></li>
              <li><a href="#" className="footer-link">Warranty</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold">Newsletter</h5>
            <p className="text-light">Get exclusive deals & updates</p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your email"
              />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center pb-3 text-light">
          © {new Date().getFullYear()} SoundMax. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
