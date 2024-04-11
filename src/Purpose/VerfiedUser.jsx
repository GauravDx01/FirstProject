import React from 'react';
import { maidName } from '../Data/Maid';
import { useNavigate } from 'react-router-dom';


function VerfiedUser() {
  const navigate = useNavigate();


  return (
    <>
      <div className="purpose-heading">
        <h1>List of House Workers</h1>
      </div>
      <div className="purpose-sec m-font">
        {maidName.map((item, index) => (
          <div className="purpose-lines" key={index}>
            <p>Name : {item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default VerfiedUser;
