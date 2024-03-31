import React, { useState } from "react";
import axios from "axios";
import NewsList from "./NewsList";

function NewsForm() {
  const [interests, setInterests] = useState("");
  const [news, setNews] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/fetch-news", {
        interests,
      });
      setNews(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <div>
      <div>
        <br></br>
        <strong
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
            fontFamily: "Kite One",
          }}
        >
          Welcome to p-Newspaper
        </strong>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <br></br>
          <div>
            <label htmlFor="interests">
              What do you want to read about today?
            </label>
          </div>
          <br></br>
          <div>
            <textarea
              id="interests"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="Enter your interests"
              style={{
                color: "black",
                backgroundColor: "#e6e6e6",
                padding: 10,
                borderRadius: 10,
                justifyContent: "center",
                borderColor: "#e6e6e6",
                width: window.innerWidth * 0.7,
                height: window.innerHeight * 0.15,
              }}
            />
            <style>
              {` 
                            ::placeholder { 
                                color: black; 
                            }`}
            </style>
          </div>
          <br></br>
          <div>
            <button type="submit" style={{ justifyContent: "center" }}>
              Fetch News
            </button>
          </div>
        </div>
      </form>
      <NewsList news={news} />
    </div>
  );
}

export default NewsForm;
