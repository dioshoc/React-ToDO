import React from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {useState} from "react";


const App = () => {
  const [todoList, setTodoList] = useState(
    [
      {id: 1, text: "bread", checked: true},
      {id: 2, text: "milk", checked: false},
      {id: 3, text: "butter", checked: false}
    ]
  );

  function handleToggleChecked(id) {
    setTodoList(todoList.map((item) => {
        if (item.id === id) {
          let negation = !item.checked
          return {
            ...item,
            checked: negation
          }
        }
        return item
      }
    ))
  }

  function handleRemoveTodo(id) {
    setTodoList(todoList.filter(item => item.id !== id))
  }

  return (
    <div className="App">
      <TodoList
        todoList={todoList}
        handleRemoveTodo={handleRemoveTodo}
        handleToggleChecked={handleToggleChecked}
      />
    </div>
  );
}

export default App;
