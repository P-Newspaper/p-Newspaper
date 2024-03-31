import React from 'react';
import paiImage from '../images/pai.png';
import instagram from '../images/instagram.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <a href = "https://www.p-ai.org/" className="pai">
                    <img src={paiImage} alt="P-ai"/>
                </a>
                <a href = "https://www.instagram.com/pai.claremont/" className = "insta">
                    <img src={instagram} alt="Instagram"/>
                </a>
                <a href = "https://github.com/p-ai-org" className = "github">
                    <img src={github} alt="Github"/>
                </a>
                <a href = "https://www.linkedin.com/company/p-ai/mycompany/" className = "linkedin">
                    <img src={linkedin} alt="Linkedin"/>
                </a>
            </div>
        </footer>
    );
};
 
export default Footer;