import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/landingAndResults.css";

function Results() {
  const location = useLocation();

  // const { articlesString = '[]' } = location.state || {};
  let articlesString = location.state ? location.state.articlesString : '[]';
  articlesString = articlesString.replace(/^"|"$/g, ''); 
  articlesString = articlesString.replace(/\\n/g, ''); 
  articlesString = articlesString.replace(/\\"/g, '"'); 
  
  console.log('articlesString:', articlesString)

  let articles;
  try {
    articles = JSON.parse(articlesString);
  } catch (e) {
    console.error('Error parsing articles:', e);
    articles = [];
  }
  console.log('parsed articles:', articles)

  if (!Array.isArray(articles)) {
    console.error('Expected articles to be an array but received:', articles);
    return <div>Incorrect data format received</div>;
  }

  if (!articles.length) {
    return <div className="no-articles">No news articles to display</div>;
  }

  return (
    <div className="results-container">
      <h2 className="results-title">News Stories</h2>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <h3 className="article-title">
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-link">
                {article.title}
              </a>
            </h3>
            <p className="article-summary">{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
