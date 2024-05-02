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
import placeholder from "../images/placeholder.jpg";

function AboutUs() {
    const teamMembers = [
        { img: aimee, name: "Aimee Co", discipline: "Computer Science and Math", school: "Pomona '26" },
        { img: bennet, name: "Bennet Matazzoni", discipline: "Computer Science", school: "Harvey Mudd '26" },
        { img: angie, name: "Angie Zhou", discipline: "Computer Science", school: "Pomona '25" },
        { img: angelina, name: "Angelina Tsai", discipline: "Computer Science and Physics", school: "Harvey Mudd '26" },
        { img: tyler, name: "Tyler Headley", discipline: "Computer Science and Math", school: "Harvey Mudd '26" },
        { img: talia, name: "Talia Yoo", discipline: "Computer Science", school: "Harvey Mudd '27" },
        { img: kayln, name: "Kayln Washington", discipline: "Computer Science", school: "Pomona '26" },
        { img: emily, name: "Emily Zhu", discipline: "Computer Science and Cognitive Science", school: "Pomona '26" }
    ];

    return (
        <div className="everything">
            <h1 className="left">About Us</h1>
            
            <div className="container1">
                <div className="left">
                    <p className="para">
                    p-Newspaper is an AI-powered web application that brings you news from a variety of trusted sources, tailored to fit your interests and preferences. Our platform uses advanced artificial intelligence to personalize your news feed, ensuring you receive information that is relevant and important to you.
                    We are committed to providing a user-centric news experience that helps you stay informed without the clutter of irrelevant information. p-Newspaper simplifies your access to news, giving you insights into the topics you care about most, with integrity and accuracy at the core of every story.
                    </p>
                </div>
                <div className="right">
                    <img className="placeholder" alt="Placeholder showing newspaper concepts" src={placeholder}></img>
                </div>
            </div>

            <h2 className="left">The Team:</h2>

            <div className="container2">
                {teamMembers.map(member => (
                    <div className="member" key={member.name}>
                        <img src={member.img} alt={member.name} />
                        <p className="name"><strong>{member.name}</strong></p>
                        <p className="discipline">{member.discipline}</p>
                        <p className="school">{member.school}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUs;
