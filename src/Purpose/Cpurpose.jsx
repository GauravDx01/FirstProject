import React from 'react';
import { cNonVerified } from '../Data/Cpurpose';
import { useNavigate } from 'react-router-dom';
import Backbutton from '../GoBack/Backbutton';

function Cpurpose({ language }) {
  const navigate = useNavigate();

  const handleSubmit = (index) => {
    navigate('/house-no');
    localStorage.setItem("purpose", JSON.stringify(cNonVerified[index].purpose));
  }

  return (
    <>
      <div className="purpose-heading">
        <h1 className="m-font">{language === 'english' ? "आने का उद्देश्य" : "Purpose of visit"}</h1>
      </div>
      <div className='purpose-sec m-font' >
        {cNonVerified.map((item, index) => (
          <div className='purpose-lines' key={index} onClick={() => handleSubmit(index)}>
            <p>{language === 'english' ? <>{item.hindiPurpose}</> : <>{item.purpose}</>}</p>
          </div>
        ))}
      </div>
      <Backbutton />
    </>
  )
}

export default Cpurpose;
