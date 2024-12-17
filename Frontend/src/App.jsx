import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'
import Usersignup from './pages/Usersignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Userlogin' element={<Userlogin/>} />
        <Route path='/Usersignup' element={<Usersignup/>} />
        <Route path='/Captainlogin' element={<Captainlogin/>}/>
        <Route path='/Captainsignup' element={<Captainsignup/>} />
      </Routes>
    </div>
  )
}

export default App

