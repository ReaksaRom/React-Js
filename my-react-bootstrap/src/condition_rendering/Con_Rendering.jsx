import { useState } from "react";

function Con_Rendering() {
  const [text, setText] = useState("");
  const [isLimit, setLimit] = useState("");
  const [toggle, setToggle] = useState(false);
  const handler = (e) => {
    e.preventDefault();
    setText(e.target.value);
    if (text.length < 8) {
      setLimit(false);
    } else {
      setLimit(true);
    }
  };
  const click = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handler}
        placeholder="please input text"
      />
      <p>
        {isLimit ? (
          <p className="text-danger">Charater must be less than 8</p>
        ) : (
          <p></p>
        )}
      </p>
      <span className={`fs-2 ${toggle ? "text-danger" : "text-success"}`}>
        welcome to my chanel Reaksa001
      </span>
      <button onClick={click} className="btn btn-primary">
        click
      </button>
    </div>
  );
}

export default Con_Rendering;
