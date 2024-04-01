import React from "react";
import { useLocation } from "react-router-dom";

function NewsList({ news }) {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      {data.articles.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
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
