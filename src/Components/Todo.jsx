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
    if (!inputValue) {
      alert("Input is blank!");
    } else {
      setItems([inputValue, ...items]);
      setInputValue("");
    }
  };

  const deleteItem = (i) => {
    const updatedList = items.filter((elem, ind) => {
      return ind !== i;
    });

    setItems(updatedList);
  };

  console.log(items);

  return (
    <>
      <div className="back-div">
        <div className="name">Todo App | Rohit</div>
      </div>
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
        {items.map((e, i) => {
          return (
            <div className="single-item" key={i}>
              <div className="text-part">{e}</div>
              <div className="icons">
                <FaPencilAlt className="delete-icon" />
                <RiDeleteBin6Line
                  className="delete-icon"
                  onClick={() => deleteItem(i)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
