import React from "react";

const Todo = () => {
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
          />
          <button className="btn add-btn">Add</button>
        </div>
      </div>
      <div className="content-part"></div>
    </>
  );
};

export default Todo;
