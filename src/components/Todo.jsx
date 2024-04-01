import React from "react";
import { useSetRecoilState } from "recoil";
import { TodoListState } from "../state/atoms/TodoState";

const Todo = ({ text, id }) => {
  const setTodos = useSetRecoilState(TodoListState);

  function handleDelete() {
    setTodos((prev) => {
      return prev.filter((ea) => ea.id !== id);
    });
  }

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleDelete}>X</button>
    </div>
  );
};

export default Todo;
