import React, { useState } from 'react';
import NewsForm from './components/NewsForm';
import NewsList from './components/NewsList';
import Navbar from './components/Navbar';

function App() {
    const [news, setNews] = useState([]);

    // This function could be passed down to NewsForm and called with the response data
    const updateNews = (newNews) => {
        setNews(newNews);
    };

    return (
        <div className="App">
            <Navbar />
            <h1>p-Newspaper</h1>
            <NewsForm onNewsFetched={updateNews} />
            <NewsList news={news} />
        </div>
    );
}

export default App;

