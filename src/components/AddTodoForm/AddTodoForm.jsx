import React, {useState} from "react";

const AddTodoForm = ({handleAddTodo, handleHidePopup}) => {
  const [value, setValue] = useState({
    task: "",
    note: ""
  })
  const [validate, setValidate] = useState(true)

  const getInputTaskValue = (evt) => {
    let inputText = evt.target.value
    const newValue = {
      ...value,
      task: inputText
    }
    setValue(newValue)

    if (inputText.length > 4) {
      setValidate(false)
    } else {
      setValidate(true)
    }
  }

  const getInputNoteValue = (evt) => {
    let inputText = evt.target.value
    const newValue = {
      ...value,
      note: inputText
    }
    setValue(newValue)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newValue = {
      task: "",
      note: ""
    }

    if (value.task.length > 4) {
      handleAddTodo(value.task, value.note)
      setValue(newValue)
      setValidate(true)
      handleHidePopup()
    }
  }

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <fieldset className="form__fieldset">
        <label
          className="form__label"
          htmlFor="form__input-task">Задача</label>
        <input
          type="text"
          className="form__input-task"
          placeholder="Введите имя задачи"
          required
          maxLength={30}
          value={value.task}
          onChange={getInputTaskValue}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label
          className="form__label"
          htmlFor="form__input-note">Заметка</label>
        <textarea
          className="form__input-note"
          placeholder="Введите текст заметки"
          maxLength="300"
          value={value.note}
          onChange={getInputNoteValue}
        />
      </fieldset>
      <button type={"submit"} disabled={validate === true}
              className="form__button">Сохранить
      </button>
    </form>
  )
}

export default AddTodoForm;