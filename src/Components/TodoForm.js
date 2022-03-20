import React, { useState } from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";


export default function TodoForm () {
  const [allTodo, setTodo] = useState([]);

  function dataHandler (event) {
    setTodo(prevTodos => {
      return [event, ...prevTodos];
    })
  }
  
  const deleteTodo = (index) => {
    const newTodo = allTodo
    newTodo.splice(index, 1);
    setTodo([...newTodo])
  } 
  return (
    <form
      className="rounded-xl bg-[#131313] h-[50rem] w-[40rem] overflow-y-scroll scrollbar-hide"
    >
      <h3 className="text-white font-['Merriweather_Sans'] font-[600] text-center pt-10 text-2xl">
        What's the plan for today ?
      </h3>
      <Todo onData={dataHandler} />
      {allTodo.map((todo, index) => (
        <TodoList
          key={Math.random()}
          Todo={todo.addTodo}
          removeClick={() => deleteTodo(index)}/>))}
    </form>
  );
}






