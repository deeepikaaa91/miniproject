import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigation = useNavigate();
  return (
    <div className='flex flex-row gap-4'>
        <button className='border border-black px-2 py-1' onClick={()=>navigation('/calc')}>Calci</button>
        <button className='border border-black px-2 py-1' onClick={()=>navigation('/tic-tac-toe')}>Tic Tac Toe</button>
        <button className='border border-black px-2 py-1' onClick={()=>navigation('/practice')}>practice</button>
        <button className='border border-black px-2 py-1' onClick={()=>navigation('/snake-ladder')}>Snake & Ladder</button>
        <button className='border border-black px-2 py-1' onClick={()=>navigation('/clock')}>Date & Time</button>
        <button className='border border-black px-2 py-1' onClick={()=>navigation('/Parallax')}>Parallax</button>
        <button className='border border-black px-2 py-1' onClick={()=>navigation('/Bollywood')}>Bollywood</button>
        <button className='border border-black px-2 py-1' onClick={()=>navigation('/Kbc')}>Kbc</button>
        <button className='border border-black px-2 py-1' onClick={()=>navigation('/Password')}>Password Generator</button>
        <button className='border border-black px-2 py-1' onClick={()=>navigation('/Todo')}>Todo</button>
        <button className='border border-black px-2 py-1' onClick={()=>navigation('/TodoF')}>TodoF</button>
        <button className='border border-black px-2 py-1' onClick={()=>navigation('/Resume')}>Resume</button>
       

        
    </div>
  )
}

export default Home