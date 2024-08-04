import React, { useReducer } from 'react'


const reduce=(state,action)=>{
if(action==="REDUCE"){
    return state-1
}
if(action==="Add"){
    return state+1
}
}

const Counter = () => {

const[state,dispatch]=useReducer(reduce,0)

const handleDec=()=>{
    dispatch("REDUCE")
}
const handleinc=()=>{
    dispatch("ADD")
}


  return (
    <div>
      <button onClick={handleDec}>dec</button>
      <button onClick={handleinc}>inc</button>
    </div>
  )
}

export default Counter
