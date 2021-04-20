import React, { useState } from "react";

const AddCategory = ({ categories, func }) => {
  const [inputText, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    func((state) => [...state, inputText]);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="category"
        id="category"
        onChange={handleChange}
        value={inputText}
      />
    </form>
  );
};

export default AddCategory;
