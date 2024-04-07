import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/landingAndResults.css";

function NewsList({ news }) {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="results-container">
      {data.articles.map((article, index) => (
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
  );
}

export default NewsList;
