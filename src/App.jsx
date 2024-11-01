import React, { useState } from 'react'

const App = () => {
  let [counter,setCounter] = useState(50);
  const update = () => {
    setCounter(counter+1);
  } 
  const decrease = () => {
    setCounter(counter-1);
  }
  return (
    <div>
      <h1>หมาล่านรกแตก</h1>
      <p>ราคาไม้ละ {counter} &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={update}>+</button>&nbsp;&nbsp;&nbsp;
      <button onClick={decrease}>-</button>
      </p>
      <p>5 ไม้ {counter*5} บาท</p>
      <p>10 ไม้ {counter*10} บาท</p>
      <p>20 ไม้ {counter*20} บาท</p>
      <p>30 ไม้ {counter*30} บาท</p>
    </div>
  )
}

export default App