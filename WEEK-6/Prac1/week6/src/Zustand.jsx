import { useCountStore } from "./Store";

function zustand() {
  const { count, increase } = useCountStore();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default zustand;
