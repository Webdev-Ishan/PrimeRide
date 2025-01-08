import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Start from './pages/Start'
import Userlogin from './pages/Userlogin'
import Usersignup from './pages/Usersignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import Home from './pages/Home'
import CaptainHome from './pages/CaptainHome'
import Userlogout from './pages/Userlogout'
import Captainlogout from './pages/Captainlogout'
import ProtectedRoute from './components/ProtectedRoute'
import ProtectedRoute2 from './components/ProtectedRoute2'
import AnimatedCursor from './AnimatedCursor';

const App = () => {
  return (
    <div>
        <AnimatedCursor />
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/Userlogin' element={<Userlogin/>} />
        <Route path='/Usersignup' element={<Usersignup/>} />
        <Route path='/Captainlogin' element={<Captainlogin/>}/>
        <Route path='/Captainsignup' element={<Captainsignup/>} />
        
        <Route path='/Home' element={
         < ProtectedRoute>
          <Home/>
          </ ProtectedRoute>
          
          } />

         <Route path='/CaptainHome' element={
   < ProtectedRoute2>
   <CaptainHome/>
   </ ProtectedRoute2>
        } />

        <Route path='/Userlogout' element={<Userlogout/>} />
        <Route path='/Captainlogout' element={<Captainlogout/>} />
      </Routes>
    </div>
  )
}

export default App

