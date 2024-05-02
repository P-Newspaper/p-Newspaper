import React, { useState, useContext } from "react";
import axios from "axios";
import "../styles/landingAndResults.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserProvider";

function Landing() {
  const [interests, setInterests] = useState("");
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [news, setNews] = useState("");
  const { user } = useContext(UserContext);

  let google_id = null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    let trimmedInterests = interests.trim();
    if (trimmedInterests === "") {
      alert("Please enter your interests.");
      return;
    }
    console.log("user", user);
    if (user) {
      google_id = user.id;
      console.log(google_id);
    }
    try {
      console.log("sending interest: ", interests);
      const postData = {
        interests: interests.split(",").map((interest) => interest.trim()),
      };
      if (google_id) {
        postData.google_id = google_id;
      }
      console.log("sending postData: ", postData);
      const response = await axios.post(
        "http://localhost:5001/fetch-news",
        postData
      );
      setNews(response.data);
      navigate("/results", { state: { articles: response.data } }); // No need for JSON.parse()
    } catch (error) {
      console.error("Error fetching news:", error);
      alert("Failed to fetch news. Please try again later.");
    }
  };

  return (
    <div>
      <div>
        <br></br>
        <strong className="top-text">Welcome to p-Newspaper!</strong>
      </div>
      <form onSubmit={handleSubmit} className="non-user-form-container">
        <div className="input-container">
          <label htmlFor="interests">
            What do you want to read about today?
          </label>
          <div className="text-container">
            <textarea
              id="interests"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="Example: I want to learn more about AI, machine learning, and data science. I am also interested in basketball and cooking."
              className="textarea-input"
            />
          </div>
          <div className="button-container">
            <button type="submit" className="go-button">
              Go ➔
            </button>
          </div>
          <br></br>
        </div>
      </form>
    </div>
  );
}

export default Landing;
