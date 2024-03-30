import React, { useState } from 'react';
import axios from 'axios';
import '../newsformstyles.css'; 

function NewsForm() {
    const [interests, setInterests] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        let trimmedInterests = interests.trim();
        if (trimmedInterests === '') {
            trimmedInterests = 'AI, machine learning, data science';
        }
        try {
            const response = await axios.post('http://localhost:5000/fetch-news', { interests });
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
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

export default NewsForm;
