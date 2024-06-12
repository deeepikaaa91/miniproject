import React, { useState } from 'react'

function Tictactoe() {
  const [block1, setBlock1] = useState("")
  const [block2, setBlock2] = useState("")
  const [block3, setBlock3] = useState("")
  const [block4, setBlock4] = useState("")
  const [block5, setBlock5] = useState("")
  const [block6, setBlock6] = useState("")
  const [block7, setBlock7] = useState("")
  const [block8, setBlock8] = useState("")
  const [block9, setBlock9] = useState("")
  const [turn, setTurn] = useState(1)

  const putBlock1 =()=>{
    if (turn == 1 & block1 == ""){
        setBlock1("X")
        setTurn(2)
    }
    else if (block1 ==""){
        setBlock1("O")
        setTurn(1)
    }
  }

  const putBlock2 = ()=>{
    if (turn ==1 & block2 ==""){
        setBlock2("X")
        setTurn(2)
    }
    else if(block2 ==""){
        setBlock2("O")
        setTurn(1)
    }
  }
  
  const putBlock3 = ()=>{
    if (turn ==1 & block3 ==""){
        setBlock3("X")
        setTurn(2)
    }
    else if (block3==""){
        setBlock3("O")
        setTurn(1)
    }
  }

  const putBlock4 = ()=>{
    if (turn ==1 & block4 ==""){
        setBlock4("X")
        setTurn(2)
    }
    else if (block4==""){
        setBlock4("O")
        setTurn(1)
    }
  }

const putBlock5 = ()=>{
    if (turn ==1 & block5 ==""){
        setBlock5("X")
        setTurn(2)
    }
    else if (block5==""){
        setBlock5("O")
        setTurn(1)
    }
}

const putBlock6 =()=>{
    if (turn ==1 & block6 ==""){
      setBlock6("X")
      setTurn(2)
   }
   else if (block6==""){
    setBlock6("O")
    setTurn(1)
   }
}

const putBlock7 = ()=>{
    if (turn ==1 & block7 ==""){
        setBlock7("X")
        setTurn(2)
    }
    else if (block7==""){
        setBlock7("O")
        setTurn(1)
    }
}


const putBlock8 = ()=>{
    if (turn ==1 & block8 ==""){
        setBlock8("X")
        setTurn(2)
    }
    else if (block8==""){
        setBlock8("O")
        setTurn(1)
    }
}


const putBlock9 =()=>{
    if(turn==1 & block9==""){
     setBlock9("X")
     setTurn(2)
    }
    else if (block9==""){
        setBlock9("O")
        setTurn(1)
    }
}
return (
    <div className='flex justify-center items-center h-[100vh]'>
        <div className='w-[50%] flex flex-wrap'>
            <div onClick={()=> putBlock1()} className='w-[33.3%] h-[20vh] bg-cyan-200 border border-brown-200 border-white flex items-center justify-center font-bold'>{block1}</div>
            <div onClick={()=> putBlock2()} className='w-[33.3%] h-[20vh] bg-cyan-200 border border-brown-200 border-white flex items-center justify-center font-bold'>{block2}</div>
            <div onClick={()=> putBlock3()} className='w-[33.3%] h-[20vh] bg-cyan-200 border border-brown-200 border-white flex items-center justify-center font-bold'>{block3}</div>
            <div onClick={()=> putBlock4()} className='w-[33.3%] h-[20vh] bg-cyan-200 border border-brown-200 border-white flex items-center justify-center font-bold'>{block4}</div>
            <div onClick={()=> putBlock5()} className='w-[33.3%] h-[20vh] bg-cyan-200 border border-brown-200 border-white flex items-center justify-center font-bold'>{block5}</div>
            <div onClick={()=> putBlock6()} className='w-[33.3%] h-[20vh] bg-cyan-200 border border-brown-200 border-white flex items-center justify-center font-bold'>{block6}</div>
            <div onClick={()=> putBlock7()} className='w-[33.3%] h-[20vh] bg-cyan-200 border border-brown-200 border-white flex items-center justify-center font-bold'>{block7}</div>
            <div onClick={()=> putBlock8()} className='w-[33.3%] h-[20vh] bg-cyan-200 border border-brown-200 border-white flex items-center justify-center font-bold'>{block8}</div>
            <div onClick={()=> putBlock9()} className='w-[33.3%] h-[20vh] bg-cyan-200 border border-brown-200 border-white flex items-center justify-center font-bold'>{block9}</div>
        </div> 
    </div>
  )
}

export default Tictactoe