import { useState } from "react";

function jsxForm() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [user, setUser] = useState([]);
  const onId = (e) => {
    setId(e.target.value);
  };
  const onName = (e) => {
    setName(e.target.value);
  };
  const onAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <form action="">
        <input onChange={onId} type="text" value={id} placeholder="input id"/><br />
        <input onChange={onName} type="text" value={name} placeholder="input name" /><br />
        <input onChange={onAge} type="text" value={age} placeholder="input age"/><br />
        <p>
          {id} {name} {age}
        </p>
      </form>
    </div>
  );
}

export default jsxForm;
