import "./Footer.css";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>GALAXIA</h2>

          <p>
            Explore the universe, discover planets,
            galaxies, missions, and the latest space discoveries.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <NavLink to="/planets">Planets</NavLink>
          <a href="/discoveries">Discoveries</a>
          <a href="/missions">Missions</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Email</p>
          <span>info@galaxia.com</span>

          <div className="footer-social">

            <a href="https://www.facebook.com/galaxia" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/galaxia" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="https://github.com/galaxia" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/company/galaxia" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 GALAXIA. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;