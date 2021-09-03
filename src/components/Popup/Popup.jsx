import React from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import RemoveBtn from "../RemoveBtn/remove-btn";

let Popup = ({handleAddTodo, handleHidePopup, showPopup}) => {
  return (
    <div className={"popup" + (showPopup ? " active" : "")}>
      <div className={"popup__blackout"} onClick={() => handleHidePopup()}/>
      <div className="popup__content">
        <RemoveBtn action={handleHidePopup} classname="popup__close-btn"/>
        <AddTodoForm
          handleAddTodo={handleAddTodo}
          handleHidePopup={handleHidePopup}
        />
      </div>
    </div>
  )
}

export default Popup