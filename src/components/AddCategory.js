import React, { useState } from "react";
import PropTypes from "prop-types";
const AddCategory = ({ func }) => {
  const [inputText, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputText.trim().length > 0 && func((state) => [inputText, ...state]);
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

AddCategory.propTypes = {
  func: PropTypes.func.isRequired,
};

export default AddCategory;
