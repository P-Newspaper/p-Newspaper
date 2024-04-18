import React from 'react';

function UserResults() {
    // not actual code, just an example to match non-user results
    const fakeResponse = {
        data: {
            articles: [
                {title: "Article 1", content: "Content 1"},
                {title: "Article 2", content: "Content 2"},
            ]
        }
    }
    return (
        <div className="results-container">
        {fakeResponse.data.articles.map((article, index) => (
            <div key={index}>
                <a href="https://www.google.com/" className="results-article-link-text">{article.title}</a>
                <p>{article.content}</p>
            </div>
        ))}
      {/* <h2>News Stories</h2>
            <ul>
                {news.map((story, index) => (
                    <li key={index}>
                        <a href={story.url} target="_blank" rel="noopener noreferrer">{story.title}</a>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default UserResults;