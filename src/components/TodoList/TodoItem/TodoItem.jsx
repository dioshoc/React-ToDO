import React from "react";
import RemoveBtn from "../../RemoveBtn/remove-btn";

const TodoItem = ({title, subtitle, id, handleRemoveTodo}) => {
  return (
    <li className="todo-item">
      <div className='todo-item__content'>
        <h3 className="todo-item__title">
          {title}
        </h3>
        {subtitle ? <p className='todo-item__subtitle'>{subtitle}</p> : null}
      </div>
      <RemoveBtn action={handleRemoveTodo} value={id} classname="todo-item__button"/>
    </li>
  );
}

export default TodoItem;
