import React from 'react';
import '../styles/aboutUs.css'
import '../styles/global.css'

function AboutUs() {
    return (
        <div class="everything">
            <h1 class="left">About Us</h1>
            
            <div class="container1">
                <div>
                    <h2 class="left">Our Mission:</h2>
                    <p class="left">
                        
                        Many young people are out of touch with the news, making it difficult for them to create a well rounded 
                        and informed perspective on the world. By enabling users to specify their interests, this website tailors
                        a curated news stream to each indivudal's preferences. Through personalized news delivery, we aim to 
                        bridge the gap between young people and global affiars, fostering a more connected and socially 
                        conscious society.
                    </p>
                </div>

                <div class="right">
                    <img src="placeholder.png" alt="placeholder"></img>
                </div>
            </div>

            <h2 class="left">The Team:</h2>

            <div class="container2">
                <div class="member">
                    <img class="photo" alt="aimee.png" src="aimee.png"></img>
                    <p class="name">Aimee</p>
                </div>
                <div class="member">
                    <img class="photo" src="bennet.png" alt="Bennet" title='Bennet'></img>
                    <p class="name">Bennet</p>
                </div>
                <div class="member">
                    <img class="photo" src="angie.png" alt='Angie' title='Angie'></img>
                    <p class="name">Angie</p>
                </div>
                <div class="member">
                    <img class="photo" src="angelina.png" alt='Angelina' title='Angelina'></img>
                    <p class="name">Angelina</p>
                </div>
                <div class="member">
                    <img class="photo" src="tyler.png" alt='Tyler' title='Tyler'></img>
                    <p class="name">Tyler</p>
                </div>
                <div class="member">
                    <img class="photo" src="talia.png" alt='Talia' title='Talia'></img>
                    <p class="name">Talia</p>
                </div>
                <div class="member">
                    <img class="photo" src="kayln.png" alt='Kayln' title='Kayln'></img>
                    <p class="name">Kayln</p>
                </div>
                <div class="member">
                    <img class="photo" src="emily.png" alt='Emily' title='Emily'></img>
                    <p class="name">Emily</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;