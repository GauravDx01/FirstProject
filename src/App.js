import React, { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Entry from './Entry/Entry'
import { BrowserRouter ,  Routes , Route } from 'react-router-dom'
import Purpose from './Purpose/Purpose'
import Cpurpose from './Purpose/Cpurpose'
import House from './Purpose/House'
import Verification from './PhotoVerify/Verification'
import VerfiedUser from './Purpose/VerfiedUser'


import 'react-toastify/dist/ReactToastify.css';
import GetData from './GetData/GetData'
import SignUp from './GetData/SignUp'
import Login from './GetData/Login'
import Private from './Private/Private'

function App() {
  const [language , setLanguage] = useState('english')
  const handleLanguageChange = ()=>{
    const newLanguage = language === 'english' ? 'hindi' : 'english';
    setLanguage(newLanguage)
  }
  return (
    <>
    <BrowserRouter>
    <div className='screen'> 
    <Navbar language={language} handleLanguageChange={handleLanguageChange}/>
    <Routes>'
      <Route path= '/' element = {<Entry language={language} />} />
      <Route path= '/purpose' element = {<Purpose language={language} />} />
      <Route path= '/c-purpose' element = {<Cpurpose language={language} />} />
      <Route path= '/house-no' element = {<House  language={language}  />} />
      <Route path= '/photo-verification' element = {<Verification language={language}/>} />
      <Route path= '/verified-user' element = {<VerfiedUser language={language}/>} />
      
      <Route path= '/signup' element = {<SignUp language={language}/>} />
      <Route path= '/login' element = {<Login language={language}/>} />
      <Route element={ <Private/>} >

      <Route path= '/get-data' element = {<GetData language={language}/>} />
      </Route>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App