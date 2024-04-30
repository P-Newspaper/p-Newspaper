import React, { useState } from "react";
import axios from "axios";
import "../styles/landingAndResults.css";
import { useNavigate } from "react-router-dom";
const { user } = useContext(UserContext);

function Landing() {
  const [interests, setInterests] = useState("");
  const navigate = useNavigate();
  const [news, setNews] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let trimmedInterests = interests.trim();
    if (trimmedInterests === "") {
      trimmedInterests = "AI, machine learning, data science";
      return;
    }
    try {
      console.log("sending interest: ", interests);
      const response = await axios.post("http://localhost:5000/fetch-news", {
        google_id: user.google_id,
        interests: interests.split(",").map((interest) => interest.trim()),
      });
      setNews(response.data.articles);
      console.log(response.data);
      navigate("/results", { state: { articles: response.data.articles } });
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
            <button type="button" className="go-button" onClick={handleSubmit}>
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
