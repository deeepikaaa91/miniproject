import React, { useState } from 'react'

function Parallax() {
    const [scroll, setScroll] = useState(0)
    const handleScroll = ()=>{
        setScroll(window.scrollY)
    }
    document.addEventListener('scroll', handleScroll)
  return (
    <div className='w-full h-[1000vh] flex flex-col items-center'>
    <div style={{position:scroll>360 && 'fixed'}} className={`flex text-white ${scroll>360 && 'header-down'} items-center justify-between bg-black w-full top-0 h-[10vh]`}>
    <h1>Logo</h1>
    <div>
        <label>Home</label>
        <label>About US</label>
        <label>COntact</label>
        <label>Register</label>
    </div>

    </div>
        <div className='w-[50%] bg-black h-1 fixed top-[50%]'>
            <div style={{left: scroll}} className='w-6 h-6 rounded-full bg-red-500 absolute top-[-10px]'>{scroll}</div>
        </div>
    </div>
  )
}

export default Parallax