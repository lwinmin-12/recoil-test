import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { TodoListState } from "../state/atoms/TodoState";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useRecoilState(TodoListState);
  const [inputText, setInputText] = useState("");

  function handleOnChange(e) {
    setInputText(e.target.value);
  }

  function handleAddTodo() {
    setTodos((prev) => [...prev, { id: Math.random(), text: inputText }]);
    setInputText("");
  }

  function handleClearTodo() {
    setTodos([]);
  }

  console.log(todos);

  return (
    <main>
      <input value={inputText} onChange={handleOnChange} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodo}>Clear Todo</button>
      {todos.map((ea) => (
        <Todo key={ea.id} text={ea.text} id={ea.id} />
      ))}
    </main>
  );
};

export default Todos;
