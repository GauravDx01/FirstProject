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
// import 'sweetalert2/src/sweetalert2.scss';

import 'react-toastify/dist/ReactToastify.css';

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
    </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App