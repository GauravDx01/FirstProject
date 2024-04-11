import React from 'react';
import { nonVerifiedPurpose } from '../Data/Purpose';
import './style.css'
import {useNavigate} from 'react-router-dom'
function Purpose() {
  const navigate = useNavigate()
  return (
    <>
      <div className="purpose-heading">
        <h1 className="m-font">Purpose of visit</h1>
      </div>
      <div onClick={()=>navigate('/house-no')} className='purpose-sec m-font' >
        {nonVerifiedPurpose.map((item , index) => (
          <div className='purpose-lines' key={index}>
            <p >{item.purpose}</p> 
          </div>
        ))}
      </div>
    </>
  );
}

export default Purpose;
