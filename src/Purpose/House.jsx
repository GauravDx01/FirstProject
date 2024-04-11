import React from 'react'
import {houseNo} from '../Data/HouseNo'
import {useNavigate} from 'react-router-dom'
import housePhoto from './Images/wired-outline-63-home.gif'
function House() {
    const navigate = useNavigate()
  return (
    <>
    <div className="purpose-heading">
        <h1 className="m-font">Where to visit</h1>
      </div>
      <div onClick={()=>navigate('/photo-verification')} className='purpose-sec m-font' >
        { houseNo.map((item , index) => (
          <div className='purpose-lines house-shape' key={index}>
            {/* <img src={housePhoto} alt="" /> */}
            <br />
            <p> House No : {item.houseNo}</p> 
            <p>Owner : {item.owner}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default House