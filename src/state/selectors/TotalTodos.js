import { selector } from "recoil";
import { TodoListState } from "../atoms/TodoState";

export const totalTodos = selector({
  key: "totalTodos",
  get: ({ get }) => {
    const TodoListStates = get(TodoListState);
    return TodoListStates.length;
  },
});
