import React from 'react'
import {  cNonVerified } from '../Data/Cpurpose';
import {useNavigate} from 'react-router-dom'
function Cpurpose() {
  const navigate = useNavigate()
  return (
    <>
     <div className="purpose-heading">
        <h1 className="m-font">Purpose of visit</h1>
      </div>
      <div onClick={()=>navigate('/house-no')} className='purpose-sec m-font' >
        { cNonVerified.map((item , index) => (
          <div className='purpose-lines' key={index}>
            <p >{item.purpose}</p> 
          </div>
        ))}
      </div>
    </>
  )
}

export default Cpurpose