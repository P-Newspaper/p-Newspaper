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
        <div class="everything">
            <h1 class="left">About Us</h1>
            
            <div class="container1">
                <div class="left">
                    <h2 class="mission"> Our Mission:</h2>
                    <p class="para">
                        Many young people are out of touch with the news, making it difficult for them to create a well rounded 
                        and informed perspective on the world. By enabling users to specify their interests, this website tailors
                        a curated news stream to each indivudal's preferences. Through personalized news delivery, we aim to 
                        bridge the gap between young people and global affiars, fostering a more connected and socially 
                        conscious society.
                    </p>
                </div>

                <div class="right">
                    <img class="placeholder" alt="placeholder" src={placeholder}></img>
                </div>

            <h2 class="left">The Team:</h2>

            <div class="container2">
                <div class="member">
                    <img alt="aimee.png" src={aimee}></img>
                    <p class="name"><span style={{ fontWeight: 'bold' }}>Aimee Co</span></p>
                    <p class="name">Computer Science and Math</p>
                    <p class="name">Pomona '26</p>
                </div>
                <div class="member">
                    <img src={bennet} alt="Bennet" title='Bennet'></img>
                    <p class="name"><span style={{ fontWeight: 'bold' }}>Bennet Matazzoni</span></p>
                    <p class="name">Computer Science</p>
                    <p class="name">Harvey Mudd '26</p>
                </div>
                <div class="member">
                    <img src={angie} alt='Angie' title='Angie'></img>
                    <p class="name"><span style={{ fontWeight: 'bold' }}>Angie Zhou</span></p>
                    <p class="name">Computer Science</p>
                    <p class="name">Pomona '25</p>

                </div>
                <div class="member">
                    <img src={angelina} alt='Angelina' title='Angelina'></img>
                    <p class="name"><span style={{ fontWeight: 'bold' }}>Angelina Tsai</span></p>
                    <p class="name">Computer Science and Physics</p>
                    <p class="name">Harvey Mudd '26</p>
                </div>
                <div class="member">
                    <img src={tyler} alt='Tyler' title='Tyler'></img>
                    <p class="name"><span style={{ fontWeight: 'bold' }}>Tyler Headley</span> </p>
                    <p class="name">Computer Science and Math</p>
                    <p class="name">Harvey Mudd '26</p>
                </div>
                <div class="member">
                    <img src={talia} alt='Talia' title='Talia'></img>
                    <p class="name"><span style={{ fontWeight: 'bold' }}>Talia Yoo</span></p>
                    <p class="name">Computer Science</p>
                    <p class="name">Harvey Mudd '27</p>
                </div>
                <div class="member">
                    <img src={kayln} alt='Kayln' title='Kayln'></img>
                    <p class="name"><span style={{ fontWeight: 'bold' }}>Kayln Washington</span></p>
                    <p class="name">Computer Science</p>
                    <p class="name">Pomona '26</p>
                </div>
                <div class="member">
                    <img src={emily} alt='Emily' title='Emily'></img>
                    <p class="name"><span style={{ fontWeight: 'bold' }}>Emily Zhu</span></p>
                    <p class="name">Computer Science and Cognitive Science</p>
                    <p class="name">Pomona '26</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default AboutUs;