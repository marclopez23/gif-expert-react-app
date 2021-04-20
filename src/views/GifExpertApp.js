import React, { useState } from "react";
import AddCategory from "../components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Simpsons",
    "React",
    "Developer",
  ]);

  return (
    <>
      <h2>GifExpertAPP</h2>
      <AddCategory categories={categories} func={setCategories} />
      <hr />
      <article>
        <ol>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ol>
      </article>
    </>
  );
};

export default GifExpertApp;
