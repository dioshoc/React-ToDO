import React from "react";

function TodoItem({title, subtitle, id, handleRemoveTodo}) {
  return (
    <li className="todo-item">
      <div className='todo-item__content'>
        <h3 className="todo-item__title">
          {title}
        </h3>
        <p className='todo-item__subtitle'>
          {subtitle}
        </p>
      </div>
      <button onClick={() => handleRemoveTodo(id)} className='todo-item__button'>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16.3757" y="19.6225" width="5.14234" height="50.9092" transform="rotate(-45 16.376 19.622)"
                fill="white"/>
          <rect x="52.1965" y="16.1984" width="5.14234" height="50.9092" transform="rotate(45 52.197 16.198)"
                fill="white"/>
        </svg>
      </button>
    </li>
  );
}

export default TodoItem;
