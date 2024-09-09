import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  const addValue = () => {
    setCounter(counter+1);
  }
  const subtractValue = () => {
    if(counter === 0) return;
    setCounter(counter-1);
  }
  return (
    <>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={subtractValue}>Subtract</button>
    </>
  )
}

export default App
