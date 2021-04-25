import React from "react";

const GifGridItem = ({ alt, url }) => {
  return (
    <article className="card animate__animated animate__fadeIn">
      <img src={url} alt={alt} />
      <p className="title">{alt}</p>
    </article>
  );
};

export default GifGridItem;
