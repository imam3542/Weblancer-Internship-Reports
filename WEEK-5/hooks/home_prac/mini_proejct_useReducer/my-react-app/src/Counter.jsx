import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "INC") {
    return state + 1;
  }
  if (action.type === "DEC") {
    return state - 1;
  }
  return state;
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </div>
  );
}

export default Counter;
