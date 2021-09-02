import React from "react";
import './App.css';
import TodoList from "./components/TodoList/TodoList";
import {useState} from "react";
import AddTodo from "./components/AddTodo/AddTodo";

const App = () => {
  const [todoList, setTodoList] = useState(
    [
      {id: 1, text: "bread", checked: true},
      {id: 2, text: "milk", checked: false},
      {id: 3, text: "butter", checked: false}
    ]
  );

  function handleToggleChecked(id) {
    setTodoList(todoList.map((item, index) => {
        if (index + 1 === id) {
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
    setTodoList(todoList.filter((item, index) => index + 1 !== id))
  }

  function handleAddTodo(value){
    const item = {
      id: Date.now(),
      text: value,
      checked: false
    }
    setTodoList(todoList.concat(item))
  }

  return (
    <div className="App">
      <AddTodo
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        todoList={todoList}
        handleRemoveTodo={handleRemoveTodo}
        handleToggleChecked={handleToggleChecked}
      />
    </div>
  );
}

export default App;
