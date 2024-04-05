import React, { useState } from "react";
import axios from "axios";
import "../styles/landingAndResults.css";
import { useNavigate } from "react-router-dom";

function NonUserLanding() {
  const [interests, setInterests] = useState("");
  const navigate = useNavigate();
  const [news, setNews] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/fetch-news", {
        interests,
      });
      setNews(response.data);
      console.log("fake response data: ", response.data);
      navigate("/submit", { state: response.data });
    } catch (error) {
      console.error("Error fetching news:", error);
    }

    console.log("Form submitted");

    const fakeResponse = {
      data: {
        articles: [
          { title: "Article 1", content: "Content 1" },
          { title: "Article 2", content: "Content 2" },
        ],
      },
    };

    // let trimmedInterests = interests.trim();
    // if (trimmedInterests === '') {
    //     trimmedInterests = 'AI, machine learning, data science';
    // }
    // try {
    //     const response = await axios.post('http://localhost:5000/fetch-news', { interests });
    //     console.log(response.data);
    //     navigate('/submit');
    // } catch (error) {
    //     console.error('Error fetching news:', error);
    // }
  };

  return (
    <div>
      <div>
        <br></br>
        <strong className="top-text">Welcome to p-Newspaper!</strong>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
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

export default NonUserLanding;
