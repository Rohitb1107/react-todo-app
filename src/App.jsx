import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-div">
        <div className="card-section">
          <div className="card-heading">Todo App</div>
          <div className="card-input my-2">
            <input
              className="form-control w-75"
              type="text"
              name="task"
              placeholder="Enter task"
            />
            <button className="btn btn-primary mx-2 w-25">Add</button>
          </div>
          <div className="card-content">
            <div className="row my-3 mx-2">
              <div className="col-8">Buy Mango</div>
              <div className="col-4">
                <div className="btn btn-danger mx-3">Delete</div>
              </div>
            </div>
            <div className="row my-3 mx-2">
              <div className="col-8">Buy Banana</div>
              <div className="col-4">
                <div className="btn btn-danger mx-3">Delete</div>
              </div>
            </div>
            <div className="row my-3 mx-2">
              <div className="col-8">Buy Apple</div>
              <div className="col-4">
                <div className="btn btn-danger mx-3">Delete</div>
              </div>
            </div>
            <div className="row my-3 mx-2">
              <div className="col-8">Buy Fruits</div>
              <div className="col-4">
                <div className="btn btn-danger mx-3">Delete</div>
              </div>
            </div>
            <div className="row my-3 mx-2">
              <div className="col-8">Buy Shakes</div>
              <div className="col-4">
                <div className="btn btn-danger mx-3">Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
