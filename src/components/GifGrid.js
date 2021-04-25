import React from "react";
import GifGridItem from "./GifGridItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { loading, data } = useFetchGifs(category);
  return (
    <section>
      <h3>{category}</h3>
      {loading ? (
        <h4 className="animate__animated animate__flash">Cargando ...</h4>
      ) : (
        <article className="card-grid ">
          {data.map(({ id, title, url }) => (
            <GifGridItem key={id} alt={title} url={url} />
          ))}
        </article>
      )}
    </section>
  );
};

export default GifGrid;
