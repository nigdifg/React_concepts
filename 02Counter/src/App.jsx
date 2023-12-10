import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] =useState(0)
  // let counter = 5;
  const addValue = ()=>{
  // console.log("value added! ", Math.random());
  // console.log(counter);
  if(counter ===20){
    setCounter(20)
  }
  else{

    setCounter(counter+1)
  }
  }

  const removeValue = () =>{
    if(counter===0){
      setCounter(0)
    }
    else{

      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1> 
      <h2>Counter Value: {counter}</h2> 
      <button onClick={addValue} type="button">Add Value</button>
      <button onClick={removeValue} type="button">Remove Value</button>
    </>
  )
}

export default App
