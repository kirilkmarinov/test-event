import { useState } from "react";

function EventTest() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const handleClick = () => setCount(count + 1);
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
      </div>
      <div>
        <label for="text">Write something here: &nbsp;</label>
        <input type="text" onChange={handleValue}></input>
        <br></br>
        <label for="text">This is what you wrote: &nbsp; {value}</label>
      </div>
    </div>
  );
}

export default EventTest;
