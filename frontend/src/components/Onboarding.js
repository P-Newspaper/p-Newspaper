 import React, { useState, useEffect } from "react";
import "../styles/login.css";
import "../styles/onboarding.css";
import { useNavigate } from "react-router-dom";

const interests = [
  "Entertainment",
  "Sports",
  "Money & Business",
  "Style & Beauty",
  "Food",
  "Travel",
  "Health",
  "Home & Garden",
  "Science & Tech",
  "Hobbies",
  "Politics",
  "Kids & Parenting",
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([]);

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

    navigate("/userlanding");
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
                selectedInterests.includes(interest) ? "selected" : ""
              }`}
              onClick={() => toggleSelection(interest)}
            >
              <img src={'images/interests/${interest.toLowerCase().replace(/ /g, "%20")}.jpg'} alt={interest} />
              <span>{interest}</span>
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
