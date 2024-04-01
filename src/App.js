import React from "react";
import Todos from "./components/Todos";
import { RecoilRoot, useRecoilValue } from "recoil";
import { totalTodos } from "./state/selectors/TotalTodos";

const App = () => {
  const count = useRecoilValue(totalTodos);
  return (
    <div>
      Hello
      <Todos />
      <h3>Total todos : {count}</h3>
    </div>
  );
};

export default App;
