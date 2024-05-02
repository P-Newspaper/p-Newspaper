import React, { useState, useEffect, useContext } from "react";
import "../styles/login.css";
import "../styles/onboarding.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./UserProvider";

// selected interest images:
import entertainment from "../images/interests/entertainment.jpg";
import sports from "../images/interests/sports.jpg";
import money from "../images/interests/money.jpg";
import style from "../images/interests/style.jpg";
import food from "../images/interests/food.jpg";
import travel from "../images/interests/travel.jpg";
import health from "../images/interests/health.jpg";
import garden from "../images/interests/garden.jpg";
import science from "../images/interests/science.jpg";
import hobbies from "../images/interests/hobbies.jpg";
import politics from "../images/interests/politics.jpg";
import kids from "../images/interests/kids.jpg";

const interests = [
  { name: "Entertainment", image: entertainment },
  { name: "Sports", image: sports },
  { name: "Money & Business", image: money },
  { name: "Style & Beauty", image: style },
  { name: "Food", image: food },
  { name: "Travel", image: travel },
  { name: "Health", image: health },
  { name: "Home & Garden", image: garden },
  { name: "Science & Tech", image: science },
  { name: "Hobbies", image: hobbies },
  { name: "Politics", image: politics },
  { name: "Kids & Parenting", image: kids },
];


const Onboarding = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([]);
  const { user } = useContext(UserContext);

  const toggleSelection = (interest) => {
    setSelectedInterests(
      (prevState) =>
        prevState.includes(interest)
          ? prevState.filter((t) => t !== interest) // Remove topic if it's already selected
          : [...prevState, interest] // Add topic if not already selected
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (user && user.id) {
      const processedInterests = selectedInterests.map(interest => 
        interest.split(' ').map(word => word.replace(/[^a-zA-Z0-9]/g, '')).filter(word => word)
      ).flat();

      try {
        await axios.post("http://127.0.0.1:5001/user/add", {
          google_id: user.id,
          interests: processedInterests,
        });
        console.log("Success posting user");
        navigate("/landing");
      } catch (error) {
        console.error("Failed to update interests:", error);
      }
    }
  };

  useEffect(() => {
    console.log(selectedInterests);
  }, [selectedInterests]);

  return (
    <div>
      <div className="top-text">What topics are you interested in?</div>

      <div className="container">
        <div className="grid-container">
          {interests.map((interest, index) => (
            <div
              key={index}
              className={`topic-box ${
                selectedInterests.includes(interest.name) ? "selected" : ""
              }`}
              onClick={() => toggleSelection(interest.name)}
            >
              <img src={interest.image} alt={interest.name} />
              <span>{interest.name}</span>
            </div>
          ))}
        </div>
        <div className="button-container">
          <button type="button" className="go-button" onClick={handleSubmit}>
            Go ➔
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
