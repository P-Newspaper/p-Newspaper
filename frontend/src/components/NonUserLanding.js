import React, { useState } from 'react';
// import axios from 'axios';
import '../styles/landingAndResults.css'; 
import { useNavigate } from 'react-router-dom';

function NonUserLanding() {
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
        navigate('/submit', { state: fakeResponse.data });

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
            <div><br></br><strong className="top-text">Welcome to p-Newspaper!</strong></div>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="input-container">
                    <label htmlFor="interests">What do you want to read about today?</label>
                    <div className="text-container">
                        <textarea
                            id="interests"
                            value={interests}
                            onChange={(e) => setInterests(e.target.value)}
                            placeholder="What is the latest news on AI, machine learning, and data science?"
                            className="textarea-input"
                        />
                    </div>
                    <div className="button-container">
                        <button type="submit" className="submit-button">
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