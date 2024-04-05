import React from 'react'
import './style.css'
import logo from './Images/logo-no-background.png'
function Home() {
    const handleLoader = setTimeout(()=>{
        const loader = document.getElementById('loader')
        const homePage = document.getElementById('homePage')
        loader.classList.add('hide-loader')
        homePage.classList.add('show-homePage')
}, 2000)
  return (
    <>
        
        <div className="main">
        
            <div className="screen">
            <div id='loader' className="loader-logo">
            <img className='image-logo' src={logo} alt="" />
           
         
               
            </div>
            <div id='homePage' className="main-details">
                <h1>Hello i am home page</h1>
            </div>
            </div>
        </div>
    </>
  )
}

export default Home