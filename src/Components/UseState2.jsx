import { useState } from "react";

const UseState2 = () => {
  // const [toggle, setToggle] = useState("On");
  const [toggle,setToggle] = useState(true);

  function handleToggle() {
  //  setToggle(toggle==="On"?"Off":"On")
   setToggle(!toggle)
   
  }
  return (
    <div>
      <div>
        {toggle? "On": "Off"} <br />
        {/* {toggle}<br/> */}
        <button type="button" onClick={handleToggle}>
          Toggle
        </button>
      </div>
    </div>
  );
};

export default UseState2;
