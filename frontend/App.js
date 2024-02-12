import React, { useState } from 'react';
import NewsForm from './NewsForm';
import NewsList from './NewsList';

function App() {
    const [news, setNews] = useState([]);

    // This function could be passed down to NewsForm and called with the response data
    const updateNews = (newNews) => {
        setNews(newNews);
    };

    return (
        <div className="App">
            <h1>p-Newspaper</h1>
            <NewsForm onNewsFetched={updateNews} />
            <NewsList news={news} />
        </div>
    );
}

export default App;
