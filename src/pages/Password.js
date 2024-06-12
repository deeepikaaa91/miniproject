import React, { useState } from 'react'

function Password() {
    let size = new Array(9).fill().map((i,index)=>index+8)
    let password = ""
    const [result, setResult] = useState("")
    const generatePass = (x)=>{
        let capital = ['A','B','C','D','E','F','G','H','I','J']
        let small = ['a','b','c','d','e','f', 'g', 'h', 'i', 'j']
        let numbers = [1,2,3,4,5,6,7,8,9,0]
        let symbol = ['!','@','#','%','&','$','*','-','_','=']
        let choose = [capital, small, numbers, symbol]
        for (let i = 0; i< x; i++ ){
            const randomNum = Math.floor(Math.random()*10)
            const randomChoose = Math.floor(Math.random()*4)
            password = password + choose[randomChoose][randomNum]
        }
        setResult(password)
    }

  return (
    <div>
    <div>{JSON.stringify(size)}</div>
    {size.map((i)=>
        <button onClick={()=>generatePass(i)} className='border border-black p-4'>{i}</button>)}
        <label>{result}</label>
    </div>
  )
}

export default Password