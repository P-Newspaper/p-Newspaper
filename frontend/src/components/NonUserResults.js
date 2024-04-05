import React from "react";
import { useLocation } from "react-router-dom";

function NonUserResults({ news }) {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <h2>News Stories</h2>
      <ul>
        {data.map((story, index) => (
          <li key={index}>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
            <p> Summary: {story.summary} </p>
            <p> Date Published: {story.date} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NonUserResults;
