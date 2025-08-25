import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]=useState(5)
//let counter=5;
const addValue=()=>{
  if(counter<=20)
  {
  console.log("value added");
  // console.log(counter+=1)
  setCounter(counter+1)
  }
  else{
    console.log("value is greter then 20");
    return
    
  }

  
}
const removeValue=()=>{
  if(counter>0)
  {
  console.log("removed 1: ");
  setCounter(counter-1)
  }
  else{
    console.log("value is less then 0: ");
return
  }

}
  return (
<>
<h1>welcome</h1>
<h2>counter value:{counter}</h2>
<button  
onClick={addValue}
>add value:{counter}</button><br/>
<button onClick={removeValue}>remove value:{counter}</button>
</>
  )
}

export default App
