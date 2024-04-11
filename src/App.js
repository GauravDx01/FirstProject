import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Entry from './Entry/Entry'
import { BrowserRouter ,  Routes , Route } from 'react-router-dom'
import Purpose from './Purpose/Purpose'
import Cpurpose from './Purpose/Cpurpose'
import House from './Purpose/House'
import Verification from './PhotoVerify/Verification'
import VerfiedUser from './Purpose/VerfiedUser'
// import 'sweetalert2/src/sweetalert2.scss';
function App() {
  return (
    <>
    <BrowserRouter>
    <div className='screen'> 
    <Navbar/>
    <Routes>'
      <Route path= '/' element = {<Entry/>} />
      <Route path= '/purpose' element = {<Purpose/>} />
      <Route path= '/c-purpose' element = {<Cpurpose/>} />
      <Route path= '/house-no' element = {<House/>} />
      <Route path= '/photo-verification' element = {<Verification/>} />
      <Route path= '/verified-user' element = {<VerfiedUser/>} />
    </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App