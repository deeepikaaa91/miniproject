import React, { useState } from 'react'

function Calc() {
const [value, setValue] = useState('')
  return (
   <div className='main'>
   <div className='container'>
   <div className='contain'>
   <div className='inp'>  
   {value}
   </div>
   </div>
   <div className='contain1'>
    <button onClick={()=>setValue("")} className='red'>AC</button>
    <button onClick={()=>setValue(value.slice(0,value.length-1))} className='red'>BK</button>
    <button onClick={()=>setValue(value + "%")} className='red'>%</button>
    <button onClick={()=>setValue(value + "/")} className='blue'>/</button>
    <button onClick={()=>setValue(value + "7")} className='gray'>7</button>
    <button onClick={()=>setValue(value + "8")}className='gray'>8</button>
    <button onClick={()=>setValue(value + "9")} className='gray'>9</button>
    <button onClick={()=>setValue(value + "*")} className='blue'>X</button>
    <button onClick={()=>setValue(value + "4")}className='gray'>4</button>
    <button onClick={()=>setValue(value + "5")}className='gray'>5</button>
    <button onClick={()=>setValue(value + "6")}className='gray'>6</button>
    <button onClick={()=>setValue(value + "-")}className='blue'>-</button>
    <button onClick={()=>setValue(value + "1")}className='gray'>1</button>
    <button onClick={()=>setValue(value + "2")}className='gray'>2</button>
    <button onClick={()=>setValue(value + "3")}className='gray'>3</button>
    <button onClick={()=>setValue(value + "+")}className='blue'>+</button>
    <button onClick={()=>setValue(value + ".")}className='gray'>.</button>
    <button onClick={()=>setValue(value + "0")}className='gray'>0</button>
    <button onClick={()=>setValue(eval)} className='gray'>=</button>
    <button onClick={()=>setValue(value + "/")}className='blue'>/</button>
    
   </div>
    
  </div>
  </div>
  )
}

export default Calc