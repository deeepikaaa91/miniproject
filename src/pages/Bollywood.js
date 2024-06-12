import React, { useState } from 'react'
import {json} from 'react-router-dom';

function Bollywood() {
  const movies = ['dhoom','race','Kalank','Heeramandi','Dangal','sarkar','Hero','Lootera','pk']
  const[picture,setPicture] = useState([]);
  const start =()=>{
    const randomMovie = Math.floor(Math.random()*9)
    const picture = movies[randomMovie].split("");
    setPicture(picture)
  }
  const[letter,setLetter] = useState("");
  const[attempt,setAttempt] = useState(9);
  const[correct,setCorrect] = useState([]);
  const[inCorrect,setInCorrect] = useState([]);

  const checkLetter  =  ()=>{
    if(picture.includes(letter)){
     setCorrect([...correct,letter])
     setLetter("")
    }
    else{
      setInCorrect([...inCorrect,letter])
      setLetter("")
      setAttempt(attempt-1);
    }
}
  return (
    <div className='flex flex-col justify-center items-center gap-10 pt-[50px]'>
    <button  className='w-[10%] bg-red-200' onClick={()=>start()}>START</button>
    <div className='flex flex-col  justify-center items-center gap-10'>
        <input className='h-[4vh] pl-[10px] bg-yellow-100 outline-none ' value={letter} onChange={(e)=>setLetter(e.target.value)} type='text' placeholder='enter the letters'></input>
        <button  className=' h-[4vh] w-[30%] bg-gray-500 text-white'  onClick={()=>checkLetter()}>Add</button>
        <label className='bg-purple-200 w-[45%] pl-[10px]' >attempt: {attempt}</label>
      </div>
      {JSON.stringify(picture)}
      <div className=' flex  gap-3 '>
      {picture.map ((i)=>
      <div className='w-10 h-[3vh] border-b border-black flex items-end justify-center'>{correct.includes(i) && i }</div>)}
      </div>
      {JSON.stringify(correct)}
      {JSON.stringify(inCorrect)}
  </div>
  )
}
export default Bollywood