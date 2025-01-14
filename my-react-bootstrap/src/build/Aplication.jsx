import { useState } from "react";

function Aplication() {
  const [url, setUrl] = useState("");
  const send = (e) => {
    setUrl(e.target.value);
  };
  const img = "";
  const onsubmit = () => {};

  return (
    <div>
      <input onChange={send} placeholder="url" type="text" value={url} />
      <br />
      <img src={url} alt="" className="w-20 h-20" />
      <input type="text" value={img} />
      <button type="button" onClick={onsubmit}>
        send
      </button>
      <img src={img} alt="" />
    </div>
  );
}

export default Aplication;
