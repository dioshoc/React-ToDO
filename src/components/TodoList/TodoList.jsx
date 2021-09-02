import React from "react";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = (props) => {
  return (
    <ul className="TodoList">
      {props.todoList.map((item, index) =>
        <TodoItem
          key={item.id}
          id={index + 1}
          text={item.text}
          checked={item.checked}
          handleRemoveTodo={props.handleRemoveTodo}
          handleToggleChecked={props.handleToggleChecked}
        />
      )}
    </ul>
  );
}

export default TodoList;
