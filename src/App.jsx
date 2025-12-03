import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

function AddingValue() {
  console.log("clicked ",count);
  // count = count+1;
  // count = count+1;
  // count = count+1;
  // count = count+1;

  // setCount(count)

  setCount(count => count+1)
  setCount(count => count+1)
  setCount(count => count+1)
 
}

function RemovingValue() {
  if (count>0) {
    console.log("remove",count);
    
  setCount(count-1)
  }

}

  return (
    <>
      <h1>hello! i am react</h1>
      <h2>Counter {count}</h2>

      <button onClick={AddingValue}>Add Value  </button>
      <br />
      <br />
      <button onClick={RemovingValue}>Remove Value </button>
    </>
  )
}

export default App
