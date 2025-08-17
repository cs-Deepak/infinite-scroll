import React, { useState } from 'react'
import '../App.css'
const State = () => {
  
    const [count, setCount]=useState(0)


    function inc (){
        setCount(count+1)
    }
    function dec (){
        setCount(count-1)
    }
   
   
  return (
    <div >
        <h1>Counter App</h1>
        <h2>Current Count  : {count}</h2>
        <div className='button'>
        <button onClick={inc}> ➕ Increment</button>
        <button onClick={()=>setCount(count > 0 ? count - 1 : 0)}> ➖ Decrement</button>
        <button onClick={()=>setCount(0)}> 🔄️ Reset</button>
        </div>
    </div>
  )
}

export default State