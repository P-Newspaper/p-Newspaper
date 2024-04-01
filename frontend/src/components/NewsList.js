import React from "react";

function NewsList({ news }) {
  return (
    <div>
      <h2>News Stories</h2>
      {/* <ul>
        {news.map((story, index) => (
          <li key={index}>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          </li>
        ))}
      </ul> */}
      {news}
    </div>
  );
}

export default NewsList;
