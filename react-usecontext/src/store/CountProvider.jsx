import { useState, createContext } from "react";

const CountContext = createContext();

// eslint-disable-next-line react/prop-types
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <CountContext.Provider value={{ count, Increment }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContext;
