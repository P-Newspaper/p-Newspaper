import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/landingAndResults.css";

function Results() {
  const location = useLocation();
  const { articles } = location.state || { articles: [] };

  if (!articles.length) {
    return <div> No news articles to display </div>;
  }

  return (
    <div>
      <h2>News Stories</h2>
      {articles.map((article, index) => (
        <div key={index} className="article">
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </div>
  );  
}

export default Results;

