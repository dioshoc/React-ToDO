import React, {useState} from "react";

const AddTodo = ({handleAddTodo}) => {
  const [value, setValue] = useState("")
  const [validate, setValidate] = useState(true)

  const getInputValue = (evt) => {
    let inputText = evt.target.value
    setValue(inputText)
    if (inputText.length > 4) {
      setValidate(false)
    } else {
      setValidate(true)
    }
  }

  const handleSubmit = (val) => {
    if (value.length > 4) {
      handleAddTodo(val)
      setValue("")
      setValidate(true)
    }
  }

  return (
    <form>
      <input type="text" value={value} onChange={getInputValue} maxLength={30}/>
      <button onClick={() => handleSubmit(value)} disabled={validate === true}>Submit</button>
    </form>
  )
}

export default AddTodo;