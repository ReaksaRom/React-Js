import { useContext } from "react";
import CountContext from "../store/CountProvider";
function Count2() {
  //note that we are using the CountContext here
  const { count, Increment } = useContext(CountContext);
  return (
    <div className="">
      <p>Count: {count}</p>
      <button onClick={() => Increment()}>count</button>
    </div>
  );
}

export default Count2;
