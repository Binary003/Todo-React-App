import React, { useState } from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (InputText) => {
    if (InputText !== "") setListTodo([...listTodo, InputText]);
  };

  const deletListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">todo</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deletItems={deletListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
