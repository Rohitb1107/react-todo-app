import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    setItems([inputValue, ...items]);
    setInputValue("");
  };

  console.log(items);

  return (
    <>
      <div className="back-div"></div>
      <div className="main-div">
        <div className="title-part">
          <div className="title">New Todo:</div>
        </div>
        <div className="input-card">
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Add task..."
            className="form-control"
            value={inputValue}
            onChange={changeHandler}
          />
          <button className="btn add-btn" onClick={addItem}>
            Add
          </button>
        </div>
      </div>
      <div className="display-items">
        <div className="single-item">
          <div className="text-part">Buy milk</div>
          <div className="icons">
            <FaPencilAlt className="delete-icon" />
            <RiDeleteBin6Line className="delete-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
