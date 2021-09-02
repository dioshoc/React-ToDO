import TodoItem from "./TodoItem/TodoItem";

function TodoList(props) {
  return (
    <ul className="TodoList">
      {props.todoList.map(item =>
        <TodoItem key={item.id}
          id={item.id}
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
