import React from "react";

function todoList(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <i
          className="fa-solid fa-trash icon-delete"
          onClick={(e) => {
            props.deletItems(props.index);
          }}
        ></i>
      </span>
    </li>
  );
}

export default todoList;
