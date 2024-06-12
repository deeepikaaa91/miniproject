import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Kbc() {
  const[timer,setTimer] = useState(30)
  useEffect(()=>{
    const interval = setInterval()
  })
    useEffect(()=>{getData()},[])
    const[question,setQuestion] = useState("");
    const[optionA,setOptionA] = useState("");
    const[optionB,setOptionB] = useState("");
    const[optionC,setOptionC] = useState("");
    const[optionD,setOptionD] = useState("");
    const[answer,setAnswer] = useState("");
    const[data,setData] = useState([])

    const[showQue,setShowQue] = useState(0)
    const postData = ()=>{
    const postObj = {
        Questions:question,
        OptionA:optionA,
        OptionB:optionB,
        OptionC:optionC,
        OptionD:optionD,
        Answer:answer,
    }
    axios.post("http://localhost:5001/api/kbc",postObj).then((res)=>alert("successfully"))
 }
 const getData = ()=>{
 axios.get("http://localhost:5001/api/kbc").then((res)=>setData(res.data.data))
 }

  return (
<div>
    {data.map((i,index)=>{
     if(index == showQue){
     return(
    <div className=' h-[100vh] flex flex-col justify-center  items-center gap-3 bg-blue-900'>
    <div className='h-[100px] w-[90px] bg-blue-950 rounded-full flex text-white justify-center items-center'>
      <div> 10,000</div>
    </div>
    <div className='h-[40vh] w-[50%]'>
    <img className='h-full w-full object-cover object-center' src="https://thelivenagpur.com/wp-content/uploads/2020/09/KBC-Season-12.jpg"></img>
    </div>
    
    <div className='h-[10vh] w-[60%] bg-blue-950  rounded-xl text-white flex justify-center items-center '>
     <p>{i.Questions}</p>
     </div>

     <div className='h-[40vh] w-[60%] flex flex-col gap-2 '>
     <div className='h-[8vh] w-full flex justify-between gap-3'>
     <div id='op1' onClick={()=>{
        if (i.OptionA == i.Answer){
            document.getElementById("op1").style.backgroundColor = "green";
            setTimeout(()=>{setShowQue(showQue+1)},2000);
        }
        else{
            document.getElementById("op1").style.backgroundColor = "red"
        }
    }} className='h-[8vh] w-[50%] text-white bg-blue-950 pl-[10px] rounded-xl'>
      <p>A. {i.OptionA}</p>
     </div>

     <div id='op2' onClick={()=>{
        if (i.OptionB == i.Answer){
            document.getElementById("op2").style.backgroundColor = "green"
            setTimeout(()=>{setShowQue(showQue+1)},2000)
        }
        else{
            document.getElementById("op2").style.backgroundColor = "red"
        }
     }} className='h-[8vh] w-[50%] text-white bg-blue-950 pl-[10px] rounded-xl'>
      <p>B. {i.OptionB}</p>
     </div>
     </div>

     <div className='h-[8vh] w-full flex justify-between gap-3'>
     <div id='op3' onClick={()=>{
     if(i.OptionC == i.Answer){
        document.getElementById('op3').style.backgroundColor = "green"
        setTimeout(()=>{setShowQue(showQue+1)},2000)
        }
     else{
        document.getElementById('op3').style.backgroundColor = "red"
     }
     }} className='h-[8vh] w-[50%] text-white bg-blue-950 pl-[10px] rounded-xl'> 
     <p>C. {i.OptionC}</p>
     </div>

     <div id='op4' onClick={()=>{
        if(i.OptionD == i.Answer){
            document.getElementById('op4').style.backgroundColor = "green"
            setTimeout(()=>{setShowQue(showQue+1)},2000)
          }
        else{
            document.getElementById('op4').style.backgroundColor = "red"
  
        }
       }} className='h-[8vh] w-[50%] text-white bg-blue-950 pl-[10px] rounded-xl '>
     <p>D. {i.OptionD}</p>
     </div>

     </div>
     {/* <input onChange={(e)=>setQuestion(e.target.value)} className='h-[4vh] w-[80%] bg-red-200 '></input>
     <input onChange={(e)=>setOptionA(e.target.value)} className='h-[4vh] w-[80%] bg-red-200 '></input>
     <input onChange={(e)=>setOptionB(e.target.value)} className='h-[4vh] w-[80%] bg-red-200 '></input>
     <input onChange={(e)=>setOptionC(e.target.value)} className='h-[4vh] w-[80%] bg-red-200 '></input>
     <input onChange={(e)=>setOptionD(e.target.value)} className='h-[4vh] w-[80%] bg-red-200 '></input>
     <input onChange={(e)=>setAnswer(e.target.value)} className='h-[4vh] w-[80%] bg-red-200 '></input>
     <button  onClick={()=>postData()} className='h-[4vh] w-[10%] bg-purple-200'>Submit</button> */}
     </div>
     
   </div> )}
    })}
    </div>
  )
}

export default Kbc