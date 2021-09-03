import React from "react";
import './styles/App.css';
import TodoList from "./components/TodoList/TodoList";
import {useState} from "react";

import OpenPopupButton from "./components/OpenPopupButton/OpenPopupButton";
import Popup from "./components/Popup/Popup";

const App = () => {
  const [todoList, setTodoList] = useState({});
  const [showPopup, setShowPopup] = useState(false)

  function handleRemoveTodo(id) {
    const newValue = {
      ...todoList
    }
    delete newValue[id]
    setTodoList(newValue)
  }

  function handleAddTodo(task, note) {
    const item = {
      id: Date.now(),
      title: task,
      subtitle: note
    }

    const newValue = {
      ...todoList,
      [item.id]: item,
    }

    setTodoList(newValue)
  }

  function handleHidePopup() {
    setShowPopup(false)
  }

  function handleShowPopup() {
    setShowPopup(true)
  }

  return (
    <div className="app">
      <h1 className="app__title">Todo List</h1>

      <TodoList
        className="app__todo-list"
        todoList={todoList}
        handleRemoveTodo={handleRemoveTodo}
        handleHidePopup={handleHidePopup}
      />
      <OpenPopupButton handleShowPopup={handleShowPopup}/>
      <Popup handleAddTodo={handleAddTodo} handleHidePopup={handleHidePopup} showPopup={showPopup}/>
    </div>
  );
}

export default App;
