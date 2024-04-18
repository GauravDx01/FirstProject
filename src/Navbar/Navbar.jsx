import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
function Navbar({language , handleLanguageChange}) {
const navigate = useNavigate()
  return (
    <>
    <div className="nav">
    <div onClick={()=>navigate('/')} className="logo">
        <h1 className='m-font'><span>S</span>ky<span>N</span>et<span>E</span>nclave</h1>
    </div>
    <div className="lang">
    <div class="switch">
        <input id="language-toggle" checked = {language==='hindi'} onChange={()=> handleLanguageChange()}  class="check-toggle check-toggle-round-flat" type="checkbox"/>
        <label for="language-toggle"></label>
        <span class="on">Hi</span>
        <span class="off">EN</span>
    </div>
    </div>
    </div>
    </>
  )
}

export default Navbar