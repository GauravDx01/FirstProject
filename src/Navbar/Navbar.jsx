import React from 'react'
import './style.css'
function Navbar() {
  return (
    <>
    <div className="nav">
    <div className="logo">
        <h1 className='m-font'>Sky<span>N</span>et<span>E</span>nclave</h1>
    </div>
    <div className="lang">
    <div class="switch">
        <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox"/>
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