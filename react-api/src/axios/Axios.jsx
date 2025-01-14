import { useEffect, useState } from "react";
import axios from "axios";

function Axios() {
  const [data, setDate] = useState([]);
  const Api = async () => {
    try {
      const res = await axios.get("https://drink-json.onrender.com/drinks");
      setDate(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    Api();
  }, []);
  return (
    <div
      className="card"
      style={{ display: "flex", flexWrap: "wrap", width: "50%" }}
    >
      {data.map((item) => {
        return (
          <div className="card-body" key={item.id}>
            <h1>{item.item}</h1>
            <p>price: $ {item.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Axios;
