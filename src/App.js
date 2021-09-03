import React, {useEffect} from "react";
import './styles/App.css';
import TodoList from "./components/TodoList/TodoList";
import {useState} from "react";

import OpenPopupButton from "./components/OpenPopupButton/OpenPopupButton";
import Popup from "./components/Popup/Popup";

const App = () => {
  const [todoList, setTodoList] = useState({});
  useEffect(() => {
    console.log(todoList)
  }, [todoList])

  function handleRemoveTodo(id) {
    const newValue = {
      ...todoList
    }
    delete newValue[id]
    setTodoList(newValue
    )
  }

  function handleAddTodo(title, subtitle) {
    const item = {
      id: Date.now(),
      title: title,
      subtitle: subtitle
    }

    const newValue = {
      ...todoList,
      [item.id]: item,
    }

    setTodoList(newValue)
  }

  return (
    <div className="app">
      <h1 className="app__title">Todo List</h1>

      <TodoList
        className="app__todo-list"
        todoList={todoList}
        handleRemoveTodo={handleRemoveTodo}
      />
      <OpenPopupButton />
      <Popup handleAddTodo={handleAddTodo}/>
    </div>
  );
}

export default App;
