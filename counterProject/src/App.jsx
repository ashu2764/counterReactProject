import react, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { count } from 'console'

function App() {

  let [counter, setCounter]=useState(0)
// // let counter = 5
const addValue = ()=>{
  // counter = counter+1;
 
  if(counter!==20){
    setCounter(counter + 1)
  }

}
const removeValue = ()=>{
  // counter = counter+1;
  if(counter!==0){
    setCounter(counter - 1)

  }
  


}

  return (
    <>
     <h1>Counter Project</h1>
     <h2>Counter value : {counter}</h2>
     <button
     onClick={addValue}> Add value</button>
     <br />
     <button onClick={removeValue}>remove value value</button>
    </>
  )
}

export default App
