import React, { createContext, useState } from 'react'
 
const UseContext = createContext()
function Context({children}) {
const[click ,setClick] = useState("")
  return(
  <UseContext.Provider value={{click,setClick}}>
  {children}
  </UseContext.Provider>
)
}
export default Context
