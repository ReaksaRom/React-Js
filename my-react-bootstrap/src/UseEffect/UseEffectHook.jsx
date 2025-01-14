import { useEffect, useState } from "react";

function UseEffectHook() {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");

  //Alway rendering after u update...
  useEffect(() => {
    console.log("Alway rendering after u update...");
  });
  //Render only one time...
  useEffect(() => {
    console.log("Render only one time...");
  });
  //Render when u update specific value
  useEffect(() => {
    console.log("Render when u update specific value");
  }, [msg]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <input
        type="text"
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        value={msg}
      />
    </div>
  );
}

export default UseEffectHook;
