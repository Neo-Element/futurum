import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContainer">
    <footer className="footer">
        <div className="footerBox">
        <Link to="/team" className="footerLink">
        <h2 className="footerName">About Us</h2>
        </Link>
        </div>
        <div className="footerBox">
          <p>Copyright© Futurum 2022s</p>
        </div>
        <div className="footerBox">
          <img
            src="https://see.fontimg.com/api/renderfont4/vmyL4/eyJyIjoiZnMiLCJoIjo0NiwidyI6MTAwMCwiZnMiOjQ2LCJmZ2MiOiIjMTQxNDE0IiwiYmdjIjoiIzQ2NDY0NiIsInQiOjF9/RnV0dXJ1bQ/axeon-regular.png"
            alt="logo"
          />
        </div>
    </footer>
    </div>
  );
};

export default Footer;
