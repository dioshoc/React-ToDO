function TodoItem(props) {
  return (
    <li className="TodoItem">
      <div>
        <input type="checkbox" checked={props.checked} onChange={() => props.handleToggleChecked(props.id)}/>
        <span>
            {props.id}
        </span>
      </div>
      <div>
        {props.text}
      </div>
      <button onClick={() => props.handleRemoveTodo(props.id)}>remove</button>
    </li>
  );
}

export default TodoItem;
