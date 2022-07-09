import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [count, setCount] = useState(0)

    const increaseCounter = () => setCount(count+1)

    useEffect(()=>{
        alert("Hello! Its my counter! Press the button))0)")
    }, [])

  return (
    <div className={'counter-wrapper'}>
      <div className={'counter'}>
          <p>Its my counter!</p>
          <p>Count: {count}</p>
          <button onClick={increaseCounter}>+</button>
      </div>
    </div>
  );
}

export default App;
