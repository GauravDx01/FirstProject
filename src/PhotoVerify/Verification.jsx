import React from 'react'
import userPhoto from './Images/avatar-1577909_1280.webp'
import adharPhoto from './Images/Aadhaar-verification-how-to.webp'
import './style.css'
function Verification() {
  return (
    <>
    <div className="main-verificattion">
    <div className="photo-verification">
        <div className="photo">
            <img src={userPhoto} alt="" />
        </div>
        <p>Take a photo</p>
    </div>

    <div className="adhar-verification">
        <div className="adhar-photo">
            <img src={adharPhoto} alt="" />
        </div>
        <p>Verify adhar</p>

    </div>
    <div className="submit-btn">
        <button>Sumit</button>
    </div>
    </div>
    </>
  )
}

export default Verification