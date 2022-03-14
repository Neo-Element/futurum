import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footerBox">
        <Link to="/team" className="footerLink">
        <h2 className="footerName">About Us</h2>
        </Link>
        </div>
        <div className="footerBox">
          <Link to="/" className="footerLink">
        <h2 className="footerName">Contact</h2>
        </Link>
        </div>
        <div className="footerBox">
          <img
            src="https://see.fontimg.com/api/renderfont4/OVZDd/eyJyIjoiZnMiLCJoIjo0NCwidyI6MTAwMCwiZnMiOjQ0LCJmZ2MiOiIjNzVDQTkzIiwiYmdjIjoiIzQ2NDY0NiIsInQiOjF9/RnV0dXJ1bQ/destruido.png"
            alt="logo"
          />
        </div>
    </footer>
  );
};

export default Footer;
