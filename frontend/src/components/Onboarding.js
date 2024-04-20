import React, { useState, useEffect } from "react";
import "../styles/login.css";
import "../styles/interestSelection.css";

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

const InterestSelection = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleSelection = (interest) => {
    setSelectedInterests(
      (prevState) =>
        prevState.includes(interest)
          ? prevState.filter((t) => t !== interest) // Remove topic if it's already selected
          : [...prevState, interest] // Add topic if not already selected
    );
  };

  useEffect(() => {
    console.log(selectedInterests);
  }, [selectedInterests]);

  return (
    <div>
      <div className="top-text">What topics are you interested in?</div>

      <div className="grid-container">
        {interests.map((interest, index) => (
          <div
            key={index}
            className={`topic-box ${
              selectedInterests.includes(interest) ? "selected" : ""
            }`}
            onClick={() => toggleSelection(interest)}
          >
            {interest}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestSelection;