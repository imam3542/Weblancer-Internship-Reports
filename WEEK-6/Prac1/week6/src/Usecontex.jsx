import { createContext, useContext } from "react";

const MessageContext = createContext();

function App() {
  return (
    <MessageContext.Provider value="This is Week 6 Practice">
      <Message />
    </MessageContext.Provider>
  );
}

function Message() {
  const text = useContext(MessageContext);
  return <h2>{text}</h2>;
}

export default App;
