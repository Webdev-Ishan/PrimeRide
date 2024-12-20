import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Start from './pages/Start'
import Userlogin from './pages/Userlogin'
import Usersignup from './pages/Usersignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/Userlogin' element={<Userlogin/>} />
        <Route path='/Usersignup' element={<Usersignup/>} />
        <Route path='/Captainlogin' element={<Captainlogin/>}/>
        <Route path='/Captainsignup' element={<Captainsignup/>} />
        <Route path='/Home' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App

