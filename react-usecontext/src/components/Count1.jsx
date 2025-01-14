import { useContext } from "react";
import CountContext from "../store/CountProvider";

function Count1() {
  const { count, Increment } = useContext(CountContext);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => Increment()}>count</button>
    </div>
  );
}

export default Count1;
