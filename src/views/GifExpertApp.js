import React, { useState } from "react";
import AddCategory from "../components/AddCategory";
import GifGrid from "../components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["React"]);

  return (
    <>
      <h2>GifExpertAPP</h2>
      <AddCategory func={setCategories} />
      <hr />
      <article>
        <ol>
          {categories.map((category) => (
            <GifGrid category={category} key={category} />
          ))}
        </ol>
      </article>
    </>
  );
};

export default GifExpertApp;
