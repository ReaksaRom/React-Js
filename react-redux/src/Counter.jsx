import { useDispatch, useSelector } from "react-redux";
import { increment, disretment } from "./store/store";
function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        className="btn btn-outline-primary me-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="btn btn-warning"
        onClick={() => dispatch(disretment())}
      >
        Disretment
      </button>
    </div>
  );
}

export default Counter;
