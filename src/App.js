import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Calc from './pages/Calc'
import Tictactoe from './pages/Tictactoe'
import Practice from './pages/Practice'
import SnakeLadder from './pages/SnakeLadder'
import Clock from './pages/Clock'
import Parallax from './pages/Parallax'
import Bollywood from './pages/Bollywood'
import Kbc from './pages/Kbc'
import Password from './pages/Password'
import Todo from './pages/Todo'
import TodoF from './pages/TodoF'
import Resume from './pages/Resume'
import ProfessionalE from './pages/ProfessionalE'
import Education from './pages/Education'



function App() {
  return (
   <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/calc' element={<Calc/>}></Route>
      <Route path='/tic-tac-toe' element={<Tictactoe/>}></Route>
      <Route path='/practice' element={<Practice/>}></Route>
      <Route path='/snake-ladder' element={<SnakeLadder/>}></Route>
      <Route path='/clock' element={<Clock/>}></Route>
      <Route path='/Parallax' element={<Parallax/>}></Route>
      <Route path='/Bollywood' element={<Bollywood/>}></Route>
      <Route path='/Kbc' element={<Kbc/>}></Route>
      <Route path='/Password' element={<Password/>}></Route>
      <Route path='/Todo' element={<Todo/>}></Route>
      <Route path='/TodoF' element={<TodoF/>}></Route>
      <Route path='/Resume' element={<Resume/>}></Route>
      <Route path='/ProfessionalE' element={<ProfessionalE/>}></Route>
      <Route path='/Education' element={<Education/>}></Route>

    </Routes>
   </HashRouter>
  )
}

export default App