import { useState, createContext } from "react";
import Component2 from "./Component2.jsx";

export const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Imamoddin Shaikh");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

export default Component1;
