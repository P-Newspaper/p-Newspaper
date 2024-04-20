import React, { useState } from "react";
// import axios from 'axios';
import "../styles/landingAndResults.css";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function UserLanding() {
    const [interests, setInterests] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submitted")

        const fakeResponse = {
            data: {
                articles: [
                    {title: "Article 1", content: "Content 1"},
                    {title: "Article 2", content: "Content 2"},
                ]
            }
        }
        console.log("fake response data: ", fakeResponse.data)
        navigate('/userresults', { state: fakeResponse.data });
    };

    const fakeFeed = {
        data: {
            articles: [
                {title: "Feed Article 1", content: "Content 1"},
                {title: "Feed Article 2", content: "Content 2"},
                {title: "Feed Article 3", content: "Content 2"},
            ]
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="input-container">
                    <label htmlFor="interests">What do you want to read about today?</label>
                    <div className="text-container">
                        <textarea
                            id="interests"
                            value={interests}
                            onChange={(e) => setInterests(e.target.value)}
                            placeholder="What is the latest news on AI, machine learning, and data science?"
                            className="textarea-input2"
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
            <div><strong className="subhead-text">News Feed</strong></div>
            <div>{fakeFeed.data.articles.map((article, index) => (
              <div key={index} className="article-container">
                <div className="article-text">
                  <h2>{article.title}</h2>
                  <p>{article.content}</p>
                </div>
              </div>
            ))} </div>
        
        </div>
    );
}

export default UserLanding;