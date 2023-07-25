import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div className="bg-dark text-white mt-5 pt-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="text-danger">MODELS</h5>
            <ul className="list-unstyled text-white">
              <li>One</li>
              <li>Scalatore</li>
              <li>Spectre</li>
              <li>Rover</li>
              <li>Scout</li>
              <li>Off the Shelf</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-danger">CUSTOMER CARE</h5>
            <ul className="list-unstyled text-white">
              <li>Contacts</li>
              <li>How to get a Festka</li>
              <li>Find a store</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-danger">INFORMATION</h5>
            <ul className="list-unstyled text-white">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Cookies</li>
              <li>Work at Festka</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-danger">FOLLOW US</h5>
            <div className="fa-3x">
              <i className="fab fa-facebook-f "></i>

              <i className="fab fa-twitter"></i>

              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
