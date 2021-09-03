import React from "react";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = ({todoList, handleRemoveTodo}) => {
  const list = []
  for (let key in todoList) {
    let item = todoList[key]
    list.push(
      <TodoItem
        key={key}
        id={item.id}
        title={item.title}
        subtitle={item.subtitle}
        checked={item.checked}
        handleRemoveTodo={handleRemoveTodo}
      />
    )
  }

  return (
    <ul className="todo-list">
      {list}
    </ul>
  );
}

export default TodoList;
