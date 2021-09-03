import React from "react";
import AddTodo from "../AddTodo/AddTodo";

let Popup = ({handleAddTodo}) => {
  return(
    <div className="popup">
      <div className="popup__content">
      <AddTodo
        handleAddTodo={handleAddTodo}
      />
      </div>
    </div>
  )
}

export default Popup