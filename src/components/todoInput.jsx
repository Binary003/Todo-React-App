import React, { useState } from "react";

function todoInput(props) {
  const [InputText, setInputText] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={InputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(InputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default todoInput;
