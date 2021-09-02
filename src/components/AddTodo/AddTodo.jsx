import React, {useState} from "react";

const AddTodo = (props) => {
  const [value, setValue] = useState("")
  const [validate, setValidate] = useState(true)

  const getInputValue = (evt) => {
    setValue(evt.target.value)
    if (evt.target.value.length > 4) {
      setValidate(false)
    } else {
      setValidate(true)
    }
  }

  const handleSubmit = (val) => {
    if (value.length > 4) {
      props.handleAddTodo(val)
      setValue("")
      setValidate(true)
    }
  }

  return (
    <div>
      <h2>Create ToDo</h2>
      <input type="text" value={value} onChange={getInputValue} maxLength={30}/>
      <button onClick={() => handleSubmit(value)} disabled={validate === true}>Submit</button>
    </div>
  )
}

export default AddTodo;