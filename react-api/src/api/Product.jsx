import { useEffect } from "react";
import { useState } from "react";

function Product() {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const response = await fetch(
      "https://product-server-json.onrender.com/products",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    setProduct(Array.isArray(data) ? data : [data]);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="container d-flex justify-content-around  flex-wrap">
      {product.map((item) => {
        return (
          <div className="card mt-3  " key={item.id} style={{ width: "18rem" }}>
            <img src={item.image} />
            <div className="card-body   ">
              <h5 className="card-title">Name: {item.name}</h5>
              <p className="card-text">Price: ${item.price}</p>
              <p className="card-text">Rating: {item.rating} %</p>
              <p className="card-text">Sku: {item.sku}</p>
              <div className=" overflow-auto " style={{ height: "70px" }}>
                <p className="card-text">Description: {item.description}</p>
              </div>
            </div>
            <div className="    mb-3 d-flex justify-content-center">
              <button className="btn btn-primary w-75 rounded-pill">
                Buy Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
