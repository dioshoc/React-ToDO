import './App.css';
import TodoList from "./TodoList/TodoItem";
import {useState} from "react";


function App() {
  let [state, setState] = useState(
    [
      {id: 1, text: "bread", checked: true},
      {id: 2, text: "milk", checked: false},
      {id: 3, text: "butter", checked: false}
    ]
  );

  function handleToggleChecked(id) {
    setState(state = state.map((item) => {
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
    setState(state.filter(item => item.id !== id))
  }

  return (
    <div className="App">
      <TodoList
        todoList={state}
        handleRemoveTodo={handleRemoveTodo}
        handleToggleChecked={handleToggleChecked}
      />
    </div>
  );
}

export default App;
