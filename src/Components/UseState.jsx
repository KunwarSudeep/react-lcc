import { useState ,useEffect} from "react";


const UseState = () => {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    if (count > 0) {
      setCount(count - 1);
    }

   
  }
   useEffect(() => {
      console.log("The component mounted");
    }, [count]);

    console.log(count);

  return (
    <div>
      <div>
        {count}
        <br />
        <button type="button" onClick={handleIncrease}>
          Increase
        </button>
        <button type="button" onClick={handleDecrease}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default UseState;
