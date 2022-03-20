import React, { useState, Fragment } from "react"
import Button from "../Button/Button";

export default function Input(props) {

  const [inputValue, setInputValue] = useState('')
  const [showError, setShowError] = useState(false)

  function changeHandler (event) {
    setInputValue(event.target.value)
    setShowError(false)
  }

  function submitHandler(event) {
    event.preventDefault();
    if (inputValue.trim() === '') {
      setShowError(true)
    }
    if (inputValue.trim() !== '') {
      const enteredValue = {
        addTodo: inputValue,
      };
      props.onValueData(enteredValue);
    }
    setInputValue('')
  }

  return (
    <Fragment>
      <input
        value={inputValue}
        onChange={changeHandler}
        type="text"
        className="h-[2.8rem] pl-5 text-[17px] rounded-l-full text-white w-[24rem] pb-[0.2rem] bg-indigo-500 focus-within:border-none focus:outline-none"
      />
      <Button Click={submitHandler} Description="Add todo"/>
      {showError && (<div className="text-red-400 ml-32 fixed mt-1"> You have entered empty! </div>)}
    </Fragment>
  );
}