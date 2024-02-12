// set up React and install dependencies!
import React, { useState } from 'react';
import axios from 'axios';

function NewsForm() {
    const [interests, setInterests] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/fetch-news', { interests });
            console.log(response.data); 
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="interests">What are you interested in?</label>
            <textarea
                id="interests"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                placeholder="Enter your interests"
            />
            <button type="submit">Fetch News</button>
        </form>
    );
}

export default NewsForm;
