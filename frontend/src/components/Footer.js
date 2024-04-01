import React from "react";
import paiImage from "../images/pai.png";
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <a
          href="https://github.com/P-Newspaper/p-Newspaper"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <img src={github} alt="Github" />
        </a>
        <a
          href="https://www.p-ai.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="pai"
        >
          <img src={paiImage} alt="P-ai" />
        </a>
        <a
          href="https://www.linkedin.com/company/p-ai/mycompany/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://www.instagram.com/pai.claremont/"
          target="_blank"
          rel="noopener noreferrer"
          className="insta"
        >
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
