import React from "react";

function GifList ({gifs}) {
  return (
    <ul>
      {gifs.map((gif) => (
        <li key={gif}>
          <img src={gif} alt="gif" />
        </li>
      ))}
    </ul>
  );
}

export default GifList