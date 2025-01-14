import { useDispatch, useSelector } from "react-redux";
import { incrementQty, decrementQty, cancelStock } from "../store/product";
function Product() {
  const counter = useSelector((state) => state.counter.qty);
  const price = useSelector((state) => state.counter.price);
  const description = useSelector((state) => state.counter.description);
  const totale = useSelector((state) => state.counter.totale);
  const dispatch = useDispatch();
  return (
    <>
      <div className="card " style={{ width: "18rem" }}>
        <div className="card-header">Product</div>
        <div className="card-body">
          <p>Qty: {counter}</p>
          <p>Price: {price}</p>
          <p>Total: ${totale}</p>
          <p>Description: {description}</p>
        </div>
        <button
          className="btn btn-danger rounded-pill me-2"
          onClick={() => dispatch(cancelStock())}
        >
          cancel
        </button>
        <div className="d-flex justify-content-center p-2">
          <button
            className="btn btn-outline-danger rounded-pill"
            onClick={() => dispatch(incrementQty())}
          >
            Count++
          </button>
          <button
            className="btn btn-primary  rounded-pill"
            onClick={() => dispatch(decrementQty())}
          >
            Count--
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
