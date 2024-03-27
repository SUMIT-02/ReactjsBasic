import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {



  let [ counter , setCounter] = useState(15)
  
  //let counter = 15
 
  const addvalue=()=>{
    if (counter<=20) {
      setCounter(counter)
      counter=counter+1
    
    }
    
  }

const removeValue = ()=>{
  if (counter>0) {
    setCounter(counter)
    setCounter(counter-1)
  }
 
}

  return (
    <>
     <h1>Chai AUr react</h1>
     <h2>Counter Value: {counter} </h2>

     <button
     onClick={addvalue}
     >Add Value{counter}</button>
     <br/>
     <button
     onClick={removeValue}
     >Remove value{counter}</button>
    </>
  )
}

export default App
