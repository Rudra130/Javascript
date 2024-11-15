import { useState } from "react"
import {Card} from "./GithubCard/Card.jsx"



function App() {
  let [counter ,setState] = useState(0)
//let counter=15

const addValue = ()=>{
  if(counter>19){
    setState(0)
    alert("Counter is already at max")
  }else{
  setState(counter+1)
  }
}

const removeValue =() =>{
  if(counter===0){
    alert("Counter is already at min")
  }else{
    setState(counter-1)
  }
}
  return (
    <>   
    <h1>Counter </h1>
    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
     <button onClick={removeValue}>Remove Value {counter}</button>
     <Card userId="Rudra130" />
    </>
  )

 
}

export default App
