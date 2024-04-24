import React from 'react';
import '../styles/aboutUs.css';
import '../styles/global.css';
import aimee from "../images/aimee.png";
import angelina from "../images/angelina.png";
import angie from "../images/angie.png";
import bennet from "../images/bennet.png";
import emily from "../images/emily.png";
import kayln from "../images/kayln.png";
import tyler from "../images/tyler.png";
import talia from "../images/talia.png";
import placeholder from "../images/placeholder.jpg"


function AboutUs() {
    return (
        <div>
            <div className="everything">
                <h1 className="left">About Us</h1>
                
                <div className="container1">
                    <div className="left">
                        <h2 className="mission"> Our Mission:</h2>
                        <p className="para">
                            Many young people are out of touch with the news, making it difficult for them to create a well rounded 
                            and informed perspective on the world. By enabling users to specify their interests, this website tailors a news stream curated from a wide range of news sources. Through personalized news delivery, we aim to 
                            bridge the gap between young people and global affairs, fostering a more connected and socially 
                            conscious society.
                        </p>
                    </div>

                    <div className="right">
                        <img className="placeholder" alt="placeholder" src={placeholder}></img>
                    </div>
                </div>

                <h2 className="left">The Team:</h2>

                <div className="container2">
                    <div className="member">
                        <img alt="aimee.png" src={aimee}></img>
                        <p className="name"><span style={{ fontWeight: 'bold' }}>Aimee Co</span></p>
                        <p className="name">Computer Science and Math</p>
                        <p className="name">Pomona '26</p>
                    </div>
                    <div className="member">
                        <img src={bennet} alt="Bennet" title='Bennet'></img>
                        <p className="name"><span style={{ fontWeight: 'bold' }}>Bennet Matazzoni</span></p>
                        <p className="name">Computer Science</p>
                        <p className="name">Harvey Mudd '26</p>
                    </div>
                    <div className="member">
                        <img src={angie} alt='Angie' title='Angie'></img>
                        <p className="name"><span style={{ fontWeight: 'bold' }}>Angie Zhou</span></p>
                        <p className="name">Computer Science</p>
                        <p className="name">Pomona '25</p>

                    </div>
                    <div className="member">
                        <img src={angelina} alt='Angelina' title='Angelina'></img>
                        <p className="name"><span style={{ fontWeight: 'bold' }}>Angelina Tsai</span></p>
                        <p className="name">Computer Science and Physics</p>
                        <p className="name">Harvey Mudd '26</p>
                    </div>
                    <div className="member">
                        <img src={tyler} alt='Tyler' title='Tyler'></img>
                        <p className="name"><span style={{ fontWeight: 'bold' }}>Tyler Headley</span> </p>
                        <p className="name">Computer Science and Math</p>
                        <p className="name">Harvey Mudd '26</p>
                    </div>
                    <div className="member">
                        <img src={talia} alt='Talia' title='Talia'></img>
                        <p className="name"><span style={{ fontWeight: 'bold' }}>Talia Yoo</span></p>
                        <p className="name">Computer Science</p>
                        <p className="name">Harvey Mudd '27</p>
                    </div>
                    <div className="member">
                        <img src={kayln} alt='Kayln' title='Kayln'></img>
                        <p className="name"><span style={{ fontWeight: 'bold' }}>Kayln Washington</span></p>
                        <p className="name">Computer Science</p>
                        <p className="name">Pomona '26</p>
                    </div>
                    <div className="member">
                        <img src={emily} alt='Emily' title='Emily'></img>
                        <p className="name"><span style={{ fontWeight: 'bold' }}>Emily Zhu</span></p>
                        <p className="name">Computer Science and Cognitive Science</p>
                        <p className="name">Pomona '26</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;